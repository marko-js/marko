var markoWidgets = require('../');

module.exports = function render(input, out) {
    var widgetsContext = markoWidgets.getWidgetsContext(out);

    var options = input.immediate ? {immediate: true} : null;

    if (input.immediate === true) {
        out.on('asyncFragmentFinish', function(eventArgs) {
            var asyncFragmentOut = eventArgs.out;
            var widgetsContext = markoWidgets.getWidgetsContext(asyncFragmentOut);
            markoWidgets.writeInitWidgetsCode(widgetsContext, asyncFragmentOut, options);
        });
    }

    if (out.featureLastFlush === false) {
        // If the rendering out doesn't support the ability to know when all of the asynchronous fragmnents
        // have completed then we won't be able to know which widgets were rendered so we will
        // need to scan the DOM to find the widgets
        markoWidgets.writeInitWidgetsCode(widgetsContext, out, {scanDOM: true});
    } else {
        var asyncOut = out.beginAsync({ last: true, timeout: -1 });
        out.onLast(function(next) {
            if (widgetsContext.hasWidgets()) {
                markoWidgets.writeInitWidgetsCode(widgetsContext, asyncOut, options);
            }

            asyncOut.end();
            next();
        });
    }
};