"use strict";

var OutgoingMessageProto = require("http").OutgoingMessage.prototype;
if (String(OutgoingMessageProto.flush).indexOf("deprecated") !== -1) {
  // Yes, we are monkey-patching http. This method should never have been added and it was introduced on
  // the iojs fork. It was quickly deprecated and I'm 99% sure no one is actually using it.
  // See:
  // - https://github.com/marko-js/async-writer/issues/3
  // - https://github.com/nodejs/node/issues/2920
  //
  // This method causes problems since marko looks for the flush method and calls it found.
  // The `res.flush()` method is introduced by the [compression](https://www.npmjs.com/package/compression)
  // middleware, but, otherwise, it should typically not exist.
  delete OutgoingMessageProto.flush;
}

/**
 * Method is for internal usage only. This method
 * is invoked by code in a compiled Marko template and
 * it is used to create a new Template instance.
 * @private
 */
exports.t = function createTemplate(path) {
  return new Template(path);
};

var AsyncStream = require("./AsyncStream");
var Template = require("./Template");

function createOut(globalData, parent, state, buffer) {
  return new AsyncStream(globalData, parent, state, buffer);
}

exports.createWriter = function (writer) {
  return new AsyncStream(null, writer);
};

exports.Template = Template;
exports.___createOut = createOut;
exports.AsyncStream = AsyncStream;
exports.enableAsyncStackTrace = AsyncStream.enableAsyncStackTrace;

require("../createOut").___setCreateOut(createOut);
