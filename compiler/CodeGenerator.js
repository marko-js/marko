'use strict';

const isArray = Array.isArray;
const Node = require('./ast/Node');
const Literal = require('./ast/Literal');
const Identifier = require('./ast/Identifier');
const HtmlElement = require('./ast/HtmlElement');
const ok = require('assert').ok;
const Container = require('./ast/Container');
const util = require('util');
const isValidJavaScriptVarName = require('./util/isValidJavaScriptVarName');
const createError = require('raptor-util/createError');

class GeneratorEvent {
    constructor(node, codegen) {
        this.node = node;
        this.codegen = codegen;

        this.isBefore = true;
        this.builder = codegen.builder;
        this.context = codegen.context;
    }

    insertCode(newCode) {
        this.codegen.generateStatements(newCode);

        if (this.isBefore) {
            if (!this.codegen._code.endsWith(this.codegen.currentIndent)) {
                this.codegen.writeLineIndent();
            }
        }
    }
}

class Slot {
    constructor(codegen, slotNode) {
        this._content = null;

        this._start = codegen._code.length;
        codegen.write('/* slot */');

        if (slotNode.statement) {
            codegen.write('\n');
        }
        this._end = codegen._code.length;

        this.currentIndent = codegen.currentIndent;
        this._inFunction = codegen.inFunction;
        this._statement = slotNode.statement;
    }

    setContent(content) {
        this._content = content;
    }

    generateCode(codegen) {
        let content = this._content;
        let slotCode;

        if (content) {
            let isStatement = this._statement;

            codegen.currentIndent = this.currentIndent;
            codegen.inFunction = this._inFunction;

            let capture = codegen._beginCaptureCode();

            if (isStatement) {
                codegen.generateStatements(content);
            } else {
                codegen.generateCode(content);
            }

            slotCode = capture.end();

            if (isStatement && slotCode.startsWith(codegen.currentIndent)) {
                slotCode = slotCode.substring(codegen.currentIndent.length);
            }
        }



        let oldCode = codegen._code;
        let beforeCode = oldCode.substring(0, this._start);
        let afterCode = oldCode.substring(this._end);

        if (slotCode) {
            codegen._code = beforeCode + slotCode + afterCode;
        } else {
            let beforeWhitespaceMatches = beforeCode.match(/[\n]\s*$/);
            if (beforeWhitespaceMatches != null) {
                let beforeWhitespace = beforeWhitespaceMatches[0];

                if (afterCode.startsWith(beforeWhitespace)) {
                    afterCode = afterCode.substring(beforeWhitespace.length);
                }
            }
            codegen._code = beforeCode + afterCode;
        }
    }
}

class Generator {
    constructor(context, options) {
        options = options || {};
        this.root = null;
        this._indentStr = options.indent != null ? options.indent : '  ';
        this._indentSize = this._indentStr.length;

        this._code = '';
        this.currentIndent = '';
        this.inFunction = false;

        this._doneListeners = [];

        this._bufferedWrites = null;
        this.builder = context.builder;
        this.outputType = options.output || 'html';
        this.context = context;

        ok(this.builder, '"this.builder" is required');

        this._codegenCodeMethodName = 'generate' +
            this.outputType.charAt(0).toUpperCase() +
            this.outputType.substring(1) +
            'Code';

        this._slots = [];
    }

