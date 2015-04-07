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

var TransformHelper = require('./TransformHelper');

exports.process =function (node, compiler, template) {
    var transformHelper = new TransformHelper(node, compiler, template);
    var nodeProps = transformHelper.nodeProps;

    if (nodeProps['w-preserve'] != null || nodeProps['w-preserve-body'] != null) {
        transformHelper.handleWidgetPreserve();
    }

    if (nodeProps['w-bind'] != null) {
        transformHelper.handleWidgetBind();
    } else if (nodeProps['w-extend'] != null) {
        transformHelper.handleWidgetExtend();
    } else if (nodeProps['w-id'] != null || nodeProps['w-el-id'] != null) {
        transformHelper.assignWidgetId();
    } else if (nodeProps['w-for'] != null) {
        transformHelper.handleWidgetFor();
    }

    if (nodeProps['w-body'] != null) {
        transformHelper.handleWidgetBody();
    }

    // Handle w-on* properties
    transformHelper.handleWidgetEvents();

    // If we need to pass any information to a nested widget then
    // we start that information in the "out" so that it can be picked
    // up later by the nested widget. We call this "widget args" and
    // we generate compiled code that stores the widget args in the out
    // for the next widget and then we also insert cleanup code to remove
    // the data out of the out
    if (node.tag) { // Only custom tags can have nested widgets
        transformHelper.compileWidgetArgs();
    }

    if (node.qName === 'w-widget') {
        if (node.getAttribute('id') != null) {
            node.setProperty('scope', template.makeExpression('widget'));
        }
    }
};