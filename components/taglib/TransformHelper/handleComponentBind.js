'use strict';
const resolveFrom = require('resolve-from');
const generateRegisterComponentCode = require('../util/generateRegisterComponentCode');

function legacyGetDefaultComponentModule(dirname) {
    var filename;
    var legacy = true;

    if ((filename = resolveFrom(dirname, './widget'))) {
        return {
            filename,
            requirePath: './widget',
            legacy
        };
    } else if ((filename = resolveFrom(dirname, './component'))) {
        return {
            filename,
            requirePath: './component',
            legacy
        };
    } else if ((filename = resolveFrom(dirname, './'))) {
        return {
            filename,
            requirePath: './',
            legacy
        };
    } else {
        return null;
    }
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

    let componentModule;
    let rendererModulePath;
    let rendererModule = this.getRendererModule();
    let isLegacyComponent = false;

    if (el.hasAttribute('w-bind')) {
        let bindAttr = el.getAttribute('w-bind');

        context.deprecate('Legacy components using w-bind and defineRenderer/defineComponent or defineComponent are deprecated. See: https://github.com/marko-js/marko/issues/421');
        this.isLegacyComponent = isLegacyComponent = true;

        // Remove the w-bind attribute since we don't want it showing up in the output DOM
        el.removeAttribute('w-bind');

        // Read the value for the w-bind attribute. This will be an AST node for the parsed JavaScript
        let bindAttrValue = bindAttr.value;

        const hasWidgetTypes = context.isFlagSet('hasWidgetTypes');

        if (hasWidgetTypes) {
            context.deprecate('The <widget-types> tag is deprecated. Please remove it. See: https://github.com/marko-js/marko/issues/514');
        }

        if (bindAttrValue == null) {
            componentModule = legacyGetDefaultComponentModule(this.dirname);
            if (!componentModule) {
                this.addError('No corresponding JavaScript module found in the same directory (either "component.js" or "index.js").');
                return;
            }
        } else if (bindAttr.isLiteralValue()) {
             if (typeof bindAttr.literalValue !== 'string') {
                 this.addError('The value for the "w-bind" attribute should be a string. Actual: ' + componentModule);
                 return;
             }

             let requirePath = bindAttr.literalValue;
             let filename = resolveFrom(this.dirname, requirePath);

             if (!filename) {
                 this.addError('Target file not found: ' + requirePath + ' (from: ' + this.dirname + ')');
                 return;
             }

             componentModule = {
                 legacy: true,
                 filename,
                 requirePath
             };
        } else {
            // This is a dynamic expression. The <widget-types> should have been found.
            if (!hasWidgetTypes) {
                this.addError('The <widget-types> tag must be used to declare components when the value of the "w-bind" attribute is a dynamic expression.');
                return;
            }

            el.insertSiblingBefore(
                builder.functionCall(
                    builder.memberExpression(builder.identifier('__component'), builder.identifier('t')),
                    [
                        builder.memberExpression(
                            builder.identifier('marko_componentTypes'),
                            bindAttrValue,
                            true /* computed */)
                    ]));
        }
    } else if (el.isFlagSet('hasComponentBind')) {
        componentModule = this.getComponentModule();
        rendererModulePath = this.getRendererModule();


        if (context.isFlagSet('hasWidgetTypes')) {
            context.addError('The <widget-types> tag is no longer supported. See: https://github.com/marko-js/marko/issues/514');
        }
    } else {
        return;
    }

    this.setHasBoundComponentForTemplate();

    let isInnerBind = checkIsInnerBind(el.parentNode);

    el.data.hasBoundComponent = true;

    // A component is bound to the el...

    var componentProps = isInnerBind ? {} : this.getComponentProps();
    let transformHelper = this;

    var isSplit = false;

    if ((rendererModule && rendererModule !== componentModule) ||
        (!rendererModule && componentModule)) {
        componentProps.split = isSplit = true;
    }

    if (componentModule) {
        let componentTypeNode;
        let dependencyModule = isLegacyComponent || isSplit ? componentModule : this.getTemplateModule();

        if (dependencyModule.requirePath) {
            context.addDependency({ type:'require', path: dependencyModule.requirePath });
        }

        if (isSplit) {
            context.addDependency({ type:'require', path: 'marko/components' });
        }

        componentTypeNode = context.addStaticVar(
            'marko_componentType',
            generateRegisterComponentCode(componentModule, this, isSplit));

        componentProps.type = componentTypeNode;
    }

    if (el.hasAttribute('w-config')) {
        el.insertSiblingBefore(
            builder.functionCall(
                builder.memberExpression(builder.identifier('__component'), builder.identifier('c')),
                [
                    el.getAttributeValue('w-config')
                ]));

        el.removeAttribute('w-config');
    }

    let id = el.getAttributeValue('id');

    if (id) {
        componentProps.id = id;
    }

    let markoComponentVar;

    if (rendererModule) {
        if (rendererModule.inlineId) {
            markoComponentVar = rendererModule.inlineId;
        } else {
            markoComponentVar = context.addStaticVar('marko_component', builder.require(builder.literal(rendererModule.requirePath)));
        }
    }

    if (isInnerBind) {
        el.setAttributeValue('id',
            builder.memberExpression(
                builder.identifier('__component'),
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
            eventArgs.node.addRenderFunctionParam(builder.identifier('__component'));

            if (isLegacyComponent) {
                eventArgs.node.addRenderFunctionParam(builder.identifier('widget'));
            } else {
                eventArgs.node.addRenderFunctionParam(builder.identifier('component'));
                eventArgs.node.addRenderFunctionParam(builder.identifier('state'));
            }

            eventArgs.node.generateAssignRenderCode = function(eventArgs) {
                let nodes = [];
                let templateVar = eventArgs.templateVar;
                let templateRendererMember = eventArgs.templateRendererMember;
                let renderFunctionVar = eventArgs.renderFunctionVar;

                let createRendererArgs = [
                    renderFunctionVar,
                    builder.literal(componentProps)
                ];

                if (markoComponentVar) {
                    createRendererArgs.push(markoComponentVar);
                }

                nodes.push(builder.assignment(
                    templateRendererMember,
                    builder.functionCall(
                        builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('r')),
                        createRendererArgs)));

                if (!isSplit && !isLegacyComponent) {
                    nodes.push(builder.assignment(
                        builder.memberExpression(templateVar, builder.identifier('Component')),
                        builder.functionCall(
                            builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('c')),
                            [
                                markoComponentVar,
                                templateRendererMember
                            ])));
                }

                return nodes;
            };
        });
    }

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
                builder.identifier('__component'),
                builder.identifier('id')));
    }
};
