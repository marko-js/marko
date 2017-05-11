'use strict';

const isArray = Array.isArray;
const Node = require('./ast/Node');
const Literal = require('./ast/Literal');
const Identifier = require('./ast/Identifier');
const ok = require('assert').ok;
const Container = require('./ast/Container');
const Comment = require('./ast/Comment');
const isValidJavaScriptVarName = require('./util/isValidJavaScriptVarName');

class CodeWriter {
    constructor(options, builder) {
        ok(builder, '"builder" is required');
        options = options || {};
        this.builder = builder;
        this.root = null;
        this._indentStr = options.indent != null ? options.indent : '  ';
        this._indentSize = this._indentStr.length;

        this._code = '';
        this.currentIndent = '';
    }

    getCode() {
        return this._code;
    }

    writeBlock(body) {
        if (!body) {
            this.write('{}');
            return;
        }

        if (typeof body === 'function') {
            body = body();
        }

        if (!body ||
            (Array.isArray(body) && body.length === 0) ||
            (body instanceof Container && body.length === 0)) {
            this.write('{}');
            return;
        }

        this.write('{\n')
            .incIndent();

        this.writeStatements(body);

        this.decIndent()
            .writeLineIndent()
            .write('}');
    }

    writeStatements(nodes) {
        if (!nodes) {
            return;
        }

        ok(nodes, '"nodes" expected');
        let firstStatement = true;

        var writeNode = (node) => {
            if (Array.isArray(node) || (node instanceof Container)) {
                node.forEach(writeNode);
                return;
            } else {
                if (firstStatement) {
                    firstStatement = false;
                } else {
                    this._write('\n');
                }

                this.writeLineIndent();

                if (typeof node === 'string') {
                    this._write(node);
                } else {
                    node.statement = true;
                    this.write(node);
                }

                if (this._code.endsWith('\n')) {
                    // Do nothing
                } else if (this._code.endsWith(';')) {
                    this._code += '\n';
                }  else if (this._code.endsWith('\n' + this.currentIndent) || node instanceof Comment) {
                    // Do nothing
                } else {
                    this._code += ';\n';
                }
            }
        };

        if (nodes instanceof Node) {
            writeNode(nodes);
        } else {
            nodes.forEach(writeNode);
        }
    }

    write(code) {
        if (code == null || code === '') {
            return;
        }

        if (code instanceof Node) {
            let node = code;
            if (!node.writeCode) {
                throw new Error('Node does not have a `writeCode` method: ' + JSON.stringify(node, null, 4));
            }
            node.writeCode(this);
        } else if (isArray(code) || code instanceof Container) {
            code.forEach(this.write, this);
            return;
        } else if (typeof code === 'string') {
            this._code += code;
        }  else if (typeof code === 'boolean' || typeof code === 'number') {
            this._code += code.toString();
        } else {
            throw new Error('Illegal argument: ' + JSON.stringify(code));
        }

        return this;
    }

    _write(code) {
        this._code += code;
        return this;
    }

    incIndent(count) {
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
                    this.write(v);
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
        } else if (value instanceof RegExp) {
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
                    this.write(v);
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
}

module.exports = CodeWriter;
