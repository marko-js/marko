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
require('raptor-polyfill/string/startsWith');
var isObjectEmpty = require('raptor-util/isObjectEmpty');
var fs = require('fs');
var nodePath = require('path');

var markoWidgets = require('../');

function getWidgetNode(node) {
    if (!node) {
        return;
    }

    while (true) {
        if (node.qName === 'w-widget') {
            return node;
        }

        node = node.parentNode;
        if (!node) {
            break;
        }
    }
}

function getDefaultWidgetModule(dirname) {
    if (fs.existsSync(nodePath.join(dirname, 'widget.js'))) {
        return './widget';
    } else if (fs.existsSync(nodePath.join(dirname, 'index.js'))) {
        return './';
    } else {
        return null;
    }
}

exports.process =function (node, compiler, template) {
    var props = node.getProperties();


    if (!node._ts) {
        node._ts = Math.random();
    }

    var widgetTypes = [];

    function registerType(target) {
        var typePathExpression;
        var targetExpression;

        if (compiler.hasExpression(target)) {
            return '__markoWidgets.getDynamicClientWidgetPath(' + compiler.convertType(target, 'string', true) + ')';
        }

        // Resolve the static string to a full path at compile time
        typePathExpression = template.addStaticVar(target === './' ? '__widgetPath' : target, JSON.stringify(markoWidgets.getClientWidgetPath(target, template.dirname)));
        targetExpression = 'require(' + JSON.stringify(target) + ')';

        widgetTypes.push({
            name: typePathExpression,
            target: targetExpression
        });

        template.addStaticCode(function(writer) {
            writer.line('if (typeof window != "undefined") {');
            writer.incIndent();
            widgetTypes.forEach(function(registeredType) {
                writer.line('__markoWidgets.registry.register(' + registeredType.name + ', ' + registeredType.target + ');');
            });

            writer.decIndent();
            writer.line('}');
        });

        return typePathExpression;
    }

    var bind;

    if ((bind = props['w-bind']) != null) {

        if (bind === '') {
            bind = getDefaultWidgetModule(template.dirname);
            if (!bind) {
                node.addError('Unable to find default widget module when using w-bind without a value');
                return;
            }
        }

        template.addStaticVar('__markoWidgets', 'require("marko-widgets")');

        // A widget is bound to the node
        var widgetAttrsVar = template.addStaticVar('_widgetAttrs', '__markoWidgets.attrs');

        var typePathExpression = registerType(bind);

        var config;
        var assignedId;
        var scope;
        var id;

        var widgetNode = compiler.createTagHandlerNode('w-widget');
        node.parentNode.replaceChild(widgetNode, node);
        widgetNode.appendChild(node);

        widgetNode.setAttribute('module', typePathExpression);

        if ((config = props['w-config'])) {
            widgetNode.setProperty('config', config);
        }

        if ((assignedId = props['w-assigned-id'])) {
            widgetNode.setProperty('assignedId', assignedId);
        }

        if ((scope = props['w-scope'])) {
            widgetNode.setProperty('scope', scope);
        }

        if ((id = node.getAttribute('id'))) {
            id = compiler.convertType(id, 'string', true);
            widgetNode.setProperty('id', id);
        }

        node.setAttribute('id', '${widget.elId()}');

        node.addDynamicAttributes(template.makeExpression(widgetAttrsVar + '(widget)'));
    } else {
        var widgetId;
        var widgetExtend;
        var widgetElIdExpression;
        var widgetFor;

        var widgetArgs = {};

        if ((widgetId = props['w-id'])) {
            // Handle the "w-id" attribute
            delete props['w-id'];
            widgetArgs.id = widgetId;
        } else if ((widgetExtend = props['w-extend']) != null) {
            if (widgetExtend === '') {
                widgetExtend = getDefaultWidgetModule(template.dirname);
                if (!widgetExtend) {
                    node.addError('Unable to find default widget module when using w-extend without a value');
                    return;
                }
            }

            // Handle the "w-extend" attribute
            delete props['w-extend'];
            template.addStaticVar('__markoWidgets', 'require("marko-widgets")');
            widgetArgs.extend = registerType(widgetExtend);

            var extendConfig = props['w-config'];

            if (extendConfig) {
                widgetArgs.extendConfig = template.makeExpression(extendConfig);
            } else {
                widgetArgs.extendConfig = template.makeExpression('data.widgetConfig');
            }
        } else if ((widgetElIdExpression = props['w-el-id'])) {
            // Handle the "w-el-id" attribute
            if (node.hasAttribute('id')) {
                node.addError('The "w-el-id" attribute cannot be used in conjuction with the "id" attribute');
            } else {
                node.setAttribute(
                    'id',
                    template.makeExpression('widget.elId(' +
                        widgetElIdExpression.toString() +
                        ')'));
            }
        } else if ((widgetFor = props['w-for'])) {
            // Handle the "w-for" attribute
            if (node.hasAttribute('for')) {
                node.addError('The "w-for" attribute cannot be used in conjuction with the "for" attribute');
            } else {
                node.setAttribute(
                    'for',
                    template.makeExpression('widget.elId(' +
                        compiler.convertType(widgetFor, 'string', true) +
                        ')'));
            }
        }

        if (!isObjectEmpty(widgetArgs)) {

            template.addStaticVar('_widgetArgs',
                'require("marko-widgets/taglib/helpers").widgetArgs');

            template.addStaticVar('_cleanupWidgetArgs',
                'require("marko-widgets/taglib/helpers").cleanupWidgetArgs');

            var widgetArgsParts = [];
            if (widgetArgs.id) {
                widgetArgsParts.push(JSON.stringify(widgetArgs.id.toString()));
                widgetArgsParts.push('widget');
            } else {
                widgetArgsParts.push('null');
                widgetArgsParts.push('null');
            }
            if (widgetArgs.events) {
                widgetArgsParts.push(widgetArgs.events);
            }

            if (widgetArgs.extend) {
                if (!widgetArgs.events) {
                    widgetArgsParts.push('null');
                }

                widgetArgsParts.push(widgetArgs.extend);
                widgetArgsParts.push(widgetArgs.extendConfig);
            }

            node.addBeforeCode(template.makeExpression('_widgetArgs(out,' + widgetArgsParts.join(', ') + ');'));
            node.addAfterCode(template.makeExpression('_cleanupWidgetArgs(out);'));
        }
    }

    var widgetTagNode;
    var eventIdExpression;

    function addDirectEventListener(eventType, targetMethod) {
        // The event does not support bubbling, so the widget
        // must attach the listeners directly to the target
        // elements when the widget is initialized.
        if (!widgetTagNode) {
            widgetTagNode = getWidgetNode(node);
        }

        if (!widgetTagNode) {
            node.addError('Unable to handle event "' + eventType + '". HTML element is not nested within a widget.');
            return;
        }

        if (!eventIdExpression) {
            // In order to attach a DOM event listener directly we need to make sure
            // the target HTML element has an ID that we can use to get a reference
            // to the element during initialization. We need to handle the following
            // scenarios:
            //
            // 1) The HTML element already has an "id" attribute
            // 2) The HTML element has a "w-el-id" attribute (we already converted this
            //    to an "id" attribute above)
            // 3) The HTML does not have an "id" or "w-el-id" attribute. We must add
            //    an "id" attribute with a unique ID.

            var idAttr = node.getAttribute('id');
            if (idAttr) {
                // Case 1 and 2 -- Using the existing "id" attribute
                // The "id" attribute can be a JavaScript expression or a raw String
                // value. We need a JavaScript expression that can be used to
                // provide the same ID at runtime.

                if (bind) {
                    // We have to attach a listener to the root element of the widget
                    // We will use "!" as an indicator that it is the root widget
                    // element.
                    //
                    // Use an exclamation point to make it clear that we
                    // we need to resolve the ID as a root widget element ID.
                    eventIdExpression = compiler.makeExpression('"!"');
                } else if (widgetElIdExpression) {
                    // We have to attach a listener to a nested HTML element of the widget
                    // that was assigned an ID using "w-el-id".
                    //
                    // Prefix widget element ID with an exclamation point to make it clear that we
                    // we need to resolve the ID as a widget element ID.
                    eventIdExpression = compiler.makeExpression('"!"+' + widgetElIdExpression.toString());
                } else if (typeof idAttr === 'string') {
                    // Convert the raw String to a JavaScript expression
                    eventIdExpression = compiler.convertType(idAttr, 'string', true);
                } else {
                    // The "id" attribute is already expression that we can use that
                    // directly
                    eventIdExpression = idAttr;
                }
            } else {
                // Case 3 - We need to add a unique "id" attribute

                // We'll add a property to keep track of our next widget ID
                // NOTE: This is at compile time and "template.data" is only
                //       used for the current template compilation. We need
                //       a unique ID that
                if (template.data.widgetNextId == null) {
                    template.data.widgetNextId = 0;
                }

                var uniqueId = '_' + (template.data.widgetNextId++);

                // Prefix the unique ID with an exclamation point to make it clear that we
                // we need to resolve the ID as a widget element ID.
                eventIdExpression = compiler.makeExpression(JSON.stringify('!' + uniqueId));

                node.setAttribute('id', compiler.makeExpression('widget.elId("' +
                    uniqueId +
                    '")'));
            }
        }

        if (!widgetTagNode.data.widgetEvents) {
            // Add a new input property to the widget tag that will contain
            // enough information to allow the DOM event listeners to
            // be attached directly to the DOM elements.
            widgetTagNode.data.widgetEvents = [];
            widgetTagNode.setProperty('events', function() {
                return compiler.makeExpression(
                    '[' + widgetTagNode.data.widgetEvents.join(',') + ']');
            });
        }

        // Add a 3-tuple consisting of <event-type><target-method><DOM element ID>
        widgetTagNode.data.widgetEvents.push(JSON.stringify(eventType));
        widgetTagNode.data.widgetEvents.push(JSON.stringify(targetMethod));
        widgetTagNode.data.widgetEvents.push(eventIdExpression.toString());
    }

    function addBubblingEventListener(eventType, targetMethod) {

        if (!widgetTagNode) {
            widgetTagNode = getWidgetNode(node);
        }

        if (!widgetTagNode) {
            node.addError('Unable to handle event "' + eventType + '". HTML element is not nested within a widget.');
            return;
        }

        node.setAttribute('data-' + propName,
            compiler.makeExpression(JSON.stringify(targetMethod + '|') +
            '+widget.id'));
    }

    if (node.hasFlag('hasWidgetEvents')) {
        // The Marko compiler was nice enough to attach a flag to nodes that
        // have one or more attributes that match the "w-on*" pattern.
        // We still need to loop over the properties to find and handle
        // the properties corresponding to those attributes
        for (var propName in props) {
            if (props.hasOwnProperty(propName) && propName.startsWith('w-on')) {

                propName = propName.toLowerCase();

                var eventType = propName.substring(4); // Chop off "w-on"

                var targetMethod = props[propName];

                var isBubbleEvent = markoWidgets.isBubbleEvent(eventType);

                if (isBubbleEvent) {
                    // The event is white listed for bubbling so we know that
                    // we have already attached a listener on document.body
                    // that can be used to handle the event. We will add
                    // a "data-w-on{eventType}" attribute to the output HTML
                    // for this element that will be used to map the event
                    // to a method on the containing widget.
                    addBubblingEventListener(eventType, targetMethod);
                } else {
                    // The event does not bubble so we must attach a DOM
                    // event listener directly to the target element.
                    addDirectEventListener(eventType, targetMethod);
                }
            }
        }
    }

    if (node.qName === 'w-widget') {
        if (node.getAttribute('id') != null) {
            node.setProperty('scope', template.makeExpression('widget'));
        }
    }
};