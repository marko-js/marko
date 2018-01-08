var isValidJavaScriptVarName = require('../../compiler/util/isValidJavaScriptVarName');
var parseImport = require('./util/parseImport');

module.exports = function codeGenerator(el, codegen) {
    var builder = codegen.builder;
    var args = parseImport(el.tagString);
    var vars = {};

    args.forEach(arg => {
        var varName = arg.name;

        if (!isValidJavaScriptVarName(varName)) {
            codegen.addError('Invalid JavaScript variable name: ' + varName, 'INVALID_VAR_NAME');
            return;
        }

        if (arg.module) {
            var requireExpression = builder.require(builder.literal(arg.value));
            var moduleName = 'module_' + varName;

            if (varName) {
                // saves identifier under a module alias.
                vars[varName] = codegen.addStaticVar(moduleName, requireExpression);
                // extracts out the default export.
                codegen.addStaticVar(varName, builder.logicalExpression(
                    builder.memberExpression(moduleName, builder.identifier('default')),
                    '||',
                    moduleName
                ));
            } else {
                // require without saving var.
                codegen.addStaticCode(requireExpression);
            }
        } else {
            // ie: { bar } from "./bar"
            var modIdentifier = vars[arg.value.object];
            if (!modIdentifier) {
                codegen.addError('Variable not found: ' + arg.value.object);
                return;
            }

            codegen.addStaticVar(varName, builder.memberExpression(
                modIdentifier,
                builder.identifier(arg.value.property)
            ));
        }
    });

    return [];
};
