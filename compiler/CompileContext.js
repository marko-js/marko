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
var extend = require('raptor-util/extend');
var Walker = require('./Walker');
var EventEmitter = require('events').EventEmitter;
var utilFingerprint = require('./util/fingerprint');

const FLAG_PRESERVE_WHITESPACE = 'PRESERVE_WHITESPACE';

const deresolveOptions = {
    shouldRemoveExt(ext) {
        return ext === '.js' || ext === '.json' || ext === '.es6';
    }
};

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

const helpers = {
    'attr': 'a',
    'attrs': 'as',
    'classAttr': 'ca',
    'classList': 'cl',
    'const': 'const',
    'createElement': 'e',
    'createInlineTemplate': 'inline',
    'escapeXml': 'x',
    'escapeXmlAttr': 'xa',
    'escapeScript': 'xs',
    'forEach': 'f',
    'forEachProp': 'fp',
    'forEachWithStatusVar': 'fv',
    'include': 'i',
    'loadTag': 't',
    'loadTemplate': 'l',
    'merge': 'm',
    'str': 's',
    'styleAttr': 'sa',
    'createText': 't'
};

class CompileContext extends EventEmitter {
    constructor(src, filename, builder, options) {
        super();
        ok(typeof src === 'string', '"src" string is required');
        ok(filename, '"filename" is required');

        this.src = src;
        this.filename = filename;
        this.builder = builder;

        this.dirname = path.dirname(filename);
        this.taglibLookup = taglibLookup.buildLookup(this.dirname);
        this.data = {};
        this.meta = null;

        this.options = options || {};

        this.outputType = this.options.output || 'html';

        this._vars = {};
        this._uniqueVars = new UniqueVars();
        this._staticVars = {};
        this._staticCode = null;
        this._uniqueStaticVars = new UniqueVars();
        this._srcCharProps = null;
        this._flags = {};
        this._errors = [];
        this._macros = null;
        this._preserveWhitespace = null;
        this._preserveComments = null;
        this.inline = this.options.inline === true;
        this.useMeta = this.options.meta;
        this._moduleRuntimeTarget = this.outputType === 'vdom' ? 'marko/vdom' : 'marko/html';

        this._helpersIdentifier = null;

        if (this.options.preserveWhitespace) {
            this.setPreserveWhitespace(true);
        }

        this._helpers = {};
        this._imports = {};
        this._fingerprint = undefined;
        this._optimizers = undefined;
    }

    setInline(isInline) {
        this.inline = isInline === true;
    }

    getPosInfo(pos) {
        var srcCharProps = this._srcCharProps || (this._srcCharProps = charProps(this.src));
        let line = srcCharProps.lineAt(pos)+1;
        let column = srcCharProps.columnAt(pos);
        return new PosInfo(this.filename, line, column);
    }

    setFlag(name) {
        this.pushFlag(name);
    }

    clearFlag(name) {
        delete this._flags[name];
    }

    isFlagSet(name) {
        return this._flags.hasOwnProperty(name);
    }

    pushFlag(name) {
        if (this._flags.hasOwnProperty(name)) {
            this._flags[name]++;
        } else {
            this._flags[name] = 1;
        }
    }

    popFlag(name) {
        if (!this._flags.hasOwnProperty(name)) {
            throw new Error('popFlag() called for "' + name + '" when flag was not set');
        }

        if (--this._flags[name] === 0) {
            delete this._flags[name];
        }
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
        return deresolve(targetFilename, this.dirname, deresolveOptions);
    }

    importModule(varName, path) {
        if (typeof path !== 'string') {
            throw new Error('"path" should be a string');
        }

        var varId = this._imports[path];

        if (!varId) {
            var builder = this.builder;
            var requireFuncCall = this.builder.require(builder.literal(path));
            this._imports[path] = varId = this.addStaticVar(varName, requireFuncCall);
        }

        return varId;
    }

    addVar(name, init) {
        var actualVarName = this._uniqueVars.addVar(name, init);
        this._vars[actualVarName] = init;
        return this.builder.identifier(actualVarName);
    }

    getVars() {
        return this._vars;
    }

