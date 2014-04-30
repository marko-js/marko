var raptorWidgets = require('../');

module.exports = function render(input, context) {
    var widgetsContext = raptorWidgets.getWidgetsContext(context);
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
    raptorWidgets.writeInitWidgetsCode(widgetsContext, context, true);
    if (funcName) {
        context.write('\n}');
    }
    if (includeScriptTag) {
        context.write('</script>');
    }
};