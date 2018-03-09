"use strict";

const lassoModulesClientTransport = require("lasso-modules-client/transport");
const shorthash = require("shorthash");
const ok = require("assert").ok;

function generateRegisterComponentCode(
    componentModule,
    transformHelper,
    isSplit
) {
    ok(componentModule, '"componentModule" is required');
    ok(transformHelper, '"transformHelper" is required');
    ok(
        typeof componentModule.filename === "string",
        '"componentModule.filename" should be a string'
    );
    ok(
        typeof transformHelper.dirname === "string",
        '"transformHelper.dirname" should be a string'
    );

    let context = transformHelper.context;

    let builder = context.builder;

    let fileName = componentModule.filename;

    let isLegacy = componentModule.legacy;

    if (!isLegacy && !isSplit) {
        fileName = transformHelper.filename;
    }

    let componentId = getComponentId(fileName);
    let registerNode;

    if (context.outputType === "vdom") {
        let def;
        let registerComponent = context.helper("registerComponent");

        if (componentModule.legacy) {
            // This if condition block should be deleted in Marko v5
            let returnValue = builder.require(
                builder.literal(componentModule.requirePath)
            );

            let defineWidget = context.helper("defineWidget-legacy");

            returnValue = builder.functionCall(defineWidget, [returnValue]);

            def = builder.functionDeclaration(
                null,
                [] /* params */,
                [builder.returnStatement(returnValue)]
            );
        } else if (isSplit) {
            let returnValue = builder.require(
                builder.literal(componentModule.requirePath)
            );

            def = builder.functionDeclaration(
                null,
                [] /* params */,
                [builder.returnStatement(returnValue)]
            );
        } else {
            def = builder.functionDeclaration(
                null,
                [],
                [
                    builder.returnStatement(
                        builder.memberExpression(
                            builder.identifier("module"),
                            builder.identifier("exports")
                        )
                    )
                ]
            );
        }

        registerNode = builder.functionCall(registerComponent, [
            builder.literal(componentId),
            def
        ]);
    } else {
        registerNode = builder.literal(componentId);
    }

    return { id: componentId, node: registerNode };
}

function getComponentId(filename) {
    let componentId = lassoModulesClientTransport.getClientPath(filename);
    // TODO: turn on for production
    // eslint-disable-next-line no-constant-condition
    if (false) {
        componentId = shorthash.unique(componentId);
    }
    return componentId;
}

module.exports = generateRegisterComponentCode;
