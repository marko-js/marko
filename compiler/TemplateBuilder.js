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
'use strict';
var createError = require('raptor-util').createError;
var nodePath = require('path');
var stringify = require('raptor-json/stringify');
var StringBuilder = require('raptor-strings/StringBuilder');
var Expression = require('./Expression');
var arrayFromArguments = require('raptor-util').arrayFromArguments;
var INDENT = '  ';

function writeArg(writer, arg) {
    if (typeof arg === 'string') {
        writer._code.append(arg);
    } else if (typeof arg === 'boolean') {
        writer._code.append(arg ? 'true' : 'false');
    } else if (typeof arg === 'function') {
        arg();
    } else if (arg instanceof Expression) {
        writer._code.append( arg.toString() );
    } else if (arg) {
        writer._code.append(arg.toString());
    } else {
        throw createError(new Error('Illegal arg: ' + arg.toString()));
    }
}

function writeArgs(writer, args) {
    for (var i=0, len=args.length; i<len; i++) {
        var arg = args[i];
        if (i !== 0) {
            writer._code.append(', ');
        }

        writeArg(writer, arg);
    }
}


function safeVarName(varName) {
    return varName.replace(/[^A-Za-z0-9_]/g, '_').replace(/^[0-9]+/, function(match) {
        var str = '';
        for (var i=0; i<match.length; i++) {
            str += '_';
        }
        return str;
    });
}


/**
 * This class is used internally to manage how code and static text is added
 * to the compiled text. It has logic to group up contiguous blocks of static
 * text so that the static text is written out as a single string. It will
 * also change writes.
 *
 *  For example:
 *  	out.w('foo')
 *  	   .w('bar')
 *
 *  Instead of:
 *      out.w('foo');
 *      out.w('bar');
 *
 */
function CodeWriter(concatWrites, indent) {
    this._indent = indent != null ? indent : INDENT + INDENT;
    this._code = new StringBuilder();
    this.firstStatement = true;
    this._bufferedText = null;
    this._bufferedWrites = null;
    this.concatWrites = concatWrites;
}
CodeWriter.prototype = {
    write: function (expression) {
        this.flushText();
        if (!this._bufferedWrites) {
            this._bufferedWrites = [];
        }

        this._bufferedWrites.push(expression);


    },
    text: function (text) {
        if (this._bufferedText === null) {
            this._bufferedText = text;
        } else {
            this._bufferedText += text;
        }
    },
    functionCall: function (varName, args) {
        this.flush();
        this._code.append(this._indent + varName + '(');
        writeArgs(this, args);
        this._code.append(');\n');
    },
    code: function (code) {
        if (typeof code === 'function') {
            code = code();
        }

        this.flush();
        this._code.append(code);
    },
    statement: function (code) {
        this.flush();
        this.code((this.firstStatement ? '' : '\n') + this._indent + code + '\n');
        this.firstStatement = false;
    },
    line: function (code) {
        this.code(this._indent + code + '\n');
    },
    indentStr: function (delta) {
        if (arguments.length === 0) {
            return this._indent;
        } else {
            var indent = this._indent;
            for (var i = 0; i < delta; i++) {
                indent += INDENT;
            }
            return indent;
        }
    },
    indent: function () {
        if (arguments.length === 0) {
            this.code(this._indent);
        } else if (arguments.length === 1 && typeof arguments[0] === 'number') {
            this.code(this.indentStr(arguments[0]));
        } else if (typeof arguments[0] === 'function' || typeof arguments[1] === 'function') {
            var func;
            var thisObj;
            var delta;
            if (typeof arguments[0] === 'function') {
                delta = 1;
                func = arguments[0];
                thisObj = arguments[1];
            } else {
                delta = arguments[0];
                func = arguments[1];
                thisObj = arguments[2];
            }
            this.incIndent(delta);
            func.call(thisObj, this);
            this.decIndent(delta);
        } else if (typeof arguments[0] === 'string') {
            this.code(this._indent + arguments[0]);
        }
        return this;
    },
    flush: function () {
        this.flushText();
        this.flushWrites();
    },
    flushText: function () {
        var curText = this._bufferedText;
        if (curText) {
            this._bufferedText = null;
            this.write(stringify(curText, { useSingleQuote: true }));
        }
    },
    flushWrites: function () {
        var _this = this;
        var code = this._code;
        var _bufferedWrites = this._bufferedWrites;

        function concat() {

            code.append(_this.indentStr() + 'out.w(');

            _bufferedWrites.forEach(function (expression, i) {
                if (i !== 0) {
                    _this.incIndent();
                    code.append(' +\n' + this.indentStr());
                }

                writeArg(_this, expression);

                if (i !== 0) {
                    _this.decIndent();
                }
            }, _this);

            code.append(');\n');
        }

        function chain() {
            _bufferedWrites.forEach(function (arg, i) {

                if (i === 0) {
                    this._code.append(this.indentStr() + 'out.w(');
                } else {
                    this.incIndent();
                    this._code.append(this.indentStr() + '.w(');
                }

                writeArg(this, arg);

                if (i < _bufferedWrites.length - 1) {
                    this._code.append(')\n');
                } else {
                    this._code.append(');\n');
                }
                if (i !== 0) {
                    this.decIndent();
                }
            }, _this);
        }

        if (_bufferedWrites) {
            if (!this.firstStatement) {
                this._code.append('\n');
            }
            this.firstStatement = false;
            this._bufferedWrites = null;
            if (this.concatWrites) {
                concat();
            } else {
                chain();
            }

        }
    },
    incIndent: function (delta) {
        if (arguments.length === 0) {
            delta = 1;
        }
        this.flush();
        this._indent = this.indentStr(delta);
        this.firstStatement = true;
    },
    decIndent: function (delta) {
        if (arguments.length === 0) {
            delta = 1;
        }
        this.flush();
        this._indent = this._indent.substring(INDENT.length * delta);
        this.firstStatement = false;
    },
    getOutput: function () {
        this.flush();
        return this._code.toString();
    }
};

