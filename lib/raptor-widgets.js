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
var WidgetsContext = require('./WidgetsContext');
var extend = require('raptor-util').extend;
var WIDGET_CONTEXT_KEY = 'widgets';

exports.getWidgetsContext = function (context) {
    var attributes = context.attributes;

    return attributes[WIDGET_CONTEXT_KEY] ||
        (attributes[WIDGET_CONTEXT_KEY] = new WidgetsContext(context));
};

if (typeof window === 'undefined') {
    extend(exports, require('./raptor-widgets_' + 'server'));
} else {
    extend(exports, require('./raptor-widgets_browser'));
    extend(WidgetsContext.prototype, require('./WidgetsContext_browser'));

    var jquery = window.$;
    if (!jquery) {
        try {
            jquery = require('jquery');
        }
        catch(e) {}
    }

    if (jquery) {
        try {
            require('./Widget').prototype.$ = require('./Widget_' + 'jquery')(jquery);
        } catch(e) {}
    }
}

