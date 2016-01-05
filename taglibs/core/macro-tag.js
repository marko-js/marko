module.exports = function codeGenerator(elNode, codegen) {

    var attributes = elNode.attributes;
    if (!attributes.length) {
        return;
    }

    var defAttr = attributes[0];
    if (!defAttr.argument) {
        return;
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