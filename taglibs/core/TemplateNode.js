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
'use strict';
function TemplateNode(props) {
    TemplateNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
TemplateNode.prototype = {
    doGenerateCode: function (template) {
        var params = this.getProperty('params');
        if (params) {
            params = params.split(/(?:\s*,\s*)|(?:\s+)/g);
            params.forEach(function (param) {
                param = param.trim();
                if (param.length) {
                    template.addVar(param, 'data.' + param);
                }
            }, this);
        } else {
            params = null;
        }
        this.forEachProperty(function (uri, name, value) {
            if (!uri) {
                uri = this.uri;
            }
            if (name === 'functions' || name === 'importFunctions' || name === 'importHelperFunctions') {
                value.split(/\s*[,;]\s*/g).forEach(function (funcName) {
                    var func = template.compiler.taglibs.getFunction(uri, funcName);
                    if (!func) {
                        this.addError('Function with name "' + funcName + '" not found in taglib "' + uri + '"');
                    } else {
                        template.addHelperFunction(func.functionClass, funcName, func.bindToContext === true);
                    }
                }, this);
            } else if (name === 'importHelperObject') {
                var varName = value;
                if (!template.compiler.taglibs.isTaglib(uri)) {
                    this.addError('Helper object not found for taglib "' + uri + '". Taglib with URI "' + uri + '" not found.');
                } else {
                    var helperObject = template.compiler.taglibs.getHelperObject(uri);
                    if (!helperObject) {
                        this.addError('Helper object not found for taglib "' + uri + '"');
                    } else {
                        if (helperObject.className) {
                            template.addVar(varName, 'context.o(' + JSON.stringify(helperObject.className) + ')');
                        } else if (helperObject.moduleName) {
                            template.addStaticVar(varName, 'require(' + JSON.stringify(helperObject.moduleName) + ')');
                        }
                    }
                }
            }
        }, this);

        this.generateCodeForChildren(template);
    }
};
require('raptor-util').inherit(TemplateNode, require('../../compiler').Node);
module.exports = TemplateNode;