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
require('raptor-ecma/es6');
var forEachEntry = require('raptor-util/forEachEntry');
var isObjectEmpty = require('raptor-util/isObjectEmpty');
var stringify = require('raptor-json/stringify');

exports.process =function (node, compiler, template) {
    var widgetAttr = node.getAttribute('w-widget') || node.getAttribute('w-bind');
    var widgetElIdAttr;
    var widgetProps = widgetAttr ? null : node.getProperties();

    var widgetArgs = {};
    var widgetEvents = [];

    // if (node.tagName === 'sample-button') {
    //     console.log(node.tagName, node.getAttributes(), node.getProperties());
    //     console.log(node.getAttributes());
    // }
    if (widgetProps) {
        var handledPropNames = [];
        forEachEntry(widgetProps, function (name, value) {
            if (name === 'w-id') {
                handledPropNames.push(name);
                widgetArgs.id = value;
            } else if (name.startsWith('w-event-')) {
                handledPropNames.push(name);
                var eventProps = compiler.parseAttribute(value, {
                        '*': { type: 'expression' },
                        target: { type: 'custom' }
                    }, {
                        defaultName: 'target',
                        errorHandler: function (message) {
                            node.addError('Invalid value of "' + value + '" for event attribute "' + name + '". Error: ' + message);
                        }
                    });
                var sourceEvent = name.substring('event-'.length);
                var targetMessage = eventProps.target;
                if (!targetMessage) {
                    node.addError('Invalid value of "' + value + '" for event attribute "' + name + '". Target message not provided');
                    return;
                }
                delete eventProps.target;
                widgetEvents.push({
                    sourceEvent: sourceEvent,
                    targetMessage: targetMessage,
                    eventProps: eventProps
                });
            }
        });

        handledPropNames.forEach(function (propName) {
            node.removeProperty(propName);
        });

        if (widgetEvents.length) {
            widgetArgs.events = '[' + widgetEvents.map(function (widgetEvent) {
                var widgetPropsJS;
                if (!isObjectEmpty(widgetEvent.eventProps)) {
                    widgetPropsJS = [];
                    forEachEntry(widgetEvent.eventProps, function (name, valueExpression) {
                        widgetPropsJS.push(stringify(name) + ': ' + valueExpression);
                    }, this);
                    widgetPropsJS = '{' + widgetPropsJS.join(', ') + '}';
                }
                return '[' + stringify(widgetEvent.sourceEvent) + ',' + stringify(widgetEvent.targetMessage) + (widgetPropsJS ? ',' + widgetPropsJS : '') + ']';
            }).join(',') + ']';
        }
        if (!isObjectEmpty(widgetArgs)) {
            template.addStaticVar('_widgetArgs', 'require("raptor-widgets/taglib/helpers").widgetArgs');
            template.addStaticVar('_cleanupWidgetArgs', 'require("raptor-widgets/taglib/helpers").cleanupWidgetArgs');
            var widgetArgsParts = [];
            if (widgetArgs.id) {
                widgetArgsParts.push(widgetArgs.id.toString());
                widgetArgsParts.push('widget');
            } else {
                widgetArgsParts.push('null');
                widgetArgsParts.push('null');
            }
            if (widgetArgs.events) {
                widgetArgsParts.push(widgetArgs.events);
            }
            node.addBeforeCode(template.makeExpression('_widgetArgs(context,' + widgetArgsParts.join(', ') + ');'));
            node.addAfterCode(template.makeExpression('_cleanupWidgetArgs(context);'));
        }
    }

    if (widgetAttr) {
        var widgetAttrsVar = template.addStaticVar('_widgetAttrs', 'require("raptor-widgets").attrs');

        node.removeAttribute('w-widget');
        node.removeAttribute('w-bind');
        var config;
        var assignedId;
        var scope;
        if ((assignedId = node.getAttribute('w-assigned-id'))) {
            node.removeAttribute('w-assigned-id');
            assignedId = compiler.convertType(assignedId, 'string', true);
        }
        if ((scope = node.getAttribute('w-scope'))) {
            node.removeAttribute('w-scope');
            scope = compiler.convertType(scope, 'expression', true);
        }

        if ((config = node.getAttribute('w-config'))) {
            node.removeAttribute('w-config');
            config = compiler.convertType(config, 'expression', true);
        }
        var widgetNode = compiler.createTagHandlerNode('w-widget');
        node.parentNode.replaceChild(widgetNode, node);
        widgetNode.appendChild(node);

        widgetNode.setAttribute('module', widgetAttr);

        if (config) {
            widgetNode.setProperty('config', config);
        }
        if (assignedId) {
            widgetNode.setProperty('assignedId', assignedId);
        }
        if (scope) {
            widgetNode.setProperty('scope', scope);
        }
        var elId = node.getAttribute('id');
        if (elId) {
            elId = compiler.convertType(elId, 'string', true);
            widgetNode.setProperty('elId', elId);
        } else {
            node.setAttribute('id', '${widget.elId()}');
        }

        node.addDynamicAttributes(template.makeExpression(widgetAttrsVar + '(widget)'));
    }

    if ((widgetElIdAttr = node.getAttribute('w-el-id'))) {
        node.removeAttribute('w-el-id');
        if (node.hasAttribute('id')) {
            node.addError('The "w-el-id" attribute cannot be used in conjuction with the "id" attribute');
        } else {
            node.setAttribute('id', template.makeExpression('widget.elId(' + JSON.stringify(widgetElIdAttr) + ')'));
        }
    }

    if (node.qName === 'w-widget') {
        if (node.getAttribute('id') != null) {
            node.setProperty('scope', template.makeExpression('widget'));
        }
    }
};