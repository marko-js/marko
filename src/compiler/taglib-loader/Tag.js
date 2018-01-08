'use strict';
var forEachEntry = require('raptor-util/forEachEntry');
var ok = require('assert').ok;
var CustomTag;
var path = require('path');
var markoModules = require('../modules');

function createCustomTag(el, tagDef) {
    CustomTag = CustomTag || require('../ast/CustomTag');
    return new CustomTag(el, tagDef);
}

function createCustomTagNodeFactory(tagDef) {
    return function nodeFactory(el) {
        return createCustomTag(el, tagDef);
    };
}

class Tag{
    constructor(filePath) {
        this.filePath = filePath;
        if (filePath) {
            this.dir = path.dirname(filePath);
        }

        this.attributes = {};
        this.transformers = {};
        this.patternAttributes = [];

        // NOTE: We don't set this properties since
        //       it breaks merging of tags when the same
        //       tag is declared at multiple levels

        // this.taglibId = null;
        // this.taglibPath = null;
        // this.name = undefined;
        // this.renderer = null;
        // this.codeGeneratorModulePath = null;
        // this.nodeFactoryPath = null;
        // this.template = null;
        // this.nestedVariables = null;
        // this.importedVariables = null;
        // this.bodyFunction = null;
        // this.nestedTags = null;
        // this.isRepeated = null;
        // this.isNestedTag = false;
        // this.parentTagName = null;
        // this.openTagOnly = null;
        // this.body = null;
        // this.type = null; // Only applicable for nested tags
        // this._nodeFactory = undefined;
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
    getAttribute(attrName) {
        var attributes = this.attributes;

        // try by exact match first
        var attribute = attributes[attrName] || attributes['*'];

        if (attribute === undefined && this.patternAttributes) {
            // try searching by pattern
            for (var i = 0, len = this.patternAttributes.length; i < len; i++) {
                var patternAttribute = this.patternAttributes[i];
                if (patternAttribute.pattern.test(attrName)) {
                    attribute = patternAttribute;
                    break;
                }
            }
        }

        return attribute;
    }

    hasAttribute(attrName) {
        return this.attributes.hasOwnProperty(attrName);
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
            var loadedCodeGenerator = markoModules.require(this.codeGeneratorModulePath);
            nodeFactory = function(elNode) {
                elNode.setType(codeGeneratorModulePath);
                elNode.setCodeGenerator(loadedCodeGenerator);
                return elNode;
            };
        } else if (this.nodeFactoryPath) {
            nodeFactory = markoModules.require(this.nodeFactoryPath);
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
