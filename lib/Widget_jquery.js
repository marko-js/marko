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
 * jQuery extensions applied to all widgets
 * 
 * @extension jQuery
 */
'use strict';
var idRegExp = /\#(\w+)( .*)?/g;

module.exports = function($) {
    return function (arg) {
        var args = arguments;
        if (args.length === 1) {
            //Handle an "ondomready" callback function
            if (typeof arg === 'function') {
                var _this = this;
                $(function () {
                    arg.apply(_this, args);
                });
            } else if (typeof arg === 'string') {
                var match = idRegExp.exec(arg);
                idRegExp.lastIndex = 0;
                //Reset the search to 0 so the next call to exec will start from the beginning for the new string
                if (match != null) {
                    var widgetElId = match[1];
                    if (match[2] == null) {
                        return $(this.getEl(widgetElId));
                    } else {
                        return $('#' + this.getElId(widgetElId) + match[2]);
                    }
                } else {
                    var rootEl = this.getEl();
                    if (!rootEl) {
                        throw new Error('Root element is not defined for widget');
                    }
                    if (rootEl) {
                        return $(arg, rootEl);
                    }
                }
            }
        } else if (args.length === 2) {
            if (typeof args[1] === 'string') {
                return $(arg, this.getEl(args[1]));
            }
        } else if (args.length === 0) {
            return $(this.el);
        }
        return $.apply(window, arguments);
    };
};