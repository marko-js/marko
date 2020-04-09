"use strict";

module.exports = function transform(el, context) {
  if (context.outputType === "html") {
    el.appendChild(context.createNodeForEl("init-components"));
    el.appendChild(context.createNodeForEl("await-reorderer"));
    el.appendChild(context.createNodeForEl("_preferred-script-location"));
  }
};
