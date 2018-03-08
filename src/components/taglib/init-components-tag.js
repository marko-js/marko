"use strict";

const INIT_COMPONENTS_KEY = Symbol();

const writeInitComponentsCode = require("../").writeInitComponentsCode;

const ComponentsContext = require("../ComponentsContext");

function handleAwaitBeforeRender(eventArgs) {
    if (eventArgs.clientReorder) {
        const asyncFragmentOut = eventArgs.out;
        asyncFragmentOut.___components = new ComponentsContext(
            asyncFragmentOut
        );
    }
}

function handleAwaitFinish(eventArgs) {
    const asyncFragmentOut = eventArgs.out;
    writeInitComponentsCode(asyncFragmentOut, asyncFragmentOut, false);
}

module.exports = function render(input, out) {
    const outGlobal = out.global;
    if (outGlobal[INIT_COMPONENTS_KEY] === undefined) {
        outGlobal[INIT_COMPONENTS_KEY] = true;

        out.on("await:beforeRender", handleAwaitBeforeRender);
        out.on("await:finish", handleAwaitFinish);

        if (out.isSync() === true) {
            // Generate initialization code for any of the UI components that were
            // rendered synchronously
            writeInitComponentsCode(out, out, true);
        } else {
            // Generate initialization code for any of the UI components that were
            // rendered asynchronously, but were outside an `<await>` tag
            // (each `<await>` tag will have its own component initialization block)
            const asyncOut = out.beginAsync({ last: true, timeout: -1 });
            out.onLast(function(next) {
                // Write out all of the component init code from the main out
                writeInitComponentsCode(out, asyncOut, true);
                asyncOut.end();
                next();
            });
        }
    }
};
