'use strict';

var ok = require('assert').ok;
var path = require('path');
var complain = require('complain');
var taglibLookup = require('./taglib-lookup');
var charProps = require('char-props');

var UniqueVars = require('./util/UniqueVars');
var PosInfo = require('./util/PosInfo');
var CompileError = require('./CompileError');
var path = require('path');
var Node = require('./ast/Node');
var macros = require('./util/macros');
var extend = require('raptor-util/extend');
var Walker = require('./Walker');
var EventEmitter = require('events').EventEmitter;
var utilFingerprint = require('./util/finger-print');
var htmlElements = require('./util/html-elements');
var markoModules = require('./modules');

const markoPkgVersion = require('../../package.json').version;
const rootDir = path.join(__dirname, '../');
const isDebug = require('../build.json').isDebug;

const FLAG_PRESERVE_WHITESPACE = 'PRESERVE_WHITESPACE';

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
    'createInlineTemplate': {
        vdom: { module: 'marko/runtime/vdom/helper-createInlineTemplate'},
        html: { module: 'marko/runtime/html/helper-createInlineTemplate'}
    },
    'defineComponent': {
        module: 'marko/components/helpers',
        method: 'c'
    },
    'defineComponent-legacy': {
        module: 'marko/components/legacy/helpers',
        method: 'c'
    },
    'defineWidget-legacy': {
        module: 'marko/components/legacy/helpers',
        method: 'w'
    },
    'escapeXml': 'x',
    'escapeXmlAttr': 'xa',
    'escapeScript': 'xs',
    'escapeStyle': 'xc',
    'forEach': 'f',
    'forEachProp': { module: 'marko/runtime/helper-forEachProperty' },
    'forEachPropStatusVar': { module: 'marko/runtime/helper-forEachPropStatusVar' },
    'forEachWithStatusVar': { module: 'marko/runtime/helper-forEachWithStatusVar' },
    'forRange': { module: 'marko/runtime/helper-forRange' },
    'include': 'i',
    'loadNestedTag': { module: 'marko/runtime/helper-loadNestedTag' },
    'loadTag': 't',
    'loadTemplate': { module: 'marko/runtime/helper-loadTemplate' },
    'mergeNestedTagsHelper': { module: 'marko/runtime/helper-mergeNestedTags' },
    'merge': { module: 'marko/runtime/helper-merge' },
    'renderer': {
        module: 'marko/components/helpers',
        method: 'r'
    },
    'rendererLegacy': {
        module: 'marko/components/legacy/helpers',
        method: 'r'
    },
    'registerComponent': {
        module: 'marko/components/helpers',
        method: 'rc'
    },
    'renderComponent': { module: 'marko/components/taglib/helpers/renderComponent' },
    'str': 's',
    'styleAttr': {
        vdom: { module: 'marko/runtime/vdom/helper-styleAttr'},
        html: 'sa'
    },
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
        this._dataStacks = {};
        this.meta = {};

        this.options = options || {};

        const writeVersionComment = this.options.writeVersionComment;

        this.root = undefined; // root will be set by the Compiler
        this.target = this.options.browser ? 'browser' : 'server';
        this.outputType = this.options.output || 'html';
        this.compilerType = this.options.compilerType || 'marko';
        this.compilerVersion = this.options.compilerVersion || markoPkgVersion;
        this.writeVersionComment = writeVersionComment !== 'undefined' ? writeVersionComment : true;
        this.ignoreUnrecognizedTags = this.options.ignoreUnrecognizedTags || false;

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
        this.useMeta = this.options.meta !== false;
        this.markoModulePrefix = isDebug ? 'marko/src/' : 'marko/dist/';

        this._moduleRuntimeTarget = this.markoModulePrefix + (this.outputType === 'vdom' ? 'vdom' : 'html');
        this.unrecognizedTags = [];
        this._parsingFinished = false;

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

    getNodePos(node) {
        if (node.pos) {
            return this.getPosInfo(node.pos);
        } else {
            return new PosInfo(this.filename);
        }
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

    pushData(key, data) {
        var dataStack = this._dataStacks[key];
        if (!dataStack) {
            dataStack = this._dataStacks[key] = [];
        }

        dataStack.push(data);

        return {
            pop: () => {
                this.popData(key);
            }
        };
    }

    popData(key) {
        var dataStack = this._dataStacks[key];

        if (!dataStack || dataStack.length === 0) {
            throw new Error('No data pushed for "' + key + '"'); }

        dataStack.pop();

        if (dataStack.length === 0) {
            delete this.data[key];
        }
    }

    getData(name) {
        var dataStack = this._dataStacks[name];
        if (dataStack) {
            return dataStack[dataStack.length - 1];
        }

        return this.data[name];
    }

    deprecate(message, node) {
        var currentNode = node || this._currentNode;
        var location = currentNode && currentNode.pos;

        if (location != null) {
            location = this.getPosInfo(location).toString();
        }

        complain(message, { location });
    }

    addError(errorInfo) {
        if (errorInfo instanceof Node) {
            let node = arguments[0];
            let message = arguments[1];
            let code = arguments[2];
            let pos = arguments[3];
            errorInfo = {
                node,
                message,
                code,
                pos
            };
        } else if (typeof errorInfo === 'string') {
            let message = arguments[0];
            let code = arguments[1];
            let pos = arguments[2];

            errorInfo = {
                message,
                code,
                pos
            };
        }

        if(errorInfo && !errorInfo.node) {
            errorInfo.node = this._currentNode;
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
        if (targetFilename.startsWith(rootDir)) {
            var deresolved = this.markoModulePrefix + targetFilename.substring(rootDir.length);
            var ext = path.extname(deresolved);
            if (ext === '.js') {
                deresolved = deresolved.slice(0, 0 - ext.length);
            }
            return deresolved;
        }

        return markoModules.deresolve(targetFilename, this.dirname);
    }

    importModule(varName, path) {
        if (typeof path !== 'string') {
            throw new Error('"path" should be a string');
        }

        if (path === 'marko') {
            path = this.markoModulePrefix;
        } else if (path.startsWith('marko/')) {
            if (path.startsWith('marko/src/') || path.startsWith('marko/dist/')) {

            } else {
                path = this.markoModulePrefix + path.substring('marko/'.length);
            }
        }

        var key = path + ':' + (varName != null);

        var varId = this._imports[key];
        if (varId === undefined) {
            var builder = this.builder;

            var requireFuncCall = builder.require(builder.literal(path));

            if (varName) {
                this._imports[key] = varId = this.addStaticVar(varName, requireFuncCall);

            } else {
                this.addStaticCode(requireFuncCall);
                this._imports[key] = null;
            }
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

    addErrorUnrecognizedTag(tagName, elNode) {
        this.addError({
            node: elNode,
            message: 'Unrecognized tag: ' + tagName + ' - More details: https://github.com/marko-js/marko/wiki/Error:-Unrecognized-Tag'
        });
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

        if (elDef.tagName === '') {
            elDef.tagName = tagName = 'assign';
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

        this._currentNode = elNode;

        var tagDef;

        var taglibLookup = this.taglibLookup;

        if (typeof tagName === 'string' && tagName.startsWith('@')) {
            // NOTE: The tag definition can't be determined now since it will be
            //       determined by the parent custom tag.
            node = builder.customTag(elNode);
            node.body = node.makeContainer(node.body.items);
        } else {
            if (typeof tagName === 'string') {
                tagDef = taglibLookup.getTag(tagName);
                if (!tagDef &&
                    !this.isMacro(tagName) &&
                    tagName.indexOf(':') === -1 &&
                    !htmlElements.isRegisteredElement(tagName, this.dirname) &&
                    !this.ignoreUnrecognizedTags) {

                    if (this._parsingFinished) {
                        this.addErrorUnrecognizedTag(tagName, elNode);
                    } else {
                        // We don't throw an error right away since the tag
                        // may be a macro that gets registered later
                        this.unrecognizedTags.push({
                            node: elNode,
                            tagName: tagName
                        });
                    }

                }
            }

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

        var templateVar;

        if (this.options.browser || this.options.requireTemplates) {
            // When compiling a Marko template for the browser we just use `require('./template.marko')`
            templateVar = this.addStaticVar(varName, builder.require(builder.literal(relativePath)));
        } else {
            // When compiling a Marko template for the server we just use `loadTemplate(require.resolve('./template.marko'))`
            let loadTemplateArg = requireResolve(builder, builder.literal(relativePath));
            let loadFunctionCall = builder.functionCall(this.helper('loadTemplate'), [ loadTemplateArg ]);
            templateVar = this.addStaticVar(varName, loadFunctionCall);
        }

        this.pushMeta('tags', builder.literal(relativePath), true);

        return templateVar;
    }

    addDependency(path, type, options) {
        var dependency;
        if(typeof path === 'object') {
            dependency = path;
        } else {
            dependency = (type ? type+':' : '') + path;
        }
        this.pushMeta('deps', dependency, true);
    }

    pushMeta(key, value, unique) {
        var property;

        property = this.meta[key];

        if(!property) {
            this.meta[key] = [value];
        } else if(!unique || !property.some(e => JSON.stringify(e) === JSON.stringify(value))) {
            property.push(value);
        }
    }

    setMeta(key, value) {
        this.meta[key] = value;
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

    getStaticNodes(additionalVars) {
        let builder = this.builder;
        let staticNodes = [];
        let staticVars = this.getStaticVars();

        let staticVarNodes = Object.keys(staticVars).map((varName) => {
            var varInit = staticVars[varName];
            return builder.variableDeclarator(varName, varInit);
        });

        if(additionalVars) {
            staticVarNodes = additionalVars.concat(staticVarNodes);
        }

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
            var helperInfo = helpers[name];

            if (helperInfo && typeof helperInfo === 'object') {
                if (!helperInfo.module) {
                    helperInfo = helperInfo[this.outputType];
                }
            }

            if (!helperInfo) {
                throw new Error('Invalid helper: ' + name);
            }

            if (typeof helperInfo === 'string') {
                let methodName = helperInfo;
                var methodIdentifier = this.builder.identifier(methodName);

                helperIdentifier = this.addStaticVar(
                    'marko_' + name,
                    this.builder.memberExpression(this.helpersIdentifier, methodIdentifier));
            } else if (helperInfo && helperInfo.module) {
                if (helperInfo.method) {
                    let moduleIdentifier = this.importModule('marko_' + helperInfo.module, helperInfo.module);
                    helperIdentifier = this.addStaticVar(
                        'marko_' + name,
                        this.builder.memberExpression(moduleIdentifier, helperInfo.method));
                } else {
                    helperIdentifier = this.importModule('marko_' + name, helperInfo.module);
                }
            } else {
                throw new Error('Invalid helper: ' + name);
            }



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

    isBrowserTarget() {
        return this.target === 'browser';
    }

    isServerTarget() {
        return this.target === 'server';
    }
}

CompileContext.prototype.util = {
    isValidJavaScriptIdentifier: require('./util/isValidJavaScriptIdentifier'),
    isJavaScriptReservedWord: require('./util/isJavaScriptReservedWord')
};

module.exports = CompileContext;
