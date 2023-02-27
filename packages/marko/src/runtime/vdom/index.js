"use strict";

window.Marko = {
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

var AsyncVDOMBuilder = require("./AsyncVDOMBuilder");
require("../createOut").___setCreateOut(
  (Template.prototype.createOut = function createOut(
    globalData,
    parent,
    parentOut
  ) {
    return new AsyncVDOMBuilder(globalData, parent, parentOut);
  })
);

require("../renderable")(Template.prototype);
