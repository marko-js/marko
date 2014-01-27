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
'use strict';
var cache = {};

var StringBuilder = require('raptor-strings/StringBuilder');
var renderContext = require('raptor-render-context');
var createError = require('raptor-util').createError;
var Context = renderContext.Context;
var helpers = require('./helpers');
require('./context-helpers');

function getTemplateFunc(templatePath) {
    var templateFunc = cache[templatePath];
    //Look for the template function in the loaded templates lookup
    if (!templateFunc) {
        //See if the template has already been loaded
        /*
         * If we didn't find the template function in the loaded template lookup
         * then it means that the template has not been fully loaded and initialized.
         * Therefore, check if the template has been registerd with the name provided
         */
        templateFunc = getRegisteredTemplate(templatePath);
        if (!templateFunc && this.findTemplate) {
            this.findTemplate(templatePath);
            templateFunc = getRegisteredTemplate(templatePath);
        }

        if (!templateFunc) {
            throw new Error('Template not found: ' + templatePath);
        }
        cache[templatePath] = templateFunc;    //Store the template rendering function in the lookup
    }
    return templateFunc;
}

module.exports = {
    
    render: function (templatePath, data, callback, context) {
        if (typeof callback !== 'function') {
            // A callback function was provided
            context = callback;
            callback = null;
        }

        if (!context) {
            context = new Context(new StringBuilder());
        }

        var templateFunc = getTemplateFunc(templatePath);
        
        try {
            templateFunc(data || {}, context);    //Invoke the template rendering function with the required arguments
        } catch (e) {
            throw createError(new Error('Unable to render template with name "' + templatePath + '". Exception: ' + e), e);
        }

        if (callback) {
            context.on('end', function() {
                    callback(null, context.getOutput());
                })
                .on('error', callback);
        }

        var attributes = context.attributes;
        var asyncAttributes = attributes.async || (attributes.async = {});
        asyncAttributes.remaining = 0;
        try {
            this.render(templatePath, data, context);
        } catch (e) {
            context.emit('error', e);
        }
        asyncAttributes.firstPassComplete = true;
        if (asyncAttributes.remaining === 0) {
            context.emit('end');
        }

        return context;
    },
    unload: function (templatePath) {
        delete cache[templatePath];
    },
    createContext: renderContext.createContext,
    helpers: helpers
};

