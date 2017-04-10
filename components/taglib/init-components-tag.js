const INIT_COMPONENTS_KEY = Symbol();

var writeInitComponentsCode = require('../').writeInitComponentsCode;

var ComponentsContext = require('../ComponentsContext');

function handleAwaitBeforeRender(eventArgs) {
    if (eventArgs.clientReorder) {
        var asyncFragmentOut = eventArgs.out;
        asyncFragmentOut.data.components = new ComponentsContext(asyncFragmentOut, undefined, false);
    }
}

function handleAwaitFinish(eventArgs) {
    var asyncFragmentOut = eventArgs.out;
    writeInitComponentsCode(asyncFragmentOut, false);
}

module.exports = function render(input, out) {
    var global = out.global;
    if (global[INIT_COMPONENTS_KEY] === undefined) {
        global[INIT_COMPONENTS_KEY] = true;

        out.on('await:beforeRender', handleAwaitBeforeRender);
        out.on('await:finish', handleAwaitFinish);

        if (out.isSync() === true) {
            // Generate initialization code for any of the UI components that were
            // rendered synchronously
            writeInitComponentsCode(out, true);
        } else {
            // Generate initialization code for any of the UI components that were
            // rendered asynchronously, but were outside an `<await>` tag
            // (each `<await>` tag will have its own component initialization block)
            var asyncOut = out.beginAsync({ last: true, timeout: -1 });
            out.onLast(function(next) {
                writeInitComponentsCode(asyncOut, true);
                asyncOut.end();
                next();
            });
        }
    }
};
