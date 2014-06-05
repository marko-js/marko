var raptorWidgets = require('../');

module.exports = function render(input, context) {
    var widgetsContext = raptorWidgets.getWidgetsContext(context);

    if (context.featureLastFlush === false) {
        // If the rendering context doesn't support the ability to know when all of the asynchronous fragmnents
        // have completed then we won't be able to know which widgets were rendered so we will
        // need to scan the DOM to find the widgets
        raptorWidgets.writeInitWidgetsCode(widgetsContext, context, {scanDOM: true});
    } else {
        var asyncContext = context.beginAsync({ last: true });
        context.on('last', function() {
            if (!widgetsContext.hasWidgets()) {
                return asyncContext.end();
            }
            
            raptorWidgets.writeInitWidgetsCode(widgetsContext, asyncContext);
            asyncContext.end();
        });
    }

    

    
};