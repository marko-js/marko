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
var getTransformHelper = require('./util/getTransformHelper');

module.exports = function transform(el, context) {
    var transformHelper = getTransformHelper(el, context);

    if (el.tagName === 'widget-types') {
        context.setFlag('hasWidgetTypes');
    }

    if (el.hasAttribute('w-el-id')) {
        transformHelper.addError('"w-el-id" attribute is no longer allowed. Use "w-id" instead.');
        return;
    }

    if (el.hasAttribute('w-bind')) {
        el.setFlag('hasWidgetBind');
        if (el.hasAttribute('w-id')) {
            transformHelper.addError('The "w-id" attribute cannot be used in conjuntion with the "w-bind" attribute.');
        }
        transformHelper.handleWidgetBind();
    } else if (el.hasAttribute('w-extend')) {
        el.setFlag('hasWidgetExtend');
        transformHelper.handleWidgetExtend();
    }

    if (el.hasAttribute('w-preserve') ||
        el.hasAttribute('w-preserve-body') ||
        el.hasAttribute('w-preserve-if') ||
        el.hasAttribute('w-preserve-body-if')) {
        transformHelper.handleWidgetPreserve();
    }

    if (el.hasAttribute('w-id')) {
        transformHelper.assignWidgetId();
    }

    if (el.hasAttribute('w-for')) {
        transformHelper.handleWidgetFor();
    }

    if (el.hasAttribute('w-preserve-attrs')) {
        transformHelper.handleWidgetPreserveAttrs();
    }

    if (el.hasAttribute('w-body')) {
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
    if (el.type !== 'HtmlElement') { // Only custom tags can have nested widgets
        transformHelper.getWidgetArgs().compile(transformHelper);
    }
};