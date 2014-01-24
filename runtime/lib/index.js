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
function getRegisteredTemplate(name) {
    module.exports = $rget('rhtml', name);
    return;
}
var loadedTemplates = {};
var isArray = Array.isArray;
var StringBuilder = require('../strings/StringBuilder');
var escapeXml = require('raptor-xml/utils').escapeXml;
var escapeXmlAttr = require('raptor-xml/utils').escapeXmlAttr;
var renderContext = require('raptor-render-context');
var Context = renderContext.Context;
var _getFunction = Context.classFunc;
var templating;
function _getHandler(name) {
    var Handler = require(name);
    var instance;
    if (Handler.process || Handler.render) {
        instance = Handler;
    } else if (!(instance = Handler.instance)) {
        //See if an instance has already been created
        instance = Handler.instance = new Handler();    //If not, create and store a new instance
    }
    module.exports = instance;
    return;
}
function notEmpty(o) {
    if (Array.isArray(o) === true) {
        module.exports = o.length !== 0;
        return;
    }
    module.exports = o;
    return;
}
var helpers = {
        h: _getFunction,
        t: _getHandler,
        fv: function (array, callback) {
            if (!array) {
                return;
            }
            if (!array.forEach) {
                array = [array];
            }
            var i = 0;
            var len = array.length;
            var loopStatus = {
                    getLength: function () {
                        return len;
                    },
                    isLast: function () {
                        return i === len - 1;
                    },
                    isFirst: function () {
                        return i === 0;
                    },
                    getIndex: function () {
                        return i;
                    }
                };
            for (; i < len; i++) {
                var o = array[i];
                callback(o || '', loopStatus);
            }
        },
        f: raptor.forEach,
        fl: function (array, func) {
            if (array != null) {
                if (!isArray(array)) {
                    array = [array];
                }
                func(array, 0, array.length);
            }
        },
        fp: function (o, func) {
            if (!o) {
                return;
            }
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    func(k, o[k]);
                }
            }
        },
        e: function (o) {
            return !notEmpty(o);
        },
        ne: notEmpty,
        x: escapeXml,
        xa: escapeXmlAttr,
        nx: function (str) {
            return {
                toString: function () {
                    return str;
                }
            };
        }
    };
templating = {
    templateFunc: function (templatePath) {
        var templateFunc = loadedTemplates[templatePath];
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
            if (templateFunc) {
                var templateInfo = this.getTemplateInfo(templatePath);
                templateFunc = templateFunc(helpers, templateInfo);    //Invoke the factory function to get back the rendering function
            }
            if (!templateFunc) {
                throw createError(new Error('Template not found with name "' + templatePath + '"'));
            }
            loadedTemplates[templatePath] = templateFunc;    //Store the template rendering function in the lookup
        }
        return templateFunc;
    },
    getTemplateInfo: function (templatePath) {
        return { name: templatePath };
    },
    render: function (templatePath, data, context) {
        if (!context) {
            throw createError(new Error('Context is required'));
        }
        var templateFunc = this.templateFunc(templatePath);
        try {
            templateFunc(data || {}, context);    //Invoke the template rendering function with the required arguments
        } catch (e) {
            throw createError(new Error('Unable to render template with name "' + templatePath + '". Exception: ' + e), e);
        }
    },
    renderToString: function (templatePath, data, context) {
        var sb = new StringBuilder();
        //Create a StringBuilder object to serve as a buffer for the output
        if (context === undefined) {
            /*
             * If a context object is not provided then we need to create a new context object and use the StringBuilder as the writer
             */
            this.render(templatePath, data, new Context(sb));
        } else {
            var _this = this;
            /*
             * If a context is provided then we need to temporarily swap out the writer for the StringBuilder
             */
            context.swapWriter(sb, function () {
                _this.render(templatePath, data, context);
            });    //Swap in the writer, render the template and then restore the original writer
        }
        return sb.toString();    //Return the final string associated with the StringBuilder
    },
    unload: function (templatePath) {
        delete loadedTemplates[templatePath];
        $rset('rhtml', templatePath, undefined);
    },
    getFunction: _getFunction,
    createContext: renderContext.createContext,
    getHandler: _getHandler,
    helpers: helpers
};
module.exports = templating;