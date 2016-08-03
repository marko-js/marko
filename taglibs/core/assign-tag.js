module.exports = function codeGenerator(elNode, generator) {
    var attributes = elNode.attributes;

    if (!attributes) {
        generator.addError('Invalid <assign> tag. Argument is missing. Example; <assign x=123 />');
        return elNode;
    }

    var builder = generator.builder;

    return attributes.map((attr) => {
        if (attr.value == null) {
            return builder.parseExpression(attr.name);
        } else {
            return builder.assignment(attr.name, attr.value);
        }
    });
};