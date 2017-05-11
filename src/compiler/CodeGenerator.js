'use strict';

const isArray = Array.isArray;
const Node = require('./ast/Node');
const Literal = require('./ast/Literal');
const Identifier = require('./ast/Identifier');
const HtmlElement = require('./ast/HtmlElement');
const Html = require('./ast/Html');
const ok = require('assert').ok;
const Container = require('./ast/Container');
const createError = require('raptor-util/createError');

class GeneratorEvent {
    constructor(node, codegen) {
        this.node = node;
        this.codegen = codegen;

        this.isBefore = true;
        this.builder = codegen.builder;
        this.context = codegen.context;

        this.insertedNodes = null;
    }

    insertCode(newCode) {
        if (!this.insertedNodes) {
            this.insertedNodes = [];
        }
        this.insertedNodes = this.insertedNodes.concat(newCode);
    }
}

class FinalNodes {
    constructor() {
        this.nodes = [];
        this.nodes._finalNode = true; // Mark the array as a collection of final nodes
        this.lastNode = null;
    }

    push(node) {
        if (!node) {
            return;
        }

        if (node instanceof Html) {
            if (this.lastNode instanceof Html) {
                this.lastNode.append(node);
                return;
            }
        }

        if (node.setFinalNode) {
            node.setFinalNode(true);
        }

        this.lastNode = node;
        this.nodes.push(node);
    }
}

class CodeGenerator {
    constructor(context, options) {
        options = options || {};
        this.root = null;

        this._code = '';
        this.currentIndent = '';
        this.inFunction = false;

        this._doneListeners = [];


        this.builder = context.builder;

        this.context = context;

        ok(this.builder, '"this.builder" is required');

        this._codegenCodeMethodName = 'generate' +
            context.outputType.toUpperCase() +
            'Code';
    }

    addVar(name, value) {
        return this.context.addVar(name, value);
    }

    addStaticVar(name, value) {
        return this.context.addStaticVar(name, value);
    }

    addStaticCode(code) {
        this.context.addStaticCode(code);
    }

    addDependency(path, type, options) {
        this.context.addDependency(path, type, options);
    }

    pushMeta(key, value, unique) {
        this.context.pushMeta(key, value, unique);
    }

    setMeta(key, value) {
        this.context.setMeta(key, value);
    }

    getEscapeXmlAttrVar() {
        return this.context.getEscapeXmlAttrVar();
    }

    importModule(varName, path) {
        return this.context.importModule(varName, path);
    }

    _invokeCodeGenerator(func, node, isMethod) {
        try {
            if (isMethod) {
                return func.call(node, this);
            } else {
                return func.call(node, node, this);
            }
        } catch(err) {
            var errorMessage = 'Generating code for ';

            if (node instanceof HtmlElement) {
                errorMessage += '<'+node.tagName+'> tag';
            } else {
                errorMessage += node.type + ' node';
            }

            if (node.pos) {
                errorMessage += ' ('+this.context.getPosInfo(node.pos)+')';
            }

            errorMessage += ' failed. Error: ' + err;

            throw createError(errorMessage, err /* cause */);
        }
    }

    _generateCode(node, finalNodes) {
        if (isArray(node)) {
            node.forEach((child) => {
                this._generateCode(child, finalNodes);
            });
            return;
        } else if (node instanceof Container) {
            node.forEach((child) => {
                if (child.container === node) {
                    this._generateCode(child, finalNodes);
                }
            });
            return;
        }

        if (node == null) {
            return;
        }

        if (typeof node === 'string' || node._finalNode || !(node instanceof Node)) {
            finalNodes.push(node);
            return;
        }

        if (node._normalizeChildTextNodes) {
            node._normalizeChildTextNodes(this.context);
        }

        let oldCurrentNode = this._currentNode;
        this._currentNode = node;

        var beforeAfterEvent = new GeneratorEvent(node, this);

        var isWhitespacePreserved = node.isPreserveWhitespace();

        if (isWhitespacePreserved) {
            this.context.beginPreserveWhitespace();
        }

        beforeAfterEvent.isBefore = true;
        beforeAfterEvent.node.emit('beforeGenerateCode', beforeAfterEvent);
        this.context.emit('beforeGenerateCode:' + beforeAfterEvent.node.type, beforeAfterEvent);
        this.context.emit('beforeGenerateCode', beforeAfterEvent);

        if (beforeAfterEvent.insertedNodes) {
            this._generateCode(beforeAfterEvent.insertedNodes, finalNodes);
            beforeAfterEvent.insertedNodes = null;
        }

        let codeGeneratorFunc;
        let generatedCode;

        if (node.getCodeGenerator) {
            codeGeneratorFunc = node.getCodeGenerator(this.outputType);

            if (codeGeneratorFunc) {
                node.setCodeGenerator(null);

                generatedCode = this._invokeCodeGenerator(codeGeneratorFunc, node, false);

                if (generatedCode === null) {
                    node = null;
                } else if (generatedCode !== undefined && generatedCode !== node) {
                    node = null;
                    this._generateCode(generatedCode, finalNodes);
                }
            }
        }

        if (node != null) {
            codeGeneratorFunc = node.generateCode;

            if (!codeGeneratorFunc) {
                codeGeneratorFunc = node[this._codegenCodeMethodName];
            }

            if (codeGeneratorFunc) {
                generatedCode = this._invokeCodeGenerator(codeGeneratorFunc, node, true);

                if (generatedCode === undefined || generatedCode === node) {
                    finalNodes.push(node);
                } else if (generatedCode === null) {
                    // If nothing was returned then don't generate any code
                } else {
                    this._generateCode(generatedCode, finalNodes);
                }
            } else {
                finalNodes.push(node);
            }
        }

        beforeAfterEvent.isBefore = false;
        beforeAfterEvent.node.emit('afterGenerateCode', beforeAfterEvent);
        this.context.emit('afterGenerateCode:' + beforeAfterEvent.node.type, beforeAfterEvent);
        this.context.emit('afterGenerateCode', beforeAfterEvent);

        if (beforeAfterEvent.insertedNodes) {
            this._generateCode(beforeAfterEvent.insertedNodes, finalNodes);
            beforeAfterEvent.insertedNodes = null;
        }

        if (isWhitespacePreserved) {
            this.context.endPreserveWhitespace();
        }

        this._currentNode = oldCurrentNode;
    }

    generateCode(node) {
        if (!node) {
            return null;
        }

        if (node._finalNode) {
            return node;
        }

        let finalNodes = new FinalNodes();

        var isList = typeof node.forEach === 'function';

        this._generateCode(node, finalNodes);

        finalNodes = finalNodes.nodes;

        if (!isList) {
            if (finalNodes.length === 0) {
                return null;
            } else if (finalNodes.length === 1) {
                return finalNodes[0];
            }
        }

        return finalNodes;
    }

    isLiteralNode(node) {
        return node instanceof Literal;
    }

    isIdentifierNode(node) {
        return node instanceof Identifier;
    }

    isPreserveWhitespaceEnabled() {
        return false;
    }

    addError(message, code) {
        ok('"message" is required');

        let node = this._currentNode;

        if (typeof message === 'object') {
            let errorInfo = message;
            errorInfo.node = node;
            this.context.addError(errorInfo);
        } else {
            this.context.addError({node, message, code});
        }
    }

    onDone(listenerFunc) {
        this._doneListeners.push(listenerFunc);
    }

    getRequirePath(targetFilename) {
        return this.context.getRequirePath(targetFilename);
    }

    resolvePath(pathExpression) {
        return this.context.resolvePath(pathExpression);
    }
}

module.exports = CodeGenerator;