var ok = require('assert').ok;
var Taglib = require('../Taglib');
var propertyHandlers = require('property-handlers');
var isObjectEmpty = require('raptor-util/isObjectEmpty');
var nodePath = require('path');
var resolve = require('../../util/resolve'); // NOTE: different implementation for browser
var ok = require('assert').ok;
var bodyFunctionRegExp = /^([A-Za-z_$][A-Za-z0-9_]*)(?:\(([^)]*)\))?$/;
var safeVarName = /^[A-Za-z_$][A-Za-z0-9_]*$/;
var handleAttributes = require('./handleAttributes');
var Taglib = require('../Taglib');
var propertyHandlers = require('property-handlers');
var forEachEntry = require('raptor-util').forEachEntry;
var loader = require('./loader');

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


function TagHandlers(tag, dirname, path) {
    this.tag = tag;
    this.dirname = dirname;
    this.path = path;
}

TagHandlers.prototype = {
    name: function(value) {
        var tag = this.tag;
        tag.name = value;
    },

    renderer: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;
        var path = resolve(value, dirname);

        tag.renderer = path;
    },
    template: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;

        var path = nodePath.resolve(dirname, value);
        if (!exists(path)) {
            throw new Error('Template at path "' + path + '" does not exist.');
        }

        tag.template = path;
    },
    attributes: function(value) {
        var tag = this.tag;
        var path = this.path;

        handleAttributes(value, tag, path);
    },
    nodeClass: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;

        var path = resolve(value, dirname);
        tag.nodeClass = path;
    },
    preserveWhitespace: function(value) {
        var tag = this.tag;
        tag.preserveWhitespace = !!value;
    },
    transformer: function(value) {
        var tag = this.tag;
        var dirname = this.dirname;
        var path = this.path;

        var transformer = new Taglib.Transformer();

        if (typeof value === 'string') {
            value = {
                path: value
            };
        }

        propertyHandlers(value, {
            path: function(value) {
                var path = resolve(value, dirname);
                transformer.path = path;
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

    'var': function(value) {
        var tag = this.tag;
        tag.addNestedVariable({
            name: value
        });
    },
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
    bodyProperty: function(value) {
        var tag = this.tag;
        tag.setBodyProperty(value);
    },
    vars: function(value) {
        var tag = this.tag;
        if (value) {
            value.forEach(function(v, i) {
                var nestedVariable;

                if (typeof v === 'string') {
                    nestedVariable = {
                        name: v
                    };
                } else {
                    nestedVariable = {};

                    propertyHandlers(v, {

                        name: function(value) {
                            nestedVariable.name = value;
                        },

                        nameFromAttribute: function(value) {
                            nestedVariable.nameFromAttribute = value;
                        }

                    }, 'var at index ' + i);

                    if (!nestedVariable.name && !nestedVariable.nameFromAttribute) {
                        throw new Error('The "name" or "name-from-attribute" attribute is required for a nested variable');
                    }
                }

                tag.addNestedVariable(nestedVariable);
            });
        }
    },
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

            importedVar.expression = expression;
            tag.addImportedVariable(importedVar);
        });
    },
    type: function(value) {
        var tag = this.tag;
        tag.type = value;
    },
    nestedTags: function(value) {

    }
};

exports.isSupportedProperty = function(name) {
    return TagHandlers.prototype.hasOwnProperty(name);
};

function loadTag(tagProps, path, taglib, dirname) {
    ok(tagProps);
    ok(typeof path === 'string');
    ok(taglib);
    ok(typeof dirname === 'string');

    var tag = new Taglib.Tag(taglib);

    if (tagProps.attributes == null) {
        // allow any attributes if no attributes are declared
        tagProps.attributes = {
            '*': 'string'
        };
    }

    var tagHandlers = new TagHandlers(tag, dirname, path);

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