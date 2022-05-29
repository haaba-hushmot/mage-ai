(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{1246:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets",function(){return a(2512)}])},6053:function(e,n,a){"use strict";a.d(n,{FH:function(){return o},aw:function(){return l}});var t=["Bad","Worse","Worst"],o=function(e){return t.includes(e)},l={id:"7",metadata:{name:"df2",pipeline_id:7,column_types:{col1:"number",col2:"number"}},pipeline:{id:7,actions:[]},sample_data:{col1:{0:1,1:2,3:4,2:3},col2:{0:5,1:6,3:8,2:7}},statistics:{count:100,avg_null_value_count:10,avg_invalid_value_count:10,duplicate_row_count:20,completeness:.9,validity:.8,empty_column_count:1,"col1/count":4,"col1/count_distinct":4,"col1/null_value_rate":0,"col1/null_value_count":0,"col1/average":2.5,"col1/max":4,"col1/median":2.5,"col1/min":1,"col1/sum":10,"col1/invalid_value_count":0,"col1/quality":"Good","col2/count":4,"col2/count_distinct":4,"col2/null_value_rate":0,"col2/null_value_count":0,"col2/average":6.5,"col2/max":8,"col2/median":6.5,"col2/min":5,"col2/sum":26,"col2/invalid_value_count":0,"col2/quality":"Bad"},insights:[[{feature:{uuid:"col1",column_type:"number"},charts:[{type:"histogram",x:[{max:2,min:1},{max:3,min:2},{max:4,min:3},{max:5,min:4}],x_metadata:{label_type:"range"},y:[{value:1},{value:1},{value:1},{value:1}]}],correlations:[{type:"bar_horizontal",x:[{label:"col2"}],y:[{value:1}]}],time_series:[]},{feature:{uuid:"col2",column_type:"number"},charts:[{type:"histogram",x:[{max:6,min:5},{max:7,min:6},{max:8,min:7},{max:9,min:8}],x_metadata:{label_type:"range"},y:[{value:1},{value:1},{value:1},{value:1}]}],correlations:[{type:"bar_horizontal",x:[{label:"col1"}],y:[{value:1}]}],time_series:[]}],{time_series:[],correlations:[{feature:{uuid:"col1",column_type:"number"},correlations:[{type:"bar_horizontal",x:[{label:"col2"}],y:[{value:1}]}]},{feature:{uuid:"col2",column_type:"number"},correlations:[{type:"bar_horizontal",x:[{label:"col1"}],y:[{value:1}]}]}]}],suggestions:[{title:"Clean dirty column names",message:"The following columns have unclean naming conventions: ['Name', 'requestType', 'resourceTypes', 'otherResource', 'createdDate', 'createdTime', 'timeStart', 'timeEnd', 'setupDuration(minutes)', 'teardownDuration', 'onBehalfOf', 'everyXDays', 'everyXWeeks', 'everyXMonths', 'everyXYears', 'afterXTimes', 'onDate', 'makePrivate', 'assignedDate', 'assignedTime', 'assignedUsers', 'roomContactName', 'eventDetails', 'scheduleId', 'scheduleTitle', 'placeholderField3', 'placeholderField4', 'placeholderField5', 'placeholderField6', 'placeholderField7', 'placeholderField8', 'placeholderField9', 'placeholderField10', 'placeholderField11', 'placeholderField12', 'placeholderField13', 'placeholderField14']. Making these names lowercase and alphanumeric may improveease of dataset access and reduce security risks.",status:"not_applied",action_payload:{action_type:"clean_column_name",action_arguments:["Name","requestType","resourceTypes","otherResource","createdDate","createdTime","timeStart","timeEnd","setupDuration(minutes)","teardownDuration","onBehalfOf","everyXDays","everyXWeeks","everyXMonths","everyXYears","afterXTimes","onDate","makePrivate","assignedDate","assignedTime","assignedUsers","roomContactName","eventDetails","scheduleId","scheduleTitle","placeholderField3","placeholderField4","placeholderField5","placeholderField6","placeholderField7","placeholderField8","placeholderField9","placeholderField10","placeholderField11","placeholderField12","placeholderField13","placeholderField14"],action_code:"",action_options:{},action_variables:{},axis:"column",outputs:[]}},{title:"Remove columns with no values",message:"The following columns have no values: ['resourceTypes', 'otherResource', 'createdDate', 'createdTime', 'mode', 'everyXYears', 'afterXTimes', 'onDate', 'dates', 'makePrivate', 'assignedDate', 'assignedTime', 'assignedUsers', 'roomContactName', 'zone', 'placeholderField3', 'placeholderField4', 'placeholderField5', 'placeholderField6', 'placeholderField7', 'placeholderField8', 'placeholderField9', 'placeholderField10', 'placeholderField11', 'placeholderField12', 'placeholderField13', 'placeholderField14']. Removing them may increase your data quality.",status:"not_applied",action_payload:{action_type:"remove",action_arguments:["resourceTypes","otherResource","createdDate","createdTime","mode","everyXYears","afterXTimes","onDate","dates","makePrivate","assignedDate","assignedTime","assignedUsers","roomContactName","zone","placeholderField3","placeholderField4","placeholderField5","placeholderField6","placeholderField7","placeholderField8","placeholderField9","placeholderField10","placeholderField11","placeholderField12","placeholderField13","placeholderField14"],action_code:"",action_options:{},action_variables:{},axis:"column",outputs:[]}},{title:"Remove columns with high empty rate",message:"The following columns have high empty rate: ['everyXDays', 'sun', 'mon']. Removing them may increase your data quality.",status:"not_applied",action_payload:{action_type:"remove",action_arguments:["everyXDays","sun","mon"],action_code:"",action_options:{},action_variables:{},axis:"column",outputs:[]}},{title:"Remove columns with single value",message:"The following columns have single value in all rows: ['requestType', 'repeat', 'onBehalfOf']. Suggest to remove them.",status:"not_applied",action_payload:{action_type:"remove",action_arguments:["requestType","repeat","onBehalfOf"],action_code:"",action_options:{},action_variables:{},axis:"column",outputs:[]}}]}},6287:function(e,n,a){"use strict";var t=a(5893),o=a(7294),l=a(7268),r=a(9905),i=a(4634);n.Z=function(e){var n=e.children,a=e.columnFlexNumbers,c=e.last,d=e.secondary;return(0,t.jsx)(i.gI,{last:c,secondary:d,children:(0,t.jsx)(r.Z,{alignItems:"center",children:o.Children.map(n,(function(e,n){return e&&(0,t.jsx)(l.Z,{flex:a[n],children:e},"row-card-item-".concat(n))}))})})}},4634:function(e,n,a){"use strict";a.d(n,{$B:function(){return m},VH:function(){return p},gI:function(){return h}});var t=a(2125),o=a(9660),l=a(7829),r=a(7351);function i(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function c(){var e=i(["\n  border-bottom-left-radius: ","px;\n  border-bottom-right-radius: ","px;\n  margin-bottom: ","px;\n\n  ","\n\n  ","\n\n  ","\n"]);return c=function(){return e},e}function d(){var e=i(["\n  border-top-left-radius: ","px;\n  border-top-right-radius: ","px;\n  padding: ","px ","px;\n\n  ","\n"]);return d=function(){return e},e}function s(){var e=i(["\n  padding: ","px ","px;\n\n  ","\n\n  ","\n\n  ","\n"]);return s=function(){return e},e}var u=1.75*r.iI,m=t.ZP.div(c(),l.n_,l.n_,u,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).page,";\n    border: ").concat(l.YF,"px ").concat(l.M8," ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-top: none;\n  ")}),(function(e){return e.minHeight>0&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")}),(function(e){return e.scrollable&&"\n    margin-bottom: ".concat(r.iI,"px;  \n    overflow-y: auto; \n    padding-top: ").concat(3,"px;\n    padding-left: ").concat(3,"px;\n    padding-right: ").concat(3,"px;\n  ")})),p=t.ZP.div(d(),l.n_,l.n_,u,2*r.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).header,";\n    border: ").concat(l.YF,"px ").concat(l.M8," ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")})),h=t.ZP.div(s(),u,2*r.iI,(function(e){return!e.secondary&&"\n    background-color: ".concat((e.theme.background||o.Z.background).page,";\n  ")}),(function(e){return e.secondary&&"\n    background-color: ".concat((e.theme.background||o.Z.background).row,";\n  ")}),(function(e){return e.last&&"\n    border-bottom-left-radius: ".concat(l.n_,"px;\n    border-bottom-right-radius: ").concat(l.n_,"px;\n  ")}))},6720:function(e,n,a){"use strict";var t=a(5893),o=a(9905),l=a(3679),r=a(4634);n.Z=function(e){var n=e.children,a=e.headerDetails,i=e.headerTitle,c=e.minHeight,d=e.scrollable;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.VH,{children:(0,t.jsxs)(o.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,t.jsx)(l.ZP,{bold:!0,children:i}),a&&(0,t.jsx)(l.ZP,{children:a})]})}),(0,t.jsx)(r.$B,{minHeight:c,scrollable:d,children:n})]})}},2512:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return b}});var t=a(5893),o=a(1163),l=a.n(o),r=a(7294),i=a(9905),c=a(3351),d=a(1211),s=a(6287),u=a(6720),m=a(6192),p=a(6772),h=a(2273),v=a(3679),_=a(7156),g=a(9666),f=a(7351),y=a(6053);a(381);function x(e,n){var a,t=n,o=void 0!==t&&null!==t;if(o||(t=2),1===t)a=e;else{var l=e.length,r=e[l-1];a="y"===r&&"day"!==e?"".concat(e.slice(0,l-1),"ies"):"".concat(e,"s"===r?"es":"s")}return o?"".concat(t," ").concat(a):a}var b=function(){var e=_.ZP.feature_sets.list().data,n=(0,r.useMemo)((function(){return e}),[e]),a=(0,r.useState)([]),o=a[0],b=a[1];return(0,r.useEffect)((function(){return b(n)}),[n]),(0,t.jsx)(c.Z,{centerAlign:!0,header:(0,t.jsx)(m.Z,{mt:f.iI}),children:(0,t.jsx)(h.Z,{defaultKey:"datasets",bold:!0,large:!0,children:(0,t.jsx)(p.Z,{label:"Datasets",children:(0,t.jsx)(m.Z,{pb:3,pt:3,children:(0,t.jsx)(u.Z,{headerTitle:"datasets",headerDetails:x("dataset",null===o||void 0===o?void 0:o.length),children:(null===o||void 0===o?void 0:o.length)>0?null===o||void 0===o?void 0:o.map((function(e){var n=e.id,a=e.metadata,o=a.column_types,r=a.name,c=a.statistics,u=c.count,p=c.quality,h=Object.keys(o).length;return(0,t.jsxs)(s.Z,{columnFlexNumbers:[4,1,1,1],children:[(0,t.jsxs)(i.Z,{alignItems:"center",children:[(0,t.jsx)(g.$B,{secondary:!0}),(0,t.jsx)(m.Z,{mr:1}),(0,t.jsx)(d.Z,{noHoverUnderline:!0,onClick:function(){return l().push("datasets/".concat(n))},sameColorAsText:!0,children:r})]}),(0,t.jsxs)(v.ZP,{children:[h," features"]}),(0,t.jsxs)(v.ZP,{children:[u," rows"]}),(0,t.jsx)(v.ZP,{bold:(0,y.FH)(p),danger:(0,y.FH)(p),children:p})]},n)})):(0,t.jsx)(m.Z,{p:2,children:(0,t.jsx)(v.ZP,{children:"No datasets available. Add one to get started."})})})})},"datasets")})})}}},function(e){e.O(0,[885,916,420,419,273,156,774,888,179],(function(){return n=1246,e(e.s=n);var n}));var n=e.O();_N_E=n}]);