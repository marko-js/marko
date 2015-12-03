var parseForEach = require('./util/parseForEach');

exports.generateCode = function(generator) {
    var argument = this.argument;
    if (!argument) {
        generator.addError('Invalid <for> tag. Argument is missing. Example; <for(color in colors)>');
    }

    var forEachProps = parseForEach(argument);
    forEachProps.body = this.body;
    return generator.builder.forEach(forEachProps);
};