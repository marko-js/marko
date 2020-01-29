"use strict";
const generateRegisterComponentCode = require("../util/generateRegisterComponentCode");

module.exports = function handleComponentBind(options) {
    let context = this.context;
    let builder = this.builder;

    if (this.context.firstBind) {
        return;
    }

    context.firstBind = true;

    if (options.isLegacyComponent) {
        context.setMeta("legacy", true);
    }

    let isLegacyComponent = this.isLegacyComponent;
    let componentModule = options.componentModule;
    let rendererModule = options.rendererModule;
    let componentProps = options.componentProps || {};
    let rootNodes = options.rootNodes;
    let isLegacyInnerBind = options.isLegacyInnerBind;
    var isImplicitComponent = options.isImplicitComponent === true;
    var isBrowserTarget = context.outputType === "vdom";
    var hasTagParams = context.isFlagSet("hasTagParams");
    var isSplit = false;

    if (
        (rendererModule && rendererModule !== componentModule) ||
        (!rendererModule && componentModule)
    ) {
        if (hasTagParams) {
            context.addError(
                context.exampleTagParam,
                "Cannot use tag params within a split component."
            );
        } else {
            componentProps.___split = isSplit = true;
        }
    }

    if (isImplicitComponent) {
        if (hasTagParams) {
            isImplicitComponent = false;
        } else {
            componentProps.___implicit = true;
        }
    }

    if (componentModule) {
        let componentType = generateRegisterComponentCode(
            componentModule,
            this,
            isSplit
        );

        let componentTypeNode = context.addStaticVar(
            "marko_componentType",
            componentType.node
        );

        componentProps.___type = componentTypeNode;

        context.setMeta("id", componentType.id);

        if (isLegacyComponent) {
            let el = rootNodes[0];
            el.setAttributeValue(
                "data-widget",
                builder.literal(componentType.id)
            );
            if (!el.hasAttribute("id")) {
                el.setAttributeValue(
                    "id",
                    this.buildComponentElIdFunctionCall()
                );
            }
        }

        let dependencyModule =
            isLegacyComponent || isSplit
                ? componentModule
                : this.getTemplateModule();

        if (!isImplicitComponent) {
            if (dependencyModule.requirePath) {
                context.setMeta("component", dependencyModule.requirePath);
            }
        }

        if (isSplit) {
            context.addDependency(
                context.markoModulePrefix + "runtime/components"
            );
        }
    }

    if (isLegacyInnerBind) {
        let el = rootNodes[0];
        el.setAttributeValue(
            "id",
            builder.memberExpression(
                builder.identifier("__component"),
                builder.identifier("id")
            )
        );

        // TODO Deprecation warning for inner binds
        let componentNode = context.createNodeForEl("_component", {
            props: builder.literal(componentProps)
        });
        el.wrapWith(componentNode);
        return;
    }

    let markoComponentVar;

    if (rendererModule) {
        if (rendererModule.inlineId) {
            markoComponentVar = rendererModule.inlineId;
        } else if (!isImplicitComponent) {
            markoComponentVar = context.addStaticVar(
                "marko_component",
                builder.require(builder.literal(rendererModule.requirePath))
            );
        }
    }

    this.setHasBoundComponentForTemplate();
    this.context.isImplicitComponent = isImplicitComponent;
    this.context.isSplitComponent = isSplit;
    this.context.isStatefulComponent = !isSplit && !isImplicitComponent;

    var rendererHelper = isLegacyComponent
        ? this.context.helper("rendererLegacy")
        : this.context.helper("renderer");

    var defineComponentHelper;

    if (!isSplit && !isLegacyComponent && isBrowserTarget) {
        defineComponentHelper = this.context.helper("defineComponent");
    }

    this.context.on("beforeGenerateCode:TemplateRoot", function(eventArgs) {
        eventArgs.node.addRenderFunctionParam(
            builder.identifier("__component")
        );

        if (isLegacyComponent) {
            eventArgs.node.addRenderFunctionParam(builder.identifier("widget"));
            eventArgs.node.addRenderFunctionParam(
                builder.identifier("component")
            );
        } else {
            eventArgs.node.addRenderFunctionParam(
                builder.identifier("component")
            );
            eventArgs.node.addRenderFunctionParam(builder.identifier("state"));
        }

        eventArgs.node.generateAssignRenderCode = eventArgs => {
            const nodes = [];
            const templateVar = eventArgs.templateVar;
            const templateRendererMember = eventArgs.templateRendererMember;
            const renderFunctionVar = eventArgs.renderFunctionVar;

            const createRendererArgs = [
                renderFunctionVar,
                builder.literal(componentProps)
            ];

            if (markoComponentVar) {
                createRendererArgs.push(markoComponentVar);
            }

            nodes.push(
                builder.assignment(
                    templateRendererMember,
                    builder.functionCall(rendererHelper, createRendererArgs)
                )
            );

            if (!isSplit && !isLegacyComponent && isBrowserTarget) {
                nodes.push(
                    builder.assignment(
                        builder.memberExpression(
                            templateVar,
                            builder.identifier("Component")
                        ),
                        builder.functionCall(defineComponentHelper, [
                            markoComponentVar || builder.literal({}),
                            templateRendererMember
                        ])
                    )
                );
            }

            return nodes;
        };
    });
};
