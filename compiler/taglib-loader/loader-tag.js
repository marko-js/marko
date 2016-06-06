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

require('raptor-polyfill/string/startsWith');
var ok = require('assert').ok;
var Taglib = require('./Taglib');
var propertyHandlers = require('property-handlers');
var isObjectEmpty = require('raptor-util/isObjectEmpty');
var nodePath = require('path');
var resolve = require('../util/resolve'); // NOTE: different implementation for browser
var ok = require('assert').ok;
var bodyFunctionRegExp = /^([A-Za-z_$][A-Za-z0-9_]*)(?:\(([^)]*)\))?$/;
var safeVarName = /^[A-Za-z_$][A-Za-z0-9_]*$/;
var handleAttributes = require('./handleAttributes');
var Taglib = require('./Taglib');
var propertyHandlers = require('property-handlers');
var forEachEntry = require('raptor-util').forEachEntry;
var loader = require('./loader');
var markoCompiler = require('../');

function exists(path) {
    try {
        require.resolve(path);
        return true;
    } catch(e) {
        return false;
    }
}

function removeDashes(str) {
    return str.replace(/-([a-z])/g, function (match, lower) {
        return lower.toUpperCase();
    });
}

function handleVar(tag, value, path) {
    var nestedVariable;

    if (typeof value === 'string') {
        nestedVariable = {
            name: value
        };
    } else {
        nestedVariable = {};

        propertyHandlers(value, {

            name: function(value) {
                nestedVariable.name = value;
            },

            nameFromAttribute: function(value) {
                nestedVariable.nameFromAttribute = value;
            }

        }, path);

        if (!nestedVariable.name && !nestedVariable.nameFromAttribute) {
            throw new Error('The "name" or "name-from-attribute" attribute is required for a nested variable');
        }
    }

    tag.addNestedVariable(nestedVariable);
}


/**
 * We load tag definition using this class. Properties in the taglib
 * definition (which is just a JavaScript object with properties)
 * are mapped to handler methods in an instance of this type.
 *
 * @param {Tag} tag The initially empty Tag instance that we populate
 * @param {String} dirname The full file system path associated with the tag being loaded
 * @param {String} path An informational path associated with this tag (used for error reporting)
 */
function TagHandlers(tag, dirname, path, taglib) {
    this.tag = tag;
    this.dirname = dirname;
    this.path = path;
    this.taglib = taglib;

    if (!taglib) {
        throw new Error('taglib expected');
    }
}

