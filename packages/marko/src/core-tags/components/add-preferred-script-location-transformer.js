"use strict";

module.exports = function transform(el, context) {
  if (context.outputType === "html" && !context.___hasPreferredScriptLocation) {
    context.___hasPreferredScriptLocation = true;
    el.parentNode.appendChild(
      context.createNodeForEl("_preferred-script-location")
    );
  }
};
