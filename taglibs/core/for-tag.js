var createLoopNode = require('./util/createLoopNode');

module.exports = function codeGenerator(elNode, generator) {
    var argument = elNode.argument;
    if (!argument) {
        generator.addError('Invalid <for> tag. Argument is missing. Example; <for(color in colors)>');
        return elNode;
    }

    var builder = generator.builder;

    var loopNode = createLoopNode(argument, elNode.body, builder);

    if (loopNode.error) {
        generator.addError(loopNode.error);
        return elNode;
    }

    return loopNode;
};