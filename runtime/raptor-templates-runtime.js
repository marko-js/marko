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
 * <p>The code for the Raptor Templates compiler is kept separately
 * in the {@link raptor/templating/compiler} module.
 */
var renderContext = require('raptor-render-context');
var Context = renderContext.Context;
var helpers = require('./helpers');
var loader = require('./loader');
var cache = {};
var Readable;

exports.Context = Context;


var stream;
var STREAM = 'stream';

var streamPath;
try {
    streamPath = require.resolve(STREAM);
} catch(e) {}

if (streamPath) {
    stream = require(streamPath);
}


function renderWithCallback(template, data, context, callback) {
    context
        .on('end', function() {
            callback(null, context.getOutput());
        })
        .on('error', callback);

    template._(data, context);    //Invoke the template rendering function with the required arguments

    context.end();
}

function Template(renderFunc) {
    this._ = renderFunc;
}

Template.prototype = {
    renderSync: function(data) {
        var context = new Context();
        context.sync();
        this._(data, context);
        context.end();
        return context.getOutput();
    },
    render: function(data, context, callback) {
        if (data == null) {
            data = {};
        }

        // callback is last argument if provided
        callback = arguments[arguments.length - 1];
        if (typeof callback === 'function') {
            if (arguments.length === 2) { // data, context, callback
                callback = context;
                context = new Context();
            }
            renderWithCallback(this, data, context, callback);
        } else {
            if (context.isRenderContext) {
                this._(data, context);
            } else {
                // Assume the "context" is really a stream
                context = new Context(context);
                this._(data, context);
                context.end(); // End the context and the underlying stream
            }
        }

        return context;
    },
    stream: function(data) {
        if (!stream) {
            return function() {
                throw new Error('Module not found: stream');
            };
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

            var context = exports.createContext(this);
            template.render(data, context);
            context.end();
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

exports.render = function (templatePath, data, context) {
    return load(templatePath).render(data, context);
};

exports.stream = function(templatePath, data) {
    return load(templatePath).stream(data);
};

exports.unload = function(templatePath) {
    delete cache[templatePath];
};

exports.createContext = function(writer) {
    return new Context(writer);
};

exports.helpers = helpers;
