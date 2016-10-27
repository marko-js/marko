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

var markoVDOM = require('marko-vdom');
var commonHelpers = require('../helpers');
var extend = require('raptor-util/extend');

var classList = commonHelpers.cl;

module.exports = extend({
    e: markoVDOM.createElement,
    t: markoVDOM.createText,
    const: function(id) {
        var i=0;
        return function() {
            return id + (i++);
        };
    },

    /**
     * Helper for generating the string for a style attribute
     * @param  {[type]} style [description]
     * @return {[type]}       [description]
     */
    sa: function(style) {
        if (!style) {
            return null;
        }

        if (typeof style === 'string') {
            return style;
        } else if (typeof style === 'object') {
            var parts = [];
            for (var name in style) {
                if (style.hasOwnProperty(name)) {
                    var value = style[name];
                    if (value) {
                        parts.push(name + ':' + value);
                    }
                }
            }
            return parts ? parts.join(';') : null;
        } else {
            return null;
        }
    },

    /**
     * Internal helper method to handle the "class" attribute. The value can either
     * be a string, an array or an object. For example:
     *
     * ca('foo bar') ==> ' class="foo bar"'
     * ca({foo: true, bar: false, baz: true}) ==> ' class="foo baz"'
     * ca(['foo', 'bar']) ==> ' class="foo bar"'
     */
    ca: function(classNames) {
        if (!classNames) {
            return null;
        }

        if (typeof classNames === 'string') {
            return classNames;
        } else {
            return classList(classNames);
        }
    },

    i: require('./')._inline
}, commonHelpers);