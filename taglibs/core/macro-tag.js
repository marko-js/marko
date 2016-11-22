module.exports = function codeGenerator(elNode, codegen) {

    var attributes = elNode.attributes;
    var defAttr = attributes[0];

    if(!defAttr || defAttr.value !== undefined) {
        return codegen.addError('The <macro> tag must contain a name as its first attribute, example: <macro greeting()>');
    }

    var body = elNode.body;
    var macroName = defAttr.name;
    var argument = defAttr.argument;
    var params;
    if (argument) {
        params = argument.split(/\s*,\s*/);
    } else {
        params = [];
    }

    var builder = codegen.builder;

    return builder.macro(macroName, params, body);
};