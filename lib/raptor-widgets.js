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
/**
* Module to manage the lifecycle of widgets
*
*/
'use strict';


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
/**
* @extension Server
* 
*/
var stringify = require('raptor-json/stringify');
var raptorModulesResolver = require('raptor-modules/resolver');
var raptorModulesUtil = require('raptor-modules/util');
var nodePath = require('path');

var TAG_START = '<span id="rwidgets" data-ids="';
var TAG_END = '" style="display:none;"></span>';

var specialRegExp = /([^ -~]|(["'\\<]))/g;
var requireInfoCache = {};

function getWidgetRequireInfo(path) {
    var requireInfo = requireInfoCache[path];
    if (requireInfo === undefined) {
        var logicalPath = raptorModulesUtil.getPathInfo(path).logicalPath;
        

        var dirname = nodePath.dirname(path);
        var raptorWidgetsPath = raptorModulesResolver.resolveRequire('raptor-widgets', dirname);
        
        requireInfo = requireInfoCache[path] = {
            path: logicalPath,
            init: 'require("' +raptorWidgetsPath.logicalPath + '")._init'
        };
    }
    return requireInfo;
}

module.exports = {
    getWidgetsContext: require('./WidgetsContext').getWidgetsContext,
    uniqueId: require('./uniqueId'),

    attrs: function(widget) {
        var attrs = {
            'data-rwidget': getWidgetRequireInfo(widget.module).path
        };
        var widgetConfig = widget.config;
        if (widgetConfig) {
            attrs['data-rwidget-config'] = stringify(widgetConfig, { special: specialRegExp });
        }

        if (widget.assignedId) {
            attrs['data-rwidget-id'] = (widget.scope ? widget.scope.id + '|' : '') + widget.assignedId;
        }

        if (widget.events) {
            var eventsStr = '[';

            
            widget.events.forEach(function (event) {
                eventsStr += '["' + event[0] + '","' + event[1] + (event[2] != null ? '",' + stringify(event[2]) + ']' : '"]');
            });
            
            eventsStr += ']';
            attrs['data-rwidget-events'] = widget.events;
        }

        return attrs;
    },


    writeInitWidgetsCode: function (widgetsContext, context, options) {
        var clearWidgets = true;
        var scanDOM = false;

        if (options) {
            clearWidgets = options.clearWidgets !== false;
            scanDOM = options.scanDOM === true;
        }

        if (scanDOM) {
            context.write(TAG_START + '*' + TAG_END);
        } else {
            var widgets = widgetsContext.getWidgets();

            if (!widgets) {
                return;
            }

            var ids = '';

            var commaRequired = false;
            
            var writeWidgets = function(widgets) {
                for (var i = 0, len = widgets.length; i < len; i++) {
                    writeWidget(widgets[i]);
                }
            };

            var writeWidget = function(widget) {

                if (widget.children.length) {
                    // Depth-first search (children should be initialized before parent)
                    writeWidgets(widget.children);
                }

                if (commaRequired) {
                    ids += ',';
                } else {
                    commaRequired = true;    
                }
                
                ids += widget.id;
            };

            writeWidgets(widgets);

            context.write(TAG_START + ids + TAG_END);
        }

        

        if (clearWidgets !== false) {
            widgetsContext.clearWidgets();
        }
    }
};