'use strict';
var AsyncStream = require('./AsyncStream');
var makeRenderable = require('../renderable');

/**
 * Method is for internal usage only. This method
 * is invoked by code in a compiled Marko template and
 * it is used to create a new Template instance.
 * @private
 */
exports.t = function createTemplate(path) {
     return new Template(path);
};

function Template(path, func, options) {
    this.path = path;
    this._ = func;
    this._shouldBuffer = !options || options.shouldBuffer !== false;
    this.meta = undefined;
}

function createOut(globalData, parent, state, buffer) {
    return new AsyncStream(globalData, parent, state, buffer);
}

Template.prototype = {
    createOut: createOut,
    stream: function() {
        throw new Error('You must require("marko/stream")');
    }
};

makeRenderable(Template.prototype);

exports.createWriter = function(writer) {
    return new AsyncStream(null, writer);
};

exports._inline = function(filename, renderFunc) {
    return new Template(filename, renderFunc);
};

exports.Template = Template;
exports.createOut = createOut;
exports.AsyncStream = AsyncStream;
exports.enableAsyncStackTrace = AsyncStream.enableAsyncStackTrace;
exports.helpers = require('./helpers');

require('../')._setRuntime(exports);