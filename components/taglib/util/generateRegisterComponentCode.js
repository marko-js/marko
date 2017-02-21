'use strict';

const tryRequire = require('try-require');
const lassoModulesClientTransport = tryRequire('lasso-modules-client/transport', require);
const ok = require('assert').ok;

function generateRegisterComponentCode(componentModule, transformHelper, isSplit) {
    ok(componentModule, '"componentModule" is required');
    ok(transformHelper, '"transformHelper" is required');
    ok(typeof componentModule.filename === 'string', '"componentModule.filename" should be a string');
    ok(typeof transformHelper.dirname === 'string', '"transformHelper.dirname" should be a string');

    let context = transformHelper.context;

    let builder = context.builder;

    let registerComponent = context.addStaticVar('marko_registerComponent',
        builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('rc')));

    let typeName = componentModule.filename;

    var isLegacy = componentModule.legacy;

    if (!isLegacy && !isSplit) {
        typeName = transformHelper.filename;
    }

    if (lassoModulesClientTransport) {
        typeName = lassoModulesClientTransport.getClientPath(typeName);
    }

    let def;

    if (componentModule.legacy) {
        // This if condition block should be deleted in Marko v5
        let returnValue = builder.require(builder.literal(componentModule.requirePath));

        let defineComponent = context.addStaticVar('marko_defineWidget',
            builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('w')));

        returnValue = builder.functionCall(defineComponent, [returnValue]);

        def = builder.functionDeclaration(null, [] /* params */, [
            builder.returnStatement(returnValue)
        ]);
    } else if (isSplit) {
        let returnValue = builder.require(builder.literal(componentModule.requirePath));

        def = builder.functionDeclaration(null, [] /* params */, [
            builder.returnStatement(returnValue)
        ]);
    } else {
        def = builder.functionDeclaration(null, [], [
            builder.returnStatement(
                builder.memberExpression(
                    builder.identifier('module'),
                    builder.identifier('exports')))
        ]);
    }

    return builder.functionCall(registerComponent, [
        builder.literal(typeName),
        def
    ]);
}

module.exports = generateRegisterComponentCode;