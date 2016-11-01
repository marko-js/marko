var buildWidgetTypeNode = require('./util/buildWidgetTypeNode');

module.exports = function codeGenerator(el, codegen) {
    var builder = codegen.builder;

    var attrs = el.getAttributes();

    var typesObject = {};

    attrs.forEach((attr) => {
        if (!attr.isLiteralString()) {
            codegen.addError('Widget type should be a string');
            return;
        }

        typesObject[attr.name] = buildWidgetTypeNode(attr.literalValue, codegen.context.dirname, codegen.builder);
    });

    codegen.addStaticVar('__widgetTypes', builder.literal(typesObject));
};