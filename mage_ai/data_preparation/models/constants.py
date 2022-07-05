from enum import Enum

PIPELINES_FOLDER = 'pipelines'
PIPELINE_CONFIG_FILE = 'metadata.yaml'


DATAFRAME_ANALYSIS_KEYS = frozenset(
    [
        'metadata',
        'statistics',
        'insights',
        'suggestions',
    ]
)
DATAFRAME_ANALYSIS_MAX_ROWS = 100_000
DATAFRAME_SAMPLE_COUNT_PREVIEW = 100
DATAFRAME_SAMPLE_COUNT = 1000
VARIABLE_DIR = '.variables'


class BlockStatus(str, Enum):
    EXECUTED = 'executed'
    NOT_EXECUTED = 'not_executed'


class BlockType(str, Enum):
    DATA_EXPORTER = 'data_exporter'
    DATA_LOADER = 'data_loader'
    SCRATCHPAD = 'scratchpad'
    TRANSFORMER = 'transformer'