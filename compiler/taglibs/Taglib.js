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
var forEachEntry = require('raptor-util').forEachEntry;
var ok = require('assert').ok;
var makeClass = require('raptor-util').makeClass;

function inheritProps(sub, sup) {
    forEachEntry(sup, function (k, v) {
        if (!sub[k]) {
            sub[k] = v;
        }
    });
}

function Taglib(id) {
    ok(id, '"id" expected');
    this.id = id;
    this.dirname = null;
    this.tags = {};
    this.textTransformers = [];
    this.attributes = {};
    this.patternAttributes = [];
    this.inputFilesLookup = {};
}

Taglib.prototype = {

    addInputFile: function(path) {
        this.inputFilesLookup[path] = true;
    },

    getInputFiles: function() {
        return Object.keys(this.inputFilesLookup);
    },

    addAttribute: function (attribute) {
        if (attribute.pattern) {
            this.patternAttributes.push(attribute);
        } else if (attribute.name) {
            this.attributes[attribute.name] = attribute;
        } else {
            throw new Error('Invalid attribute: ' + require('util').inspect(attribute));
        }
    },
    getAttribute: function (name) {
        var attribute = this.attributes[name];
        if (!attribute) {
            for (var i = 0, len = this.patternAttributes.length; i < len; i++) {
                var patternAttribute = this.patternAttributes[i];
                if (patternAttribute.pattern.test(name)) {
                    attribute = patternAttribute;
                }
            }
        }
        return attribute;
    },
    addTag: function (tag) {
        ok(arguments.length === 1, 'Invalid args');
        ok(tag.name, '"tag.name" is required');
        this.tags[tag.name] = tag;
        tag.taglibId = this.id;
    },
    addTextTransformer: function (transformer) {
        this.textTransformers.push(transformer);
    },
    forEachTag: function (callback, thisObj) {
        forEachEntry(this.tags, function (key, tag) {
            callback.call(thisObj, tag);
        }, this);
    }
};

Taglib.Tag = makeClass({
    $init: function(taglib) {
        this.taglibId = taglib ? taglib.id : null;
        this.renderer = null;
        this.nodeClass = null;
        this.template = null;
        this.attributes = {};
        this.transformers = {};
        this.nestedVariables = null;
        this.importedVariables = null;
        this.patternAttributes = [];
        this.bodyFunction = null;
    },
    inheritFrom: function (superTag) {
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
    },
    forEachVariable: function (callback, thisObj) {
        if (!this.nestedVariables) {
            return;
        }

        this.nestedVariables.vars.forEach(callback, thisObj);
    },
    forEachImportedVariable: function (callback, thisObj) {
        if (!this.importedVariables) {
            return;
        }

        forEachEntry(this.importedVariables, function (key, importedVariable) {
            callback.call(thisObj, importedVariable);
        });
    },
    forEachTransformer: function (callback, thisObj) {
        forEachEntry(this.transformers, function (key, transformer) {
            callback.call(thisObj, transformer);
        });
    },
    hasTransformers: function () {
        /*jshint unused:false */
        for (var k in this.transformers) {
            if (this.transformers.hasOwnProperty(k)) {
                return true;
            }

        }
        return false;
    },
    addAttribute: function (attr) {
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
    },
    toString: function () {
        return '[Tag: <' + this.name + '@' + this.taglibId + '>]';
    },
    forEachAttribute: function (callback, thisObj) {
        for (var attrName in this.attributes) {
            if (this.attributes.hasOwnProperty(attrName)) {
                callback.call(thisObj, this.attributes[attrName]);
            }
        }
    },
    addNestedVariable: function (nestedVariable) {
        if (!this.nestedVariables) {
            this.nestedVariables = {
                __noMerge: true,
                vars: []
            };
        }

        this.nestedVariables.vars.push(nestedVariable);
    },
    addImportedVariable: function (importedVariable) {
        if (!this.importedVariables) {
            this.importedVariables = {};
        }
        var key = importedVariable.targetProperty;
        this.importedVariables[key] = importedVariable;
    },
    addTransformer: function (transformer) {
        var key = transformer.path;
        transformer.taglibId = this.taglibId;
        this.transformers[key] = transformer;
    },
    setBodyFunction: function(name, params) {
        this.bodyFunction = {
            __noMerge: true,
            name: name,
            params: params
        };
    }
});

Taglib.Attribute = makeClass({
    $init: function(name) {
        this.name = name;
        this.type = null;
        this.required = false;
        this.type = 'string';
        this.allowExpressions = true;
        this.setFlag = null;
    }
});

Taglib.Property = makeClass({
    $init: function() {
        this.name = null;
        this.type = 'string';
        this.value = undefined;
    }
});

Taglib.NestedVariable = makeClass({
    $init: function() {
        this.name = null;
    }
});

Taglib.ImportedVariable = makeClass({
    $init: function() {
        this.targetProperty = null;
        this.expression = null;
    }
});

var nextTransformerId = 0;

Taglib.Transformer = makeClass({
    $init: function() {
        this.id = nextTransformerId++;
        this.name = null;
        this.tag = null;
        this.path = null;
        this.priority = null;
        this._func = null;
        this.properties = {};
    },

    getFunc: function () {
        if (!this.path) {
            throw new Error('Transformer path not defined for tag transformer (tag=' + this.tag + ')');
        }

        if (!this._func) {
            var transformer = require(this.path);

            if (typeof transformer === 'function') {
                if (transformer.prototype.process) {
                    var Clazz = transformer;
                    var instance = new Clazz();
                    instance.id = this.id;
                    this._func = instance.process.bind(instance);
                } else {
                    this._func = transformer;
                }
            } else {
                this._func = transformer.process || transformer.transform;
            }
        }
        return this._func;
    },
    toString: function () {
        return '[Taglib.Transformer: ' + this.path + ']';
    }
});

module.exports = Taglib;