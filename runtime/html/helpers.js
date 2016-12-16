'use strict';
var warp10 = require('warp10');
var extend = require('raptor-util/extend');

var STYLE_ATTR = 'style';
var CLASS_ATTR = 'class';
var escapeEndingScriptTagRegExp = /<\//g;

var elTest = /[&<]/;
var elTestReplace = /[&<]/g;
var attrTest = /[&<\"\n]/;
var attrReplace = /[&<\"\n]/g;
var stringifiedAttrTest = /[&\'\n]/;
var stringifiedAttrReplace = /[&\'\n]/g;

var classList;

var replacements = {
    '<': '&lt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    '\n': '&#10;' //Preserve new lines so that they don't get normalized as space
};

function replaceChar(match) {
    return replacements[match];
}

function escapeStr(str, regexpTest, regexpReplace) {
    return regexpTest.test(str) ? str.replace(regexpReplace, replaceChar) : str;
}

function escapeXmlHelper(value, regexpTest, regexpReplace) {
    // check for most common case first
    if (typeof value === 'string') {
        return escapeStr(value, regexpTest, regexpReplace);
    } else if (value == null) {
        return '';
    } else if (typeof value === 'object') {
        var safeHTML = value.safeHTML;
        if (safeHTML != null) {
            return value.safeHTML;
        } else {
            return '';
        }
    } else if (value === true || value === false || typeof value === 'number') {
        return value.toString();
    }

    return escapeStr(value.toString(), regexpTest, regexpReplace);
}

function escapeXml(value) {
    return escapeXmlHelper(value, elTest, elTestReplace);
}

function escapeXmlAttr(value) {
    return escapeXmlHelper(value, attrTest, attrReplace);
}

function attr(name, value, shouldEscape) {
    if (typeof value === 'string') {
        return ' ' + name + '="' + (shouldEscape !== false ? escapeStr(value, attrTest, attrReplace) : value) + '"';
    } else if (value === true) {
        return ' ' + name;
    } else if (value == null || value === false) {
        return '';
    } else if (typeof value === 'object') {
        if (name.substring(0, 6) === 'data-_') {
            value = warp10.stringify(value);
        } else {
            value = JSON.stringify(value);
        }
        return ' ' + name + "='" + escapeStr(value, stringifiedAttrTest, stringifiedAttrReplace) + "'";
    } else {
        return ' ' + name + '=' + value; // number (doesn't need quotes)
    }
}


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
exports.xs = function escapeScriptHelper(val) {
    return (typeof val === 'string') ? val.replace(escapeEndingScriptTagRegExp, '\\u003C/') : val;
};

/**
 * Internal method to render a single HTML attribute
 * @private
 */
exports.a = attr;

/**
 * Internal method to render multiple HTML attributes based on the properties of an object
 * @private
 */
exports.as = function(arg) {
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
};

/**
 * Internal helper method to handle the "style" attribute. The value can either
 * be a string or an object with style propertes. For example:
 *
 * sa('color: red; font-weight: bold') ==> ' style="color: red; font-weight: bold"'
 * sa({color: 'red', 'font-weight': 'bold'}) ==> ' style="color: red; font-weight: bold"'
 */
exports.sa = function(style) {
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
        return attr(CLASS_ATTR, classNames, false);
    } else {
        return attr(CLASS_ATTR, classList(classNames), false);
    }
};



var commonHelpers = require('../helpers');
classList = commonHelpers.cl;
extend(exports, commonHelpers);

exports.inline = require('./')._inline;