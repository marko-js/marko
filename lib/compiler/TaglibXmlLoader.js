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
var createError = require('raptor-util').createError;
'use strict';
var objectMapper = require('raptor-xml/sax/object-mapper');
var regexp = require('raptor-regexp');
var Taglib = require('./Taglib');
var Tag = Taglib.Tag;
var Attribute = Taglib.Attribute;
var Property = Taglib.Property;
var NestedVariable = Taglib.NestedVariable;
var ImportedVariable = Taglib.ImportedVariable;
var Transformer = Taglib.Transformer;
var Function = Taglib.Function;
var HelperObject = Taglib.HelperObject;
var STRING = 'string';
var BOOLEAN = 'boolean';
var OBJECT = 'object';
function TaglibXmlLoader(src, resource) {
    this.src = src;
    this.filePath = typeof resource === 'string' ? resource : resource.getURL();
    this.resource = resource;
}
TaglibXmlLoader.load = function (src, resource) {
    var loader = new TaglibXmlLoader(src, resource);
    return loader.load();
};
TaglibXmlLoader.prototype = {
    load: function () {
        var src = this.src;
        var filePath = this.filePath;
        var taglibResource = this.resource;
        var tagsById = {};
        function handleTagExtends(subTag) {
            var extendsId = subTag['extends'];
            if (!extendsId) {
                return;
            }
            delete subTag['extends'];
            var superTag = tagsById[extendsId];
            if (!superTag) {
                throw createError(new Error('Parent tag with ID "' + extendsId + '" not found in taglib at path "' + filePath + '"'));
            }
            if (superTag['extends']) {
                handleTagExtends(superTag);
            }
            subTag.inheritFrom(superTag);
        }
        var taglib;
        var attributeHandler = {
                _type: OBJECT,
                _begin: function () {
                    return new Attribute();
                },
                _end: function (attr, parent) {
                    if (attr.uri == null) {
                        attr.uri = '';
                    }
                    parent.addAttribute(attr);
                },
                'name': { _type: STRING },
                'pattern': {
                    _type: STRING,
                    _set: function (parent, name, value) {
                        var patternRegExp = regexp.simple(value);
                        parent.pattern = patternRegExp;
                    }
                },
                'target-property': {
                    _type: STRING,
                    _targetProp: 'targetProperty'
                },
                'uri': { _type: STRING },
                'deprecated': { _type: STRING },
                'required': { _type: BOOLEAN },
                'type': { _type: STRING },
                'allow-expressions': {
                    _type: BOOLEAN,
                    _targetProp: 'allowExpressions'
                },
                'preserve-name': {
                    _type: BOOLEAN,
                    _targetProp: 'preserveName'
                },
                'description': { _type: STRING }
            };
        var importVariableHandler = {
                _type: OBJECT,
                _begin: function () {
                    return new ImportedVariable();
                },
                _end: function (importedVariable, tag) {
                    if (importedVariable.name) {
                        if (!importedVariable.targetProperty) {
                            importedVariable.targetProperty = importedVariable.name;
                        }
                        importedVariable.expression = importedVariable.name;
                        delete importedVariable.name;
                    }
                    if (!importedVariable.targetProperty) {
                        throw createError(new Error('The "target-property" attribute is required for an imported variable'));
                    }
                    if (!importedVariable.expression) {
                        throw createError(new Error('The "expression" attribute is required for an imported variable'));
                    }
                    tag.addImportedVariable(importedVariable);
                },
                'name': { _type: STRING },
                'target-property': {
                    _type: STRING,
                    _targetProp: 'targetProperty'
                },
                'expression': { _type: STRING }
            };
        var variableHandler = {
                _type: OBJECT,
                _begin: function () {
                    return new NestedVariable();
                },
                _end: function (nestedVariable, tag) {
                    if (!nestedVariable.name && !nestedVariable.nameFromAttribute) {
                        throw createError(new Error('The "name" or "name-from-attribute" attribute is required for a nested variable'));
                    }
                    tag.addNestedVariable(nestedVariable);
                },
                'name': {
                    _type: STRING,
                    _targetProp: 'name'
                },
                'name-from-attribute': {
                    _type: STRING,
                    _targetProp: 'nameFromAttribute'
                },
                'name-from-attr': {
                    _type: STRING,
                    _targetProp: 'nameFromAttribute'
                }
            };
        var handlers = {
                'raptor-taglib': {
                    _type: OBJECT,
                    _begin: function () {
                        var newTaglib = new Taglib();
                        if (!taglib) {
                            taglib = newTaglib;
                        }
                        return newTaglib;
                    },
                    'attribute': attributeHandler,
                    'tlib-version': {
                        _type: STRING,
                        _targetProp: 'version'
                    },
                    'short-name': {
                        _type: STRING,
                        _targetProp: 'shortName'
                    },
                    'uri': {
                        _type: STRING,
                        _set: function (taglib, name, value, context) {
                            if (!taglib.uri) {
                                taglib.uri = value;
                            } else {
                                taglib.addAlias(value);
                            }
                        }
                    },
                    'prefix': { _type: STRING },
                    'tag': {
                        _type: OBJECT,
                        _begin: function () {
                            return new Tag();
                        },
                        _end: function (tag) {
                            if (tag.uri === undefined) {
                                tag.uri = taglib.uri;
                            }
                            taglib.addTag(tag);
                            if (tag.id) {
                                tagsById[tag.id] = tag;
                            }
                        },
                        'name': {
                            _type: STRING,
                            _targetProp: 'name'
                        },
                        'uri': {
                            _type: STRING,
                            _set: function (tag, name, value, context) {
                                tag.uri = value || '';
                            }
                        },
                        'id': { _type: STRING },
                        'preserveSpace': {
                            _type: BOOLEAN,
                            _targetProp: 'preserveWhitespace'
                        },
                        'preserve-space': {
                            _type: BOOLEAN,
                            _targetProp: 'preserveWhitespace'
                        },
                        'preserve-whitespace': {
                            _type: BOOLEAN,
                            _targetProp: 'preserveWhitespace'
                        },
                        'preserveWhitespace': {
                            _type: BOOLEAN,
                            _targetProp: 'preserveWhitespace'
                        },
                        'extends': {
                            _type: STRING,
                            _targetProp: 'extends'
                        },
                        'handler-class': {
                            _type: STRING,
                            _targetProp: 'handlerClass'
                        },
                        'renderer': {
                            _type: STRING,
                            _targetProp: 'handlerClass'
                        },
                        'template': {
                            _type: STRING,
                            _targetProp: 'template'
                        },
                        'node-class': {
                            _type: STRING,
                            _targetProp: 'nodeClass'
                        },
                        'dynamic-attributes': {
                            _type: BOOLEAN,
                            _targetProp: 'dynamicAttributes'
                        },
                        'dynamic-attributes-remove-dashes': {
                            _type: BOOLEAN,
                            _targetProp: 'dynamicAttributesRemoveDashes'
                        },
                        '<attribute>': attributeHandler,
                        '<static-property>': {
                            _type: OBJECT,
                            _begin: function () {
                                return new Property();
                            },
                            _end: function (prop, tag) {
                                if (!prop.name) {
                                    throw createError(new Error('The "name" property is required for a <static-property>'));
                                }
                                if (!prop.hasOwnProperty('value')) {
                                    throw createError(new Error('The "value" property is required for a <static-property>'));
                                }
                                tag.addStaticProperty(prop);
                            },
                            'name': { _type: STRING },
                            'type': { _type: STRING },
                            'value': { _type: STRING }
                        },
                        '<nested-tag>': {
                            _type: OBJECT,
                            _begin: function () {
                                return new Tag();
                            },
                            _end: function (nestedTag, tag) {
                                if (nestedTag.uri === null || nestedTag.uri === undefined) {
                                    nestedTag.uri = taglib.uri;
                                }
                                nestedTag.targetProperty = nestedTag.targetProperty || nestedTag.name;
                                if (!nestedTag.name) {
                                    throw createError(new Error('The "name" property is required for a <nested-tag>'));
                                }
                                tag.addNestedTag(nestedTag);
                            },
                            'name': { _type: STRING },
                            'type': { _type: STRING },
                            'target-property': {
                                _type: STRING,
                                _targetProp: 'targetProperty'
                            }
                        },
                        'nested-variable': variableHandler,
                        'variable': variableHandler,
                        'imported-variable': importVariableHandler,
                        'import-variable': importVariableHandler,
                        'transformer-class': {
                            _type: STRING,
                            _set: function (tag, name, value) {
                                var transformer = new Transformer();
                                transformer.className = value;
                                tag.addTransformer(transformer);
                            }
                        },
                        'transformer': {
                            _type: OBJECT,
                            _begin: function () {
                                return new Transformer();
                            },
                            _end: function (transformer, tag) {
                                tag.addTransformer(transformer);
                            },
                            'class-name': {
                                _type: STRING,
                                _targetProp: 'className'
                            },
                            'after': {
                                _type: STRING,
                                _targetProp: 'after'
                            },
                            'before': {
                                _type: STRING,
                                _targetProp: 'before'
                            },
                            '<properties>': {
                                _type: OBJECT,
                                _begin: function (parent) {
                                    return parent.properties = {};
                                },
                                '<*>': { _type: STRING }
                            }
                        }
                    },
                    'text-transformer': {
                        _type: OBJECT,
                        _begin: function () {
                            return new Transformer();
                        },
                        _end: function (textTransformer) {
                            taglib.addTextTransformer(textTransformer);
                        },
                        'class-name': {
                            _type: STRING,
                            _targetProp: 'className'
                        }
                    },
                    'import-taglib': {
                        _type: OBJECT,
                        _begin: function () {
                            return {};
                        },
                        _end: function (importedTaglib) {
                            var path = importedTaglib.path;
                            var importedXmlSource;
                            var importedTaglibResource;
                            if (path.startsWith('/')) {
                                importedTaglibResource = require('raptor-resources').findResource(path);
                            } else {
                                importedTaglibResource = taglibResource.resolve(path);
                            }
                            if (!importedTaglibResource.exists()) {
                                throw createError(new Error('Imported taglib with path "' + path + '" not found in taglib at path "' + filePath + '"'));
                            }
                            require('raptor-templates/compiler').recordLoadedTaglib(importedTaglibResource);
                            importedXmlSource = importedTaglibResource.readAsString();
                            objectMapper.read(importedXmlSource, importedTaglibResource.getURL(), handlers);
                        },
                        'path': { _type: STRING }
                    },
                    'function': {
                        _type: OBJECT,
                        _begin: function () {
                            return new Function();
                        },
                        _end: function (func) {
                            taglib.addFunction(func);
                        },
                        'name': { _type: STRING },
                        'class': {
                            _type: STRING,
                            _targetProp: 'functionClass'
                        },
                        'bind-to-context': {
                            _type: BOOLEAN,
                            _targetProp: 'bindToContext'
                        }
                    },
                    'helper-object': {
                        _type: OBJECT,
                        _begin: function () {
                            return new HelperObject();
                        },
                        _end: function (helperObject) {
                            taglib.setHelperObject(helperObject);
                        },
                        'module-name': {
                            _type: STRING,
                            _targetProp: 'moduleName'
                        },
                        'class-name': {
                            _type: STRING,
                            _targetProp: 'className'
                        }
                    }
                }
            };
        objectMapper.read(src, filePath, handlers);
        taglib.forEachTag(function (tag) {
            handleTagExtends(tag);
        });
        return taglib;
    }
};
module.exports = TaglibXmlLoader;