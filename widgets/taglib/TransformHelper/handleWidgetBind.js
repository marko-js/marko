
/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

let path = require('path');

function isTemplateMainEntry(context) {
    let filename = path.basename(context.filename);
    let ext = path.extname(filename);
    if (ext) {
        filename = filename.slice(0, 0 - ext.length);
    }

    return filename === 'index';
}

function isCombinedWidget(widgetModulePath) {
    let filename = path.basename(widgetModulePath);
    let ext = path.extname(filename);
    if (ext) {
        filename = filename.slice(0, 0 - ext.length);
    }

    return filename !== 'widget';
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



    if (bindAttrValue == null) {
        modulePath = this.getDefaultWidgetModule();
        if (!modulePath) {
            this.addError('Invalid "w-bind" attribute. No corresponding JavaScript module found in the same directory (either "widget.js" or "index.js"). Actual: ' + modulePath);
            return;
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

    let isComponentExport = isMain && isCombinedWidget(modulePath);

    let transformHelper = this;

    if (isComponentExport) {
        transformHelper.markoWidgetsVar = builder.identifier('marko_widgets');
    }

    if (modulePath) {
        let widgetTypeNode;

        let def;

        if (isMain) {
            def = builder.functionDeclaration(null, [], [
                builder.returnStatement(builder.memberExpression(builder.identifier('module'), builder.identifier('exports')))
            ]);
        }

        widgetTypeNode = context.addStaticVar('marko_widgetType', this.buildWidgetTypeNode(modulePath, def));

        widgetAttrs.type = widgetTypeNode;

        if (isComponentExport) {
            this.context.on('beforeGenerateCode:TemplateRoot', function(root) {
                root.node.generateExports = function(template) {
                    return buildExport(transformHelper, modulePath, template);
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

function buildExport(transformHelper, modulePath, template) {
    let builder = transformHelper.builder;
    return [
        builder.assignment(
            builder.var('component'),
            builder.require(
                builder.literal(modulePath)
            )
        ),
        builder.assignment(
            builder.var('template'),
            template
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