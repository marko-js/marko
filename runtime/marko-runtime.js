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
 * This module provides the runtime for rendering compiled templates.
 *
 *
 * <p>The code for the Marko compiler is kept separately
 * in the {@link raptor/templating/compiler} module.
 */
var asyncWriter = require('async-writer');
var helpers = require('./helpers');
var loader = require('./loader');
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
        this._(data, out);
        out.end();
        return out.getOutput();
    },
    render: function(data, out, callback) {
        if (data == null) {
            data = {};
        }
        var renderFunc = this._;

        // callback is last argument if provided
        callback = arguments[arguments.length - 1];

        var shouldEnd = false;

        if (typeof callback === 'function') {
            if (arguments.length === 2) {
                // render called with data and callback,
                // we need to create the "out"
                out = null;
            }

            if (!out || !out.isAsyncWriter) {
                out = new AsyncWriter(out);
                shouldEnd = true;
            }

            out.on('finish', function() {
                callback(null, out.getOutput());
            });

            out.once('error', callback);
        } else if (!out || !out.isAsyncWriter) {
            var stream = out;
            // Assume the "out" is really a stream
            //
            // By default, we will buffer rendering to a stream to prevent
            // the response from being "too chunky".
            var options = this.buffer ? { buffer: true } : null;
            out = asyncWriter.create(stream, options);
            shouldEnd = true;
        }

        var $global = data.$global;
        if ($global) {
            extend(out.global, $global);
        }

        renderFunc(data, out);

        // Automatically end output stream (the writer) if we
        // had to create an async writer (which might happen
        // if the caller did not provide a writer/out or the
        // writer/out was not an AsyncWriter).
        //
        // If out parameter was originally an AsyncWriter then
        // we assume that we are writing to output that was
        // created in the context of another rendering job.
        if (shouldEnd) {
            out.end();
        }

        return out;
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

function load(templatePath, options) {
    var cache = exports.cache;

    if (!templatePath) {
        throw new Error('"templatePath" is required');
    }

    var template;

    if (typeof templatePath === 'string') {
        template = cache[templatePath];
        if (!template) {
            template = cache[templatePath] = new Template(loader(templatePath)(helpers), options);
        }
    } else {
        // Instead of a path, assume we got a compiled template module
        template = templatePath._ || (templatePath._ = new Template(templatePath(helpers), options));
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