'use strict';

var isArray = Array.isArray;
var Node = require('./ast/Node');
var Literal = require('./ast/Literal');
var Identifier = require('./ast/Identifier');
var ok = require('assert').ok;
var Container = require('./ast/Container');
var util = require('util');

class Slot {
    constructor(generator) {
        this._content = null;

        this._start = generator._code.length;
        this._currentIndent = generator._currentIndent;
        this._inFunction = generator.inFunction;
        this._statement = false;
    }

    setContent(content, options) {
        this._content = content;
        if (options && options.statement) {
            this._statement = true;
        }
    }

    generateCode(generator) {
        var content = this._content;

        if (!content) {
            return;
        }

        var isStatement = this._statement;

        generator._currentIndent = this._currentIndent;
        generator.inFunction = this._inFunction;

        var capture = generator._beginCaptureCode();

        if (isArray(content) || (content instanceof Container)) {
            content.forEach((node) => {
                node.statement = isStatement;
                generator.generateCode(node);
            });
        } else {
            content.statement = isStatement;
            generator.generateCode(content);
        }

        var slotCode = capture.end();

        if (!slotCode) {
            return;
        }

        if (this._statement) {
            slotCode += '\n' + this._currentIndent;
        }

        var oldCode = generator._code;
        var beforeCode = oldCode.substring(0, this._start);
        var afterCode = oldCode.substring(this._start);

        generator._code = beforeCode + slotCode + afterCode;
    }
}

class Generator {
    constructor(context, options) {
        options = options || {};
        this.root = null;
        this._indentStr = options.indent != null ? options.indent : '  ';
        this._indentSize = this._indentStr.length;

        this._code = '';
        this._currentIndent = '';
        this.inFunction = false;

        this._bufferedWrites = null;
        this.builder = context.builder;
        this.walker = context.walker;
        this.outputType = options.output || 'html';
        this.context = context;

        ok(this.builder, '"this.builder" is required');

        this._generatorCodeMethodName = 'generate' +
            this.outputType.charAt(0).toUpperCase() +
            this.outputType.substring(1) +
            'Code';

        this._slots = [];
    }

    createSlot() {
        var slot = new Slot(this);
        this._slots.push(slot);
        return slot;
    }

    addStaticVar(name, value) {
        return this.context.addStaticVar(name, value);
    }

    getStaticVars() {
        return this.context.getStaticVars();
    }

    generateCode(node) {
        ok(node != null, '"node" is required');

        if (typeof node === 'string' ||
            typeof node === 'number' ||
            typeof node === 'boolean') {
            this.write(node);
            return;
        } else if (isArray(node) || (node instanceof Container)) {
            node.forEach(this.generateCode, this);
            return;
        }



        var oldCurrentNode = this._currentNode;
        this._currentNode = node;


        var finalNode;

        if (node.getCodeGenerator) {
            let generateCodeFunc = node.getCodeGenerator(this.outputType);
            if (generateCodeFunc) {
                finalNode = generateCodeFunc(node, this);
            }
        }

        if (finalNode && finalNode !== node) {
            this.generateCode(finalNode);
        } else {
            let generateCodeMethod = node.generateCode;

            if (!generateCodeMethod) {
                generateCodeMethod = node[this._generatorCodeMethodName];

                if (!generateCodeMethod) {
                    throw new Error('Missing code for node of type "' +
                        node.type +
                        '" (output type: "' + this.outputType + '"). Node: ' + util.inspect(node));
                }
            }

            finalNode = generateCodeMethod.call(node, this);
            if (finalNode != null) {
                if (finalNode === node) {
                    throw new Error('Invalid node returned. Same node returned:  ' + util.inspect(node));
                }

                // The generateCode function can optionally return either of the following:
                // - An AST node
                // - An array/cointainer of AST nodes
                this.generateCode(finalNode);
            }

        }

        this._currentNode = oldCurrentNode;
    }

