'use strict';
const resolveFrom = require('resolve-from');
const tryRequire = require('try-require');
const lassoModulesClientTransport = tryRequire('lasso-modules-client/transport', require);
const ok = require('assert').ok;

function legacyGetDefaultComponentModule(dirname) {
    var filename;

    if ((filename = resolveFrom(dirname, './widget'))) {
        return {
            filename,
            requirePath: './widget'
        };
    } else if ((filename = resolveFrom(dirname, './component'))) {
        return {
            filename,
            requirePath: './component'
        };
    } else if ((filename = resolveFrom(dirname, './'))) {
        return {
            filename,
            requirePath: './'
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

function buildComponentTypeNode(componentModule, transformHelper, isSplit) {
    ok(componentModule, '"componentModule" is required');
    ok(transformHelper, '"transformHelper" is required');
    ok(typeof componentModule.filename === 'string', '"componentModule.filename" should be a string');
    ok(typeof transformHelper.dirname === 'string', '"transformHelper.dirname" should be a string');

    let context = transformHelper.context;

    let builder = context.builder;

    let registerComponent = context.addStaticVar('marko_registerComponent',
        builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('rc')));

    let typeName;

    if (lassoModulesClientTransport) {
        typeName = lassoModulesClientTransport.getClientPath(componentModule.filename);
    } else {
        typeName = componentModule.filename;
    }

    let def;

    if (isSplit) {
        let returnValue = builder.require(builder.literal(componentModule.requirePath));

        if (transformHelper.isLegacyComponent) {
            let defineComponent = context.addStaticVar('marko_defineComponent',
                builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('c')));

            returnValue = builder.functionCall(defineComponent, [returnValue]);
        }

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

module.exports = function handleComponentBind() {
    let el = this.el;
    let context = this.context;
    let builder = this.builder;

    let internalBindAttr = el.getAttribute('_componentbind');

    let componentModule;
    let rendererModulePath;
    let isComponentMain = true;
    let rendererModule = this.getRendererModule();

    if (el.hasAttribute('w-bind')) {
        isComponentMain = false;

        let bindAttr = el.getAttribute('w-bind');

        context.deprecate('Legacy components using w-bind and defineRenderer/defineComponent or defineComponent are deprecated. See: https://github.com/marko-js/marko/issues/421');
        this.isLegacyComponent = true;

        // Remove the w-bind attribute since we don't want it showing up in the output DOM
        el.removeAttribute('w-bind');

        // Read the value for the w-bind attribute. This will be an AST node for the parsed JavaScript
        let bindAttrValue = bindAttr.value;

        if (bindAttrValue == null) {
            componentModule = legacyGetDefaultComponentModule(this.dirname);
            if (!componentModule) {
                this.addError('No corresponding JavaScript module found in the same directory (either "component.js" or "index.js"). Actual: ' + componentModule);
                return;
            }
        }

        const hasWidgetTypes = context.isFlagSet('hasWidgetTypes');

        if (hasWidgetTypes) {
            context.deprecate('The <component-types> tag is deprecated. Please remove it. See: https://github.com/marko-js/marko/issues/514');
        }

         else if (bindAttr.isLiteralValue()) {
             if (typeof bindAttr.literalValue !== 'string') {
                 this.addError('The value for the "w-bind" attribute should be a string. Actual: ' + componentModule);
                 return;
             }

             componentModule = {
                 requirePath: bindAttr.literalValue
             };
        } else {
            // This is a dynamic expression. The <component-types> should have been found.
            if (!hasWidgetTypes) {
                this.addError('The <component-types> tag must be used to declare components when the value of the "w-bind" attribute is a dynamic expression.');
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
    } else if (internalBindAttr != null) {
        el.removeAttribute('_componentbind');

        componentModule = this.getComponentModule();
        rendererModulePath = this.getRendererModule();


        if (context.isFlagSet('hasWidgetTypes')) {
            context.addError('The <component-types> tag is no longer supported. See: https://github.com/marko-js/marko/issues/514');
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

    if (rendererModule && rendererModule !== componentModule) {
        componentProps.split = isSplit = true;
    }

    if (componentModule) {
        let componentTypeNode;

        if (componentModule.requirePath) {
            context.addDependency({ type:'require', path: componentModule.requirePath });
        }

        context.addDependency({ type:'require', path: 'marko/components' });

        componentTypeNode = context.addStaticVar(
            'marko_componentType',
            buildComponentTypeNode(componentModule, this, isSplit));

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
            eventArgs.node.addRenderFunctionParam(builder.identifier('state'));
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

                if (!isSplit) {
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
