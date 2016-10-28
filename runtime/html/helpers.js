'use strict';
var escapeXml = require('marko-html-util/escapeXml');
var escapeXmlAttr = escapeXml.attr;
var attr = require('marko-html-util/attr');
var extend = require('raptor-util/extend');

var STYLE_ATTR = 'style';
var CLASS_ATTR = 'class';
var escapeEndingScriptTagRegExp = /<\//g;

var commonHelpers = require('../helpers');

var classList = commonHelpers.cl;

module.exports = extend({
    /**
     * Internal method to escape special XML characters
     * @private
     */
    x: escapeXml,
    /**
     * Internal method to escape special XML characters within an attribute
     * @private
     */
    xa: escapeXmlAttr,

    /**
     * Escapes the '</' sequence in the body of a <script> body to avoid the `<script>` being
     * ended prematurely.
     *
     * For example:
     * var evil = {
     * 	name:  '</script><script>alert(1)</script>'
     * };
     *
     * <script>var foo = ${JSON.stringify(evil)}</script>
     *
     * Without escaping the ending '</script>' sequence the opening <script> tag would be
     * prematurely ended and a new script tag could then be started that could then execute
     * arbitrary code.
     */
    xs: function(val) {
        return (typeof val === 'string') ? val.replace(escapeEndingScriptTagRegExp, '\\u003C/') : val;
    },

    /**
     * Internal method to render a single HTML attribute
     * @private
     */
    a: attr,

    /**
     * Internal method to render multiple HTML attributes based on the properties of an object
     * @private
     */
    as: function(arg) {
        if (typeof arg === 'object') {
            var out = '';
            for (var attrName in arg) {
                out += attr(attrName, arg[attrName]);
            }
            return out;
        } else if (typeof arg === 'string') {
            return arg;
        }
        return '';
    },

    /**
     * Internal helper method to handle the "style" attribute. The value can either
     * be a string or an object with style propertes. For example:
     *
     * sa('color: red; font-weight: bold') ==> ' style="color: red; font-weight: bold"'
     * sa({color: 'red', 'font-weight': 'bold'}) ==> ' style="color: red; font-weight: bold"'
     */
    sa: function(style) {
        if (!style) {
            return '';
        }

        if (typeof style === 'string') {
            return attr(STYLE_ATTR, style, false);
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
            return parts ? attr(STYLE_ATTR, parts.join(';'), false) : '';
        } else {
            return '';
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
            return '';
        }

        if (typeof classNames === 'string') {
            return attr(CLASS_ATTR, classNames, false);
        } else {
            return attr(CLASS_ATTR, classList(classNames), false);
        }
    },

    i: require('./')._inline
}, commonHelpers);
