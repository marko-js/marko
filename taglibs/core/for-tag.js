var createLoopNode = require('./util/createLoopNode');

module.exports = function codeGenerator(elNode, codegen) {
    var argument = elNode.argument;
    if (!argument) {
        codegen.addError('Invalid <for> tag. Argument is missing. Example; <for(color in colors)>');
        return elNode;
    }

    var builder = codegen.builder;

    var loopNode = createLoopNode(argument, elNode.body, builder);

    if (loopNode.error) {
        codegen.addError(loopNode.error);
        return elNode;
    }

    return loopNode;
};