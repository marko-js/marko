'use strict';
var isArray = Array.isArray;
var ok = require('assert').ok;

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
var LogicalExpression = require('./ast/LogicalExpression');
var Vars = require('./ast/Vars');
var Return = require('./ast/Return');
var HtmlElement = require('./ast/HtmlElement');
var Html = require('./ast/Html');
var Text = require('./ast/Text');
var ForEach = require('./ast/ForEach');
var ForEachProp = require('./ast/ForEachProp');
var ForRange = require('./ast/ForRange');
var Slot = require('./ast/Slot');
var HtmlComment = require('./ast/HtmlComment');
var SelfInvokingFunction = require('./ast/SelfInvokingFunction');
var ForStatement = require('./ast/ForStatement');
var BinaryExpression = require('./ast/BinaryExpression');
var UpdateExpression = require('./ast/UpdateExpression');
var UnaryExpression = require('./ast/UnaryExpression');
var MemberExpression = require('./ast/MemberExpression');
var Code = require('./ast/Code');
var InvokeMacro = require('./ast/InvokeMacro');
var Macro = require('./ast/Macro');
var ConditionalExpression = require('./ast/ConditionalExpression');
var NewExpression = require('./ast/NewExpression');
var ObjectExpression = require('./ast/ObjectExpression');
var ArrayExpression = require('./ast/ArrayExpression');
var Property = require('./ast/Property');
var VariableDeclarator = require('./ast/VariableDeclarator');
var ThisExpression = require('./ast/ThisExpression');
var Expression = require('./ast/Expression');
var Scriptlet = require('./ast/Scriptlet');
var ContainerNode = require('./ast/ContainerNode');
var WhileStatement = require('./ast/WhileStatement');
var DocumentType = require('./ast/DocumentType');
var Declaration = require('./ast/Declaration');

var parseExpression = require('./util/parseExpression');
var parseStatement = require('./util/parseStatement');
var parseJavaScriptArgs = require('./util/parseJavaScriptArgs');
var isValidJavaScriptIdentifier = require('./util/isValidJavaScriptIdentifier');

var DEFAULT_BUILDER;

function makeNode(arg) {
    if (typeof arg === 'string') {
        return parseExpression(arg, DEFAULT_BUILDER);
    } else if (arg instanceof Node) {
        return arg;
    } else if (arg == null) {
        return undefined;
    } else {
        throw new Error('Argument should be a string or Node or null. Actual: ' + arg);
    }
}

var literalNull = new Literal({value: null});
var literalUndefined = new Literal({value: null});
var literalTrue = new Literal({value: true});
var literalFalse = new Literal({value: true});
var identifierOut = new Identifier({name: 'out'});

class Builder {
    arrayExpression(elements) {
        if (elements) {
            if (!isArray(elements)) {
                elements = [elements];
            }

            for (var i=0; i<elements.length; i++) {
                elements[i] = makeNode(elements[i]);
            }
        } else {
            elements = [];
        }

        return new ArrayExpression({elements});
    }

    assignment(left, right, operator) {
        if (operator == null) {
            operator = '=';
        }
        left = makeNode(left);
        right = makeNode(right);
        return new Assignment({left, right, operator});
    }

    binaryExpression(left, operator, right) {
        left = makeNode(left);
        right = makeNode(right);
        return new BinaryExpression({left, operator, right});
    }

    code(value) {
        return new Code({value});
    }

    computedMemberExpression(object, property) {
        object = makeNode(object);
        property = makeNode(property);
        let computed = true;

        return new MemberExpression({object, property, computed});
    }

    concat(args) {
        var prev;
        let operator = '+';

        for (var i=1; i<arguments.length; i++) {
            var left;
            var right = makeNode(arguments[i]);
            if (i === 1) {
                left = makeNode(arguments[i-1]);
            } else {
                left = prev;
            }

            prev = new BinaryExpression({left, operator, right});
        }

        return prev;
    }

    conditionalExpression(test, consequent, alternate) {
        return new ConditionalExpression({test, consequent, alternate});
    }

    containerNode(type, generateCode) {
        if (typeof type === 'function') {
            generateCode = arguments[0];
            type = 'ContainerNode';
        }

        var node = new ContainerNode(type);
        if (generateCode) {
            node.setCodeGenerator(generateCode);
        }
        return node;
    }

    declaration(declaration) {
        return new Declaration({declaration});
    }

    documentType(documentType) {
        return new DocumentType({documentType});
    }

    elseStatement(body) {
        return new Else({body});
    }

