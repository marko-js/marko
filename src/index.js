'use strict';

var AsyncStream = require('./AsyncStream');

exports.create = function (writer, options) {
    var global;
    var shouldBuffer;

    if(arguments.length === 1 && typeof writer.write !== 'function') {
        options = writer;
        writer = null;
    }

    if (options) {
        global = options.global;
        shouldBuffer = options.buffer === true;
    }

    var asyncStream = new AsyncStream(
        global,
        writer,
        null /* Internally used to pass state */,
        shouldBuffer);    //Create a new context using the writer provided

    return asyncStream;
};

exports.AsyncStream = exports.AsyncWriter /* legacy */ = AsyncStream;
exports.enableAsyncStackTrace = AsyncStream.enableAsyncStackTrace;
