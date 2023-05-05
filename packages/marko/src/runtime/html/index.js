"use strict";

globalThis.Marko = {
  Component: function () {}
};

/**
 * Method is for internal usage only. This method
 * is invoked by code in a compiled Marko template and
 * it is used to create a new Template instance.
 * @private
 */
exports.t = function createTemplate(typeName) {
  return new Template(typeName);
};

function Template(typeName) {
  this.___typeName = typeName;
}

Template.prototype.stream = require("@internal/create-readable");

var AsyncStream = require("./AsyncStream");
require("../createOut").___setCreateOut(
  (Template.prototype.createOut = function createOut(
    globalData,
    writer,
    parentOut,
    buffer
  ) {
    return new AsyncStream(globalData, writer, parentOut, buffer);
  })
);

require("../renderable")(Template.prototype);
