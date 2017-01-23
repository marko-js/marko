module.exports = function nodeFactory(elNode, context) {

    var attributes = elNode.attributes;
    var defAttr = attributes[0];

    if(!defAttr || defAttr.value !== undefined) {
        context.addError(elNode, 'The <macro> tag must contain a name as its first attribute, example: <macro greeting()>');
        return elNode;
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

    var builder = context.builder;

    context.registerMacro(macroName, params);

    return builder.macro(macroName, params, body);
};