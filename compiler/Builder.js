'use strict';
var isArray = Array.isArray;

var Node = require('./ast/Node');
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
var Html = require('./ast/Html');
var Text = require('./ast/Text');
var ForEach = require('./ast/ForEach');
var Slot = require('./ast/Slot');
var HtmlComment = require('./ast/HtmlComment');
var SelfInvokingFunction = require('./ast/SelfInvokingFunction');
var ForStatement = require('./ast/ForStatement');
var BinaryExpression = require('./ast/BinaryExpression');
var UpdateExpression = require('./ast/UpdateExpression');

class Builder {
    assignment(left, right) {
        return new Assignment({left, right});
    }

    binaryExpression(left, operator, right) {
        return new BinaryExpression({left, operator, right});
    }

    elseStatement(body) {
        return new Else({body});
    }

    elseIfStatement(test, body, elseStatement) {
        return new ElseIf({
            if: new If({test, body, else: elseStatement})
        });
    }

    forEach(varName, target, body) {
        if (typeof varName === 'object') {
            var options = varName;
            return new ForEach(options);
        } else {
            return new ForEach({varName, target, body});
        }
    }

    forStatement(init, test, update, body) {
        if (typeof init === 'object' && !init.type) {
            var def = arguments[0];
            return new ForStatement(def);
        } else {
            return new ForStatement({init, test, update, body});
        }
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

    functionDeclaration(name, params, body) {
        return new FunctionDeclaration({name, params, body});
    }

    html(argument) {
        return new Html({argument});
    }

    htmlComment(comment) {
        return new HtmlComment({comment});
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

    identifier(name) {
        return new Identifier({name});
    }

    ifStatement(test, body, elseStatement) {
        return new If({test, body, else: elseStatement});
    }

    literal(value) {
        return new Literal({value});
    }

    node(type) {
        return new Node(type);
    }

    program(body) {
        return new Program({body});
    }

    require(path) {
        let callee = 'require';
        let args = [ path ];
        return new FunctionCall({callee, args});
    }

    returnStatement(argument) {
        return new Return({argument});
    }

    selfInvokingFunction(params, args, body) {
        if (arguments.length === 1) {
            body = arguments[0];
            params = null;
            args = null;
        }

        return new SelfInvokingFunction({params, args, body});
    }

    slot() {
        return new Slot();
    }

    strictEquality(left, right) {
        var operator = '===';
        return new BinaryExpression({left, right, operator});
    }

    templateRoot(body) {
        return new TemplateRoot({body});
    }

    text(argument, escape) {
        return new Text({argument, escape});
    }

    updateExpression(argument, operator, prefix) {
        return new UpdateExpression({argument, operator, prefix});
    }

    vars(declarations, kind) {
        return new Vars({declarations, kind});
    }
}

module.exports = Builder;