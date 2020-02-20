"use strict";

const INIT_COMPONENTS_KEY = Symbol();

const writeInitComponentsCode = require("../../runtime/components")
    .writeInitComponentsCode;

function handleAwaitFinish(eventArgs) {
    const asyncFragmentOut = eventArgs.out;
    writeInitComponentsCode(asyncFragmentOut, asyncFragmentOut, false);
}

module.exports = function render(input, out) {
    const outGlobal = out.global;
    if (outGlobal[INIT_COMPONENTS_KEY] === undefined) {
        outGlobal[INIT_COMPONENTS_KEY] = true;

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
                // Ensure we're getting init code starting from the root
                let rootOut = out;
                while (rootOut._parentOut) {
                    rootOut = rootOut._parentOut;
                }
                // Write out all of the component init code from the main out
                writeInitComponentsCode(rootOut, asyncOut, true);
                asyncOut.end();
                next();
            });
        }
    }
};
