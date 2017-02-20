'use strict';

const path = require('path');
const resolveFrom = require('resolve-from');

function isTemplateMainEntry(context) {
    let filename = path.basename(context.filename);
    let ext = path.extname(filename);
    if (ext === '.js') {
        return false;
    }

    if (ext) {
        filename = filename.slice(0, 0 - ext.length);
    }

    return filename === 'index';
}

function checkCombinedComponent(componentModulePath) {
    let filename = path.basename(componentModulePath);
    let ext = path.extname(filename);
    if (ext) {
        filename = filename.slice(0, 0 - ext.length);
    }

    return filename !== 'component';
}

function checkSplitComponent(context) {
    let filename = context.filename;
    let dir = path.dirname(filename);
    let rendererPath = resolveFrom(dir, './renderer');
    return rendererPath != null;
}

function checkIsInnerBind(el) {
    var curNode = el;

    while (true) {
        if (curNode.data.hasBoundComponent) {
            return true;
        }

        curNode = curNode.parentNode;

        if (!curNode) {
            break;
        }
    }

    return false;
}

module.exports = function handleComponentBind() {
    let el = this.el;
    let context = this.context;
    let builder = this.builder;

    let internalBindAttr = el.getAttribute('_componentbind');
    let bindAttr = el.getAttribute('w-bind');
    let bindAttrValue;

    if (internalBindAttr == null && bindAttr == null) {
        return;
    } else if (bindAttr != null) {
        context.deprecate('Legacy components using w-bind and defineRenderer/defineComponent or defineComponent are deprecated. See: https://github.com/marko-js/marko/issues/421');
        this.isLegacyComponent = true;

        // Remove the w-bind attribute since we don't want it showing up in the output DOM
        el.removeAttribute('w-bind');

        // Read the value for the w-bind attribute. This will be an AST node for the parsed JavaScript
        bindAttrValue = bindAttr.value;
    } else if (internalBindAttr != null) {
        el.removeAttribute('_componentbind');
    }

    this.setHasBoundComponentForTemplate();

    var isInnerBind = checkIsInnerBind(el.parentNode);

    el.data.hasBoundComponent = true;

    // A component is bound to the el...

    let modulePath;

    var componentProps = isInnerBind ? {} : this.getComponentProps();

    let isMain = isTemplateMainEntry(context);
    let transformHelper = this;

    let inlineComponent = this.getInlineComponent();

    let isComponentExport;
    let isRendererExport;
    let rendererPath;

    const hasComponentTypes = context.isFlagSet('hasComponentTypes');

    if (hasComponentTypes) {
        context.deprecate('The <component-types> tag is deprecated. Please remove it. See: https://github.com/marko-js/marko/issues/514');
    }

    if (bindAttrValue == null) {
        if (inlineComponent) {
            modulePath = context.filename;
        } else {
            modulePath = this.getDefaultComponentModule();
            if (!modulePath) {
                this.addError('No corresponding JavaScript module found in the same directory (either "component.js" or "index.js"). Actual: ' + modulePath);
                return;
            }
        }
    } else if (bindAttr.isLiteralValue()) {
        modulePath = bindAttr.literalValue; // The value of the literal value
        if (typeof modulePath !== 'string') {
            this.addError('The value for the "w-bind" attribute should be a string. Actual: ' + modulePath);
            return;
        }
    } else {
        // This is a dynamic expression. The <component-types> should have been found.
        if (!hasComponentTypes) {
            this.addError('The <component-types> tag must be used to declare components when the value of the "w-bind" attribute is a dynamic expression.');
            return;
        }

        el.insertSiblingBefore(
            builder.functionCall(
                builder.memberExpression(builder.identifier('component'), builder.identifier('t')),
                [
                    builder.memberExpression(
                        builder.identifier('marko_componentTypes'),
                        bindAttrValue,
                        true /* computed */)
                ]));
    }

    var renderingLogic;

    if (inlineComponent) {
        isComponentExport = true;
    } else {
        if (isMain) {
            if (modulePath && checkCombinedComponent(modulePath)) {
                isComponentExport = true;
            } else if (checkSplitComponent(context)) {
                isRendererExport = true;
                rendererPath = './renderer';
            }
        }
    }


    if (inlineComponent) {
        renderingLogic = inlineComponent;
    } else if (isComponentExport) {
        renderingLogic = context.addStaticVar('marko_component', builder.require(builder.literal(modulePath)));
    } else if (rendererPath) {
        renderingLogic = context.addStaticVar('marko_component', builder.require(builder.literal(rendererPath)));
    }

    if (modulePath) {
        let componentTypeNode;

        var componentPath = modulePath;
        var componentTypeImport;

        if (isMain && isComponentExport) {
            componentPath = './' + path.basename(context.filename);
            componentTypeImport = builder.functionDeclaration(null, [], [
                builder.returnStatement(builder.memberExpression(builder.identifier('module'), builder.identifier('exports')))
            ]);
        }

        context.addDependency({ type:'require', path:componentPath });
        context.addDependency({ type:'require', path:'marko/components' });

        componentTypeNode = context.addStaticVar('marko_componentType', this.buildComponentTypeNode(componentPath, componentTypeImport));

        componentProps.type = componentTypeNode;
    }

    if (el.hasAttribute('w-config')) {
        el.insertSiblingBefore(
            builder.functionCall(
                builder.memberExpression(builder.identifier('component'), builder.identifier('c')),
                [
                    el.getAttributeValue('w-config')
                ]));

        el.removeAttribute('w-config');
    }

    let id = el.getAttributeValue('id');

    if (id) {
        componentProps.id = id;
    }

    if (isInnerBind) {
        // let componentOptionsVar = context.addStaticVar(
        //     'componentOptions',
        //     builder.functionCall(
        //         builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('r')),
        //         [
        //             builder.renderBodyFunction([el]),
        //             builder.literal(componentProps)
        //         ]));
        //
        // componentProps._ = componentOptionsVar;

        el.setAttributeValue('id',
            builder.memberExpression(
                builder.identifier('component'),
                builder.identifier('id')));

        // TODO Deprecation warning for inner binds
        let componentNode = context.createNodeForEl('_component', {
            props: builder.literal(componentProps)
        });
        el.wrapWith(componentNode);
        return;
    }

    if (this.firstBind) {
        this.context.on('beforeGenerateCode:TemplateRoot', function(eventArgs) {
            eventArgs.node.addRenderFunctionParam(builder.identifier('component'));
            eventArgs.node.addRenderFunctionParam(builder.identifier('state'));
            eventArgs.node.generateAssignRenderCode = function(eventArgs) {
                let nodes = [];
                let templateVar = eventArgs.templateVar;
                let templateRendererMember = eventArgs.templateRendererMember;
                let renderFunctionVar = eventArgs.renderFunctionVar;

                var createRendererArgs = [
                    renderFunctionVar,
                    builder.literal(componentProps)
                ];

                if (renderingLogic) {
                    createRendererArgs.push(renderingLogic);
                }

                nodes.push(builder.assignment(
                    templateRendererMember,
                    builder.functionCall(
                        builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('r')),
                        createRendererArgs)));

                if (inlineComponent || isComponentExport) {
                    nodes.push(builder.assignment(
                        builder.memberExpression(templateVar, builder.identifier('Component')),
                        builder.functionCall(
                            builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('w')),
                            [
                                renderingLogic,
                                templateRendererMember
                            ])));
                }

                return nodes;
            };
        });
    }

    // let componentNode = el.data.componentNode;
    //
    // if (componentNode) {
    //     componentNode.setAttributeValues(componentProps);
    // } else {
    //     componentNode = context.createNodeForEl('_component', componentProps);
    //     el.wrapWith(componentNode);
    // }

    if (el.hasAttribute('key')) {
        if (!componentProps.roots) {
            componentProps.roots = [];
        }
        var key = el.getAttributeValue('key');
        componentProps.roots.push(key);
    } else if (el.hasAttribute('ref')) {
        if (!componentProps.roots) {
            componentProps.roots = [];
        }
        var ref = el.getAttributeValue('ref');
        componentProps.roots.push(ref);
    } else {
        el.setAttributeValue('id',
            builder.memberExpression(
                builder.identifier('component'),
                builder.identifier('id')));
    }

    // this.componentStack.push({
    //     componentNode: componentNode,
    //     el: el,
    //     extend: false
    // });
};
