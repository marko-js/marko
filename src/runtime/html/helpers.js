"use strict";
var extend = require("raptor-util/extend");

var STYLE_ATTR = "style";
var CLASS_ATTR = "class";

var escape = require("./escape");
var escapeXml = escape.escapeXml;
var escapeXmlAttr = escape.escapeXmlAttr;
var attrHelper = require("./helper-attr");
var attrsHelper = require("./helper-attrs");
var styleHelper = require("../vdom/helper-styleAttr");

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
    return typeof val === "string"
        ? val.replace(escapeEndingScriptTagRegExp, "\\u003C/script")
        : val;
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
    return typeof val === "string"
        ? val.replace(escapeEndingStyleTagRegExp, "\\003C/style")
        : val;
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

exports.sa = function(style) {
    style = styleHelper(style);

    if (!style) return "";

    return attrHelper(STYLE_ATTR, style);
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
        return "";
    }

    if (typeof classNames === "string") {
        return attrHelper(CLASS_ATTR, classNames, false);
    } else {
        return attrHelper(CLASS_ATTR, classList(classNames), false);
    }
};

function classList(arg) {
    var len,
        name,
        value,
        str = "";

    if (arg) {
        if (typeof arg === "string") {
            if (arg) {
                str += " " + arg;
            }
        } else if (typeof (len = arg.length) === "number") {
            for (var i = 0; i < len; i++) {
                value = classList(arg[i]);
                if (value) {
                    str += " " + value;
                }
            }
        } else if (typeof arg === "object") {
            for (name in arg) {
                value = arg[name];
                if (value) {
                    str += " " + name;
                }
            }
        }
    }

    return (str && str.slice(1)) || null;
}

var commonHelpers = require("../helpers");
extend(exports, commonHelpers);
exports.cl = classList;

/**
 * Internal helper method to insert a script tag that assigns properties
 * to the dom node the precede it.
 */
var escapeScript = exports.xs;
var assignPropsFunction = `
    function ap_(p) {
        var s = document.currentScript;
        Object.assign(s.previousSibling, p);
        s.parentNode.removeChild(s);
    }
`
    .replace(/\s+/g, " ")
    .replace(/([\W]) (.)/g, "$1$2")
    .replace(/(.) ([\W])/g, "$1$2")
    .trim();
exports.p = function propsForPreviousNode(props, out) {
    var cspNonce = out.global.cspNonce;
    var nonceAttr = cspNonce ? " nonce=" + JSON.stringify(cspNonce) : "";

    out.w("<script" + nonceAttr + ">");

    if (!out.global.assignPropsFunction) {
        out.w(assignPropsFunction);
        out.global.assignPropsFunction = true;
    }

    out.w("ap_(" + escapeScript(JSON.stringify(props)) + ");</script>");
};
