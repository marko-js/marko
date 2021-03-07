"use strict";
var AsyncStream = require("./AsyncStream");
var makeRenderable = require("../renderable");
var createReadable = require("./create-readable");

function Template(path, renderFunc, options) {
  this.path = path;
  this._ = renderFunc;
  this.___shouldBuffer = !options || options.shouldBuffer !== false;
  this.meta = undefined;
}

Template.prototype = {
  createOut: function createOut(globalData, writer, parentOut, buffer) {
    return new AsyncStream(globalData, writer, parentOut, buffer);
  },
  stream: createReadable
};

makeRenderable(Template.prototype);

module.exports = Template;
