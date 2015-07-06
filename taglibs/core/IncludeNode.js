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
var stringify = require('raptor-json/stringify');
var nodePath = require('path');
var req = require;
var fs;

try {
    fs = req('fs');
} catch(e) {}


var extend = require('raptor-util').extend;
function IncludeNode(props) {
    if (IncludeNode.$super) {
        IncludeNode.$super.call(this);
    }

    if (props) {
        this.setProperties(props);
    }
}
IncludeNode.convertNode = function (node, template) {
    extend(node, IncludeNode.prototype);
    IncludeNode.call(node);
    node.setProperty('template', template);
};
IncludeNode.prototype = {
    doGenerateCode: function (template) {
        var templatePath = this.getProperty('template') || this.getAttribute('template');
        var templateData = this.getProperty('templateData') || this.getProperty('template-data');
        var resourcePath;
        var _this = this;

        this.removeProperty('template');
        this.removeProperty('templateData');
        this.removeProperty('template-data');

        if (templatePath) {

            var dataExpression = {
                    toString: function () {
                        var propParts = [];

                        _this.forEachProperty(function (name, value) {
                            name = name.replace(/-([a-z])/g, function (match, lower) {
                                return lower.toUpperCase();
                            });
                            propParts.push(stringify(name) + ': ' + value);
                        }, _this);

                        if (_this.hasChildren()) {
                            propParts.push(stringify('body') + ': ' + _this.getBodyContentExpression(template, false));
                        }

                        var propsCode = '{' + propParts.join(', ') + '}';

                        if (templateData) {
                            if (propParts.length) {
                                var extendVar = template.addStaticVar('__extend', '__helpers.xt');
                                propsCode = extendVar + '(' +
                                            extendVar + '({}, ' + templateData + '), ' +
                                            propsCode +
                                        ')';
                            } else {
                                propsCode = templateData;
                            }
                        }

                        return propsCode;
                    }
                };

            template.include(templatePath, dataExpression);
        } else if ((resourcePath = this.getAttribute('resource'))) {
            var isStatic = this.getProperty('static') !== false;
            if (isStatic) {
                resourcePath = nodePath.resolve(template.dirname, resourcePath);
                if (!fs.existsSync(resourcePath)) {
                    this.addError('Resource not found: ' + resourcePath);
                    return;
                }
                template.write(stringify(fs.readFileSync(resourcePath, {encoding: 'utf8'})));
            }
        } else {
            this.addError('"template" or "resource" attribute is required');
        }
    }
};

module.exports = IncludeNode;