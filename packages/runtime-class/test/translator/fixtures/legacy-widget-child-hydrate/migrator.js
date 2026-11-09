"use strict";

const path = require("path");

// Binds a legacy widget the way marko-widgets migrates `w-bind`.
module.exports = {
  MarkoAttribute(attr) {
    if (attr.node.name === "w-bind") {
      attr.hub.file.metadata.marko.widgetBind = true;
      attr.remove();
    }
  },
  Program: {
    exit(program) {
      const { file } = program.hub;
      const meta = file.metadata.marko;
      if (meta.widgetBind) {
        meta.deps.push({
          type: "js",
          virtualPath: `./${path.basename(file.opts.filename)}.register.js`,
          code: `require("marko/src/runtime/components/registry.js").r(${JSON.stringify(meta.id)},()=>require("marko/legacy-components").defineWidget({}));`,
        });
      }
    },
  },
};
