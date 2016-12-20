const INIT_WIDGET_KEY = Symbol();

var writeInitWidgetsCode = require('../').writeInitWidgetsCode;
var WidgetsContext = require('../WidgetsContext');

module.exports = function render(input, out) {
    var global = out.global;
    if (!global[INIT_WIDGET_KEY]) {
        global[INIT_WIDGET_KEY] = true;

        out.on('await:beforeRender', function(eventArgs) {
            if (eventArgs.clientReorder) {
                var asyncFragmentOut = eventArgs.out;
                asyncFragmentOut.data.widgets = new WidgetsContext(asyncFragmentOut);
            }
        });

        out.on('await:finish', function(eventArgs) {
            var asyncFragmentOut = eventArgs.out;

            var widgetsContext = asyncFragmentOut.data.widgets || asyncFragmentOut.global.widgets;
            if (widgetsContext) {
                writeInitWidgetsCode(widgetsContext, asyncFragmentOut);
            }
        });

        if (out.isSync()) {
            var widgetsContext = WidgetsContext.$__getWidgetsContext(out);
            writeInitWidgetsCode(widgetsContext, out);
        } else {
            var asyncOut = out.beginAsync({ last: true, timeout: -1 });
            out.onLast(function(next) {
                var widgetsContext = WidgetsContext.$__getWidgetsContext(out);
                writeInitWidgetsCode(widgetsContext, asyncOut);
                asyncOut.end();
                next();
            });
        }


    }
};