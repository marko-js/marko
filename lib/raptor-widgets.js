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
var raptorModulesTransport = require('raptor-modules/transport');
var nodePath = require('path');

var specialRegExp = /([^ -~]|(["'\\<]))/g;
var requireInfoCache = {};
var aCharCode = 'a'.charCodeAt(0);

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

    writeInitWidgetsCode: function (widgetsContext, context, clearWidgets) {
        var widgets = widgetsContext.getWidgets();
        var varsLookup = {};
        var vars = [];

        var buffer = [];

        if (!widgets) {
            return;
        }
        function write(str) {
            buffer.push(str);
        }
        function writeWidgets(widgets, isChildren) {
            for (var i = 0, len = widgets.length; i < len; i++) {
                if (isChildren && i) {
                    write(',');
                }
                writeWidget(widgets[i]);
            }
        }
        function writeWidget(widget) {
            var requireInfo = getWidgetRequireInfo(widget.path);
            var varName = varsLookup[requireInfo.init];
            if (!varName) {
                varName = varsLookup[requireInfo.init] = String.fromCharCode(aCharCode + vars.length);
                vars.push(varName + '=' + requireInfo.init);
            }
            var widgetConfig = widget.config;
            write('\n' + varName + '("');
            write(requireInfo.path);
            write('","');
            write(widget.id);
            write('",');
            write(widgetConfig ? stringify(widgetConfig, { special: specialRegExp }) : '0');
            write(widget.scope ? ',"' + widget.scope.id + '"' : ',0');
            write(widget.assignedId ? ',"' + widget.assignedId + '"' : ',0');
            if (widget.events) {
                write(',[');
                widget.events.forEach(function (event) {
                    write('["' + event[0] + '","' + event[1] + (event[2] != null ? '",' + stringify(event[2]) + ']' : '"]'));
                });
                write(']');
            } else {
                write(',0');
            }
            if (widget.children.length) {
                write(',');
                writeWidgets(widget.children, true);
            }
            write(')');
        }

        writeWidgets(widgets);

        context.write(raptorModulesTransport.runCode.sync('/', 'var ' + vars.join(',') + buffer.join('')));

        if (clearWidgets !== false) {
            widgetsContext.clearWidgets();
        }
    }
};