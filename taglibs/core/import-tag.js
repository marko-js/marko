var isValidJavaScriptVarName = require('../../compiler/util/isValidJavaScriptVarName');

var resolveFrom = require('resolve-from');
var parseImport = require('./util/parseImport');

module.exports = function nodeFactory(el, context) {
    var builder = context.builder;
    var args = parseImport(el.argument);
    var hasError = false;
    var vars = {};

    args = args.map(arg => {
        var varName = arg.name;
        if (!isValidJavaScriptVarName(varName)) {
            context.addError(el, 'Invalid JavaScript variable name: ' + varName, 'INVALID_VAR_NAME');
            hasError = true;
            return;
        }

        if (typeof arg.value === "string") {
            // "require('./foo')"
            var value = builder.parseExpression(arg.value);
            var dirname = context.dirname;
            var path;
            try {
                path = resolveFrom(dirname, value.args[0].value);
            } catch(e) {
                context.addError('File not found: ' + path);
                return;
            }
            var result = builder.require(builder.literal(path));
            vars[varName] = result;
            context.addStaticVar(varName, result);
            return {
                id: builder.identifier(varName),
                init: result
            };
        } else {
            // { bar } from "./bar"
            var prop = vars[arg.value.object]; // any way around this?
            if (!prop) {
                context.addError('Variable not found: ' + arg.value.object);
                hasError = true;
                return;
            }
            return {
                id: builder.identifier(varName),
                init: builder.memberExpression(
                    prop,
                    builder.identifier(arg.value.property)
                )
            };

        }
    });

    if (hasError) {
        return el;
    }

    // var args = [ { name: 'bar', value: 'require("./bar")' } ]
    // var exp = {
    //     type: 'FunctionCall',
    //     callee: {
    //         type: 'Identifier',
    //         name: 'require' },
    //     args: [ {
    //         type: 'Literal',
    //         value: './bar' } ] };

    return builder.vars(args);
};
