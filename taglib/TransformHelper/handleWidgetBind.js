
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

module.exports = function handleWidgetBind() {
    var el = this.el;
    var context = this.context;
    var builder = this.builder;

    var bindAttr = el.getAttribute('w-bind');
    if (bindAttr == null) {
        return;
    }

    // A widget is bound to the el...

    // Remove the w-bind attribute since we don't want it showing up in the output DOM
    el.removeAttribute('w-bind');

    // Read the value for the w-bind attribute. This will be an AST node for the parsed JavaScript
    var bindAttrValue = bindAttr.value;
    var modulePath;

    var widgetAttrs = {};

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
            builder.identifier('__widgetTypes'),
            bindAttrValue);
    }

    if (modulePath) {
        let widgetTypeNode = context.addStaticVar('__widgetType', this.buildWidgetTypeNode(modulePath));
        widgetAttrs.type = widgetTypeNode;
    }

    var id = el.getAttributeValue('id');

    if (el.hasAttribute('w-config')) {
        widgetAttrs.config = el.getAttributeValue('w-config');
        el.removeAttribute('w-config');
    }

    if (id) {
        widgetAttrs.id = id;
    }

    var widgetNode = context.createNodeForEl('w-widget', widgetAttrs);
    el.wrapWith(widgetNode);

    el.setAttributeValue('id', builder.memberExpression(builder.identifier('widget'), builder.identifier('id')));

    // var _widgetAttrs = __markoWidgets.attrs;
    var widgetAttrsVar = context.addStaticVar('__widgetAttrs',
        builder.memberExpression(this.markoWidgetsVar, builder.identifier('attrs')));

    el.addDynamicAttributes(builder.functionCall(widgetAttrsVar, [ builder.identifier('widget') ]));

    this.widgetStack.push({
        widgetNode: widgetNode,
        el: el,
        extend: false
    });
};