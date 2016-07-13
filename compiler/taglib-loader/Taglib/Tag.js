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
var forEachEntry = require('raptor-util/forEachEntry');
var ok = require('assert').ok;
var CustomTag = require('../../ast/CustomTag');

function inheritProps(sub, sup) {
    forEachEntry(sup, function (k, v) {
        if (!sub[k]) {
            sub[k] = v;
        }
    });
}

function createCustomTagNodeFactory(tagDef) {
    return function nodeFactory(el) {
        return new CustomTag(el, tagDef);
    };
}

class Tag{
    constructor() {
        ok(arguments.length === 0);
        this.taglibId = null;
        this.taglibPath = null;
        this.name = undefined;
        this.renderer = null;
        this.codeGeneratorModulePath = null;
        this.nodeFactoryPath = null;
        this.template = null;
        this.attributes = {};
        this.transformers = {};
        this.nestedVariables = null;
        this.importedVariables = null;
        this.patternAttributes = [];
        this.bodyFunction = null;
        this.nestedTags = null;
        this.isRepeated = null;
        this.isNestedTag = false;
        this.parentTagName = null;
        this.openTagOnly = null;
        this.body = null;
        this.type = null; // Only applicable for nested tags
        this._nodeFactory = undefined;
    }

    inheritFrom(superTag) {
        var subTag = this;
        /*
         * Have the sub tag inherit any properties from the super tag that are not in the sub tag
         */
        forEachEntry(superTag, function (k, v) {
            if (subTag[k] === undefined) {
                subTag[k] = v;
            }
        });
        [
            'attributes',
            'transformers',
            'nestedVariables',
            'importedVariables',
            'bodyFunction'
        ].forEach(function (propName) {
            inheritProps(subTag[propName], superTag[propName]);
        });
        subTag.patternAttributes = superTag.patternAttributes.concat(subTag.patternAttributes);
    }

    forEachVariable(callback, thisObj) {
        if (!this.nestedVariables) {
            return;
        }

        this.nestedVariables.vars.forEach(callback, thisObj);
    }

    forEachImportedVariable(callback, thisObj) {
        if (!this.importedVariables) {
            return;
        }

        forEachEntry(this.importedVariables, function (key, importedVariable) {
            callback.call(thisObj, importedVariable);
        });
    }

    forEachTransformer(callback, thisObj) {
        forEachEntry(this.transformers, function (key, transformer) {
            callback.call(thisObj, transformer);
        });
    }
    hasTransformers() {
        /*jshint unused:false */
        for (var k in this.transformers) {
            if (this.transformers.hasOwnProperty(k)) {
                return true;
            }

        }
        return false;
    }
    addAttribute(attr) {
        attr.filePath = this.filePath;

        if (attr.pattern) {
            this.patternAttributes.push(attr);
        } else {
            if (attr.name === '*') {
                attr.dynamicAttribute = true;

                if (attr.targetProperty === null || attr.targetProperty === '') {
                    attr.targetProperty = null;

                }
                else if (!attr.targetProperty) {
                    attr.targetProperty = '*';
                }
            }

            this.attributes[attr.name] = attr;
        }
    }
    toString() {
        return '[Tag: <' + this.name + '@' + this.taglibId + '>]';
    }
    forEachAttribute(callback, thisObj) {
        for (var attrName in this.attributes) {
            if (this.attributes.hasOwnProperty(attrName)) {
                callback.call(thisObj, this.attributes[attrName]);
            }
        }
    }
    addNestedVariable(nestedVariable) {
        if (!this.nestedVariables) {
            this.nestedVariables = {
                __noMerge: true,
                vars: []
            };
        }

        this.nestedVariables.vars.push(nestedVariable);
    }
    addImportedVariable(importedVariable) {
        if (!this.importedVariables) {
            this.importedVariables = {};
        }
        var key = importedVariable.targetProperty;
        this.importedVariables[key] = importedVariable;
    }
    addTransformer(transformer) {
        var key = transformer.path;
        transformer.taglibId = this.taglibId;
        this.transformers[key] = transformer;
    }
    setBodyFunction(name, params) {
        this.bodyFunction = {
            __noMerge: true,
            name: name,
            params: params
        };
    }
    setBodyProperty(propertyName) {
        this.bodyProperty = propertyName;
    }
    addNestedTag(nestedTag) {
        ok(nestedTag.name, '"nestedTag.name" is required');

        if (!this.nestedTags) {
            this.nestedTags = {};
        }

        nestedTag.isNestedTag = true;

        if (!nestedTag.targetProperty) {
            nestedTag.targetProperty = nestedTag.name;
        }

        this.nestedTags[nestedTag.name] = nestedTag;
    }
    forEachNestedTag(callback, thisObj) {
        if (!this.nestedTags) {
            return;
        }

        forEachEntry(this.nestedTags, function (key, nestedTag) {
            callback.call(thisObj, nestedTag);
        });
    }
    hasNestedTags() {
        return this.nestedTags != null;
    }
    getNodeFactory() {
        var nodeFactory = this._nodeFactory;
        if (nodeFactory !== undefined) {
            return nodeFactory;
        }

        let codeGeneratorModulePath = this.codeGeneratorModulePath;

        if (this.codeGeneratorModulePath) {
            var loadedCodeGenerator = require(this.codeGeneratorModulePath);
            nodeFactory = function(elNode) {
                elNode.setType(codeGeneratorModulePath);
                elNode.setCodeGenerator(loadedCodeGenerator);
                return elNode;
            };
        } else if (this.nodeFactoryPath) {
            nodeFactory = require(this.nodeFactoryPath);
            if (typeof nodeFactory !== 'function') {
                throw new Error('Invalid node factory exported by module at path "' + this.nodeFactoryPath + '"');
            }
        } else if (this.renderer || this.template || this.isNestedTag) {
            nodeFactory = createCustomTagNodeFactory(this);
        } else {
            return null;
        }

        return (this._nodeFactory = nodeFactory);
    }

    toJSON() {
        return this;
    }

    setTaglib(taglib) {
        this.taglibId = taglib ? taglib.id : null;
        this.taglibPath = taglib ? taglib.path : null;
    }
}

module.exports = Tag;