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
var forEachEntry = require('raptor-util').forEachEntry;
var strings = require('raptor-strings');
var objects = require('raptor-objects');
var stringify = require('raptor-json/stringify');

exports.process =function (node, compiler, template) {
    var widgetAttr = node.getAttribute('w-widget') || node.getAttribute('w-bind');
    var widgetElIdAttr;
    var widgetProps = widgetAttr ? null : node.getProperties();

    var widgetArgs = {};
    var widgetEvents = [];
    if (widgetProps) {
        var handledPropNames = [];
        forEachEntry(widgetProps, function (name, value) {
            if (name === 'w-id') {
                handledPropNames.push(name);
                widgetArgs.scope = 'widget';
                widgetArgs.id = value;
            } else if (strings.startsWith(name, 'w-event-')) {
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
                if (!objects.isEmpty(widgetEvent.eventProps)) {
                    widgetPropsJS = [];
                    forEachEntry(widgetEvent.eventProps, function (name, valueExpression) {
                        widgetPropsJS.push(stringify(name) + ': ' + valueExpression);
                    }, this);
                    widgetPropsJS = '{' + widgetPropsJS.join(', ') + '}';
                }
                return '[' + stringify(widgetEvent.sourceEvent) + ',' + stringify(widgetEvent.targetMessage) + (widgetPropsJS ? ',' + widgetPropsJS : '') + ']';
            }).join(',') + ']';
        }
        if (!objects.isEmpty(widgetArgs)) {
            template.addVar('_widgetArgs', 'require("raptor-widgets/taglib/helpers").widgetArgs');
            template.addVar('_cleanupWidgetArgs', 'require("raptor-widgets/taglib/helpers").cleanupWidgetArgs');
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
            node.addPreInvokeCode(template.makeExpression('_widgetArgs(context,' + widgetArgsParts.join(', ') + ')'));
            node.addPostInvokeCode(template.makeExpression('_cleanupWidgetArgs(context);'));
        }
    }

    if (widgetAttr) {
        node.removeAttribute('w-widget');
        node.removeAttribute('w-bind');
        var widgetJsClass = compiler.convertType(widgetAttr, 'string', true);
        var config;
        var assignedId;
        if ((assignedId = node.getAttribute('w-id'))) {
            node.removeAttribute('w-id');
            assignedId = compiler.convertType(assignedId, 'string', true);
        }
        if ((config = node.getAttribute('w-config'))) {
            node.removeAttribute('w-config');
            config = compiler.convertType(config, 'expression', true);
        }
        var widgetNode = compiler.createTagHandlerNode('w-widget');
        node.parentNode.replaceChild(widgetNode, node);
        widgetNode.appendChild(node);
        widgetNode.setProperty('path', template.makeExpression('require.resolve(' + widgetJsClass + ')'));
        if (config) {
            widgetNode.setProperty('config', config);
        }
        if (assignedId) {
            widgetNode.setProperty('assignedId', assignedId);
            widgetNode.setProperty('scope', template.makeExpression('widget'));
        }
        var elId = node.getAttribute('id');
        if (elId) {
            elId = compiler.convertType(elId, 'string', true);
            widgetNode.setProperty('elId', elId);
        } else {
            node.setAttribute('id', '${widget.elId()}');
        }
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