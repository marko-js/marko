/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module provides the lightweight runtime for loading and rendering
 * templates. The compilation is handled by code that is part of the
 * [marko/compiler](https://github.com/raptorjs/marko/tree/master/compiler)
 * module. If rendering a template on the client, only the runtime is needed
 * on the client and not the compiler
 */

'use strict';

// helpers provide a core set of various utility methods
// that are available in every template
var helpers = require('./helpers');

/**
 * Method is for internal usage only. This method
 * is invoked by code in a compiled Marko template and
 * it is used to create a new Template instance.
 * @private
 */
 exports.c = function createTemplate(path, createFunc) {
     var template = new Template(path, lazyRender);
     return template;

     function lazyRender() {
         template._ = createFunc(helpers);
         template._.apply(template, arguments);
     }
 };

var BUFFER_OPTIONS = { buffer: true };

// async-writer provides all of the magic to support asynchronous
// rendering to a stream
var asyncWriter = require('async-writer');

var loader;

// If the optional "stream" module is available
// then Readable will be a readable stream

var AsyncStream = asyncWriter.AsyncStream;
var extend = require('raptor-util/extend');

exports.AsyncStream = AsyncStream;

function renderCallback(renderFunc, data, globalData, callback) {
    var out = new AsyncStream(globalData);

    renderFunc(data, out);
    return out.end()
        .on('finish', function() {
            callback(null, out.getOutput(), out);
        })
        .once('error', callback);
}

function Template(path, func, options) {
    this.path = path;
    this._ = func;
    this._options = !options || options.buffer !== false ?
        BUFFER_OPTIONS : null;
}

Template.prototype = {
    createOut() {
        return new AsyncStream();
    },
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

        if (typeof out === 'function') {
            // Short circuit for render(data, callback)
            return renderCallback(renderFunc, finalData, globalData, out);
        }

        // NOTE: We create new vars here to avoid a V8 de-optimization due
        //       to the following:
        //       Assignment to parameter in arguments object
        var finalOut = out;

        var shouldEnd = false;

        if (arguments.length === 3) {
            // render(data, out, callback)
            if (!finalOut || !finalOut.isAsyncStream) {
                finalOut = new AsyncStream(globalData, finalOut);
                shouldEnd = true;
            }

            finalOut
                .on('finish', function() {
                    callback(null, finalOut.getOutput(), finalOut);
                })
                .once('error', callback);
        } else if (!finalOut || !finalOut.isAsyncStream) {
            var options = this._options;
            var shouldBuffer = options && options.shouldBuffer;
            // Assume the "finalOut" is really a stream
            //
            // By default, we will buffer rendering to a stream to prevent
            // the response from being "too chunky".
            finalOut = new AsyncStream(globalData, finalOut, null, shouldBuffer);
            shouldEnd = true;
        }

        if (globalData) {
            extend(finalOut.global, globalData);
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
        return shouldEnd ? finalOut.end() : finalOut;
    },

    stream: function() {
        throw new Error('You must require("marko/stream")');
    }
};

function createRenderProxy(template) {
    return function(data, out) {
        template._(data, out);
    };
}

function initTemplate(rawTemplate, templatePath) {
    if (rawTemplate.render) {
        return rawTemplate;
    }

    var createFunc = rawTemplate.create || rawTemplate;

    var template = createFunc.loaded;
    if (!template) {
        template = createFunc.loaded = new Template(templatePath);
        template.c(createFunc);
    }
    return template;
}

function load(templatePath, templateSrc, options) {
    if (!templatePath) {
        throw new Error('"templatePath" is required');
    }

    if (arguments.length === 1) {
        // templateSrc and options not provided
    } else if (arguments.length === 2) {
        // see if second argument is templateSrc (a String)
        // or options (an Object)
        var lastArg = arguments[arguments.length - 1];
        if (typeof lastArg !== 'string') {
            options = arguments[1];
            templateSrc = undefined;
        }
    } else if (arguments.length === 3) {
        // assume function called according to function signature
    } else {
        throw new Error('Illegal arguments');
    }

    var template;

    if (typeof templatePath === 'string') {
        template = initTemplate(loader(templatePath, templateSrc, options), templatePath);
    } else if (templatePath.render) {
        template = templatePath;
    } else {
        template = initTemplate(templatePath);
    }

    if (options && (options.buffer != null)) {
        template = new Template(
            template.path,
            createRenderProxy(template),
            options);
    }

    return template;
}

function createInlineMarkoTemplate(filename, renderFunc) {
    return new Template(filename, renderFunc);
}

exports.load = load;

exports.createWriter = function(writer) {
    return new AsyncStream(null, writer);
};

exports.helpers = helpers;

exports.Template = Template;

exports._inline = createInlineMarkoTemplate;

// The loader is used to load templates that have not already been
// loaded and cached. On the server, the loader will use
// the compiler to compile the template and then load the generated
// module file using the Node.js module loader
loader = require('../loader');
