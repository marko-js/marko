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

module.exports = function handleWidgetBind() {
    var props = this.nodeProps;
    var bind = props['w-bind'];
    if (bind == null) {
        return;
    }

    var template = this.template;
    var compiler = this.compiler;
    var node = this.node;

    if (bind === '') {
        // If the bind attribute is an empty string then
        // that means that no value was provided so look
        // for the default widget module. We first
        // look for a "widget.js" in the same directory
        // and then we look for an "index.js" in the same directory
        bind = this.getDefaultWidgetModule();
        if (!bind) {
            node.addError('Unable to find default widget module when using w-bind without a value');
            return;
        }
    }

    // We create a local variable for the ""
    template.addStaticVar('__markoWidgets', 'require("marko-widgets")');

    // A widget is bound to the node
    var widgetAttrsVar = template.addStaticVar('_widgetAttrs', '__markoWidgets.attrs');

    var typePathExpression = this.registerWidgetType(bind);
    var config;
    var id;
    var state;

    var widgetNode = compiler.createTagHandlerNode('w-widget');
    node.parentNode.replaceChild(widgetNode, node);
    widgetNode.appendChild(node);

    widgetNode.setAttribute('module', typePathExpression);

    if ((config = props['w-config'])) {
        widgetNode.setProperty('config', config);
    }

    if ((state = props['w-state'])) {
        widgetNode.setProperty('state', state);
    }

    if ((id = node.getAttribute('id')) != null) {
        if (typeof id === 'string') {
            id = compiler.convertType(id, 'string', true);
        }

        widgetNode.setProperty('id', id);
    }

    node.setAttribute('id', template.makeExpression('widget.elId()'));

    node.addDynamicAttributes(template.makeExpression(widgetAttrsVar + '(widget)'));
};