    getCode() {
        this.flushBufferedWrites();

        while(this._slots.length) {
            let slots = this._slots;
            this._slots = [];

            for (let i=slots.length-1; i>=0; i--) {
                let slot = slots[i];
                slot.generateCode(this);
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

        var oldCodeLength = this._code.length;

        this.generateStatements(body);

        if (this._bufferedWrites) {
            if (this._code.length !== oldCodeLength) {
                this._code += '\n';
            }
            this.flushBufferedWrites();
        }

        this.decIndent()
            .writeLineIndent()
            .write('}');
    }

    generateStatements(nodes) {
        ok(nodes, '"nodes" expected');
        var firstStatement = true;

        nodes.forEach((node) => {
            if (node instanceof Node) {
                node.statement = true;
            }

            var startCodeLen = this._code.length;

            var currentIndent = this._currentIndent;

            if (!firstStatement) {
                this._write('\n');
            }

            if (!this._code.endsWith(currentIndent)) {
                this.writeLineIndent();
            }

            var startPos = this._code.length;

            this.generateCode(node);

            if (this._code.length === startPos) {
                this._code = this._code.slice(0, startCodeLen);
                return;
            }

            if (!this._code.endsWith('\n')) {
                this._code += ';\n';
            }

            firstStatement = false;
        });
    }

    _beginCaptureCode() {
        var oldCode = this._code;
        this._code = '';

        return {
            generator: this,
            end() {
                var newCode = this.generator._code;
                this.generator._code = oldCode;
                return newCode;
            }
        };
    }

    addWriteLiteral(value) {
        let lastWrite = this._bufferedWrites ?
            this._bufferedWrites[this._bufferedWrites.length-1] :
            null;

        if (lastWrite instanceof Literal) {
            lastWrite.value += value;
            return;
        }

        var output = new Literal({value});

        if (!this._bufferedWrites) {
            this._bufferedWrites = [output];
        } else {
            this._bufferedWrites.push(output);
        }
    }

    addWrite(output) {
        if (output instanceof Literal) {
            let lastWrite = this._bufferedWrites ?
                this._bufferedWrites[this._bufferedWrites.length-1] :
                null;
            if (lastWrite instanceof Literal) {
                lastWrite.value += output.value;
                return;
            }
        }

        if (!this._bufferedWrites) {
            this._bufferedWrites = [output];
        } else {
            this._bufferedWrites.push(output);
        }
    }

    flushBufferedWrites(addSeparator) {
        var bufferedWrites = this._bufferedWrites;

        if (!bufferedWrites) {
            return;
        }

        this._bufferedWrites = null;

        if (!addSeparator && !this._code.endsWith(this._currentIndent)) {
            this.writeLineIndent();
        }

        var len = bufferedWrites.length;

        for (var i=0; i<len; i++) {
            var write = bufferedWrites[i];

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
            this._write('\n' + this._currentIndent);
        }
    }

    write(code) {
        if (this._bufferedWrites) {
            this.flushBufferedWrites(true /* add separator */);
        }
        this._code += code;
        return this;
    }

    _write(code) {
        this._code += code;
        return this;
    }

    incIndent(count) {
        if (count != null) {
            for (let i=0; i<count; i++) {
                this._currentIndent += ' ';
            }
        } else {
            this._currentIndent += this._indentStr;
        }

        return this;
    }

    decIndent(count) {
        if (count == null) {
            count = this._indentSize;
        }

        this._currentIndent = this._currentIndent.substring(
            0,
            this._currentIndent.length - count);

        return this;
    }

    writeLineIndent() {
        this._code += this._currentIndent;
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
            this.write(']\n');
        } else if (typeof value === 'number') {
            this.write(value.toString());
        } else if (typeof value === 'object') {
            this.write('{\n');
            this.incIndent();

            let keys = Object.keys(value);

            for (let i=0; i<keys.length; i++) {
                let k = keys[i];
                let v = value[k];
                this.writeLineIndent();
                this.write(JSON.stringify(k) + ': ');
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
        }
    }

    isPreserveWhitespaceEnabled() {
        return false;
    }

    addError(message, code) {
        ok('"message" is required');

        var node = this._currentNode;

        if (typeof message === 'object') {
            var errorInfo = message;
            errorInfo.node = node;
            this.context.addError(errorInfo);
        } else {
            this.context.addError({node, code, message});
        }
    }
}

module.exports = Generator;