    beginSlot(slotNode) {
        var addSeparator = slotNode.statement;
        this._flushBufferedWrites(addSeparator);
        let slot = new Slot(this, slotNode);
        this._slots.push(slot);
        return slot;
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

    getEscapeXmlAttrVar() {
        return this.context.getEscapeXmlAttrVar();
    }

    importModule(varName, path) {
        return this.context.importModule(varName, path);
    }

    generateCode(node) {
        ok(node != null, '"node" is required');

        if (typeof node === 'string' ||
            typeof node === 'number' ||
            typeof node === 'boolean') {
            this.write(node);
            return;
        } else if (isArray(node)) {
            node.forEach(this.generateCode, this);
            return;
        } else if (node instanceof Container) {
            node.forEach((child) => {
                if (child.container === node) {
                    this.generateCode(child);
                }
            });
            return;
        }

        let oldCurrentNode = this._currentNode;
        this._currentNode = node;

        let finalNode;
        let generateCodeFunc;
        var isStatement = node.statement;

        var beforeAfterEvent;

        if (node.listenerCount('beforeGenerateCode') || node.listenerCount('afterGenerateCode')) {
            beforeAfterEvent = new GeneratorEvent(node, this);
        }

        if (beforeAfterEvent) {
            beforeAfterEvent.isBefore = true;
            beforeAfterEvent.node.emit('beforeGenerateCode', beforeAfterEvent);
        }

        if (node.getCodeGenerator) {
            generateCodeFunc = node.getCodeGenerator(this.outputType);
            if (generateCodeFunc) {
                try {
                    finalNode = generateCodeFunc(node, this);
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

                if (finalNode === node) {
                    // If the same node was returned then we will generate
                    // code for the node as normal
                    finalNode = null;
                } else if (finalNode == null) {
                    // If nothing was returned then don't generate any code
                    node = null;
                }
            }
        }

        if (finalNode) {
            if (isStatement) {
                this.generateStatements(finalNode);
            } else {
                this.generateCode(finalNode);
            }
        } else if (node) {
            let generateCodeMethod = node.generateCode;

            if (!generateCodeMethod) {
                generateCodeMethod = node[this._codegenCodeMethodName];

                if (!generateCodeMethod) {
                    throw new Error('No code codegen for node of type "' +
                        node.type +
                        '" (output type: "' + this.outputType + '"). Node: ' + util.inspect(node));
                }
            }

            // The generateCode function can optionally return either of the following:
            // - An AST node
            // - An array/cointainer of AST nodes
            finalNode = generateCodeMethod.call(node, this);

            if (finalNode != null) {
                if (finalNode === node) {
                    throw new Error('Invalid node returned. Same node returned:  ' + util.inspect(node));
                }

                if (isStatement) {
                    this.generateStatements(finalNode);
                } else {
                    this.generateCode(finalNode);
                }
            }
        }

        if (beforeAfterEvent) {
            beforeAfterEvent.isBefore = false;
            beforeAfterEvent.node.emit('afterGenerateCode', beforeAfterEvent);
        }

        this._currentNode = oldCurrentNode;
    }

    getCode() {
        this._flushBufferedWrites();

        while(this._doneListeners.length || this._slots.length) {

            let doneListeners = this._doneListeners;
            if (doneListeners.length) {
                this._doneListeners = [];

                for (let i=0; i<doneListeners.length; i++) {
                    let doneListener = doneListeners[i];
                    doneListener(this);
                }
            }

            let slots = this._slots;

            if (slots.length) {
                this._slots = [];

                for (let i=slots.length-1; i>=0; i--) {
                    let slot = slots[i];
                    slot.generateCode(this);
                }
            }
        }

        return this._code;
    }

    generateBlock(body) {
        if (!body) {
            this.write('{}');
            return;
        }

        if (typeof body === 'function') {
            body = body();
        }

        if (!isArray(body) && !(body instanceof Container)) {
            throw new Error('Invalid body');
        }

        if (body.length === 0) {
            this.write('{}');
            return;
        }

        this.write('{\n')
            .incIndent();

        let oldCodeLength = this._code.length;

        this.generateStatements(body);

        if (this._bufferedWrites) {
            if (this._code.length !== oldCodeLength) {
                this._code += '\n';
            }
            this._flushBufferedWrites();
        }

        this.decIndent()
            .writeLineIndent()
            .write('}');
    }

    generateStatements(nodes) {
        ok(nodes, '"nodes" expected');
        let firstStatement = true;

        if (nodes instanceof Node) {
            nodes = [nodes];
        }

        nodes.forEach((node) => {
            if (node instanceof Node) {
                node.statement = true;
            }

            let startCodeLen = this._code.length;

            let currentIndent = this.currentIndent;

            if (!firstStatement) {
                this._write('\n');
            }

            if (!this._code.endsWith(currentIndent)) {
                this.writeLineIndent();
            }

            let startPos = this._code.length;

            if (Array.isArray(node) || (node instanceof Container)) {
                this.generateStatements(node);
            } else {
                this.generateCode(node);
            }

            if (this._code.length === startPos) {
                // No code was generated. Remove any code that was previously added
                this._code = this._code.slice(0, startCodeLen);
                return;
            }

            if (this._code.endsWith('\n')) {
                // Do nothing
            } else if (this._code.endsWith(';')) {
                this._code += '\n';
            }  else if (this._code.endsWith('\n' + this.currentIndent)) {
                // Do nothing
            } else {
                this._code += ';\n';
            }

            firstStatement = false;
        });
    }

    _beginCaptureCode() {
        let oldCode = this._code;
        this._code = '';

        return {
            codegen: this,
            end() {
                let newCode = this.codegen._code;
                this.codegen._code = oldCode;
                return newCode;
            }
        };
    }

    addWriteLiteral(value) {
        if (!(value instanceof Literal)) {
            value = new Literal({value});
        }

        this.addWrite(value);
    }

    addWrite(output) {
        ok(output, '"output" is required');
        if (output instanceof Literal) {
            let lastWrite = this._bufferedWrites ?
                this._bufferedWrites[this._bufferedWrites.length-1] :
                null;
            if (lastWrite instanceof Literal) {
                lastWrite.value += output.value;
                return;
            }
        } else {
            if (!(output instanceof Node)) {
                throw new Error('Invalid write: ' + JSON.stringify(output, null, 2));
            }
        }

        if (!this._bufferedWrites) {
            this._bufferedWrites = [output];
        } else {
            this._bufferedWrites.push(output);
        }
    }

    _flushBufferedWrites(addSeparator) {
        let bufferedWrites = this._bufferedWrites;

        if (!bufferedWrites) {
            return;
        }

        this._bufferedWrites = null;

        if (!addSeparator && !this._code.endsWith(this.currentIndent)) {
            this.writeLineIndent();
        }

        let len = bufferedWrites.length;

        for (let i=0; i<len; i++) {
            let write = bufferedWrites[i];

            if (i === 0) {
                this._write('out.w(');
            } else {
                this._write(' +\n');
                this.writeLineIndent();
                this._write(this._indentStr);
            }

            this.generateCode(write);
        }

        this._write(');\n');

        if (addSeparator) {
            this._write('\n' + this.currentIndent);
        }
    }

    write(code) {
        if (this._bufferedWrites) {
            this._flushBufferedWrites(true /* add separator */);
        }
        this._code += code;
        return this;
    }

    _write(code) {
        this._code += code;
        return this;
    }

    incIndent(count) {
        this._flushBufferedWrites(true /* add separator */);

        if (count != null) {
            for (let i=0; i<count; i++) {
                this.currentIndent += ' ';
            }
        } else {
            this.currentIndent += this._indentStr;
        }

        return this;
    }

    decIndent(count) {
        if (count == null) {
            count = this._indentSize;
        }

        this.currentIndent = this.currentIndent.substring(
            0,
            this.currentIndent.length - count);

        return this;
    }

    writeLineIndent() {
        this._code += this.currentIndent;
        return this;
    }

    writeIndent() {
        this._code += this._indentStr;
        return this;
    }

    isLiteralNode(node) {
        return node instanceof Literal;
    }

    isIdentifierNode(node) {
        return node instanceof Identifier;
    }

    writeLiteral(value) {
        if (value === null) {
            this.write('null');
        } else if (value === undefined) {
            this.write('undefined');
        } else if (typeof value === 'string') {
            this.write(JSON.stringify(value));
        } else if (value === true) {
            this.write('true');
        } else if (value === false) {
            this.write('false');
        }  else if (isArray(value)) {
            if (value.length === 0) {
                this.write('[]');
                return;
            }

            this.write('[\n');
            this.incIndent();

            for (let i=0; i<value.length; i++) {
                let v = value[i];

                this.writeLineIndent();

                if (v instanceof Node) {
                    this.generateCode(v);
                } else {
                    this.writeLiteral(v);
                }

                if (i < value.length - 1) {
                    this.write(',\n');
                } else {
                    this.write('\n');
                }
            }

            this.decIndent();
            this.writeLineIndent();
            this.write(']');
        } else if (typeof value === 'number') {
            this.write(value.toString());
        } else if (typeof value === 'object') {
            let keys = Object.keys(value);
            if (keys.length === 0) {
                this.write('{}');
                return;
            }

            this.incIndent();
            this.write('{\n');
            this.incIndent();

            for (let i=0; i<keys.length; i++) {
                let k = keys[i];
                let v = value[k];

                this.writeLineIndent();

                if (isValidJavaScriptVarName(k)) {
                    this.write(k + ': ');
                } else {
                    this.write(JSON.stringify(k) + ': ');
                }

                if (v instanceof Node) {
                    this.generateCode(v);
                } else {
                    this.writeLiteral(v);
                }

                if (i < keys.length - 1) {
                    this.write(',\n');
                } else {
                    this.write('\n');
                }
            }

            this.decIndent();
            this.writeLineIndent();
            this.write('}');
            this.decIndent();
        }
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

module.exports = Generator;
