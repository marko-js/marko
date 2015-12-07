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

var ok = require('assert').ok;
var createError = require('raptor-util').createError;
var Taglib = require('./Taglib');
var extend = require('raptor-util/extend');

function transformerComparator(a, b) {
    a = a.priority;
    b = b.priority;

    if (a == null) {
        a = Number.MAX_VALUE;
    }

    if (b == null) {
        b = Number.MAX_VALUE;
    }

    return a - b;
}

function merge(target, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            if (target[k] && typeof target[k] === 'object' &&
                source[k] && typeof source[k] === 'object') {

                if (source.__noMerge) {
                    // Don't merge objects that are explicitly marked as "do not merge"
                    continue;
                }

                if (Array.isArray(target[k]) || Array.isArray(source[k])) {

                    var targetArray = target[k];
                    var sourceArray = source[k];


                    if (!Array.isArray(targetArray)) {
                        targetArray = [targetArray];
                    }

                    if (!Array.isArray(sourceArray)) {
                        sourceArray = [sourceArray];
                    }

                    target[k] = [].concat(targetArray).concat(sourceArray);
                } else {
                    var Ctor = target[k].constructor;
                    var newTarget = new Ctor();
                    merge(newTarget, target[k]);
                    merge(newTarget, source[k]);
                    target[k] = newTarget;
                }

            } else {
                target[k] = source[k];
            }
        }
    }

    return target;
}

/**
 * A taglib lookup merges in multiple taglibs so there is a single and fast lookup
 * for custom tags and custom attributes.
 */
function TaglibLookup() {
    this.merged = {};
    this.taglibsById = {};
    this._inputFiles = null;
}

TaglibLookup.prototype = {

    hasTaglib: function(taglib) {
        return this.taglibsById.hasOwnProperty(taglib.id);
    },

    _mergeNestedTags: function(taglib) {
        var Tag = Taglib.Tag;
        // Loop over all of the nested tags and register a new custom tag
        // with the fully qualified name

        var merged = this.merged;

        function handleNestedTags(tag, parentTagName) {
            tag.forEachNestedTag(function(nestedTag) {
                var fullyQualifiedName = parentTagName + '.' + nestedTag.name;
                // Create a clone of the nested tag since we need to add some new
                // properties
                var clonedNestedTag = new Tag();
                extend(clonedNestedTag, nestedTag);
                // Record the fully qualified name of the parent tag that this
                // custom tag is associated with.
                clonedNestedTag.parentTagName = parentTagName;
                clonedNestedTag.name = fullyQualifiedName;
                merged.tags[fullyQualifiedName] = clonedNestedTag;
                handleNestedTags(clonedNestedTag, fullyQualifiedName);
            });
        }

        taglib.forEachTag(function(tag) {
            handleNestedTags(tag, tag.name);
        });
    },

    addTaglib: function (taglib) {
        ok(taglib, '"taglib" is required');
        ok(taglib.id, '"taglib.id" expected');

        if (this.taglibsById.hasOwnProperty(taglib.id)) {
            return;
        }

        this.taglibsById[taglib.id] = taglib;

        merge(this.merged, {
            tags: taglib.tags,
            textTransformers: taglib.textTransformers,
            attributes: taglib.attributes,
            patternAttributes: taglib.patternAttributes
        });

        this._mergeNestedTags(taglib);
    },

    getTag: function (element) {
        if (typeof element === 'string') {
            element = {
                localName: element
            };
        }
        var tags = this.merged.tags;
        if (!tags) {
            return;
        }

        var tagKey = element.namespace ? element.namespace + ':' + element.localName : element.localName;
        return tags[tagKey];
    },

    getAttribute: function (element, attr) {

        if (typeof element === 'string') {
            element = {
                localName: element
            };
        }

        if (typeof attr === 'string') {
            attr = {
                localName: attr
            };
        }

        var tags = this.merged.tags;
        if (!tags) {
            return;
        }

        var tagKey = element.namespace ? element.namespace + ':' + element.localName : element.localName;
        var attrKey = attr.namespace ? attr.namespace + ':' + attr.localName : attr.localName;

        function findAttributeForTag(tag, attributes, attrKey) {
            // try by exact match first
            var attribute = attributes[attrKey];
            if (attribute === undefined && attrKey !== '*') {
                if (tag.patternAttributes) {
                    // try searching by pattern
                    for (var i = 0, len = tag.patternAttributes.length; i < len; i++) {
                        var patternAttribute = tag.patternAttributes[i];
                        if (patternAttribute.pattern.test(attrKey)) {
                            attribute = patternAttribute;
                            break;
                        }
                    }
                }
            }

            return attribute;
        }

        var globalAttributes = this.merged.attributes;

        function tryAttribute(tagKey, attrKey) {
            var tag = tags[tagKey];
            if (!tag) {
                return undefined;
            }

            return findAttributeForTag(tag, tag.attributes, attrKey) ||
                   findAttributeForTag(tag, globalAttributes, attrKey);
        }

        var attrDef = tryAttribute(tagKey, attrKey) || // Look for an exact match at the tag level
            tryAttribute('*', attrKey) || // If not there, see if there is a exact match on the attribute name for attributes that apply to all tags
            tryAttribute(tagKey, '*'); // Otherwise, see if there is a splat attribute for the tag

        return attrDef;
    },

    forEachNodeTransformer: function (node, callback, thisObj) {
        /*
         * Based on the type of node we have to choose how to transform it
         */
        if (node.isElementNode()) {
            this.forEachTagTransformer(node, callback, thisObj);
        } else if (node.isTextNode()) {
            this.forEachTextTransformer(callback, thisObj);
        }
    },
    forEachTagTransformer: function (element, callback, thisObj) {
        if (typeof element === 'string') {
            element = {
                localName: element
            };
        }

        var tagKey = element.namespace ? element.namespace + ':' + element.localName : element.localName;
        /*
         * If the node is an element node then we need to find all matching
         * transformers based on the URI and the local name of the element.
         */

        var transformers = [];

        function addTransformer(transformer) {
            if (!transformer || !transformer.getFunc) {
                throw createError(new Error('Invalid transformer'));
            }

            transformers.push(transformer);
        }

        /*
         * Handle all of the transformers for all possible matching transformers.
         *
         * Start with the least specific and end with the most specific.
         */

        if (this.merged.tags) {
            if (this.merged.tags[tagKey]) {
                this.merged.tags[tagKey].forEachTransformer(addTransformer);
            }

            if (this.merged.tags['*']) {
                this.merged.tags['*'].forEachTransformer(addTransformer);
            }
        }

        transformers.sort(transformerComparator);

        transformers.forEach(callback, thisObj);
    },
    forEachTextTransformer: function (callback, thisObj) {
        if (this.merged.textTransformers) {
            this.merged.textTransformers.sort(transformerComparator);
            this.merged.textTransformers.forEach(callback, thisObj);
        }
    },
    getInputFiles: function() {
        if (!this._inputFiles) {
            var inputFilesSet = {};

            for (var taglibId in this.taglibsById) {
                if (this.taglibsById.hasOwnProperty(taglibId)) {

                    var taglibInputFiles = this.taglibsById[taglibId].getInputFiles();
                    var len = taglibInputFiles.length;
                    if (len) {
                        for (var i=0; i<len; i++) {
                            inputFilesSet[taglibInputFiles[i]] = true;
                        }
                    }
                }
            }

            this._inputFiles = Object.keys(inputFilesSet);
        }

        return this._inputFiles;
    },

    toString: function() {
        return 'lookup: ' + this.getInputFiles().join(', ');
    }
};
module.exports = TaglibLookup;