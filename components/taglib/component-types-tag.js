var getTransformHelper = require('./util/getTransformHelper');

module.exports = function codeGenerator(el, codegen) {
    var context = codegen.context;
    var transformHelper = getTransformHelper(el, context);

    transformHelper.isLegacyComponent = true;

    var builder = codegen.builder;

    var attrs = el.getAttributes();

    var typesObject = {};

    attrs.forEach((attr) => {
        if (!attr.isLiteralString()) {
            codegen.addError('Component type should be a string');
            return;
        }

        typesObject[attr.name] = transformHelper.buildComponentTypeNode(attr.literalValue);
    });

    codegen.addStaticVar('marko_componentTypes', builder.literal(typesObject));

    return null;
};