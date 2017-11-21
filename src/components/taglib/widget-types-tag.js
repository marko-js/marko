'use strict';

const getTransformHelper = require('./util/getTransformHelper');
const generateRegisterComponentCode = require('./util/generateRegisterComponentCode');
const resolveFrom = require('resolve-from');

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

        let requirePath = attr.literalValue;

        let filename = resolveFrom(transformHelper.dirname, requirePath);

        if (!filename) {
            transformHelper.addError('Target file not found: ' + requirePath + ' (from: ' + transformHelper.dirname + ')');
            return;
        }

        let componentModule = {
            legacy: true,
            filename: filename,
            requirePath: requirePath
        };

        typesObject[attr.name] = generateRegisterComponentCode(componentModule, transformHelper, false).node;
    });

    codegen.addStaticVar('marko_componentTypes', builder.literal(typesObject));

    return null;
};