TagHandlers.prototype = {
    /**
     * The tag name
     * @param {String} value The tag name
     */
    name: function(value) {
        var tag = this.tag;
        tag.name = value;
    },

    /**
     * The path to the renderer JS module to use for this tag.
     *
     * NOTE: We use the equivalent of require.resolve to resolve the JS module
     * 		 and use the tag directory as the "from".
     *
     * @param {String} value The renderer path
     */
    renderer: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;
        var path = resolve(value, dirname);

        this.taglib.addInputFile(path);

        tag.renderer = path;
    },

    /**
     * A tag can use a renderer or a template to do the rendering. If
     * a template is provided then the value should be the path to the
     * template to use to render the custom tag.
     */
    template: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;

        var path = nodePath.resolve(dirname, value);
        if (!exists(path)) {
            throw new Error('Template at path "' + path + '" does not exist.');
        }

        this.taglib.addInputFile(path);

        tag.template = path;
    },

    /**
     * An Object where each property maps to an attribute definition.
     * The property key will be the attribute name and the property value
     * will be the attribute definition. Example:
     * {
     *     "attributes": {
     *         "foo": "string",
     *         "bar": "expression"
     *     }
     * }
     */
    attributes: function(value) {
        var tag = this.tag;
        var path = this.path;

        handleAttributes(value, tag, path);
    },

    /**
     * A custom tag can be mapped to module that is is used
     * to generate compile-time code for the custom tag. A
     * node type is created based on the methods and methods
     * exported by the code codegen module.
     */
    codeGenerator: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;

        var path = resolve(value, dirname);
        tag.codeGeneratorModulePath = path;
        this.taglib.addInputFile(path);
    },

    /**
     * A custom tag can be mapped to a compile-time Node that gets
     * added to the parsed Abstract Syntax Tree (AST). The Node can
     * then generate custom JS code at compile time. The value
     * should be a path to a JS module that gets resolved using the
     * equivalent of require.resolve(path)
     */
    nodeFactory: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;

        var path = resolve(value, dirname);
        tag.nodeFactoryPath = path;
        this.taglib.addInputFile(path);
    },

    /**
     * If the "preserve-whitespace" property is set to true then
     * all whitespace nested below the custom tag in a template
     * will be stripped instead of going through the normal whitespace
     * removal rules.
     */
    preserveWhitespace: function(value) {
        var tag = this.tag;
        tag.preserveWhitespace = !!value;
    },

    /**
     * If a custom tag has an associated transformer then the transformer
     * will be called on the compile-time Node. The transformer can manipulate
     * the AST using the DOM-like API to change how the code gets generated.
     */
    transformer: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;
        var path = this.path;
        var taglib = this.taglib;

        var transformer = new Taglib.Transformer();

        if (typeof value === 'string') {
            // The value is a simple string type
            // so treat the value as the path to the JS
            // module for the transformer
            value = {
                path: value
            };
        }

        /**
         * The transformer is a complex type and we need
         * to process each property to load the Transformer
         * definition.
         */
        propertyHandlers(value, {
            path: function(value) {
                var path = resolve(value, dirname);
                transformer.path = path;
                taglib.addInputFile(path);
            },

            priority: function(value) {
                transformer.priority = value;
            },

            name: function(value) {
                transformer.name = value;
            },

            properties: function(value) {
                var properties = transformer.properties || (transformer.properties = {});
                for (var k in value) {
                    if (value.hasOwnProperty(k)) {
                        properties[k] = value[k];
                    }
                }
            }

        }, 'transformer in ' + path);

        ok(transformer.path, '"path" is required for transformer');

        tag.addTransformer(transformer);
    },

    /**
     * The "var" property is used to declared nested variables that get
     * added as JavaScript variables at compile time.
     *
     * Examples:
     *
     * "var": "myScopedVariable",
     *
     * "var": {
     *     "name": "myScopedVariable"
     * }
     *
     * "var": {
     *     "name-from-attribute": "var"
     * }
     */
    'var': function(value) {
        handleVar(this.tag, value, '"var" in tag ' + this.path);
    },
    /**
     * The "vars" property is equivalent to the "var" property
     * except that it expects an array of nested variables.
     */
    vars: function(value) {
        var tag = this.tag;
        var self = this;

        if (value) {
            value.forEach(function(v, i) {
                handleVar(tag, v, '"vars"[' + i + '] in tag ' + self.path);
            });
        }
    },
    /**
     * The "body-function" property" allows the nested body content to be mapped
     * to a function at compile time. The body function gets mapped to a property
     * of the tag renderer at render time. The body function can have any number
     * of parameters.
     *
     * Example:
     * - "body-function": "_handleBody(param1, param2, param3)"
     */
    bodyFunction: function(value) {
        var tag = this.tag;
        var parts = bodyFunctionRegExp.exec(value);
        if (!parts) {
            throw new Error('Invalid value of "' + value + '" for "body-function". Expected value to be of the following form: <function-name>([param1, param2, ...])');
        }

        var functionName = parts[1];
        var params = parts[2];
        if (params) {
            params = params.trim().split(/\s*,\s*/);
            for (var i=0; i<params.length; i++) {
                if (params[i].length === 0) {
                    throw new Error('Invalid parameters for body-function with value of "' + value + '"');
                } else if (!safeVarName.test(params[i])) {
                    throw new Error('Invalid parameter name of "' + params[i] + '" for body-function with value of "' + value + '"');
                }
            }
        } else {
            params = [];
        }

        tag.setBodyFunction(functionName, params);
    },
    /**
     * The "import-var" property can be used to add a property to the
     * input object of the tag renderer whose value is determined by
     * a JavaScript expression.
     *
     * Example:
     * "import-var": {
     *     "myTargetProperty": "data.myCompileTimeJavaScriptExpression",
     * }
     */
    importVar: function(value) {
        var tag = this.tag;
        forEachEntry(value, function(varName, varValue) {
            var importedVar = {
                targetProperty: varName
            };

            var expression = varValue;

            if (!expression) {
                expression = varName;
            }
            else if (typeof expression === 'object') {
                expression = expression.expression;
            }

            if (!expression) {
                throw new Error('Invalid "import-var": ' + require('util').inspect(varValue));
            }

            importedVar.expression = markoCompiler.builder.parseExpression(expression);
            tag.addImportedVariable(importedVar);
        });
    },
    /**
     * The tag type.
     */
    type: function(value) {
        var tag = this.tag;
        tag.type = value;
    },
    /**
     * Declare a nested tag.
     *
     * Example:
     * {
     *     ...
     *     "nested-tags": {
     *        "tab": {
     *            "target-property": "tabs",
     *            "isRepeated": true
     *        }
     *     }
     * }
     */
    nestedTags: function(value) {
        var tagPath = this.path;
        var taglib = this.taglib;
        var dirname = this.dirname;
        var tag = this.tag;

        forEachEntry(value, function(nestedTagName, nestedTagDef) {
            var nestedTag = loadTag(
                nestedTagDef,
                nestedTagName + ' of ' + tagPath,
                taglib,
                dirname);
            nestedTag.name = nestedTagName;
            tag.addNestedTag(nestedTag);
        });
    },
    escapeXmlBody: function(value) {
        if (value === false) {
            this.tag.escapeXmlBody = false;
        }
    },

    /**
     * Sends the body content type. This is used to control how the body
     * content is parsed.
     */
    body: function(value) {
        if (value === 'static-text' || value === 'parsed-text' || value === 'html') {
            this.tag.body = value;
        } else {
            throw new Error('Invalid value for "body". Allowed: "static-text", "parsed-text" or "html"');
        }
    },

    openTagOnly: function(value) {
        this.tag.openTagOnly = value;
    },

    noOutput: function(value) {
        this.tag.noOutput = value;
    },

    autocomplete: function(value) {
        this.tag.autocomplete = value;
    }
};