/**
 * This class provides the interface that compile-time transformers
 * and compile-time tags can use to add JavaScript code to the final
 * template.
 *
 * This class ensures that proper indentation is maintained so that
 * compiled templates are readable.
 */
function TemplateBuilder(compiler, path, rootNode) {
    this.rootNode = rootNode; // This is the root node for the AST. It should be a TemplateNode
    this.compiler = compiler; // A reference to the compiler
    this.path = path; // The file system path of the template being compiled
    this.dirname = nodePath.dirname(path); // The file system directory of the template being compiled
    this.options = compiler.options || {}; // Compiler options
    this.data = this.attributes /* deprecated */ = {};
    this.concatWrites = this.options.concatWrites !== false;
    this.writer = new CodeWriter(this.concatWrites);
    this.staticVars = [];
    this.staticVarsLookup = {};
    this.helperFunctionsAdded = {};
    this.vars = [];
    this.varsLookup = {};
    this.staticCode = [];

    this.getStaticHelperFunction('str', 's');
    this.getStaticHelperFunction('empty', 'e');
    this.getStaticHelperFunction('notEmpty', 'ne');
}

TemplateBuilder.prototype = {

    captureCode: function (func, thisObj) {
        var oldWriter = this.writer;
        var newWriter = new CodeWriter(this.concatWrites, oldWriter.indentStr());
        try {
            this.writer = newWriter;
            var value = func.call(thisObj);
            return value == null ? newWriter.getOutput() : value;
        } finally {
            this.writer = oldWriter;
        }
    },
    getStaticHelperFunction: function (varName, propName) {

        var added = this.helperFunctionsAdded[propName];
        if (added) {
            return added;
        } else {
            this.addStaticVar(varName, '__helpers.' + propName);
            this.helperFunctionsAdded[propName] = varName;
            return varName;
        }
    },
    addStaticCode: function(codeOrFunc) {
        this.staticCode.push(codeOrFunc);
    },

    _getStaticCode: function() {

        var staticCodeList = this.staticCode;

        if (!staticCodeList.length) {
            return;
        }

        var codeWriter = new CodeWriter(this.concatWrites, INDENT);
        codeWriter.code('\n');

        for (var i=0, len=staticCodeList.length; i<len; i++) {
            var code = staticCodeList[i];
            if (typeof code === 'function') {
                var result = code(codeWriter);
                if (result != null) {
                    codeWriter.code(result.toString());
                }
            } else {
                codeWriter.code(code.toString());
            }
        }

        return codeWriter.getOutput();
    },
    hasStaticVar: function (name) {
        return this.staticVarsLookup[name] === true;
    },
    addStaticVar: function (name, expression) {
        name = safeVarName(name);

        if (!this.staticVarsLookup.hasOwnProperty(name)) {
            this.staticVarsLookup[name] = true;
            this.staticVars.push({
                name: name,
                expression: expression
            });
        }
        return name;
    },
    hasVar: function (name) {
        return this.vars[name] === true;
    },
    addVar: function (name, expression) {
        name = safeVarName(name);

        this.vars[name] = true;
        this.vars.push({
            name: name,
            expression: expression
        });
    },
    _writeVars: function (vars, out, indent) {
        if (!vars.length) {
            return;
        }
        out.append(indent + 'var ');
        var declarations = [];
        vars.forEach(function (v, i) {
            declarations.push((i !== 0 ? indent + '    ' : '') + v.name + ' = ' + v.expression + (i === vars.length - 1 ? ';\n' : ',\n'));
        });
        out.append(declarations.join(''));
    },
    text: function (text) {
        if (!this.hasErrors()) {
            this.writer.text(text);
        }
        return this;
    },
    attr: function (name, valueExpression, escapeXml) {
        if (!this.hasErrors()) {
            var expression;

            if (escapeXml === false) {
                expression = this.getStaticHelperFunction('attr', 'a') + '(' + stringify(name) + ', ' + valueExpression + ', false)';
            } else {
                expression = this.getStaticHelperFunction('attr', 'a') + '(' + stringify(name) + ', ' + valueExpression + ')';
            }

            this.write(expression);
        }

        return this;
    },
    attrs: function (attrsExpression) {
        if (!this.hasErrors()) {
            var expression = this.getStaticHelperFunction('attrs', 'as') + '(' + attrsExpression + ')';
            this.write(expression);
        }
        return this;
    },
    include: function (templatePath, dataExpression) {
        if (!this.hasErrors()) {

            if (typeof templatePath === 'string') {
                var templateVar;
                if (!this.hasExpression(templatePath)) {
                    // Resolve the static string to a full path only once
                    templateVar = this.addStaticVar(templatePath, '__helpers.l(require.resolve(' + this.compiler.convertType(templatePath, 'string', true) + '))');
                    this.statement(this.makeExpression(templateVar + '.render(' + dataExpression + ', out);'));
                    return;
                }
            }

            this.contextHelperMethodCall(
                'i',
                typeof templatePath === 'string' ?
                    this.compiler.convertType(templatePath, 'string', true) :
                    templatePath,
                dataExpression);
        }
        return this;
    },
    load: function (templatePath) {
        if (!this.hasErrors()) {
            this.contextHelperMethodCall('l', new Expression('require.resolve(' + templatePath + ')'));
        }
        return this;
    },
    functionCall: function(varName, args) {
        if (!this.hasErrors()) {
            args = arrayFromArguments(arguments, 1);
            this.writer.functionCall(varName, args);
        }
        return this;
    },
    contextHelperMethodCall: function (methodName, args) {
        if (!this.hasErrors()) {
            args = arrayFromArguments(arguments, 1);
            args.unshift('out');
            this.writer.functionCall('__helpers.' + methodName, args);
        }
        return this;
    },
    getEscapeXmlFunction: function() {
        return this.getStaticHelperFunction('escapeXml', 'x');
    },
    getEscapeXmlAttrFunction: function() {
        return this.getStaticHelperFunction('escapeXmlAttr', 'xa');
    },
    write: function (expression, options) {
        if (!this.hasErrors()) {
            if (options) {
                if (options.escapeXml) {
                    expression = this.getEscapeXmlFunction() + '(' + expression + ')';
                } else if (options.escapeXmlAttr) {
                    expression = this.getEscapeXmlAttrFunction() + '(' + expression + ')';
                }
            }
            this.writer.write(expression);
        }
        return this;
    },
    incIndent: function () {
        if (!this.hasErrors()) {
            this.writer.incIndent.apply(this.writer, arguments);
        }
        return this;
    },
    decIndent: function () {
        if (!this.hasErrors()) {
            this.writer.decIndent.apply(this.writer, arguments);
        }
        return this;
    },
    code: function (code) {
        if (!this.hasErrors()) {
            this.writer.code(code);
        }
        return this;
    },
    statement: function (code) {
        if (!this.hasErrors()) {
            this.writer.statement(code);
        }
        return this;
    },
    line: function (code) {
        if (!this.hasErrors()) {
            this.writer.line(code);
        }
        return this;
    },
    indentStr: function (delta) {
        return this.writer.indentStr(delta);
    },
    indent: function () {
        if (!this.hasErrors()) {
            this.writer.indent.apply(this.writer, arguments);
        }
        return this;
    },
    getPath: function () {
        return this.path;
    },
    getOutput: function () {
        if (this.hasErrors()) {
            return '';
        }
        var out = new StringBuilder();

        var params = this.params;
        if (params) {
            params = ['out'].concat(params);
        } else {
            params = ['out'];
        }

        // Don't use "use strict" in compiled templates since it
        // could break backwards compatibility.
        // out.append('"use strict";\n');

        out.append('function create(__helpers) {\n');
        //Write out the static variables
        this.writer.flush();
        this._writeVars(this.staticVars, out, INDENT);

        var staticCode = this._getStaticCode();
        if (staticCode) {
            out.append(staticCode);
        }

        out.append('\n' + INDENT + 'return function render(data, out) {\n');
        //Write out the render variables
        if (this.vars && this.vars.length) {
            this._writeVars(this.vars, out, INDENT + INDENT);
            out.append('\n');
        }
        out.append(this.writer.getOutput());
        // We generate code that assign a partially Template instance to module.exports
        // and then we fully initialize the Template instance. This was done to avoid
        // problems with circular dependencies.
        out.append(INDENT + '};\n}\n(module.exports = require("marko").c(__filename)).c(create);');
        return out.toString();
    },
    makeExpression: function (expression, replaceSpecialOperators) {
        return this.compiler.makeExpression(expression, replaceSpecialOperators);
    },
    hasExpression: function (str) {
        return this.compiler.hasExpression(str);
    },
    isExpression: function (expression) {
        return this.compiler.isExpression(expression);
    },
    parseExpression: function(str, listeners, options) {
        return this.compiler.parseExpression(str, listeners, options);
    },
    parseAttribute: function(attr, types, options) {
        return this.compiler.parseAttribute(attr, types, options);
    },
    getAttribute: function (name) {
        return this.attributes[name];
    },
    setAttribute: function (name, value) {
        this.attributes[name] = value;
        return value;
    },
    hasErrors: function () {
        return this.compiler.hasErrors();
    },
    addError: function (message, pos) {
        this.compiler.addError(message, pos);
    },
    getErrors: function () {
        return this.compiler.getErrors();
    },
    getNodeClass: function (namespace, localName) {
        return this.compiler.getNodeClass(namespace, localName);
    },
    transformTree: function (node) {
        this.compiler.transformTree(node, this);
    },
    getRequirePath: function(targetModuleFile) {
        return this.compiler.getRequirePath(targetModuleFile);
    },
    INDENT: INDENT
};
module.exports = TemplateBuilder;
