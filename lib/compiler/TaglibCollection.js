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

/**
 * Merges a set of taglibs for ea
 */
define.Class(
    'raptor/templating/compiler/TaglibCollection',
    ['raptor'],
    function(raptor, require, exports, module) {
        "use strict";
        
        var forEach = raptor.forEach,
            strings = require('raptor/strings'),
            ElementNode = require('raptor/templating/compiler/ElementNode'),
            TextNode = require('raptor/templating/compiler/TextNode'),
            /*
             * Probably one of the more amazing regular expressions you will ever see...
             * 
             * Valid imports:
             * x, y, z from http://raptorjs.org/templates/core
             * x, y, z from core
             * x, y, z from core as my-core
             * * from core as c 
             * core
             * core as my-core
             */
            importRegExp = /^(?:(\*|(?:(?:@?[A-Za-z0-9_\-]+\s*,\s*)*@?[A-Za-z0-9_\-]+))\s+from\s+)?([^ ]*)(?:\s+as\s+([A-Za-z0-9_\-]+))?$/,
            getImported = function(lookup, localName, imports) {
                if (lookup[localName] != null) {
                    return lookup[localName];
                }
                
                var prefixEnd = localName.indexOf('-'),
                    prefix,
                    uri,
                    name;
                
                
                
                if (prefixEnd != -1) {
                    
                    
                    prefix = localName.substring(0, prefixEnd);
                    name = localName.substring(prefixEnd+1);
                    uri = imports._prefixes[prefix];
                    
                    if (uri) {
                        return {
                            uri: uri,
                            name: name,
                            prefix: prefix
                        };
                    }
                }
                
                return null;
            };
        
        var Imports = function(taglibs, importsStr) {
            this._tagImports = {};
            this._attrImports = {};
            this._prefixes = {};
            
            var parts = strings.trim(importsStr).split(/\s*;\s*/);
            forEach(parts, function(part) {
                if (!part) { //Skip empty strings
                    return;
                }
                
                var match = part.match(importRegExp),
                    imports,
                    importsLookup = {},
                    from,
                    as;
                
                if (!match) {
                    throw raptor.createError(new Error('Invalid import: "' + part + '"'));
                }
                else {
                    imports = match[1];
                    from = taglibs.resolveURI(match[2]);
                    as = match[3];

                    if (!as) {
                        as = taglibs.resolvePrefix(from) || taglibs.resolveShortName(from); //Use either the prefix (preferred) or the short name if provided
                        if (!as) {
                            throw raptor.createError(new Error('Unable to handle imports from "' + from + '". The taglib does not have a prefix or short name defined.'));
                        }
                    }
                }
                
                this._prefixes[as] = from;
                
                if (imports) {
                    forEach(imports.split(/\s*,\s*/), function(importedTagName) {
                        importsLookup[importedTagName] = true;
                    });
                }

                taglibs.forEachTag(from, function(tag, taglib) {
                    
                    if (tag.uri === from && (importsLookup['*'] || importsLookup[tag.name])) {
                        /*
                         * Import tags with a URI that matches the taglib URI
                         */
                        this._tagImports[tag.name] = { uri: from, name: tag.name, prefix: as };
                    }
                    
                    /*
                     * Allow imports for attributes that can be assigned to tags with a different URI
                     * e.g. <div c-if="someCondition"></div> --> <div c:if="someCondition"></div>
                     */
                    tag.forEachAttribute(function(attr) {
                        
                        if (tag.uri !== from && (importsLookup['*'] || importsLookup["@" + attr.name])) {
                            this._attrImports[attr.name] = { uri: from, name: attr.name, prefix: as };
                        }

                    }, this);
                    
                }, this);
                
            }, this);
        };
        
        Imports.prototype = {

            getImportedTag: function(localName) {
                return getImported(this._tagImports, localName, this);
            },
            
            getImportedAttribute: function(localName) {
                return getImported(this._attrImports, localName, this);
            }
        };
        
        
        
        var TaglibCollection = function() {
            this.tagTransformersLookup = {}; //Tag transformers lookup
            this.tags = {}; //Tag definitions lookup
            this.textTransformers = {};
            this.taglibsByURI = {}; //Lookup to track the URIs of taglibs that have been added to this collection
            this.uriToShortNameMapping = {};
            this.aliases = {};
            this.uriToPrefixMapping = {};
            this.functionsLookup = {};
            this.attributeLookup = {};
            this.nestedTags = {};
        };
        
        TaglibCollection.prototype = {
                
            getAttribute: function(tagUri, tagName, attrUri, attrName) {
                var tags = this.tags;

                tagUri = this.resolveURI(tagUri);
                
                var attributeLookup = this.attributeLookup;
                if (attrUri == null) {
                    attrUri = '';
                }
                
                var _findAttrForTag = function(tagLookupKey) {
                    var attr = attributeLookup[tagLookupKey + ":" + attrUri + ":" + attrName] ||
                        attributeLookup[tagLookupKey + ":" + attrUri + ":*"] ||
                        attributeLookup[tagLookupKey + ":*:" + attrName] ||
                        attributeLookup[tagLookupKey + ":*:*"];
                    if (!attr) {
                        var tag = tags[tagLookupKey];
                        if (tag) {
                            attr = tag.getAttribute(attrUri, attrName);
                        }
                    }
                    return attr;
                };
                
                var attr = _findAttrForTag(tagUri + ":" + tagName) || 
                    _findAttrForTag(tagUri + ":*") ||
                    _findAttrForTag("*:*");
                
                if (attr && attr.uri && attr.uri !== '*') {
                    //The attribute is being imported
                    
                    var taglib = this.taglibsByURI[attr.uri];
                    if (!taglib) {
                        throw raptor.createError(new Error('Taglib with URI "' + attr.uri + '" not found for imported attribute with name "' + attrName + '"'));
                    }
                    attr = taglib.getAttribute(attrName);
                    if (!attr) {
                        throw raptor.createError(new Error('Attribute "' + attrName + '" imported from taglib with URI "' + attr.uri + '" not found in taglib.'));
                    }
                }
                
                if (!attr) {
                    var attrShortUri = this.resolveShortName(attrUri);
                    if (attrShortUri !== attrUri) {
                        return this.getAttribute(tagUri, tagName, attrShortUri, attrName);
                    }
                }
                
                return attr;
            },
            
            forEachTag: function(uri, callback, thisObj) {
                uri = this.resolveURI(uri);
                
                
                var taglib = this.taglibsByURI[uri];
                
                if (!taglib) {
                    return;
                }
                
                raptor.forEachEntry(taglib.tags, function(key, tag) {
                    
                    callback.call(thisObj, tag, taglib);
                });
            },
            
            /**
             * Checks if the provided URI is the URI of a taglib
             * 
             * @param uri {String} The URI to check
             * @returns {Boolean} Returns true if the URI is that of a taglib. False, otherwise.
             */
            isTaglib: function(uri) {
                return this.taglibsByURI[this.resolveURI(uri)] != null;
            },
            
            /**
             * Adds a new taglib to the collection
             * 
             * @param taglib {raptor/templating/compiler/Taglib} The taglib to add
             */
            add: function(taglib) {
                var targetTaglib = this.taglibsByURI[taglib.uri] || taglib;
                
                this.taglibsByURI[taglib.uri] = targetTaglib; //Mark the taglib as added
                
                if (taglib.shortName && taglib.shortName != taglib.uri) {
                    /*
                     * If the taglib has a short name then record that mapping so that we
                     * can map the short name to the full URI
                     */
                    this.taglibsByURI[taglib.shortName] = taglib; //Mark the short name as being a taglib
                    
                    if (taglib.shortName) {
                        targetTaglib.shortName = taglib.shortName;
                        this.addAlias(taglib.uri, taglib.shortName);
                        this.uriToShortNameMapping[taglib.uri] = taglib.shortName; //Add the reverse-mapping
                    }
                    
                    if (taglib.prefix) {
                        targetTaglib.prefix = taglib.prefix;
                        
                        this.uriToPrefixMapping[taglib.uri] = taglib.prefix;
                    }
                }

                taglib.aliases.forEach(function(alias) {
                    this.addAlias(taglib.uri, alias);
                }, this);
                
                /*
                 * Index all of the tags in the taglib by registering them
                 * based on the tag URI and the tag name
                 */
                taglib.forEachTag(function(tag, i) {

                    var uri = tag.uri == null ? (tag.uri = taglib.uri) : tag.uri, //If not specified, the tag URI should be the same as the taglib URI
                        name = tag.name,
                        key = uri + ":" + name; //The taglib will be registered using the combination of URI and tag name
                    
                    this.tags[key] = tag; //Register the tag using the combination of URI and tag name so that it can easily be looked up
                    
                    if (tag.hasTransformers()) { //Check if the tag has any transformers that should be applied
                        
                        var tagTransformersForTags = this.tagTransformersLookup[key] || (this.tagTransformersLookup[key] = []); //A reference to the array of the tag transformers with the same key
                        
                        //Now add all of the transformers for the node (there will typically only be one...)
                        tag.forEachTransformer(function(transformer) {
                            if (!transformer) {
                                throw raptor.createError(new Error("Transformer is null"));
                            }
                            tagTransformersForTags.push(transformer);
                        }, this);
                    }
                    
                    tag.forEachNestedTag(function(nestedTag) {
                        this.nestedTags[tag.uri + ":" + tag.name + ":" + nestedTag.uri + ":" + nestedTag.name] = nestedTag;
                    }, this);
                    
                    tag.forEachAttribute(function(attr) {

                        this.attributeLookup[tag.uri + ":" + tag.name + ":" + (attr.uri || '') + ":" + attr.name] = attr;
                    }, this);
                }, this);
                
                /*
                 * Now register all of the text transformers that are part of the provided taglibs
                 */
                forEach(taglib.textTransformers, function(textTransformer) {
                    this.textTransformers[textTransformer.className] = textTransformer;
                }, this);
                
                
                forEach(taglib.functions, function(func) {
                    if (!func.name) {
                        throw raptor.createError(new Error("Function name not set."));
                    }
                    this.functionsLookup[taglib.uri + ":" + func.name] = func;
                    if (targetTaglib.shortName) {
                        this.functionsLookup[taglib.shortName + ":" + func.name] = func;
                    }
                }, this);
            },

            addAlias: function(uri, alias) {
                this.aliases[alias] = uri;
            },
            
            /**
             * Invokes a callback for eaching matching transformer that is found for the current node.
             * If the provided node is an element node then the match is based on the node's
             * URI and the local name. If the provided node is a text node then all
             * text transformers will match.
             * 
             * @param node {raptor/templating/compiler$Node} The node to match transformers to
             * @param callback {Function} The callback function to invoke for each matching transformer
             * @param thisObj {Object} The "this" object to use when invoking the callback function
             */
            forEachNodeTransformer: function(node, callback, thisObj) {
                /*
                 * Based on the type of node we have to choose how to transform it
                 */
                if (node instanceof ElementNode) {
                    this.forEachTagTransformer(node.uri, node.localName, callback, thisObj);
                }
                else if (node instanceof TextNode) {
                    this.forEachTextTransformer(callback, thisObj);
                }
            },
            
            /**
             * Resolves a taglib short name to a taglib URI.
             * 
             * <p>
             * If the provided short name is not a known short name then it is just returned.
             * 
             * @param shortName {String} The taglib short name to resolve
             * @returns {String} The resolved URI or the input string if it is not a known short name
             */
            resolveURI: function(inputURI) {
                if (!inputURI) {
                    return inputURI;
                }
                
                var uri;

                while(true) {
                    uri = this.aliases[inputURI] || inputURI;    
                    if (uri === inputURI) {
                        return uri;
                    }
                    inputURI = uri;
                }
            },
            
            /**
             * Resolves a taglib URI to a taglib short name.
             * 
             * <p>
             * If the provided URI is not a known short name then it is just returned.
             * 
             * @param uri {String} The taglib uri to resolve to a short name
             * @returns {String} The resolved short name or undefined if the taglib does not have a short name
             */
            resolveShortName: function(uri) {
                if (!uri) {
                    return uri;
                }

                uri = this.resolveURI(uri);
                
                return this.uriToShortNameMapping[uri]; //Otherwise lookup the short name for the long URI
            },
            
            resolvePrefix: function(uri) {
                if (!uri) {
                    return uri;
                }
                uri = this.resolveURI(uri); //Resolve the short name to a long URI
                
                return this.uriToPrefixMapping[uri]; //See if there is a mapping from the long URI to a prefix
            },
            
            /**
             * Invokes a provided callback for each tag transformer that
             * matches the provided URI and tag name.
             * 
             * @param uri {String} The tag URI or an empty string if the tag is not namespaced
             * @param tagName {String} The local name of the tag (e.g. "div")
             * @param callback {Function} The callback function to invoke
             * @param thisObj {Object} The "this" object to use when invoking the callback function
             */
            forEachTagTransformer: function(uri, tagName, callback, thisObj) {
                /*
                 * If the node is an element node then we need to find all matching
                 * transformers based on the URI and the local name of the element.
                 */
                
                if (uri == null) {
                    uri = '';
                }
                
                var matchingTransformersByName = {};
                var matchingTransformers = [];
                var handled = {};
                var before = {};
                
                /*
                 * Handle all of the transformers in the tag transformers entry
                 */
                var _addTransformers = function(transformers) {
                    raptor.forEach(transformers, function(transformer) {
                        if (!transformer) {
                            throw raptor.createError(new Error("Invalid transformer"));
                        }
                        if (!matchingTransformersByName[transformer.className]) {
                            matchingTransformersByName[transformer.className] = transformer;    
                            matchingTransformers.push(transformer);
                            
                            if (transformer.before) {
                                (before[transformer.before] || (before[transformer.before] = [])).push(transformer);
                            }
                        }
                        
                    });
                };

                /*
                 * Handle all of the transformers for all possible matching transformers.
                 * 
                 * Start with the least specific and end with the most specific.
                 */
                _addTransformers(this.tagTransformersLookup["*:*"]); //Wildcard for both URI and tag name (i.e. transformers that apply to every element)
                _addTransformers(this.tagTransformersLookup[uri + ":*"]); //Wildcard for tag name but matching URI (i.e. transformers that apply to every element with a URI, regadless of tag name)
                _addTransformers(this.tagTransformersLookup[uri + ":" + tagName]); //All transformers that match the URI and tag name exactly
                
                var _handleTransformer = function(transformer) {
                    if (!handled[transformer.className]) {
                        handled[transformer.className] = true;
                        
                        if (transformer.after) { //Check if this transformer is required to run
                            if (!matchingTransformersByName[transformer.after]) {
                                throw raptor.createError(new Error('After transformers not found for "' + transformer.after + '"'));
                            }
                            _handleTransformer(matchingTransformersByName[transformer.after]); //Handle any transformers that this transformer is supposed to run after
                        }
                        
                        raptor.forEach(before[transformer.className], _handleTransformer); //Handle any transformers that are configured to run before this transformer
                        
                        callback.call(thisObj, transformer);
                    }
                    
                };
                
                matchingTransformers.forEach(function(transformer) {
                    _handleTransformer(transformer);
                }, this);
            },
            
            /**
             * Invokes a provided callback for each registered text transformer.
             * 
             * @param callback {Function} The callback function to invoke
             * @param thisObj {Object} The "this" object to use when invoking the callback function
             */
            forEachTextTransformer: function(callback, thisObj) {
                raptor.forEachEntry(this.textTransformers, function(className, textTransformer) {
                    var keepGoing = callback.call(thisObj, textTransformer);
                    if (keepGoing === false) {
                        return false;
                    }
                    return true;
                });
            },
            
            /**
             * Returns the definition of a tag that was loaded from the taglib with the specified
             * URI and with the matching 
             * @param uri
             * @param localName
             * @returns
             */
            getTag: function(uri, localName) {
                uri = this.resolveURI(uri);

                var tag = this.tags[uri + ":" + localName];
                if (!tag) {
                    tag = this.tags[uri + ":*"]; //See if there was a wildcard tag definition in the taglib
                }
                
                return tag;
            },
            
            getNestedTag: function(parentTagUri, parentTagName, nestedTagUri, nestedTagName) {
                parentTagUri = parentTagUri || '';
                nestedTagUri = nestedTagUri || '';
                return this.nestedTags[parentTagUri + ":" + parentTagName + ":" + nestedTagUri + ":" + nestedTagName];
            },
            
            getFunction: function(uri, functionName) {
                return this.functionsLookup[uri + ":" + functionName];
            },

            getHelperObject: function(uri) {
                uri = this.resolveURI(uri);

                var taglib = this.taglibsByURI[uri];
                if (!taglib) {
                    throw new Error("Invalid taglib URI: " + uri);
                }
                return taglib.getHelperObject();
            },
            
            getImports: function(importsStr) {
                return new Imports(this, importsStr);
            }
        };
        
        return TaglibCollection;
    });