exports.isSupportedProperty = function(name) {
    return TagHandlers.prototype.hasOwnProperty(name);
};

function hasAttributes(tagProps) {
    if (tagProps.attributes != null) {
        return true;
    }

    for (var name in tagProps) {
        if (tagProps.hasOwnProperty(name) && name.startsWith('@')) {
            return true;
        }
    }

    return false;
}

function loadTag(tagProps, path, taglib, dirname) {
    ok(tagProps);
    ok(typeof path === 'string');
    ok(taglib);
    ok(typeof dirname === 'string');

    var tag = new Taglib.Tag(taglib);



    if (!hasAttributes(tagProps)) {
        // allow any attributes if no attributes are declared
        tagProps.attributes = {
            '*': {
                type: 'string',
                targetProperty: null,
                preserveName: false
            }
        };
    }

    var tagHandlers = new TagHandlers(tag, dirname, path, taglib);

    // We add a handler for any properties that didn't match
    // one of the default property handlers. This is used to
    // match properties in the form of "@attr_name" or
    // "<nested_tag_name>"
    tagHandlers['*'] = function(name, value) {
        var parts = name.split(/\s+|\s+[,]\s+/);

        var i;
        var part;

        var hasNestedTag = false;
        var hasAttr = false;
        var nestedTagTargetProperty = null;

        // We do one pass to figure out if there is an
        // attribute or nested tag or both
        for (i=0; i<parts.length; i++) {
            part = parts[i];
            if (part.startsWith('@')) {
                hasAttr = true;

                if (i === 0) {
                    // Use the first attribute value as the name of the target property
                    nestedTagTargetProperty = part.substring(1);
                }
            } else if (part.startsWith('<')) {
                hasNestedTag = true;
            } else {
                // Unmatched property that is not an attribute or a
                // nested tag
                return false;
            }
        }

        var attrProps = {};
        var tagProps = {};
        var k;

        if (value != null && typeof value === 'object') {
            for (k in value) {
                if (value.hasOwnProperty(k)) {
                    if (k.startsWith('@') || k.startsWith('<')) {
                        // Move over all of the attributes and nested tags
                        // to the tag definition.
                        tagProps[k] = value[k];
                        delete value[k];
                    } else {
                        // The property is not a shorthand attribute or shorthand
                        // tag so move it over to either the tag definition
                        // or the attribute definition or both the tag definition
                        // and attribute definition.
                        var propNameDashes = removeDashes(k);

                        if (loader.tagLoader.isSupportedProperty(propNameDashes) &&
                            loader.attributeLoader.isSupportedProperty(propNameDashes)) {
                            // Move over all of the properties that are associated with a tag
                            // and attribute
                            tagProps[k] = value[k];
                            attrProps[k] = value[k];
                            delete value[k];
                        } else if (loader.tagLoader.isSupportedProperty(propNameDashes)) {
                            // Move over all of the properties that are associated with a tag
                            tagProps[k] = value[k];
                            delete value[k];
                        } else if (loader.attributeLoader.isSupportedProperty(propNameDashes)) {
                            // Move over all of the properties that are associated with an attr
                            attrProps[k] = value[k];
                            delete value[k];
                        }
                    }
                }
            }

            // If there are any left over properties then something is wrong
            // with the user's taglib.
            if (!isObjectEmpty(value)) {
                throw new Error('Unsupported properties of [' +
                    Object.keys(value).join(', ') +
                    '] for "' + name + '" in "'  + path + '"');
            }

            var type = attrProps.type;
            if (!type && hasAttr && hasNestedTag) {
                // If we have an attribute and a nested tag then default
                // the attribute type to "expression"
                attrProps.type = 'expression';
            }
        } else if (typeof value === 'string') {
            if (hasNestedTag && hasAttr) {
                tagProps = attrProps = {
                    type: value
                };
            } else if (hasNestedTag) {
                tagProps = {
                    type: value
                };
            } else {
                attrProps = {
                    type: value
                };
            }
        }

        // Now that we have separated out attribute properties and tag properties
        // we need to create the actual attributes and nested tags
        for (i=0; i<parts.length; i++) {
            part = parts[i];
            if (part.startsWith('@')) {
                // This is a shorthand attribute
                var attrName = part.substring(1);

                var attr = loader.attributeLoader.loadAttribute(
                    attrName,
                    attrProps,
                    '"' + attrName + '" attribute as part of ' + path);

                tag.addAttribute(attr);
            } else if (part.startsWith('<')) {

                // This is a shorthand nested tag
                var nestedTag = loadTag(
                    tagProps,
                    name + ' of ' + path,
                    taglib,
                    dirname);

                // We use the '[]' suffix to indicate that a nested tag
                // can be repeated
                var isNestedTagRepeated = false;
                if (part.endsWith('[]')) {
                    isNestedTagRepeated = true;
                    part = part.slice(0, -2);
                }

                var nestedTagName = part.substring(1, part.length-1);
                nestedTag.name = nestedTagName;
                nestedTag.isRepeated = isNestedTagRepeated;
                // Use the name of the attribute as the target property unless
                // this target property was explicitly provided
                nestedTag.targetProperty = attrProps.targetProperty || nestedTagTargetProperty;
                tag.addNestedTag(nestedTag);
            } else {
                return false;
            }
        }
    };

    propertyHandlers(tagProps, tagHandlers, path);

    return tag;
}

exports.loadTag = loadTag;