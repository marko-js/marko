var isValidJavaScriptVarName = require('../../compiler/util/isValidJavaScriptVarName');

module.exports = function nodeFactory(el, context) {
    var builder = context.builder;
    var hasError = false;

    var declarations = el.attributes.map((attr) => {
        var varName = attr.name;

        if (!isValidJavaScriptVarName(varName)) {
            context.addError(el, 'Invalid JavaScript variable name: ' + varName, 'INVALID_VAR_NAME');
            hasError = true;
            return;
        }

        var id = builder.identifier(varName);
        var init = attr.value;

        return {
            id: id,
            init
        };
    });

    if (hasError) {
        return el;
    }

    return context.builder.vars(declarations);
};