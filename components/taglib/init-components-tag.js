const INIT_WIDGET_KEY = Symbol();

var writeInitComponentsCode = require('../').writeInitComponentsCode;
var ComponentsContext = require('../ComponentsContext');

module.exports = function render(input, out) {
    var global = out.global;
    if (!global[INIT_WIDGET_KEY]) {
        global[INIT_WIDGET_KEY] = true;

        out.on('await:beforeRender', function(eventArgs) {
            if (eventArgs.clientReorder) {
                var asyncFragmentOut = eventArgs.out;
                asyncFragmentOut.data.components = new ComponentsContext(asyncFragmentOut);
            }
        });

        out.on('await:finish', function(eventArgs) {
            var asyncFragmentOut = eventArgs.out;

            var componentsContext = asyncFragmentOut.data.components || asyncFragmentOut.global.components;
            if (componentsContext) {
                writeInitComponentsCode(componentsContext, asyncFragmentOut);
            }
        });

        if (out.isSync()) {
            var componentsContext = ComponentsContext.$__getComponentsContext(out);
            writeInitComponentsCode(componentsContext, out);
        } else {
            var asyncOut = out.beginAsync({ last: true, timeout: -1 });
            out.onLast(function(next) {
                var componentsContext = ComponentsContext.$__getComponentsContext(out);
                writeInitComponentsCode(componentsContext, asyncOut);
                asyncOut.end();
                next();
            });
        }


    }
};