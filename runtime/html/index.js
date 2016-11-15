'use strict';
// helpers provide a core set of various utility methods to compiled templates
var helpers;

/**
 * Method is for internal usage only. This method
 * is invoked by code in a compiled Marko template and
 * it is used to create a new Template instance.
 * @private
 */
exports.c = function createTemplate(path) {
     return new Template(path);
};

var AsyncStream;

function createOut(globalData) {
    return new AsyncStream(globalData);
}

// If the optional "stream" module is available
// then Readable will be a readable stream

var extend = require('raptor-util/extend');

exports.AsyncStream = AsyncStream;

function Template(path, func, options) {
    this.path = path;
    this._ = func;
    this._shouldBuffer = !options || options.shouldBuffer !== false;
    this.meta = undefined;
}

Template.prototype = {
    createOut: createOut,

    renderSync: function(data) {
        var localData;
        var globalData;

        if ((localData = data)) {
            globalData = localData.$global;
        } else {
            localData = {};
        }

        var out = new AsyncStream(globalData);
        out.sync();

        this._(localData, out);
        return out.getOutput();
    },

    /**
     * Renders a template to either a stream (if the last
     * argument is a Stream instance) or
     * provides the output to a callback function (if the last
     * argument is a Function).
     *
     * Supported signatures:
     *
     * render(data, callback)
     * render(data, out)
     * render(data, stream)
     * render(data, out, callback)
     * render(data, stream, callback)
     *
     * @param  {Object} data The view model data for the template
     * @param  {AsyncStream} out A Stream or an AsyncStream instance
     * @param  {Function} callback A callback function
     * @return {AsyncStream} Returns the AsyncStream instance that the template is rendered to
     */
    render: function(data, out, callback) {
        var renderFunc = this._;

        var finalData;
        var globalData;
        if (data) {
            finalData = data;

            if ((globalData = data.$global)) {
                // We will *move* the "$global" property
                // into the "out.global" object
                data.$global = null;
            }
        } else {
            finalData = {};
        }

        if (out) {
            // The out can either be a callback function or AsyncStream...
            if (out.isAsyncStream) {
                if (callback) {
                    out
                        .on('finish', function() {
                            callback(null, out.getOutput(), out);
                        })
                        .once('error', callback);
                }

                if (globalData) {
                    extend(out.global, globalData);
                }

                renderFunc(finalData, out);

                return out;
            } else if (typeof out === 'function') {
                callback = out;
                out = null;
            }
        }

        var shouldBuffer = this._shouldBuffer;

        var finalOut = new AsyncStream(globalData, out, null, shouldBuffer);

        if (callback) {
            finalOut
                .on('finish', function() {
                    callback(null, finalOut.getOutput(), finalOut);
                })
                .once('error', callback);
        }

        // Invoke the compiled template's render function to have it
        // write out strings to the provided out.
        renderFunc(finalData, finalOut);

        // Automatically end output stream (the writer) if we
        // had to create an async writer (which might happen
        // if the caller did not provide a writer/out or the
        // writer/out was not an AsyncStream).
        //
        // If out parameter was originally an AsyncStream then
        // we assume that we are writing to output that was
        // created in the context of another rendering job.
        return finalOut.end();
    },

    stream: function() {
        throw new Error('You must require("marko/stream")');
    }
};

function createInlineMarkoTemplate(filename, renderFunc) {
    return new Template(filename, renderFunc);
}

exports.createWriter = function(writer) {
    return new AsyncStream(null, writer);
};

exports._inline = createInlineMarkoTemplate;

exports.createOut = createOut;

exports.Template = Template;

helpers = require('./helpers');
exports.helpers = helpers;



AsyncStream = require('./AsyncStream');

exports.enableAsyncStackTrace = AsyncStream.enableAsyncStackTrace;

require('../')._setRuntime(exports);