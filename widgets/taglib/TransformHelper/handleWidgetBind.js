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

function checkCombinedComponent(widgetModulePath) {
    let filename = path.basename(widgetModulePath);
    let ext = path.extname(filename);
    if (ext) {
        filename = filename.slice(0, 0 - ext.length);
    }

    return filename !== 'widget';
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
        if (curNode.data.hasBoundWidget) {
            return true;
        }

        curNode = curNode.parentNode;

        if (!curNode) {
            break;
        }
    }

    return false;
}

module.exports = function handleWidgetBind() {
    let el = this.el;
    let context = this.context;
    let builder = this.builder;

    let internalBindAttr = el.getAttribute('_widgetbind');
    let bindAttr = el.getAttribute('w-bind');
    let bindAttrValue;

    if (internalBindAttr == null && bindAttr == null) {
        return;
    } else if (bindAttr != null) {
        context.deprecate('Legacy widgets using w-bind and defineRenderer/defineWidget or defineComponent are deprecated. See: https://github.com/marko-js/marko/issues/421');
        this.isLegacyWidget = true;

        // Remove the w-bind attribute since we don't want it showing up in the output DOM
        el.removeAttribute('w-bind');

        // Read the value for the w-bind attribute. This will be an AST node for the parsed JavaScript
        bindAttrValue = bindAttr.value;
    } else if (internalBindAttr != null) {
        el.removeAttribute('_widgetbind');
    }

    this.setHasBoundWidgetForTemplate();

    var isInnerBind = checkIsInnerBind(el.parentNode);

    el.data.hasBoundWidget = true;

    // A widget is bound to the el...

    let modulePath;

    var widgetProps = isInnerBind ? {} : this.getWidgetProps();

    let isMain = isTemplateMainEntry(context);
    let transformHelper = this;

    let inlineComponent = this.getInlineComponent();

    let isComponentExport;
    let isRendererExport;
    let rendererPath;

    const hasWidgetTypes = context.isFlagSet('hasWidgetTypes');

    if (hasWidgetTypes) {
        context.deprecate('The <widget-types> tag is deprecated. Please remove it. See: https://github.com/marko-js/marko/issues/514');
    }

    if (bindAttrValue == null) {
        if (inlineComponent) {
            modulePath = context.filename;
        } else {
            modulePath = this.getDefaultWidgetModule();
            if (!modulePath) {
                this.addError('No corresponding JavaScript module found in the same directory (either "widget.js" or "index.js"). Actual: ' + modulePath);
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
        // This is a dynamic expression. The <widget-types> should have been found.
        if (!hasWidgetTypes) {
            this.addError('The <widget-types> tag must be used to declare widgets when the value of the "w-bind" attribute is a dynamic expression.');
            return;
        }

        el.insertSiblingBefore(
            builder.functionCall(
                builder.memberExpression(builder.identifier('widget'), builder.identifier('t')),
                [
                    builder.memberExpression(
                        builder.identifier('marko_widgetTypes'),
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
        let widgetTypeNode;

        var widgetPath = modulePath;
        var widgetTypeImport;

        if (isMain && isComponentExport) {
            widgetPath = './' + path.basename(context.filename);
            widgetTypeImport = builder.functionDeclaration(null, [], [
                builder.returnStatement(builder.memberExpression(builder.identifier('module'), builder.identifier('exports')))
            ]);
        }

        context.addDependency({ type:'require', path:widgetPath });
        context.addDependency({ type:'require', path:'marko/widgets' });

        widgetTypeNode = context.addStaticVar('marko_widgetType', this.buildWidgetTypeNode(widgetPath, widgetTypeImport));

        widgetProps.type = widgetTypeNode;
    }

    if (el.hasAttribute('w-config')) {
        el.insertSiblingBefore(
            builder.functionCall(
                builder.memberExpression(builder.identifier('widget'), builder.identifier('c')),
                [
                    el.getAttributeValue('w-config')
                ]));

        el.removeAttribute('w-config');
    }

    let id = el.getAttributeValue('id');

    if (id) {
        widgetProps.id = id;
    }

    if (isInnerBind) {
        // let widgetOptionsVar = context.addStaticVar(
        //     'widgetOptions',
        //     builder.functionCall(
        //         builder.memberExpression(transformHelper.markoWidgetsVar, builder.identifier('r')),
        //         [
        //             builder.renderBodyFunction([el]),
        //             builder.literal(widgetProps)
        //         ]));
        //
        // widgetProps._ = widgetOptionsVar;

        el.setAttributeValue('id',
            builder.memberExpression(
                builder.identifier('widget'),
                builder.identifier('id')));

        // TODO Deprecation warning for inner binds
        let widgetNode = context.createNodeForEl('_widget', {
            props: builder.literal(widgetProps)
        });
        el.wrapWith(widgetNode);
        return;
    }

    if (this.firstBind) {
        this.context.on('beforeGenerateCode:TemplateRoot', function(eventArgs) {
            eventArgs.node.addRenderFunctionParam(builder.identifier('widget'));
            eventArgs.node.addRenderFunctionParam(builder.identifier('state'));
            eventArgs.node.generateAssignRenderCode = function(eventArgs) {
                let nodes = [];
                let templateVar = eventArgs.templateVar;
                let templateRendererMember = eventArgs.templateRendererMember;
                let renderFunctionVar = eventArgs.renderFunctionVar;

                var createRendererArgs = [
                    renderFunctionVar,
                    builder.literal(widgetProps)
                ];

                if (renderingLogic) {
                    createRendererArgs.push(renderingLogic);
                }

                nodes.push(builder.assignment(
                    templateRendererMember,
                    builder.functionCall(
                        builder.memberExpression(transformHelper.markoWidgetsVar, builder.identifier('r')),
                        createRendererArgs)));

                if (inlineComponent || isComponentExport) {
                    nodes.push(builder.assignment(
                        builder.memberExpression(templateVar, builder.identifier('Widget')),
                        builder.functionCall(
                            builder.memberExpression(transformHelper.markoWidgetsVar, builder.identifier('w')),
                            [
                                renderingLogic,
                                templateRendererMember
                            ])));
                }

                return nodes;
            };
        });
    }



    // let widgetNode = el.data.widgetNode;
    //
    // if (widgetNode) {
    //     widgetNode.setAttributeValues(widgetProps);
    // } else {
    //     widgetNode = context.createNodeForEl('_widget', widgetProps);
    //     el.wrapWith(widgetNode);
    // }

    var ref = el.getAttributeValue('ref');

    if (el.hasAttribute('ref')) {
        if (!widgetProps.roots) {
            widgetProps.roots = [];
        }
        widgetProps.roots.push(ref);
    } else {
        el.setAttributeValue('id',
            builder.memberExpression(
                builder.identifier('widget'),
                builder.identifier('id')));
    }

    // this.widgetStack.push({
    //     widgetNode: widgetNode,
    //     el: el,
    //     extend: false
    // });
};