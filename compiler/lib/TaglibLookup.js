var ok = require('assert').ok;
var createError = require('raptor-util').createError;
var forEachEntry = require('raptor-util').forEachEntry;

function TaglibLookup() {
    this.namespaces = {};
    this.tagTransformers = {};
    this.tags = {};
    this.textTransformers = [];
    this.functions = {};
    this.attributes = {};
    this.nestedTags = {};
    this.taglibsById = {};
    this.unresolvedAttributes = [];
    this._inputFiles = null;
}

TaglibLookup.prototype = {
    resolveNamespaceWithDefault: function(namespace, defaultTaglibId) {
        if (namespace === '*' || namespace === '') {
            return namespace;
        }

        if (namespace == null) {
            return defaultTaglibId;
        }

        var target = this.namespaces[namespace];
        if (!target) {
            throw new Error('Invalid namespace of "' + namespace + '" in taglib "' + defaultTaglibId + '"');
        }
        return target;
    },

    resolveNamespace: function(namespace) {
        if (namespace == null || namespace === '') {
            return '';
        }

        return this.taglibsById[namespace] ? namespace : this.namespaces[namespace];
    },

    resolveNamespaceForTag: function(tag) {
        return tag.namespace ? this.resolveNamespace(tag.namespace) : tag.taglib.id;
    },

    isTaglib: function(namespace) {
        return this.taglibsById[namespace] !=null || this.namespaces[namespace] != null;
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

        taglib.namespaces.forEach(function(ns) {
            _this.namespaces[ns] = id;
        });

        

        /*
         * Index all of the tags in the taglib by registering them
         * based on the tag URI and the tag name
         */
        taglib.forEachTag(function (tag, i) {

            // Use the fully resolved namespace for the tag
            // For example:
            // core --> /development/raptor-templates/taglibs/core/core.rtld
            
            var tagNS = this.resolveNamespaceWithDefault(tag.namespace, id);
            tag.taglibId = id;
            
            var name = tag.name;
            var key = name.indexOf('*') === -1 ? tagNS + ':' + name : name;

            //The taglib will be registered using the combination of URI and tag name
            this.tags[key] = tag;

            //Register the tag using the combination of URI and tag name so that it can easily be looked up
            if (tag.hasTransformers()) {
                var tagTransformersForTags = this.tagTransformers[key] || (this.tagTransformers[key] = []);
                //A reference to the array of the tag transformers with the same key
                //Now add all of the transformers for the node (there will typically only be one...)
                tag.forEachTransformer(function (transformer) {
                    if (!transformer) {
                        throw createError(new Error('Transformer is null'));
                    }
                    tagTransformersForTags.push(transformer);
                }, this);
            }

            tag.forEachAttribute(function (attr) {
                if (attr.namespace) {
                    this.unresolvedAttributes.push({
                        tag: tag,
                        attr: attr
                    });   
                } else {
                    this.addAttribute(tag, attr);
                }
                
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

            this.functions[taglib.id + ':' + func.name] = func;
            
        }, this);

        this.taglibsById[id] = taglib;
    },

    finish: function() {
        for (var i=0; i<this.unresolvedAttributes.length; i++) {
            var unresolvedAttribute = this.unresolvedAttributes[i];
            this.addAttribute(unresolvedAttribute.tag, unresolvedAttribute.attr);
        }

        this.unresolvedAttributes.length = 0;
    },

    addAttribute: function(tag, attr) {
        var attrNS = this.resolveNamespaceWithDefault(attr.namespace, tag.taglibId);
        var tagNS = this.resolveNamespaceWithDefault(tag.namespace, tag.taglibId);

        if (attrNS !== '*' && attrNS === tagNS) {
            attrNS = '';
        }

        if (attr.name) {
            this.attributes[tagNS + ':' + tag.name + ':' + attrNS + ':' + attr.name] = attr;    
        }
    },

    getAttribute: function (tagNS, tagName, attrNS, attrName) {
        var tags = this.tags;

        tagNS = this.resolveNamespace(tagNS);
        attrNS = this.resolveNamespace(attrNS);

        var attributes = this.attributes;
        
        function _findAttrForTag(tagLookupKey) {
            

            var attr = attributes[tagLookupKey + ':' + attrNS + ':' + attrName] ||
                attributes[tagLookupKey + ':' + attrNS + ':*'] ||
                attributes[tagLookupKey + ':*:' + attrName] ||
                attributes[tagLookupKey + ':*:*'];

            if (!attr) {
                var tag = tags[tagLookupKey];
                if (tag) {
                    attr = tag.getAttribute(attrNS, attrName);
                }
            }
            return attr;
        }

        var attr = _findAttrForTag(tagNS + ':' + tagName) ||
            _findAttrForTag(tagNS + ':*') ||
            _findAttrForTag('*:*');
        
        if (attr && attr.namespace && attr.namespace !== '*') {
            var sourceTaglibId = this.resolveNamespace(attr.namespace);

            var taglib = this.taglibsById[sourceTaglibId];
            if (!taglib) {
                throw new Error('Taglib with namespace "' + attr.namespace + '" not found for imported attribute with name "' + attrName + '"');
            }
            var importedAttr = taglib.getAttribute(attrName);
            if (!importedAttr) {
                throw new Error('Attribute "' + attrName + '" imported from taglib with namespace "' + attr.namespace + '" not found in taglib "' + taglib.id + '".');
            }

            attr = importedAttr;
        }

        return attr;
    },
    forEachTag: function (namespace, callback, thisObj) {
        var taglibId = this.resolveNamespace(namespace);
        var taglib = this.taglibsById[taglibId];
        if (!taglib) {
            return;
        }
        forEachEntry(taglib.tags, function (key, tag) {
            callback.call(thisObj, tag, taglib);
        });
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
    forEachTagTransformer: function (tagNS, tagName, callback, thisObj) {
        /*
         * If the node is an element node then we need to find all matching
         * transformers based on the URI and the local name of the element.
         */
        tagNS = this.resolveNamespace(tagNS);

        var _this = this;

        function resolveBeforeAfterName(name) {
            var parts = name.split(/[:\/]/);
            parts[0] = _this.resolveNamespace(parts[0]);
            return parts.join(':');
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

                if (transformer.name) {
                    var fullName = transformer.taglib.id + ':' + transformer.name;
                    matchingTransformersByName[fullName] = transformer;
                }

                matchingTransformers.push(transformer);


                if (transformer.before) {
                    var beforeName = resolveBeforeAfterName(transformer.before);
                    (before[beforeName] || (before[beforeName] = [])).push(transformer);
                }
            });
        }
        /*
         * Handle all of the transformers for all possible matching transformers.
         * 
         * Start with the least specific and end with the most specific.
         */
        _addTransformers(this.tagTransformers['*']);
        _addTransformers(this.tagTransformers['*:*']);
        //Wildcard for both URI and tag name (i.e. transformers that apply to every element)
        _addTransformers(this.tagTransformers[tagNS + ':*']);
        //Wildcard for tag name but matching URI (i.e. transformers that apply to every element with a URI, regadless of tag name)
        _addTransformers(this.tagTransformers[tagNS + ':' + tagName]);
        

        function _handleTransformer(transformer) {
            if (!handled[transformer.id]) {
                handled[transformer.id] = true;

                if (transformer.after) {
                    var afterName = resolveBeforeAfterName(transformer.after);
                    //Check if this transformer is required to run
                    if (!matchingTransformersByName[afterName]) {
                        throw createError(new Error('After transformers not found for "' + transformer.after + '"'));
                    }
                    _handleTransformer(matchingTransformersByName[afterName]);    //Handle any transformers that this transformer is supposed to run after
                }

                if (transformer.name) {
                    var transformerId = transformer.taglib.id + ':' + transformer.name;
                    if (before[transformerId]) {
                        before[transformerId].forEach(_handleTransformer);    
                    }
                }

                //Handle any transformers that are configured to run before this transformer
                callback.call(thisObj, transformer);
            }
        }
        matchingTransformers.forEach(_handleTransformer, this);
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
        namespace = this.resolveNamespace(namespace);
        var tag = this.tags[namespace + ':' + localName];
        if (!tag) {
            tag = this.tags[namespace + ':*'];    //See if there was a wildcard tag definition in the taglib
        }
        return tag;
    },
    getNestedTag: function (parentTagNS, parentTagName, nestedTagNS, nestedTagName) {
        parentTagNS = this.resolveNamespace(parentTagNS);
        nestedTagNS = this.resolveNamespace(nestedTagNS);
        return this.nestedTags[parentTagNS + ':' + parentTagName + ':' + nestedTagNS + ':' + nestedTagName];
    },
    getFunction: function (namespace, functionName) {
        namespace = this.resolveNamespace(namespace);
        return this.functions[namespace + ':' + functionName];
    },
    getHelperObject: function (namespace) {
        namespace = this.resolveNamespace(namespace);
        var taglib = this.taglibsById[namespace];
        if (!taglib) {
            throw new Error('Invalid taglib URI: ' + namespace);
        }
        return taglib.getHelperObject();
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