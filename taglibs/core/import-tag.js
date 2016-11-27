var isValidJavaScriptVarName = require('../../compiler/util/isValidJavaScriptVarName');
var parseImport = require('./util/parseImport');

module.exports = function codeGenerator(el, codegen) {
    var builder = codegen.builder;
    var args = parseImport(el.argument);
    var vars = {};

    args.forEach(arg => {
        var varName = arg.name;

        if (!isValidJavaScriptVarName(varName)) {
            codegen.addError(el, 'Invalid JavaScript variable name: ' + varName, 'INVALID_VAR_NAME');
            return;
        }

        if (arg.module) {
            // needs to be require()'d
            var result = builder.require(builder.literal(arg.value));
            // var result = builder.require(builder.requireResolve(builder.literal(path)));
            vars[varName] = result;

            if (varName) {
                codegen.addStaticVar(varName, result);
            } else {
                codegen.addStaticCode(result);
            }
        } else {
            // ie: { bar } from "./bar"
            var prop = vars[arg.value.object];
            if (!prop) {
                codegen.addError('Variable not found: ' + arg.value.object);
                return;
            }
            codegen.addStaticVar(varName, builder.memberExpression(
                prop,
                builder.identifier(arg.value.property)
            ));
        }
    });

    return [];
};
