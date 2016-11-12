'use strict';

let path = require('path');
var resolveFrom = require('resolve-from');

function isTemplateMainEntry(context) {
    let filename = path.basename(context.filename);
    let ext = path.extname(filename);
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

module.exports = function handleWidgetBind() {
    let el = this.el;
    let context = this.context;
    let builder = this.builder;

    let bindAttr = el.getAttribute('w-bind');
    if (bindAttr == null) {
        return;
    }

    // A widget is bound to the el...

    // Remove the w-bind attribute since we don't want it showing up in the output DOM
    el.removeAttribute('w-bind');

    // Read the value for the w-bind attribute. This will be an AST node for the parsed JavaScript
    let bindAttrValue = bindAttr.value;
    let modulePath;

    let widgetAttrs = {};

    let isMain = isTemplateMainEntry(context);
    let transformHelper = this;

    if (bindAttrValue == null) {
        let component = getInlineComponent(context);
        if(component) {
            widgetAttrs.type = context.addStaticVar(
                'marko_widgetType',
                this.buildWidgetTypeNode(
                    context.filename,
                    builder.functionDeclaration(null, [] /* params */, [
                        builder.returnStatement(
                            builder.memberExpression('module', 'exports')
                        )
                    ])));

            context.on('beforeGenerateCode:TemplateRoot', function(root) {
                root.node.generateExports = function(template) {
                    return buildComponentExport(transformHelper, component, template);
                };
            });
        } else {
            modulePath = this.getDefaultWidgetModule();
            if (!modulePath) {
                this.addError('Invalid "w-bind" attribute. No corresponding JavaScript module found in the same directory (either "widget.js" or "index.js"). Actual: ' + modulePath);
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
        if (!context.isFlagSet('hasWidgetTypes')) {
            this.addError('The <widget-types> tag must be used to declare widgets when the value of the "w-bind" attribute is a dynamic expression.');
            return;
        }

        widgetAttrs.type = builder.computedMemberExpression(
            builder.identifier('marko_widgetTypes'),
            bindAttrValue);
    }

    let isComponentExport;
    let isRendererExport;
    let rendererPath;

    if (isMain) {
        if (checkCombinedComponent(modulePath)) {
            isComponentExport = true;
        } else if (checkSplitComponent(context)) {
            isRendererExport = true;
            rendererPath = './renderer';
        }
    }

    if (isComponentExport || isRendererExport) {
        transformHelper.markoWidgetsVar = builder.identifier('marko_widgets');
    }

    if (modulePath) {
        let widgetTypeNode;

        let def;

        if (isMain && isComponentExport) {
            def = builder.functionDeclaration(null, [], [
                builder.returnStatement(builder.memberExpression(builder.identifier('module'), builder.identifier('exports')))
            ]);
        }

        widgetTypeNode = context.addStaticVar('marko_widgetType', this.buildWidgetTypeNode(modulePath, def));

        widgetAttrs.type = widgetTypeNode;

        if (isComponentExport || isRendererExport) {
            this.context.on('beforeGenerateCode:TemplateRoot', function(root) {
                root.node.generateExports = function(template) {
                    if (isComponentExport) {
                        let component = builder.require(
                            builder.literal(modulePath)
                        );

                        return buildComponentExport(transformHelper, component, template);
                    } else {
                        let renderer = builder.require(
                            builder.literal(rendererPath)
                        );

                        return buildRendererExport(transformHelper, renderer, template);
                    }

                };
            });
        }
    }

    let id = el.getAttributeValue('id');

    if (el.hasAttribute('w-config')) {
        widgetAttrs.config = el.getAttributeValue('w-config');
        el.removeAttribute('w-config');
    }

    if (id) {
        widgetAttrs.id = id;
    }

    let widgetNode = context.createNodeForEl('w-widget', widgetAttrs);
    el.wrapWith(widgetNode);

    el.setAttributeValue('id', builder.memberExpression(builder.identifier('widget'), builder.identifier('id')));

    // let _widgetAttrs = __markoWidgets.attrs;
    let widgetAttrsVar = context.addStaticVar('marko_widgetAttrs',
        builder.memberExpression(this.markoWidgetsVar, builder.identifier('attrs')));

    el.addDynamicAttributes(builder.functionCall(widgetAttrsVar, [ builder.identifier('widget') ]));

    this.widgetStack.push({
        widgetNode: widgetNode,
        el: el,
        extend: false
    });
};

function getInlineComponent(context) {
    var builder = context.builder;
    var component;
    context.root.body.array.some(node => {
        if(node.tagName === 'script' && node.getAttribute('component')) {
            node.detach();
            component = builder.selfInvokingFunction([
                builder.code(node.body.array[0].argument.value)
            ]);
            return true;
        }
    });
    return component;
}

function buildComponentExport(transformHelper, component, template) {
    let builder = transformHelper.builder;
    return [
        builder.assignment(
            builder.var('component'),
            component
        ),
        builder.var(transformHelper.markoWidgetsVar, builder.require(builder.literal(transformHelper.getMarkoWidgetsRequirePath('marko/widgets')))),
        builder.assignment(
            builder.memberExpression(
                builder.identifier('module'),
                builder.identifier('exports')
            ),
            builder.functionCall(
                builder.memberExpression(
                    transformHelper.markoWidgetsVar,
                    builder.identifier('c')
                ),
                [
                    builder.identifier('component'),
                    builder.identifier('template')
                ]
            )
        )
    ];
}

function buildRendererExport(transformHelper, renderer, template) {
    let builder = transformHelper.builder;
    return [
        builder.assignment(
            builder.var('renderer'),
            renderer
        ),
        builder.var(transformHelper.markoWidgetsVar, builder.require(builder.literal(transformHelper.getMarkoWidgetsRequirePath('marko/widgets')))),
        builder.assignment(
            builder.memberExpression(
                builder.identifier('module'),
                builder.identifier('exports')
            ),
            builder.functionCall(
                builder.memberExpression(
                    transformHelper.markoWidgetsVar,
                    builder.identifier('r')
                ),
                [
                    builder.identifier('renderer'),
                    builder.identifier('template')
                ]
            )
        )
    ];
}