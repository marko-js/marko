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

// async-writer provides all of the magic to support asynchronous
// rendering to a stream
var asyncWriter = require('async-writer');

// helpers can the core set of utility methods
// that are available in every template (empty, notEmpty, etc.)
var helpers = require('./helpers');

// The loader is used to load templates that have not already been
// loaded and cached. On the server, the loader will use
// the compiler to compile the template and then load the generated
// module file using the Node.js module loader
var loader = require('./loader');

// If the optional "stream" module is available
// then Readable will be a readable stream
var Readable;

var AsyncWriter = asyncWriter.AsyncWriter;
var extend = require('raptor-util/extend');

exports.AsyncWriter = AsyncWriter;

var stream;
var STREAM = 'stream';

var streamPath;
try {
    streamPath = require.resolve(STREAM);
} catch(e) {}

if (streamPath) {
    stream = require(streamPath);
}

function Template(renderFunc, options) {
    this._ = renderFunc;
    this.buffer = !options || options.buffer !== false;
}

Template.prototype = {
    renderSync: function(data) {
        var out = new AsyncWriter();
        out.sync();
        out.global = extend(out.global, data.$global);
        this._(data, out);
        out.end();
        return out.getOutput();
    },
    /**
     * Renders a template to either a stream (if the last
     * argument is a Stream instance) or
     * provides the output to a callback function (if the last
     * argument is a Function).
     *
     * @param  {Object} data The view model data for the template
     * @param  {AsyncWriter} out A Stream or an AsyncWriter instance
     * @param  {Function} callback A callback function
     * @return {AsyncWriter} Returns the AsyncWriter instance that the template is rendered to
     */
    render: function(data, out) {
        // NOTE: We create new vars here to avoid a V8 de-optimization due
        //       to the following:
        //       Assignment to parameter in arguments object
        var finalOut = out;
        var finalData = data || {};

        var renderFunc = this._;

        // callback is last argument if provided
        var callback = arguments[arguments.length - 1];

        var shouldEnd = false;

        if (typeof callback === 'function') {
            if (arguments.length === 2) {
                // render called with data and callback,
                // we need to create the "out"
                finalOut = null;
            }

            if (!finalOut || !finalOut.isAsyncWriter) {
                finalOut = new AsyncWriter(finalOut);
                shouldEnd = true;
            }

            finalOut.on('finish', function() {
                callback(null, finalOut.getOutput(), finalOut);
            });

            finalOut.once('error', callback);
        } else if (!finalOut || !finalOut.isAsyncWriter) {
            var stream = finalOut;
            // Assume the "finalOut" is really a stream
            //
            // By default, we will buffer rendering to a stream to prevent
            // the response from being "too chunky".
            var options = this.buffer ? { buffer: true } : null;
            finalOut = asyncWriter.create(stream, options);
            shouldEnd = true;
        }

        finalOut.global = extend(finalOut.global, finalData.$global);

        renderFunc(finalData, finalOut);

        // Automatically end output stream (the writer) if we
        // had to create an async writer (which might happen
        // if the caller did not provide a writer/out or the
        // writer/out was not an AsyncWriter).
        //
        // If out parameter was originally an AsyncWriter then
        // we assume that we are writing to output that was
        // created in the context of another rendering job.
        if (shouldEnd) {
            finalOut.end();
        }

        return finalOut;
    },
    stream: function(data) {
        if (!stream) {
            throw new Error('Module not found: stream');
        }

        return new Readable(this, data, this.buffer);
    }
};

if (stream) {
    Readable = function(template, data, buffer) {
        Readable.$super.call(this);
        this._t = template;
        this._d = data;
        this._buffer = buffer;
        this._rendered = false;
    };

    Readable.prototype = {
        write: function(data) {
            if (data != null) {
                this.push(data);
            }
        },
        end: function() {
            this.push(null);
        },
        _read: function() {
            if (this._rendered) {
                return;
            }

            this._rendered = true;

            var template = this._t;
            var data = this._d;

            var out = asyncWriter.create(this, this._buffer ? { buffer: true } : null);
            template.render(data, out);
            out.end();
        }
    };

    require('raptor-util/inherit')(Readable, stream.Readable);
}

/**
 * NOTE: This method can be removed in the very near future.
 *       It is only needed to make sure old templates that compiled
 *       to `module.exports = function(helpers) { ... }` will still
 *       load correctly even though new templates are compiled to
 *       `exports.create = function(helpers) { ... }`
 *
 */
function wrapLegacyCompiledTemplate(loadedTemplate) {
    if (typeof loadedTemplate === 'function') {
        return {
            create: function(helpers) {
                return loadedTemplate(helpers);
            }
        };
    }

    return loadedTemplate;
}

function load(templatePath, options) {
    var cache = exports.cache;

    if (!templatePath) {
        throw new Error('"templatePath" is required');
    }

    var template;

    if (typeof templatePath === 'string') {
        template = cache[templatePath];
        if (!template) {
            // The template has not been loaded, load the template to get
            // access to the factory function that is used to produce
            // the actual compiled template function. We pass the helpers
            // as the first argument to the factory function to produce
            // the compiled template function
            template = cache[templatePath] = new Template(
                wrapLegacyCompiledTemplate(loader(templatePath)).create(helpers), // Load the template factory and invoke it
                options);
        }
    } else {
        // Instead of a path, assume we got a compiled template module
        // We store the loaded template with the factory function that was
        // used to get access to the compiled template function
        template = templatePath._ || (templatePath._ = new Template(wrapLegacyCompiledTemplate(templatePath).create(helpers), options));
    }

    return template;
}

exports.load = load;

exports.render = function (templatePath, data, out) {
    return load(templatePath).render(data, out);
};

exports.stream = function(templatePath, data) {
    return load(templatePath).stream(data);
};

exports.cache = {};

exports.createWriter = function(writer) {
    return new AsyncWriter(writer);
};

exports.helpers = helpers;

exports.Template = Template;
