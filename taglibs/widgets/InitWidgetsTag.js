'use strict';
var widgets = require('raptor-widgets');
function InitWidgetsTag() {
}
InitWidgetsTag.prototype = {
    process: function (input, context) {
        var widgetsContext = widgets.getWidgetsContext(context);
        if (!widgetsContext.hasWidgets()) {
            return;
        }
        var includeScriptTag = input.includeScriptTag !== false;
        if (includeScriptTag) {
            context.write('<script type="text/javascript">');
        }
        var funcName = input.functionName;
        if (funcName) {
            context.write('function ' + funcName + '(){\n');
        }
        widgets.writeInitWidgetsCode(widgetsContext, context, true);
        if (funcName) {
            context.write('\n}');
        }
        if (includeScriptTag) {
            context.write('</script>');
        }
    }
};
module.exports = InitWidgetsTag;