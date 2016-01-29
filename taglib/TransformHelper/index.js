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
var tryRequire = require('try-require');
var fs = tryRequire('fs', require);
var nodePath = require('path');
var WidgetArgs = require('./WidgetArgs');
var getRequirePath = require('../getRequirePath');

function TransformHelper(node, compiler, template) {
    this.node = node;
    this.template = template;
    this.compiler = compiler;
    this.nodeProps = node.getProperties();

    this.widgetNextElId = 0;
    this.widgetIdInfo = undefined;
    this.widgetArgs = undefined;
    this.containingWidgetNode = undefined;
}

TransformHelper. prototype = {
    getWidgetArgs: function() {
        return this.widgetArgs || (this.widgetArgs = new WidgetArgs());
    },
    compileWidgetArgs: function() {
        if (!this.widgetArgs) {
            return;
        }

        this.widgetArgs.compileWidgetArgs(this.node, this.template);
    },
    nextUniqueId: function() {
        var widgetNextElId = this.template.data.widgetNextElId;
        if (widgetNextElId == null) {
            this.template.data.widgetNextElId = 0;
        }

        return (this.template.data.widgetNextElId++);
    },
    getNestedIdExpression: function() {
        this.assignWidgetId();
        return this.getWidgetIdInfo().nestedIdExpression;
    },
    getIdExpression: function() {
        this.assignWidgetId();
        return this.getWidgetIdInfo().idExpression;
    },
    getWidgetIdInfo: function() {
        return this.widgetIdInfo;
    },
    getDefaultWidgetModule: function() {
        var dirname = this.template.dirname;
        if (fs.existsSync(nodePath.join(dirname, 'widget.js'))) {
            return './widget';
        } else if (fs.existsSync(nodePath.join(dirname, 'index.js'))) {
            return './';
        } else {
            return null;
        }
    },
    assignWidgetId: require('./assignWidgetId'),
    registerWidgetType: require('./registerWidgetType'),
    getContainingWidgetNode: require('./getContainingWidgetNode'),
    handleWidgetEvents: require('./handleWidgetEvents'),
    handleWidgetPreserve: require('./handleWidgetPreserve'),
    handleWidgetPreserveAttrs: require('./handleWidgetPreserveAttrs'),
    handleWidgetBody: require('./handleWidgetBody'),
    handleWidgetBind: require('./handleWidgetBind'),
    handleWidgetExtend: require('./handleWidgetExtend'),
    handleWidgetFor: require('./handleWidgetFor'),
    getClientWidgetPath: require('./getClientWidgetPath'),
    getMarkoWidgetsRequirePath: function(target) {
        return getRequirePath(target, this.template);
    }
};

module.exports = TransformHelper;