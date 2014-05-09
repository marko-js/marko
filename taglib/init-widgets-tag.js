var raptorWidgets = require('../');

module.exports = function render(input, context) {

    var asyncContext = context.beginAsync({ last: true });
    context.on('last', function() {
        var widgetsContext = raptorWidgets.getWidgetsContext(context);
        if (!widgetsContext.hasWidgets()) {
            return;
        }
        var includeScriptTag = input.includeScriptTag !== false;
        if (includeScriptTag) {
            asyncContext.write('<script type="text/javascript">');
        }
        var funcName = input.functionName;
        if (funcName) {
            asyncContext.write('function ' + funcName + '(){\n');
        }
        raptorWidgets.writeInitWidgetsCode(widgetsContext, asyncContext, true);
        if (funcName) {
            asyncContext.write('\n}');
        }
        if (includeScriptTag) {
            asyncContext.write('</script>');
        }
        
        asyncContext.end();
    });

    
};