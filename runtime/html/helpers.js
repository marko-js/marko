'use strict';
var extend = require('raptor-util/extend');

var STYLE_ATTR = 'style';
var CLASS_ATTR = 'class';

var escape = require('./escape');
var escapeXml = escape.escapeXml;
var escapeXmlAttr = escape.escapeXmlAttr;
var attrHelper = require('./helper-attr');
var attrsHelper = require('./helper-attrs');

var classList;






/**
 * Internal method to escape special XML characters
 * @private
 */
exports.x = escapeXml;
/**
 * Internal method to escape special XML characters within an attribute
 * @private
 */
exports.xa = escapeXmlAttr;

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
var escapeEndingScriptTagRegExp = /<\/script/g;
exports.xs = function escapeScriptHelper(val) {
    return (typeof val === 'string') ? val.replace(escapeEndingScriptTagRegExp, '\\u003C/script') : val;
};

/**
 * Escapes the '</' sequence in the body of a <style> body to avoid the `<style>` being
 * ended prematurely.
 *
 * For example:
 * var color = '</style><script>alert(1)</script>';
 *
 * <style>#foo { background-color:${color} }</style>
 *
 * Without escaping the ending '</style>' sequence the opening <style> tag would be
 * prematurely ended and a script tag could then be started that could then execute
 * arbitrary code.
 */
var escapeEndingStyleTagRegExp = /<\/style/g;
exports.xc = function escapeScriptHelper(val) {
    return (typeof val === 'string') ? val.replace(escapeEndingStyleTagRegExp, '\\003C/style') : val;
};

/**
 * Internal method to render a single HTML attribute
 * @private
 */
exports.a = attrHelper;

/**
 * Internal method to render multiple HTML attributes based on the properties of an object
 * @private
 */
exports.as = attrsHelper;

/**
 * Internal helper method to handle the "style" attribute. The value can either
 * be a string or an object with style propertes. For example:
 *
 * sa('color: red; font-weight: bold') ==> ' style="color: red; font-weight: bold"'
 * sa({color: 'red', 'font-weight': 'bold'}) ==> ' style="color: red; font-weight: bold"'
 */

var dashedNames = {};

exports.sa = function(style) {
    if (!style) {
        return '';
    }

    if (typeof style === 'string') {
        return attrHelper(STYLE_ATTR, style, false);
    } else if (typeof style === 'object') {
        var styles = '';
        for (var name in style) {
            var value = style[name];
            if (value != null) {
                var nameDashed = dashedNames[name];
                if (!nameDashed) {
                    nameDashed = dashedNames[name] = name.replace(/([A-Z])/g, '-$1').toLowerCase();
                }
                styles += nameDashed + ':' + value + ';';
            }
        }
        return styles ? ' ' + STYLE_ATTR + '="' + styles +'"' : '';
    } else {
        return '';
    }
};

/**
 * Internal helper method to handle the "class" attribute. The value can either
 * be a string, an array or an object. For example:
 *
 * ca('foo bar') ==> ' class="foo bar"'
 * ca({foo: true, bar: false, baz: true}) ==> ' class="foo baz"'
 * ca(['foo', 'bar']) ==> ' class="foo bar"'
 */
exports.ca = function(classNames) {
    if (!classNames) {
        return '';
    }

    if (typeof classNames === 'string') {
        return attrHelper(CLASS_ATTR, classNames, false);
    } else {
        return attrHelper(CLASS_ATTR, classList(classNames), false);
    }
};


function classList(arg) {
    var len, name, value, str = '';

    if (arg) {
        if (typeof arg === 'string') {
            if (arg) {
                str += ' ' + arg;
            }
        } else if (typeof (len = arg.length) === 'number') {
            for (var i=0; i<len; i++) {
                value = classList(arg[i]);
                if (value) {
                    str += ' ' + value;
                }
            }
        } else if (typeof arg === 'object') {
            for (name in arg) {
                value = arg[name];
                if (value) {
                    str += ' ' + name;
                }
            }
        }
    }

    return (str && str.slice(1)) || null;
}

var commonHelpers = require('../helpers');
extend(exports, commonHelpers);
exports.cl = classList;