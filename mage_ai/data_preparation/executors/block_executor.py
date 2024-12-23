from mage_ai.data_preparation.logger_manager import LoggerManager
from mage_ai.data_preparation.logging.logger import Logger
from mage_ai.shared.hash import merge_dict
from typing import Callable, Dict
import json
import requests


class BlockExecutor:
    def __init__(self, pipeline, block_uuid, execution_partition=None):
        self.pipeline = pipeline
        self.block_uuid = block_uuid
        self.block = self.pipeline.get_block(block_uuid)
        self.execution_partition = execution_partition
        logger_manager = LoggerManager.get_logger(
            pipeline_uuid=self.pipeline.uuid,
            block_uuid=self.block_uuid,
            partition=self.execution_partition,
        )
        self.logger = Logger(logger_manager)

    def execute(
        self,
        analyze_outputs: bool = False,
        callback_url: str = None,
        global_vars: Dict = None,
        update_status: bool = False,
        on_complete: Callable[[str], None] = None,
        on_failure: Callable[[str], None] = None,
        **kwargs,
    ) -> None:
        tags = self.__build_tags(**kwargs.get('tags', {}))

        self.logger.info('Start executing block.', **tags)
        try:
            self.block.execute_sync(
                analyze_outputs=analyze_outputs,
                execution_partition=self.execution_partition,
                global_vars=global_vars,
                logger=self.logger,
                update_status=update_status,
            )
        except Exception as e:
            self.logger.info('Failed to execute block.', **tags)
            if on_failure is not None:
                on_failure(self.block_uuid)
            elif callback_url is not None:
                self.__update_block_run_status(callback_url, 'failed')
            raise e
        self.logger.info('Finish executing block.', **tags)
        if on_complete is not None:
            on_complete(self.block_uuid)
        elif callback_url is not None:
            self.__update_block_run_status(callback_url, 'completed', tags)

    def __update_block_run_status(self, callback_url: str, status: str, tags: dict):
        response = requests.put(
            callback_url,
            data=json.dumps({
                'block_run': {
                    'status': status,
                },
            }),
            headers={
                'Content-Type': 'application/json',
            },
        )
        self.logger.info(
            f'Callback response: {response.text}',
            **tags,
        )

    def __build_tags(self, **kwargs):
        return merge_dict(kwargs, dict(
            block_type=self.block.type,
            block_uuid=self.block.uuid,
            pipeline_uuid=self.pipeline.uuid,
        ))
