var parseForEach = require('./util/parseForEach');

module.exports = function nodeFactory(elNode, context) {
    var argument = elNode.argument;
    if (!argument) {
        context.addError(elNode, 'Invalid <for> tag. Argument is missing. Example; <for(color in colors)>');
        return elNode;
    }

    var forEachProps = parseForEach(argument);
    forEachProps.body = elNode.body;

    if (elNode.hasAttribute('separator')) {
        forEachProps.separator = elNode.getAttributeValue('separator');
    }

    if (elNode.hasAttribute('status-var')) {
        forEachProps.statusVarName = elNode.getAttributeValue('status-var');
    }

    return context.builder.forEach(forEachProps);
};