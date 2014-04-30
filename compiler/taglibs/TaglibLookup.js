var ok = require('assert').ok;
var createError = require('raptor-util').createError;

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

function TaglibLookup() {
    this.merged = {};
    this.taglibsById = {};
    this._inputFiles = null;
}

TaglibLookup.prototype = {


    addTaglib: function (taglib) {
        ok(taglib, '"taglib" is required');
        ok(taglib.id, '"taglib.id" expected');

        if (this.taglibsById.hasOwnProperty(taglib.id)) {
            return;
        }

        this.taglibsById[taglib.id] = taglib;

        merge(this.merged, taglib);
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

        var tag = tags[tagKey];
        if (!tag) {
            tag = tags['*'];

            if (!tag) {
                return;
            }
        }

        var attrKey = attr.namespace ? attr.namespace + ':' + attr.localName : attr.localName;

        function findAttribute(attributes) {
            var attribute = attributes[attrKey];
            if (attribute === undefined) {
                if (tag.patternAttributes) {
                    for (var i = 0, len = tag.patternAttributes.length; i < len; i++) {
                        var patternAttribute = tag.patternAttributes[i];
                        if (patternAttribute.pattern.test(attrKey)) {
                            attribute = patternAttribute;
                            break;
                        }
                    }
                }

                if (attribute === undefined) {
                    attribute = tag.attributes['*'];
                }
            }

            return attribute;
        }


        var attribute = findAttribute(tag.attributes);

        if (attribute === null) {
            // This is an imported attribute
            attribute = findAttribute(this.merged.attributes);
        }

        return attribute;
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

        if (this.merged.tags[tagKey]) {
            this.merged.tags[tagKey].forEachTransformer(addTransformer);
        }

        if (this.merged.tags['*']) {
            this.merged.tags['*'].forEachTransformer(addTransformer);
        }

        transformers.sort(transformerComparator);

        transformers.forEach(callback, thisObj);
    },
    forEachTextTransformer: function (callback, thisObj) {
        this.merged.textTransformers.sort(transformerComparator);
        this.merged.textTransformers.forEach(callback, thisObj);
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
        
    }
};
module.exports = TaglibLookup;