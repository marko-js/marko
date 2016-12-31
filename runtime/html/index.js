'use strict';
require('../env-init');

var AsyncStream = require('./AsyncStream');
var Template = require('./Template');

/**
 * Method is for internal usage only. This method
 * is invoked by code in a compiled Marko template and
 * it is used to create a new Template instance.
 * @private
 */
exports.t = function createTemplate(path) {
     return new Template(path);
};

function createOut(globalData, parent, state, buffer) {
    return new AsyncStream(globalData, parent, state, buffer);
}

exports.createWriter = function(writer) {
    return new AsyncStream(null, writer);
};

exports.Template = Template;
exports.$__createOut = createOut;
exports.AsyncStream = AsyncStream;
exports.enableAsyncStackTrace = AsyncStream.enableAsyncStackTrace;

require('../createOut').$__setCreateOut(createOut);