    elseIfStatement(test, body, elseStatement) {
        test = makeNode(test);

        return new ElseIf({test, body, else: elseStatement});
    }

    expression(value) {
        return new Expression({value});
    }

    forEach(varName, inExpression, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForEach(def);
        } else {
            varName = makeNode(varName);
            inExpression = makeNode(inExpression);
            return new ForEach({varName, in: inExpression, body});
        }
    }

    forEachProp(nameVarName, valueVarName, inExpression, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForEachProp(def);
        } else {
            nameVarName = makeNode(nameVarName);
            valueVarName = makeNode(valueVarName);
            inExpression = makeNode(inExpression);
            return new ForEachProp({nameVarName, valueVarName, in: inExpression, body});
        }
    }

    forRange(varName, from, to, step, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForRange(def);
        } else {
            varName = makeNode(varName);
            from = makeNode(from);
            to = makeNode(to);
            step = makeNode(step);
            body = makeNode(body);

            return new ForRange({varName, from, to, step, body});
        }
    }

    forStatement(init, test, update, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForStatement(def);
        } else {
            init = makeNode(init);
            test = makeNode(test);
            update = makeNode(update);
            return new ForStatement({init, test, update, body});
        }
    }

    functionCall(callee, args) {
        callee = makeNode(callee);

        if (args) {
            if (!isArray(args)) {
                throw new Error('"args" should be an array');
            }

            for (var i=0; i<args.length; i++) {
                args[i] = makeNode(args[i]);
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
        argument = makeNode(argument);

        return new Html({argument});
    }

    htmlComment(comment) {
        return new HtmlComment({comment});
    }

    htmlElement(tagName, attributes, body, argument, openTagOnly, selfClosed) {
        if (typeof tagName === 'object' && !(tagName instanceof Node)) {
            let def = arguments[0];
            return new HtmlElement(def);
        } else {
            return new HtmlElement({tagName, attributes, body, argument, openTagOnly, selfClosed});
        }
    }

    identifier(name) {
        ok(typeof name === 'string', '"name" should be a string');

        if (!isValidJavaScriptIdentifier(name)) {
            var error = new Error('Invalid JavaScript identifier: ' + name);
            error.code = 'INVALID_IDENTIFIER';
            throw error;
        }
        return new Identifier({name});
    }

    identifierOut(name) {
        return identifierOut;
    }

    ifStatement(test, body, elseStatement) {
        test = makeNode(test);

        return new If({test, body, else: elseStatement});
    }

    invokeMacro(name, args, body) {
        return new InvokeMacro({name, args, body});
    }

    invokeMacroFromEl(el) {
        return new InvokeMacro({el});
    }

    literal(value) {
        return new Literal({value});
    }

    literalFalse() {
        return literalFalse;
    }

    literalNull() {
        return literalNull;
    }

    literalTrue() {
        return literalTrue;
    }

    literalUndefined() {
        return literalUndefined;
    }

    logicalExpression(left, operator, right) {
        left = makeNode(left);
        right = makeNode(right);
        return new LogicalExpression({left, operator, right});
    }

    macro(name, params, body) {
        return new Macro({name, params, body});
    }

    memberExpression(object, property, computed) {
        object = makeNode(object);
        property = makeNode(property);

        return new MemberExpression({object, property, computed});
    }

    negate(argument) {
        argument = makeNode(argument);

        var operator = '!';
        var prefix = true;
        return new UnaryExpression({argument, operator, prefix});
    }

    newExpression(callee, args) {
        callee = makeNode(callee);

        if (args) {
            if (!isArray(args)) {
                args = [args];
            }

            for (var i=0; i<args.length; i++) {
                args[i] = makeNode(args[i]);
            }
        } else {
            args = [];
        }

        return new NewExpression({callee, args});
    }

    node(type, generateCode) {
        if (typeof type === 'function') {
            generateCode = arguments[0];
            type = 'Node';
        }

        var node = new Node(type);
        if (generateCode) {
            node.setCodeGenerator(generateCode);
        }
        return node;
    }

    objectExpression(properties) {
        if (properties) {
            if (!isArray(properties)) {
                properties = [properties];
            }

            for (var i=0; i<properties.length; i++) {
                let prop = properties[i];
                prop.value = makeNode(prop.value);
            }
        } else {
            properties = [];
        }

        return new ObjectExpression({properties});
    }

    parseExpression(str, options) {
        ok(typeof str === 'string', '"str" should be a string expression');
        var parsed = parseExpression(str, DEFAULT_BUILDER);
        return parsed;
    }

    parseJavaScriptArgs(args) {
        ok(typeof args === 'string', '"args" should be a string');
        return parseJavaScriptArgs(args, DEFAULT_BUILDER);
    }

    parseStatement(str, options) {
        ok(typeof str === 'string', '"str" should be a string expression');
        var parsed = parseStatement(str, DEFAULT_BUILDER);
        return parsed;
    }

    program(body) {
        return new Program({body});
    }

    property(key, value) {
        key = makeNode(key);
        value = makeNode(value);

        return new Property({key, value});
    }

    renderBodyFunction(body) {
        let name = 'renderBody';
        let params = [new Identifier({name: 'out'})];
        return new FunctionDeclaration({name, params, body});
    }

    require(path) {
        path = makeNode(path);

        let callee = 'require';
        let args = [ path ];
        return new FunctionCall({callee, args});
    }

    requireResolve(path) {
        path = makeNode(path);

        let callee = new MemberExpression({
            object: new Identifier({name: 'require'}),
            property: new Identifier({name: 'resolve'})
        });

        let args = [ path ];
        return new FunctionCall({callee, args});
    }

    returnStatement(argument) {
        argument = makeNode(argument);

        return new Return({argument});
    }

    scriptlet(code) {
        return new Scriptlet({code});
    }

    selfInvokingFunction(params, args, body) {
        if (arguments.length === 1) {
            body = arguments[0];
            params = null;
            args = null;
        }

        return new SelfInvokingFunction({params, args, body});
    }

    slot(onDone) {
        return new Slot({onDone});
    }

    strictEquality(left, right) {
        left = makeNode(left);
        right = makeNode(right);

        var operator = '===';
        return new BinaryExpression({left, right, operator});
    }

    templateRoot(body) {
        return new TemplateRoot({body});
    }

    text(argument, escape, preserveWhitespace) {
        if (typeof argument === 'object' && !(argument instanceof Node)) {
            var def = arguments[0];
            return new Text(def);
        }
        argument = makeNode(argument);

        return new Text({argument, escape, preserveWhitespace});
    }

    thisExpression() {
        return new ThisExpression();
    }

    unaryExpression(argument, operator, prefix) {
        argument = makeNode(argument);

        return new UnaryExpression({argument, operator, prefix});
    }

    updateExpression(argument, operator, prefix) {
        argument = makeNode(argument);
        return new UpdateExpression({argument, operator, prefix});
    }

    variableDeclarator(id, init) {
        if (typeof id === 'string') {
            id = new Identifier({name: id});
        }
        if (init) {
            init = makeNode(init);
        }

        return new VariableDeclarator({id, init});
    }

    var(id, init, kind) {
        if (!kind) {
            kind = 'var';
        }

        id = makeNode(id);
        init = makeNode(init);

        var declarations = [
            new VariableDeclarator({id, init})
        ];

        return new Vars({declarations, kind});
    }

    vars(declarations, kind) {
        if (declarations) {
            if (Array.isArray(declarations)) {
                for (let i=0; i<declarations.length; i++) {
                    var declaration = declarations[i];
                    if (!declaration) {
                        throw new Error('Invalid variable declaration');
                    }
                    if (typeof declaration === 'string') {
                        declarations[i] = new VariableDeclarator({
                            id: new Identifier({name: declaration})
                        });
                    } else if (declaration instanceof Identifier) {
                        declarations[i] = new VariableDeclarator({
                            id: declaration
                        });
                    } else if (typeof declaration === 'object') {
                        if (!(declaration instanceof VariableDeclarator)) {
                            let id = declaration.id;
                            let init = declaration.init;

                            if (typeof id === 'string') {
                                id = new Identifier({name: id});
                            }

                            if (!id) {
                                throw new Error('Invalid variable declaration');
                            }

                            if (init) {
                                init = makeNode(init);
                            }


                            declarations[i] = new VariableDeclarator({id, init});
                        }
                    }
                }
            } else if (typeof declarations === 'object') {
                // Convert the object into an array of variables
                declarations = Object.keys(declarations).map((key) => {
                    let id = new Identifier({name: key});
                    let init = makeNode(declarations[key]);
                    return new VariableDeclarator({ id, init });
                });
            }
        }


        return new Vars({declarations, kind});
    }

    whileStatement(test, body) {
        return new WhileStatement({test, body});
    }
}

DEFAULT_BUILDER = new Builder();

Builder.DEFAULT_BUILDER = DEFAULT_BUILDER;

module.exports = Builder;
