var parseForEach = require('./util/parseForEach');

exports.generateCode = function(generator) {
    var argument = this.argument;
    if (!argument) {
        generator.addError('Invalid <for> tag. Argument is missing. Example; <for(color in colors)>');
        return;
    }

    var forEachProps = parseForEach(argument);
    forEachProps.body = this.body;

    if (this.hasAttribute('separator')) {
        forEachProps.separator = this.getAttributeValue('separator');
    }

    if (this.hasAttribute('status-var')) {
        forEachProps.statusVarName = this.getAttributeValue('status-var');
    }

    return generator.builder.forEach(forEachProps);
};