    addStaticVar(name, init) {
        var actualVarName = this._uniqueStaticVars.addVar(name, init);
        this._staticVars[actualVarName] = init;
        return this.builder.identifier(actualVarName);
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

    getTagDef(tagName) {
        var taglibLookup = this.taglibLookup;

        if (typeof tagName === 'string') {
            return taglibLookup.getTag(tagName);
        } else {
            let elNode = tagName;
            if (elNode.tagDef) {
                return elNode.tagDef;
            }

            return taglibLookup.getTag(elNode.tagName);
        }
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

        if (!attributes) {
            attributes = elDef.attributes = [];
        } else if (typeof attributes === 'object') {
            if (!Array.isArray(attributes)) {
                attributes = elDef.attributes = Object.keys(attributes).map((attrName) => {
                    var attrDef = {
                        name: attrName
                    };

                    var val = attributes[attrName];
                    if (val == null) {

                    } if (val instanceof Node) {
                        attrDef.value = val;
                    } else {
                        extend(attrDef, val);
                    }

                    return attrDef;
                });
            }
        } else {
            throw new Error('Invalid attributes');
        }

        var node;
        var elNode = builder.htmlElement(elDef);
        elNode.pos = elDef.pos;

        var taglibLookup = this.taglibLookup;
        var tagDef = typeof tagName === 'string' ? taglibLookup.getTag(tagName) : null;
        if (tagDef) {
            var nodeFactoryFunc = tagDef.getNodeFactory();
            if (nodeFactoryFunc) {
                var newNode = nodeFactoryFunc(elNode, this);
                if (!(newNode instanceof Node)) {
                    throw new Error('Invalid node returned from node factory for tag "' + tagName + '".');
                }

                if (newNode != node) {
                    // Make sure the body container is associated with the correct node
                    if (newNode.body && newNode.body !== node) {
                        newNode.body = newNode.makeContainer(newNode.body.items);
                    }
                    node = newNode;
                }
            }
        }

        if (!node) {
            node = elNode;
        }

        if (tagDef && tagDef.noOutput) {
            node.noOutput = true;
        }

        node.pos = elDef.pos;

        var foundAttrs = {};

        // Validate the attributes
        attributes.forEach((attr) => {
            let attrName = attr.name;
            if (!attrName) {
                // Attribute will be name for placeholder attributes. For example: <div ${data.myAttrs}>
                return;
            }
            let attrDef = taglibLookup.getAttribute(tagName, attrName);
            if (!attrDef) {
                if (tagDef) {
                    if (node.removeAttribute) {
                        node.removeAttribute(attrName);
                    }

                    // var isAttrForTaglib = compiler.taglibs.isTaglib(attrUri);
                    //Tag doesn't allow dynamic attributes
                    this.addError({
                        node: node,
                        message: 'The tag "' + tagName + '" in taglib "' + getTaglibPath(tagDef.taglibId) + '" does not support attribute "' + attrName + '"'
                    });

                }
                return;
            }

            if (attrDef.setFlag) {
                node.setFlag(attrDef.setFlag);
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

    importTemplate(relativePath, varName) {
        ok(typeof relativePath === 'string', '"path" should be a string');
        var builder = this.builder;
		varName = varName || removeExt(path.basename(relativePath)) + '_template';

        var requireResolveTemplate = requireResolve(builder, builder.literal(relativePath));
        var loadFunctionCall = builder.functionCall(this.helper('loadTemplate'), [ requireResolveTemplate ]);
        var templateVar = this.addStaticVar(varName, loadFunctionCall);

        this.pushMeta('tags', builder.literal(relativePath), true);

        return templateVar;
    }

    addDependency(path, type, options) {
        var dependency = (type ? type+':' : '') + path;
        this.pushMeta('deps', this.builder.literal(dependency), true);
    }

    pushMeta(key, value, unique) {
        var builder = this.builder;
        var property;

        if(!this.meta) {
            this.meta = builder.objectExpression();
        }

        property = this.meta.properties.find(p => p.key.name === key);

        if(!property) {
            property = builder.property(key, builder.arrayExpression(value));
            this.meta.properties.push(property);
        } else if(!unique || !property.value.elements.some(e => e.toString() === value.toString())) {
            property.value.elements.push(value);
        }
    }

    setMeta(key, value) {
        var builder = this.builder;
        var property;

        if(!this.meta) {
            this.meta = builder.objectExpression();
        }

        property = this.meta.properties.find(p => p.key.value === key);

        if(!property) {
            property = builder.property(key, value);
        } else {
            property.value = value;
        }
    }

    setPreserveWhitespace(preserveWhitespace) {
        this._preserveWhitespace = preserveWhitespace;
    }

    beginPreserveWhitespace() {
        this.pushFlag(FLAG_PRESERVE_WHITESPACE);
    }

    endPreserveWhitespace() {
        this.popFlag(FLAG_PRESERVE_WHITESPACE);
    }

    isPreserveWhitespace() {
        if (this.isFlagSet(FLAG_PRESERVE_WHITESPACE) || this._preserveWhitespace === true) {
            return true;
        }
    }

    setPreserveComments(preserveComments) {
        this._preserveComments = preserveComments;
    }

    isPreserveComments() {
        return this._preserveComments === true;
    }

    createWalker(options) {
        return new Walker(options);
    }

    /**
     * Statically resolves a path if it is a literal string. Otherwise, it returns the input expression.
     */
    resolvePath(pathExpression) {
        ok(pathExpression, '"pathExpression" is required');

        if (pathExpression.type === 'Literal') {
            let path = pathExpression.value;
            if (typeof path === 'string') {
                return this.addStaticVar(path, this.builder.requireResolve(pathExpression));
            }
        }
        return pathExpression;
    }

    resolveTemplate(pathExpression) {
        ok(pathExpression, '"pathExpression" is required');

        if (pathExpression.type === 'Literal') {
            let path = pathExpression.value;
            if (typeof path === 'string') {
                return this.importTemplate(path);
            }
        }

        return pathExpression;
    }

    getStaticNodes() {
        let builder = this.builder;
        let staticNodes = [];
        let staticVars = this.getStaticVars();

        let staticVarNodes = Object.keys(staticVars).map((varName) => {
            var varInit = staticVars[varName];
            return builder.variableDeclarator(varName, varInit);
        });


        if (staticVarNodes.length) {
            staticNodes.push(this.builder.vars(staticVarNodes));
        }

        var staticCodeArray = this.getStaticCode();

        if (staticCodeArray) {
            staticNodes = staticNodes.concat(staticCodeArray);
        }

        return staticNodes;
    }

    get helpersIdentifier() {
        if (!this._helpersIdentifier) {
            var target = this.outputType === 'vdom' ? 'marko/runtime/vdom/helpers' : 'marko/runtime/html/helpers';
            this._helpersIdentifier = this.importModule('marko_helpers', target);
        }
        return this._helpersIdentifier;
    }

    helper(name) {
        var helperIdentifier = this._helpers[name];
        if (!helperIdentifier) {
            var methodName = helpers[name];
            if (!methodName) {
                throw new Error('Invalid helper: ' + name);
            }
            var methodIdentifier = this.builder.identifier(methodName);

            helperIdentifier = this.addStaticVar(
                'marko_' + name,
                this.builder.memberExpression(this.helpersIdentifier, methodIdentifier));

            this._helpers[name] = helperIdentifier;
        }

        return helperIdentifier;
    }

    getFingerprint(len) {
        var fingerprint = this._fingerprint;
        if (!fingerprint) {
            this._fingerprint = fingerprint = utilFingerprint(this.src);
        }

        if (len == null || len >= this._fingerprint) {
            return fingerprint;
        } else {
            return fingerprint.substring(0, len);
        }
    }

    addOptimizer(optimizer) {
        if (this._optimizers) {
            this._optimizers.push(optimizer);
        } else {
            this._optimizers = [optimizer];
        }
    }

    optimize(rootNode) {
        if (this._optimizers) {
            this._optimizers.forEach((optimizer) => {
                optimizer.optimize(rootNode, this);
            });
        }
    }

    getModuleRuntimeTarget() {
        return this._moduleRuntimeTarget;
    }
}

CompileContext.prototype.util = {
    isValidJavaScriptIdentifier: require('./util/isValidJavaScriptIdentifier'),
    isJavaScriptReservedWord: require('./util/isJavaScriptReservedWord')
};

module.exports = CompileContext;