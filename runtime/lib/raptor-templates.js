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

exports.Context = Context;

function load(templatePath) {
    var templateFunc;

    if (typeof templatePath === 'string') {
        templateFunc = cache[templatePath];
        if (!templateFunc) {
            templateFunc = cache[templatePath] = loader(templatePath)(helpers);
        }
    } else {
        // Instead of a path, assume we got a compiled template module
        templateFunc = templatePath._ || (templatePath._ = templatePath(helpers));
    }

    return templateFunc;
}

exports.load = load;

exports.render = function (templatePath, data, callback, context) {
    if (typeof callback !== 'function') {
        // A context object was provided instead of a callback
        context = callback;
        callback = null;
    }

    var shouldEnd = false;

    if (!context) {
        context = new Context();
        shouldEnd = true;
    }

    load(templatePath)(data || {}, context);    //Invoke the template rendering function with the required arguments

    if (callback) {
        context
            .on('end', function() {
                callback(null, context.getOutput());
            })
            .on('error', callback);
    }

    if (shouldEnd) {
        context.end();    
    }

    return context;
};

exports.unload = function(templatePath) {
    delete cache[templatePath];
};

exports.createContext = function(writer) {
    return new Context(writer);
};


exports.helpers = helpers;
exports.stream = require('./render-stream')(exports);