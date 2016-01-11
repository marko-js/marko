'use strict';

var ok = require('assert').ok;
var path = require('path');
var taglibLookup = require('./taglib-lookup');
var charProps = require('char-props');
var deresolve = require('./util/deresolve');
var UniqueVars = require('./util/UniqueVars');
var PosInfo = require('./util/PosInfo');
var CompileError = require('./CompileError');
var path = require('path');
var Node = require('./ast/Node');
var macros = require('./util/macros');

function getTaglibPath(taglibPath) {
    if (typeof window === 'undefined') {
        return path.relative(process.cwd(), taglibPath);
    } else {
        return taglibPath;
    }
}

function removeExt(filename) {
    var ext = path.extname(filename);
    if (ext) {
        return filename.slice(0, 0 - ext.length);
    } else {
        return filename;
    }
}

function requireResolve(builder, path) {
    var requireResolveNode = builder.memberExpression(
        builder.identifier('require'),
        builder.identifier('resolve'));


    return builder.functionCall(requireResolveNode, [ path ]);
}

class CompileContext {
    constructor(src, filename, builder) {
        ok(typeof src === 'string', '"src" string is required');
        ok(filename, '"filename" is required');

        this.src = src;
        this.filename = filename;
        this.builder = builder;

        this.dirname = path.dirname(filename);
        this.taglibLookup = taglibLookup.buildLookup(this.dirname);
        this.data = {};

        this._staticVars = {};
        this._staticCode = null;
        this._uniqueVars = new UniqueVars();
        this._srcCharProps = null;
        this._flags = {};
        this._errors = [];
        this._macros = null;
    }

    getPosInfo(pos) {
        var srcCharProps = this._srcCharProps || (this._srcCharProps = charProps(this.src));
        let line = srcCharProps.lineAt(pos)+1;
        let column = srcCharProps.columnAt(pos);
        return new PosInfo(this.filename, line, column);
    }

    setFlag(name) {
        this._flags[name] = true;
    }

    clearFlag(name) {
        delete this._flags[name];
    }

    isFlagSet(name) {
        return this._flags.hasOwnProperty(name);
    }

    addError(errorInfo) {
        if (errorInfo instanceof Node) {
            let node = arguments[0];
            let message = arguments[1];
            let code = arguments[2];
            errorInfo = {
                node,
                message,
                code
            };
        } else if (typeof errorInfo === 'string') {
            let message = arguments[0];
            let code = arguments[1];
            errorInfo = {
                message,
                code
            };
        }
        this._errors.push(new CompileError(errorInfo, this));
    }

    hasErrors() {
        return this._errors.length !== 0;
    }

    getErrors() {
        return this._errors;
    }

    getRequirePath(targetFilename) {
        return deresolve(targetFilename, this.dirname);
    }

    addStaticVar(name, init) {
        var actualVarName = this._uniqueVars.addVar(name, init);
        this._staticVars[actualVarName] = init;
        return actualVarName;
    }

    getStaticVars() {
        return this._staticVars;
    }

    addStaticCode(code) {
        if (!code) {
            return;
        }

        if (typeof code === 'string') {
            // Wrap the String code in a Code AST node so that
            // the code will be indented properly
            code = this.builder.code(code);
        }

        if (this._staticCode == null) {
            this._staticCode = [code];
        } else {
            this._staticCode.push(code);
        }
    }

    getStaticCode() {
        return this._staticCode;
    }

    createNodeForEl(tagName, attributes, argument, openTagOnly, selfClosed) {
        var elDef;
        var builder = this.builder;

        if (typeof tagName === 'object') {
            elDef = tagName;
            tagName = elDef.tagName;
            attributes = elDef.attributes;
        } else {
            elDef = { tagName, argument, attributes, openTagOnly, selfClosed };
        }

        ok(typeof tagName === 'string', 'Invalid "tagName"');
        ok(attributes == null || Array.isArray(attributes), 'Invalid "attributes"');

        if (!attributes) {
            attributes = elDef.attributes = [];
        }

        var node;
        var elNode = builder.htmlElement(elDef);
        var taglibLookup = this.taglibLookup;
        var tagDef = taglibLookup.getTag(tagName);
        if (tagDef) {
            var nodeFactoryFunc = tagDef.getNodeFactory();
            if (nodeFactoryFunc) {
                node = nodeFactoryFunc(elNode, this);
                if (!(node instanceof Node)) {
                    throw new Error('Invalid node returned from node factory for tag "' + tagName + '".');
                }
            }
        }

        if (!node) {
            node = elNode;
        }

        node.pos = elDef.pos;

        var foundAttrs = {};

        // Validate the attributes
        attributes.forEach((attr) => {
            let attrName = attr.name;
            let attrDef = taglibLookup.getAttribute(tagName, attrName);
            if (!attrDef) {
                if (tagDef) {
                    // var isAttrForTaglib = compiler.taglibs.isTaglib(attrUri);
                    //Tag doesn't allow dynamic attributes
                    this.addError({
                        node: node,
                        message: 'The tag "' + tagName + '" in taglib "' + getTaglibPath(tagDef.taglibId) + '" does not support attribute "' + attrName + '"'
                    });

                }
                return;
            }

            attr.def = attrDef;

            foundAttrs[attrName] = true;
        });

        if (tagDef) {
            // Add default values for any attributes. If an attribute has a declared
            // default value and the attribute was not found on the element
            // then add the attribute with the specified default value
            tagDef.forEachAttribute((attrDef) => {
                var attrName = attrDef.name;

                if (attrDef.hasOwnProperty('defaultValue') && !foundAttrs.hasOwnProperty(attrName)) {
                    attributes.push({
                        name: attrName,
                        value: builder.literal(attrDef.defaultValue)
                    });
                } else if (attrDef.required === true) {
                    // TODO Only throw an error if there is no data argument provided (just HTML attributes)
                    if (!foundAttrs.hasOwnProperty(attrName)) {
                        this.addError({
                            node: node,
                            message: 'The "' + attrName + '" attribute is required for tag "' + tagName + '" in taglib "' + getTaglibPath(tagDef.taglibId) + '".'
                        });
                    }
                }
            });

            node.tagDef = tagDef;
        }

        return node;
    }

    isMacro(name) {
        if (!this._macros) {
            return false;
        }

        return this._macros.isMacro(name);
    }

    getRegisteredMacro(name) {
        if (!this._macros) {
            return undefined;
        }

        return this._macros.getRegisteredMacro(name);
    }

    registerMacro(name, params) {
        if (!this._macros) {
            this._macros = macros.createMacrosContext();
        }

        return this._macros.registerMacro(name, params);
    }

    importTemplate(relativePath) {
        ok(typeof relativePath === 'string', '"path" should be a string');
        var builder = this.builder;


        // We want to add the following import:
        // var loadTemplate = __helpers.t;
        // var template = loadTemplate(require.resolve(<templateRequirePath>))

        var loadTemplateVar = this.addStaticVar('loadTemplate', '__helpers.l');
        var requireResolveTemplate = requireResolve(builder, builder.literal(relativePath));
        var loadFunctionCall = builder.functionCall(loadTemplateVar, [ requireResolveTemplate ]);
        var templateVar = this.addStaticVar(removeExt(relativePath), loadFunctionCall);
        return templateVar;
    }
}

module.exports = CompileContext;