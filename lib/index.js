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
define('raptor/templating', ['raptor'], function(raptor, require, exports, module) {
    "use strict";
    
    var getRegisteredTemplate = function(name) {
            return $rget('rhtml', name);
        },
        loadedTemplates = {},
        isArray = Array.isArray,
        createError = raptor.createError,
        StringBuilder = require('raptor/strings/StringBuilder'),
        escapeXml = require('raptor/xml/utils').escapeXml,
        escapeXmlAttr = require('raptor/xml/utils').escapeXmlAttr,
        renderContext = require('raptor/render-context'),
        Context = renderContext.Context,
        _getFunction = Context.classFunc,
        templating,
        /**
         * Helper function to return the singleton instance of a tag handler
         *
         * @param name {String} The class name of the tag handler
         * @returns {Object} The tag handler singleton instance.
         */
        _getHandler = function(name) {
            var Handler = require(name), //Load the handler class
                instance;
            
            if (Handler.process || Handler.render) {
                instance = Handler;
            }
            else if (!(instance = Handler.instance)) { //See if an instance has already been created
                instance = Handler.instance = new Handler(); //If not, create and store a new instance
            }
            
            return instance; //Return the handler instance
        },
        /**
         * Helper function to check if an object is "empty". Different types of objects are handled differently:
         * 1) null/undefined: Null and undefined objects are considered empty
         * 2) String: The string is trimmed (starting and trailing whitespace is removed) and if the resulting string is an empty string then it is considered empty
         * 3) Array: If the length of the array is 0 then the array is considred empty
         *
         */
        notEmpty = function(o) {
            if (Array.isArray(o) === true) {
                return o.length !== 0;
            }
            
            return o;
        },
        helpers = {
            
            /**
             * Helper function to return a static helper function
             *
             * @function
             * @param uri
             * @param name
             * @returns {Function} The corresponding helper function. An exception is thrown if the helper function is not found
             */
            h: _getFunction,
            
            t: _getHandler,
            
            /**
             * forEach helper function
             *
             * @param array {Array} The array to iterate over
             * @param callback {Function} The callback function to invoke for each iteration
             * @returns {void}
             */
            fv: function(array, callback) {
                if (!array) {
                    return;
                }
                
                if (!array.forEach) {
                    array = [array];
                }
                
                var i=0,
                    len=array.length, //Cache the array size
                    loopStatus = { //The "loop status" object is provided as the second argument to the callback function used for each iteration
                        /**
                         * Returns the length of the array that is being iterated over
                         * @returns {int} The length of the array
                         */
                        getLength: function() {
                            return len;
                        },
                        
                        /**
                         * Returns true if the current iteration is the last iteration
                         * @returns {Boolean} True if the current iteration is the last iteration. False, otherwse.
                         */
                        isLast: function() {
                            return i === len-1;
                        },
                        isFirst: function() {
                            return i === 0;
                        },
                        getIndex: function() {
                            return i;
                        }
                    };
                
                for (; i<len; i++) { //Loop over the elements in the array
                    var o = array[i];
                    callback(o || '', loopStatus);
                }
            },
            
            f: raptor.forEach,
            
            fl: function(array, func) {
                if (array != null) {
                    if (!isArray(array)) {
                        array = [array];
                    }
                    func(array, 0, array.length);
                }
            },

            fp: function(o, func) {
                if (!o) {
                    return;
                }
                for (var k in o)
                {
                    if (o.hasOwnProperty(k))
                    {
                        func(k, o[k]);
                    }
                }
            },
            
            e: function(o) {
                return !notEmpty(o);
            },
            
            ne: notEmpty,
            
            /**
             * escapeXml helper function
             *
             * @param str
             * @returns
             */
            x: escapeXml,
            xa: escapeXmlAttr,
            
            nx: function(str) {
                return {
                    toString: function() {
                        return str;
                    }
                };
            }
        };
    
    templating = {

        /**
         * Returns a function that can be used to render the template with the specified name.
         *
         * The template function should always be invoked with two arguments:
         * <ol>
         *  <li><b>data</b> {Object}: The template data object</li>
         *  <li><b>context</b> {@link raptor/templating/Context}: The template context object</li>
         * </ul>
         *
         * @param  {String} templateName The name of the template
         * @return {Function} The function that can be used to render the specified template.
         */
        templateFunc: function(templateName) {

            /*
             * We first need to find the template rendering function. It's possible
             * that the factory function for the template rendering function has been
             * registered but that the template rendering function has not already
             * been created.
             *
             * The template rendering functions are lazily initialized.
             */
            var templateFunc = loadedTemplates[templateName]; //Look for the template function in the loaded templates lookup
            if (!templateFunc) { //See if the template has already been loaded
                /*
                 * If we didn't find the template function in the loaded template lookup
                 * then it means that the template has not been fully loaded and initialized.
                 * Therefore, check if the template has been registerd with the name provided
                 */
                templateFunc = getRegisteredTemplate(templateName);
                
                if (!templateFunc && this.findTemplate) {
                    this.findTemplate(templateName);
                    templateFunc = getRegisteredTemplate(templateName);
                }
                
                if (templateFunc) { //Check the registered templates lookup to see if a factory function has been register
                    /*
                     * We found that template has been registered so we need to fully initialize it.
                     * To create the template rendering function we must invoke the template factory
                     * function which expects a reference to the static helpers object.
                     *
                     * NOTE: The factory function allows static private variables to be created once
                     *       and are then made available to the rendering function as part of the
                     *       closure for the rendering function
                     */
                    var templateInfo = this.getTemplateInfo(templateName);
                    templateFunc = templateFunc(helpers, templateInfo); //Invoke the factory function to get back the rendering function
                }
                
                if (!templateFunc) {
                    throw createError(new Error('Template not found with name "' + templateName + '"'));
                }
                loadedTemplates[templateName] = templateFunc; //Store the template rendering function in the lookup
            }

            return templateFunc;
        },

        getTemplateInfo: function(templateName) {
            return {
                name: templateName
            };
        },

        /**
         * Renders a template to the provided context.
         *
         * <p>
         * The template specified by the templateName parameter must already have been loaded. The data object
         * is passed to the compiled rendering function of the template. All output is written to the provided
         * context using the "writer" associated with the context.
         *
         * @param templateName The name of the template to render. The template must have been previously rendered
         * @param data The data object to pass to the template rendering function
         * @param context The context to use for all rendered output (required)
         */
        render: function(templateName, data, context) {
            if (!context) {
                throw createError(new Error("Context is required"));
            }
            
            var templateFunc = this.templateFunc(templateName);

            try
            {
                templateFunc(data || {}, context); //Invoke the template rendering function with the required arguments
            }
            catch(e) {
                throw createError(new Error('Unable to render template with name "' + templateName + '". Exception: ' + e), e);
            }
        },
        
        /**
         * Renders a template and captures the output as a String
         *
         * @param templateName {String}The name of the template to render. NOTE: The template must have already been loaded.
         * @param data {Object} The data object to provide to the template rendering function
         * @param context {raptor/templating/Context} The context object to use (optional). If a context is provided then the writer will be
         *                                     temporarily swapped with a StringBuilder to capture the output of rendering. If a context
         *                                     is not provided then one will be created using the "createContext" method.
         * @returns {String} The string output of the template
         */
        renderToString: function(templateName, data, context) {
            var sb = new StringBuilder(); //Create a StringBuilder object to serve as a buffer for the output

            
            if (context === undefined) {
                /*
                 * If a context object is not provided then we need to create a new context object and use the StringBuilder as the writer
                 */
                this.render(templateName, data, new Context(sb));
            }
            else {
                var _this = this;
                /*
                 * If a context is provided then we need to temporarily swap out the writer for the StringBuilder
                 */
                context.swapWriter(sb, function() {
                    _this.render(templateName, data, context);
                }); //Swap in the writer, render the template and then restore the original writer
            }
            
            return sb.toString(); //Return the final string associated with the StringBuilder
        },
        
        /**
         * Unloads a template so that it can be reloaded.
         *
         * @param templateName
         */
        unload: function(templateName) {
            delete loadedTemplates[templateName];
            $rset('rhtml', templateName, undefined);
        },
        
        /**
         * Helper function to return a helper function
         *
         * @function
         * @param uri
         * @param name
         * @returns {Function} The corresponding helper function. An exception is thrown if the helper function is not found
         */
        getFunction: _getFunction,
        
        /**
         * Creates a new context object that can be used as the context for
         * template rendering.
         *
         * @param writer {Object} An object that supports a "write" and a "toString" method.
         * @returns {templating$Context} The newly created context object
         */
        createContext: renderContext.createContext,
        
        getHandler: _getHandler,
        
        /**
         * Helper functions (with short names for minification reasons)
         */
        helpers: helpers
    };
    
    return templating;
    
});
