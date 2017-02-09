'use strict';

var ok = require('assert').ok;
var taglibTypes = require('../taglib-loader/types');
var Text = require('../ast/Text');
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

function TAG_COMPARATOR(a, b) {
    a = a.name;
    b = b.name;
    return a.localeCompare(b);
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
class TaglibLookup {
    constructor() {
        this.merged = {
            attributeGroups: {}
        };
        this.taglibsById = {};
        this._inputFiles = null;

        this._sortedTags = undefined;
    }

    hasTaglib(taglib) {
        return this.taglibsById.hasOwnProperty(taglib.id);
    }

    _mergeNestedTags(taglib) {
        var Tag = taglibTypes.Tag;
        // Loop over all of the nested tags and register a new custom tag
        // with the fully qualified name

        var merged = this.merged;

        function handleNestedTags(tag, parentTagName) {
            tag.forEachNestedTag(function(nestedTag) {
                var fullyQualifiedName = parentTagName + ':' + nestedTag.name;
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
    }

    addTaglib(taglib) {
        ok(taglib, '"taglib" is required');
        ok(taglib.id, '"taglib.id" expected');

        if (this.taglibsById.hasOwnProperty(taglib.id)) {
            return;
        }

        // console.log("TAGLIB:", taglib);

        this._sortedTags = undefined;

        this.taglibsById[taglib.id] = taglib;

        merge(this.merged, {
            tags: taglib.tags,
            transformers: taglib.transformers,
            textTransformers: taglib.textTransformers,
            attributes: taglib.attributes,
            patternAttributes: taglib.patternAttributes,
            attributeGroups: taglib.attributeGroups || {}
        });

        this._mergeNestedTags(taglib);
    }

    getTagsSorted() {
        var sortedTags = this._sortedTags;

        if (sortedTags === undefined) {
            sortedTags = this._sortedTags = [];
            this.forEachTag((tag) => {
                sortedTags.push(tag);
            });
            sortedTags.sort(TAG_COMPARATOR);
        }

        return sortedTags;
    }

    forEachTag(callback) {
        var tags = this.merged.tags;
        if (tags) {
            for (var tagName in tags) {
                if (tags.hasOwnProperty(tagName)) {
                    var tag = tags[tagName];
                    var result = callback(tag);
                    if (result === false) {
                        break;
                    }
                }
            }
        }
    }

    forEachAttribute(tagName, callback) {
        var tags = this.merged.tags;
        if (!tags) {
            return;
        }

        var globalAttributes = this.merged.attributes;
        var taglibAttributeGroups = this.merged.attributeGroups;



        function findAttributesForTagName(tagName) {
            var tag = tags[tagName];
            if (!tag) {
                return;
            }

            function handleAttr(attrDef) {
                if (attrDef.ref) {
                    attrDef = globalAttributes[attrDef.ref];
                }
                callback(attrDef, tag);
            }

            var attributes = tag.attributes;
            if (!attributes) {
                return;
            }

            for (var attrName in attributes) {
                if (attributes.hasOwnProperty(attrName)) {
                    handleAttr(attributes[attrName], tag);
                }
            }

            if (tag.attributeGroups) {
                for (let i=0; i<tag.attributeGroups.length; i++) {
                    let attributeGroupName = tag.attributeGroups[i];
                    let attributeGroup = taglibAttributeGroups[attributeGroupName];
                    if (attributeGroup) {
                        for (let attrName in attributeGroup) {
                            handleAttr(attributeGroup[attrName]);
                        }
                    }
                }
            }

            if (tag.patternAttributes) {
                tag.patternAttributes.forEach(handleAttr);
            }
        }

        findAttributesForTagName(tagName); // Look for an exact match at the tag level
        findAttributesForTagName('*'); // Including attributes that apply to all tags
    }

    getTag(element) {
        if (typeof element === 'string') {
            element = {
                tagName: element
            };
        }
        var tags = this.merged.tags;
        if (!tags) {
            return;
        }

        var tagName = element.tagName;
        return tags[tagName];
    }

    getAttribute(element, attr) {
        if (typeof element === 'string') {
            element = {
                tagName: element
            };
        }

        if (typeof attr === 'string') {
            attr = {
                name: attr
            };
        }

        var tags = this.merged.tags;
        if (!tags) {
            return;
        }

        var taglibAttributeGroups = this.merged.attributeGroups;

        var tagName = element.tagName;
        var attrName = attr.name;

        function findAttributeForTag(tag, attributes, attrName) {
            // try by exact match first
            var attribute = attributes[attrName];
            if (attribute === undefined) {
                if (tag.attributeGroups) {
                    for (let i=0; i<tag.attributeGroups.length; i++) {
                        let attributeGroupName = tag.attributeGroups[i];
                        let attributeGroup = taglibAttributeGroups[attributeGroupName];
                        if (attributeGroup) {
                            attribute = attributeGroup[attrName];
                            if (attribute !== undefined) {
                                break;
                            }
                        }
                    }
                }
            }

            if (attribute === undefined && attrName !== '*') {
                if (tag.patternAttributes) {
                    // try searching by pattern
                    for (var i = 0, len = tag.patternAttributes.length; i < len; i++) {
                        var patternAttribute = tag.patternAttributes[i];
                        if (patternAttribute.pattern.test(attrName)) {
                            attribute = patternAttribute;
                            break;
                        }
                    }
                }
            }

            return attribute;
        }

        var globalAttributes = this.merged.attributes;

        function tryAttribute(tagName, attrName) {
            var tag = tags[tagName];
            if (!tag) {
                return undefined;
            }

            return findAttributeForTag(tag, tag.attributes, attrName);
        }

        var attrDef = tryAttribute(tagName, attrName) || // Look for an exact match at the tag level
            tryAttribute('*', attrName) || // If not there, see if there is a exact match on the attribute name for attributes that apply to all tags
            tryAttribute(tagName, '*'); // Otherwise, see if there is a splat attribute for the tag

        if (attrDef && attrDef.ref) {
            attrDef = globalAttributes[attrDef.ref];
        }

        return attrDef;
    }

    forEachTemplateTransformer(callback, thisObj) {
        var transformers = this.merged.transformers;
        if (transformers && transformers.length) {
            transformers.forEach(callback, thisObj);
        }
    }

    forEachNodeTransformer(node, callback, thisObj) {
        /*
         * Based on the type of node we have to choose how to transform it
         */
        if (node.tagName || node.tagNameExpression) {
            this.forEachTagTransformer(node, callback, thisObj);
        } else if (node instanceof Text) {
            this.forEachTextTransformer(callback, thisObj);
        }
    }

    forEachTagTransformer(element, callback, thisObj) {
        if (typeof element === 'string') {
            element = {
                tagName: element
            };
        }

        var tagName = element.tagName;
        /*
         * If the node is an element node then we need to find all matching
         * transformers based on the URI and the local name of the element.
         */

        var transformers = [];

        function addTransformer(transformer) {
            if (!transformer || !transformer.getFunc) {
                throw new Error('Invalid transformer');
            }

            transformers.push(transformer);
        }

        /*
         * Handle all of the transformers for all possible matching transformers.
         *
         * Start with the least specific and end with the most specific.
         */

        if (this.merged.tags) {
            if (tagName) {
                if (this.merged.tags[tagName]) {
                    this.merged.tags[tagName].forEachTransformer(addTransformer);
                }
            }

            if (this.merged.tags['*']) {
                this.merged.tags['*'].forEachTransformer(addTransformer);
            }
        }

        transformers.sort(transformerComparator);

        transformers.forEach(callback, thisObj);
    }

    forEachTextTransformer(callback, thisObj) {
        if (this.merged.textTransformers) {
            this.merged.textTransformers.sort(transformerComparator);
            this.merged.textTransformers.forEach(callback, thisObj);
        }
    }

    getInputFiles() {
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
    }

    toString() {
        return 'lookup: ' + this.getInputFiles().join(', ');
    }
}

module.exports = TaglibLookup;