var ok = require('assert').ok;
var createError = require('raptor-util').createError;

function TaglibLookup() {
    this.aliases = {};
    this.tagTransformersLookup = {};
    this.tags = {};
    this.textTransformers = [];
    this.functionsLookup = {};
    this.attributeLookup = {};
    this.nestedTags = {};
    this.taglibsById = {};
}
TaglibLookup.prototype = {
    _resolveNamespace: function(namespace) {
        if (namespace == null || namespace === '') {
            return '';
        }

        return this.aliases[namespace];
    },

    addTaglib: function (taglib) {
        ok(taglib, '"taglib" is required');
        ok(taglib.id, '"taglib.id" expected');

        var id = taglib.id;

        if (this.taglibsById[id]) {
            // The taglib has already been added
            return;
        }

        var _this = this;

        taglib.aliases.forEach(function(alias) {
            _this.aliases[alias] = id;
        });

        function resolveNamespaceWithDefault(namespace) {
            if (namespace === '*' || namespace === '') {
                return namespace;
            }

            if (namespace == null) {
                return id;
            }

            var target = _this.aliases[namespace];
            if (!target) {
                throw new Error('Invalid namespace of "' + namespace + '" in taglib "' + taglib.id + '"');
            }
            return target;
        }

        /*
         * Index all of the tags in the taglib by registering them
         * based on the tag URI and the tag name
         */
        taglib.forEachTag(function (tag, i) {

            // Use the fully resolved namespace for the tag
            // For example:
            // core --> /development/raptor-templates/taglibs/core/core.rtld
            
            var tagNS = resolveNamespaceWithDefault(tag.namespace);
            
            var name = tag.name;
            var key = tagNS + ':' + name;

            //The taglib will be registered using the combination of URI and tag name
            this.tags[key] = tag;

            //Register the tag using the combination of URI and tag name so that it can easily be looked up
            if (tag.hasTransformers()) {
                var tagTransformersForTags = this.tagTransformersLookup[key] || (this.tagTransformersLookup[key] = []);
                //A reference to the array of the tag transformers with the same key
                //Now add all of the transformers for the node (there will typically only be one...)
                tag.forEachTransformer(function (transformer) {
                    if (!transformer) {
                        throw createError(new Error('Transformer is null'));
                    }
                    tagTransformersForTags.push(transformer);
                }, this);
            }

            tag.forEachNestedTag(function (nestedTag) {
                var nestedTagNS = resolveNamespaceWithDefault(nestedTag.namespace);
                this.nestedTags[tagNS + ':' + tag.name + ':' + nestedTagNS + ':' + nestedTag.name] = nestedTag;
            }, this);

            tag.forEachAttribute(function (attr) {
                var attrNS = resolveNamespaceWithDefault(attr.namespace);
                this.attributeLookup[tagNS + ':' + tag.name + ':' + attrNS + ':' + attr.name] = attr;
            }, this);
        }, this);
        /*
         * Now register all of the text transformers that are part of the provided taglibs
         */
        taglib.textTransformers.forEach(function (textTransformer) {
            this.textTransformers.push(textTransformer);
        }, this);

        taglib.functions.forEach(function (func) {
            if (!func.name) {
                throw createError(new Error('Function name not set.'));
            }

            this.functionsLookup[taglib.id + ':' + func.name] = func;
            
        }, this);

        this.taglibsById[id] = taglib;
    },

    getAttribute: function (tagNS, tagName, attrNS, attrName) {
        var tags = this.tags;
        tagNS = this._resolveNamespace(tagNS);
        attrNS = this._resolveNamespace(attrNS);

        var attributeLookup = this.attributeLookup;
        
        function _findAttrForTag(tagLookupKey) {
            var attr = attributeLookup[tagLookupKey + ':' + attrNS + ':' + attrName] || attributeLookup[tagLookupKey + ':' + attrNS + ':*'] || attributeLookup[tagLookupKey + ':*:' + attrName] || attributeLookup[tagLookupKey + ':*:*'];
            if (!attr) {
                var tag = tags[tagLookupKey];
                if (tag) {
                    attr = tag.getAttribute(attrNS, attrName);
                }
            }
            return attr;
        }
        var attr = _findAttrForTag(tagNS + ':' + tagName) || _findAttrForTag(tagNS + ':*') || _findAttrForTag('*:*');
        
        if (attr && attr.namespace && attr.namespace !== '*') {
            var sourceTaglibId = this._resolveNamespace(attr.namespace);

            var taglib = this.taglibsById[sourceTaglibId];
            if (!taglib) {
                throw createError(new Error('Taglib with namespace "' + attr.namespace + '" not found for imported attribute with name "' + attrName + '"'));
            }
            var importedAttr = taglib.getAttribute(attrName);
            if (!importedAttr) {
                throw createError(new Error('Attribute "' + attrName + '" imported from taglib with namespace "' + attr.namespace + '" not found in taglib.'));
            }

            attr = importedAttr;
        }

        return attr;
    },
    forEachNodeTransformer: function (node, callback, thisObj) {
        /*
         * Based on the type of node we have to choose how to transform it
         */
        if (node.isElementNode()) {
            this.forEachTagTransformer(node.namespace, node.localName, callback, thisObj);
        } else if (node.isTextNode()) {
            this.forEachTextTransformer(callback, thisObj);
        }
    },
    forEachTagTransformer: function (namespace, tagName, callback, thisObj) {
        /*
         * If the node is an element node then we need to find all matching
         * transformers based on the URI and the local name of the element.
         */
        if (namespace == null) {
            namespace = '';
        }
        var matchingTransformersByName = {};
        var matchingTransformers = [];
        var handled = {};
        var before = {};
        function _addTransformers(transformers) {
            if (!transformers) {
                return;
            }

            transformers.forEach(function (transformer) {
                if (!transformer) {
                    throw createError(new Error('Invalid transformer'));
                }
                if (!matchingTransformersByName[transformer.className]) {
                    matchingTransformersByName[transformer.className] = transformer;
                    matchingTransformers.push(transformer);
                    if (transformer.before) {
                        (before[transformer.before] || (before[transformer.before] = [])).push(transformer);
                    }
                }
            });
        }
        /*
         * Handle all of the transformers for all possible matching transformers.
         * 
         * Start with the least specific and end with the most specific.
         */
        _addTransformers(this.tagTransformersLookup['*:*']);
        //Wildcard for both URI and tag name (i.e. transformers that apply to every element)
        _addTransformers(this.tagTransformersLookup[namespace + ':*']);
        //Wildcard for tag name but matching URI (i.e. transformers that apply to every element with a URI, regadless of tag name)
        _addTransformers(this.tagTransformersLookup[namespace + ':' + tagName]);
        function _handleTransformer(transformer) {
            if (!handled[transformer.className]) {
                handled[transformer.className] = true;
                if (transformer.after) {
                    //Check if this transformer is required to run
                    if (!matchingTransformersByName[transformer.after]) {
                        throw createError(new Error('After transformers not found for "' + transformer.after + '"'));
                    }
                    _handleTransformer(matchingTransformersByName[transformer.after]);    //Handle any transformers that this transformer is supposed to run after
                }

                if (before[transformer.className]) {
                    before[transformer.className].forEach(_handleTransformer);    
                }
                
                //Handle any transformers that are configured to run before this transformer
                callback.call(thisObj, transformer);
            }
        }
        matchingTransformers.forEach(function (transformer) {
            _handleTransformer(transformer);
        }, this);
    },
    forEachTextTransformer: function (callback, thisObj) {
        this.textTransformers.forEach(function(textTransformer) {
            var keepGoing = callback.call(thisObj, textTransformer);
            if (keepGoing === false) {
                return false;
            }

            return true;
        });
    },
    getTag: function (namespace, localName) {
        namespace = this.resolve(namespace);
        var tag = this.tags[namespace + ':' + localName];
        if (!tag) {
            tag = this.tags[namespace + ':*'];    //See if there was a wildcard tag definition in the taglib
        }
        return tag;
    },
    getNestedTag: function (parentTagUri, parentTagName, nestedTagNS, nestedTagName) {
        parentTagUri = parentTagUri || '';
        nestedTagNS = nestedTagNS || '';
        return this.nestedTags[parentTagUri + ':' + parentTagName + ':' + nestedTagNS + ':' + nestedTagName];
    },
    getFunction: function (namespace, functionName) {
        return this.functionsLookup[namespace + ':' + functionName];
    },
    getHelperObject: function (namespace) {
        namespace = this.resolve(namespace);
        var taglib = this.taglibsById[namespace];
        if (!taglib) {
            throw new Error('Invalid taglib URI: ' + namespace);
        }
        return taglib.getHelperObject();
    }
};
module.exports = TaglibLookup;