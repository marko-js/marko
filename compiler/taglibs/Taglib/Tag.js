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

var makeClass = require('raptor-util').makeClass;
var forEachEntry = require('raptor-util').forEachEntry;
var ok = require('assert').ok;

function inheritProps(sub, sup) {
    forEachEntry(sup, function (k, v) {
        if (!sub[k]) {
            sub[k] = v;
        }
    });
}

module.exports = makeClass({
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
        this.nestedTags = null;
        this.isRepeated = null;
        this.isNestedTag = false;
        this.parentTagName = null;
        this.type = null; // Only applicable for nested tags
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
    },
    setBodyProperty: function(propertyName) {
        this.bodyProperty = propertyName;
    },
    addNestedTag: function(nestedTag) {
        ok(nestedTag.name, '"nestedTag.name" is required');

        if (!this.nestedTags) {
            this.nestedTags = {};
        }

        nestedTag.isNestedTag = true;

        if (!nestedTag.targetProperty) {
            nestedTag.targetProperty = nestedTag.name;
        }

        this.nestedTags[nestedTag.name] = nestedTag;
    },
    forEachNestedTag: function (callback, thisObj) {
        if (!this.nestedTags) {
            return;
        }

        forEachEntry(this.nestedTags, function (key, nestedTag) {
            callback.call(thisObj, nestedTag);
        });
    },
    hasNestedTags: function() {
        return this.nestedTags != null;
    },
    isCustomTag: function() {
        return !!(this.template || this.renderer || this.nodeClass);
    }
});