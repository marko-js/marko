"use strict";

const INIT_COMPONENTS_KEY = Symbol();

const addComponentsFromContext = require("../../runtime/components")
  .___addComponentsFromContext;
const getInitComponentsCode = require("../../runtime/components")
  .___getInitComponentsCode;

function addComponentsFromOut(source, target) {
  const sourceOut = source.out || source;
  const targetOut = target || sourceOut;
  const componentsContext = sourceOut.___components;
  const componentDefs = targetOut.writer.get("componentDefs");
  addComponentsFromContext(componentsContext, componentDefs);
}

function addInitScript(writer) {
  const out = writer.state.root;
  const componentDefs = writer.get("componentDefs");
  writer.script(getInitComponentsCode(out, componentDefs));
}

function forceScriptTagAtThisPoint(out) {
  const writer = out.writer;
  const htmlSoFar = writer.toString();
  writer.clear();
  writer.write(htmlSoFar);
}

module.exports = function render(input, out) {
  const outGlobal = out.global;
  if (outGlobal[INIT_COMPONENTS_KEY] === undefined) {
    outGlobal[INIT_COMPONENTS_KEY] = true;

    out.on("await:finish", addComponentsFromOut);
    out.on("___toString", addInitScript);

    if (out.isSync() === true) {
      // Generate initialization code for any of the UI components that were
      // rendered synchronously
      addComponentsFromOut(out);
      forceScriptTagAtThisPoint(out);
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
        addComponentsFromOut(rootOut, asyncOut);
        forceScriptTagAtThisPoint(asyncOut);
        asyncOut.end();
        next();
      });
    }
  }
};
