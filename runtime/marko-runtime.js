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
var cache = {};
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

function Template(renderFunc) {
    this._ = renderFunc;
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
        var shouldEnd = true;
        if (typeof callback === 'function') {
            if (arguments.length === 2) { // data, out, callback
                callback = out;
                out = new AsyncWriter();
            }
            out.on('end', function() {
                    callback(null, out.getOutput());
                })
                .on('error', callback);
        } else {
            if (out.isAsyncWriter) {
                shouldEnd = false;
            } else {
                // Assume the "out" is really a stream
                out = new AsyncWriter(out);
            }
        }

        var $global = data.$global;
        if ($global) {
            extend(out.global, $global);
        }

        renderFunc(data, out);
        if (shouldEnd) {
            out.end(); // End the async writer and the underlying stream
        }

        return out;
    },
    stream: function(data) {
        if (!stream) {
            throw new Error('Module not found: stream');
        }

        return new Readable(this, data);
    }
};

if (stream) {
    Readable = function(template, data) {
        Readable.$super.call(this);
        this._t = template;
        this._d = data;
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

            var out = new AsyncWriter(this);
            template.render(data, out);
            out.end();
        }
    };

    require('raptor-util/inherit')(Readable, stream.Readable);
}

function load(templatePath) {
    var template;

    if (typeof templatePath === 'string') {
        template = cache[templatePath];
        if (!template) {
            template = cache[templatePath] = new Template(loader(templatePath)(helpers));
        }
    } else {
        // Instead of a path, assume we got a compiled template module
        template = templatePath._ || (templatePath._ = new Template(templatePath(helpers)));
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

exports.unload = function(templatePath) {
    delete cache[templatePath];
};

exports.createWriter = function(writer) {
    return new AsyncWriter(writer);
};

exports.helpers = helpers;
