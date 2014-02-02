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
var INDENT = '  ';
var stringify = require('raptor-json/stringify');
var StringBuilder = require('raptor-strings/StringBuilder');
var Expression = require('./Expression');
var arrayFromArguments = require('raptor-util').arrayFromArguments;

function CodeWriter(indent) {
    this._indent = indent != null ? indent : INDENT + INDENT;
    this._code = new StringBuilder();
    this.firstStatement = true;
    this._bufferedText = null;
    this._bufferedContextMethodCalls = null;
}
CodeWriter.prototype = {
    write: function (expression) {
        this.contextMethodCall('w', expression);
    },
    text: function (text) {
        if (this._bufferedText === null) {
            this._bufferedText = text;
        } else {
            this._bufferedText += text;
        }
    },
    contextMethodCall: function (methodName, args) {
        this.flushText();
        if (!this._bufferedContextMethodCalls) {
            this._bufferedContextMethodCalls = [];
        }
        args = arrayFromArguments(arguments, 1);
        this._bufferedContextMethodCalls.push([
            methodName,
            args
        ]);
    },
    code: function (code) {
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
            func.call(thisObj);
            this.decIndent(delta);
        } else if (typeof arguments[0] === 'string') {
            this.code(this._indent + arguments[0]);
        }
        return this;
    },
    flush: function () {
        this.flushText();
        this.flushMethodCalls();
    },
    flushText: function () {
        var curText = this._bufferedText;
        if (curText) {
            this._bufferedText = null;
            this.write(stringify(curText, { useSingleQuote: true }));
        }
    },
    flushMethodCalls: function () {
        var _bufferedContextMethodCalls = this._bufferedContextMethodCalls;
        if (_bufferedContextMethodCalls) {
            if (!this.firstStatement) {
                this._code.append('\n');
            }
            this.firstStatement = false;
            this._bufferedContextMethodCalls = null;
            _bufferedContextMethodCalls.forEach(function (curWrite, i) {
                var methodName = curWrite[0];
                var args = curWrite[1];
                if (i === 0) {
                    this._code.append(this.indentStr() + 'context.' + methodName + '(');
                } else {
                    this.incIndent();
                    this._code.append(this.indentStr() + '.' + methodName + '(');
                }
                args.forEach(function (arg, i) {
                    if (i !== 0) {
                        this._code.append(', ');
                    }
                    if (typeof arg === 'string') {
                        this._code.append(arg);
                    } else if (typeof arg === 'boolean') {
                        this._code.append(arg ? 'true' : 'false');
                    } else if (typeof arg === 'function') {
                        arg();
                    } else if (arg instanceof Expression) {
                        this._code.append(arg.toString());
                    } else if (arg) {
                        this._code.append(arg.toString());
                    } else {
                        throw createError(new Error('Illegal arg for method call "' + methodName + '": ' + arg.toString() + ' (' + i + ')'));
                    }
                }, this);
                if (i < _bufferedContextMethodCalls.length - 1) {
                    this._code.append(')\n');
                } else {
                    this._code.append(');\n');
                }
                if (i !== 0) {
                    this.decIndent();
                }
            }, this);
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
function TemplateBuilder(compiler, path, rootNode) {
    this.rootNode = rootNode;
    this.compiler = compiler;
    this.path = this.path;
    this.options = compiler.options;
    this.templateName = null;
    this.attributes = {};
    this.writer = new CodeWriter();
    this.staticVars = [];
    this.staticVarsLookup = {};
    this.helperFunctionsAdded = {};
    this.vars = [];
    this.varsLookup = {};
    this.getStaticHelperFunction('empty', 'e');
    this.getStaticHelperFunction('notEmpty', 'ne');
}
TemplateBuilder.prototype = {
    _getHelperFunction: function (varName, propName, isStatic) {
        var key = propName + ':' + (isStatic ? 'static' : 'context');
        var added = this.helperFunctionsAdded[key];
        if (added) {
            return added;
        } else {
            if (isStatic) {
                this.addStaticVar(varName, 'helpers.' + propName);
            } else {
                this.addVar(varName, 'contextHelpers.' + propName);
            }
            this.helperFunctionsAdded[key] = varName;
            return varName;
        }
    },
    getContextHelperFunction: function (varName, propName) {
        return this._getHelperFunction(varName, propName, false);
    },
    captureCode: function (func, thisObj) {
        var oldWriter = this.writer;
        var newWriter = new CodeWriter(oldWriter.indentStr());
        try {
            this.writer = newWriter;
            func.call(thisObj);
            return newWriter.getOutput();
        } finally {
            this.writer = oldWriter;
        }
    },
    getStaticHelperFunction: function (varName, propName) {
        return this._getHelperFunction(varName, propName, true);
    },
    hasStaticVar: function (name) {
        return this.staticVarsLookup[name] === true;
    },
    addStaticVar: function (name, expression) {
        if (!this.staticVarsLookup[name]) {
            this.staticVarsLookup[name] = true;
            this.staticVars.push({
                name: name,
                expression: expression
            });
        }
    },
    hasVar: function (name) {
        return this.vars[name] === true;
    },
    addVar: function (name, expression) {
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
            if (escapeXml === false) {
                this.contextMethodCall('a', stringify(name), valueExpression, false);
            } else {
                this.contextMethodCall('a', stringify(name), valueExpression);
            }
        }
        return this;
    },
    attrs: function (attrsExpression) {
        if (!this.hasErrors()) {
            this.contextMethodCall('a', attrsExpression);
        }
        return this;
    },
    include: function (templateName, dataExpression) {
        if (!this.hasErrors()) {
            this.contextMethodCall('i', templateName, dataExpression);
        }
        return this;
    },
    contextMethodCall: function (methodName, args) {
        if (!this.hasErrors()) {
            this.writer.contextMethodCall.apply(this.writer, arguments);
        }
        return this;
    },
    addClassNameVar: function (className) {
        var classVarName = className.replace(/[^a-zA-Z0-9]+/g, '_');
        if (!this.hasStaticVar(classVarName)) {
            this.addStaticVar(classVarName, JSON.stringify(className));
        }
        return classVarName;
    },
    addHelperFunction: function (className, functionName, bindToContext, targetVarName) {
        var classVarName = this.addClassNameVar(className);
        if (!targetVarName) {
            targetVarName = functionName;
        }
        if (bindToContext === true) {
            if (this.hasVar(targetVarName)) {
                return;
            }
            this.addVar(targetVarName, 'context.f(' + classVarName + ',' + JSON.stringify(functionName) + ')');
        } else {
            if (this.hasStaticVar(targetVarName)) {
                return;
            }
            this.addStaticVar(targetVarName, this.getStaticHelperFunction('getHelper', 'h') + '(' + classVarName + ',' + JSON.stringify(functionName) + ')');
        }
    },
    write: function (expression, options) {
        if (!this.hasErrors()) {
            if (options) {
                if (options.escapeXml) {
                    expression = this.getStaticHelperFunction('escapeXml', 'x') + '(' + expression + ')';
                }
                if (options.escapeXmlAttr) {
                    expression = this.getStaticHelperFunction('escapeXmlAttr', 'xa') + '(' + expression + ')';
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
            params = ['context'].concat(params);
        } else {
            params = ['context'];
        }
        out.append('function create(helpers) {\n');
        //Write out the static variables
        this.writer.flush();
        this._writeVars(this.staticVars, out, INDENT);
        out.append('\n' + INDENT + 'return function render(data, context) {\n');
        //Write out the render variables
        if (this.vars && this.vars.length) {
            this._writeVars(this.vars, out, INDENT + INDENT);
            out.append('\n');
        }
        out.append(this.writer.getOutput());
        out.append(INDENT + '};\n}');
        return out.toString();
    },
    setTemplateName: function (templateName) {
        this.templateName = templateName;
    },
    makeExpression: function (expression) {
        if (expression instanceof Expression) {
            return expression;
        } else {
            return new Expression(expression);
        }
    },
    isExpression: function (expression) {
        return expression instanceof Expression;
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
    getNodeClass: function (uri, localName) {
        return this.compiler.getNodeClass(uri, localName);
    },
    transformTree: function (node) {
        this.compiler.transformTree(node, this);
    },
    INDENT: INDENT
};
module.exports = TemplateBuilder;