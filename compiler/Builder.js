'use strict';
var isArray = Array.isArray;
var ok = require('assert').ok;

var Program = require('./ast/Program');
var TemplateRoot = require('./ast/TemplateRoot');
var FunctionDeclaration = require('./ast/FunctionDeclaration');
var FunctionCall = require('./ast/FunctionCall');
var Literal = require('./ast/Literal');
var Identifier = require('./ast/Identifier');
var If = require('./ast/If');
var ElseIf = require('./ast/ElseIf');
var Else = require('./ast/Else');
var Assignment = require('./ast/Assignment');
var BinaryExpression = require('./ast/BinaryExpression');
var Vars = require('./ast/Vars');
var Return = require('./ast/Return');
var HtmlElement = require('./ast/HtmlElement');
var HtmlAttribute = require('./ast/HtmlAttribute');
var HtmlAttributeCollection = require('./ast/HtmlAttributeCollection');
var HtmlOutput = require('./ast/HtmlOutput');
var TextOutput = require('./ast/TextOutput');
var ForEach = require('./ast/ForEach');
var Node = require('./ast/Node');
var Slot = require('./ast/Slot');
var HtmlComment = require('./ast/HtmlComment');

class Builder {
    program(body) {
        return new Program({body});
    }

    templateRoot(body) {
        return new TemplateRoot({body});
    }

    functionDeclaration(name, params, body) {
        return new FunctionDeclaration({name, params, body});
    }

    functionCall(callee, args) {
        if (args) {
            if (!isArray(args)) {
                args = [args];
            }
        } else {
            args = [];
        }

        return new FunctionCall({callee, args});
    }

    literal(value) {
        return new Literal({value});
    }

    identifier(name) {
        return new Identifier({name});
    }

    ifStatement(test, body, elseStatement) {
        return new If({test, body, else: elseStatement});
    }

    elseIfStatement(test, body, elseStatement) {
        return new ElseIf({
            if: new If({test, body, else: elseStatement})
        });
    }

    elseStatement(body) {
        return new Else({body});
    }

    assignment(left, right) {
        return new Assignment({left, right});
    }

    strictEquality(left, right) {
        var operator = '===';
        return new BinaryExpression({left, right, operator});
    }

    vars(declarations, kind) {
        return new Vars({declarations, kind});
    }

    returnStatement(argument) {
        return new Return({argument});
    }

    htmlElement(tagName, attributes, body, argument) {
        if (typeof tagName === 'object') {
            let elInfo = tagName;
            tagName = elInfo.tagName;
            attributes = elInfo.attributes;
            body = elInfo.body;
            argument = elInfo.argument;
        }

        return new HtmlElement({tagName, attributes, body, argument});
    }

    htmlOutput(argument) {
        return new HtmlOutput({argument});
    }

    textOutput(argument, escape) {
        return new TextOutput({argument, escape});
    }

    htmlComment(comment) {
        return new HtmlComment({comment});
    }

    forEach(varName, target, body) {
        if (typeof varName === 'object') {
            var options = varName;
            return new ForEach(options);
        } else {
            return new ForEach({varName, target, body});
        }
    }

    slot() {
        return new Slot();
    }

    require(path) {
        let callee = 'require';
        let args = [ path ];
        return new FunctionCall({callee, args});
    }
}

module.exports = Builder;