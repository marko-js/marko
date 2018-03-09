"use strict";

var runtimeHtmlHelpers = require("marko/runtime/html/helpers");
var escapeXml = runtimeHtmlHelpers.x;
var escapeXmlAttr = runtimeHtmlHelpers.xa;

var openTagOnly = {};

[
    "base",
    "br",
    "col",
    "hr",
    "embed",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
].forEach(function(tagName) {
    openTagOnly[tagName] = true;
});

function getNodeValue(node) {
    return node.___nodeValue || node.nodeValue;
}

function getFirstChild(node) {
    return node.___firstChild || node.firstChild;
}

function getNextSibling(node) {
    return node.___nextSibling || node.nextSibling;
}

function vdomToHTML(node, options) {
    // NOTE: We don't use XMLSerializer because we need to sort the attributes to correctly compare output HTML strings
    // BAD: return (new XMLSerializer()).serializeToString(node);
    var html = "";
    function serializeHelper(node) {
        var nodeType = node.nodeType || node.___nodeType;

        if (nodeType === 1) {
            serializeElHelper(node);
        } else if (nodeType === 3) {
            serializeTextHelper(node);
        } else if (nodeType === 8) {
            serializeCommentHelper(node);
        } else {
            html += `INVALID NODE TYPE ${nodeType}\n`;
        }
    }

    function serializeElHelper(el) {
        var tagName = el.nodeName;

        html += "<" + tagName;

        var attributes = el.attributes;
        var attributesArray = [];
        var attrName;

        if (typeof attributes.length === "number") {
            for (var i = 0; i < attributes.length; i++) {
                var attr = attributes[i];
                attrName = attr.name;

                if (attrName === "data-marko-const") {
                    continue;
                }
                attributesArray.push(
                    " " + attrName + '="' + escapeXmlAttr(attr.value) + '"'
                );
            }
        } else {
            for (attrName in attributes) {
                if (attrName === "data-marko-const") {
                    continue;
                }

                var attrValue = attributes[attrName];
                if (typeof attrValue !== "string") {
                    if (attrValue === true) {
                        attrValue = "";
                    } else if (!attrValue) {
                        continue;
                    }
                }

                if (attrName === "xlink:href") {
                    attrName = "http://www.w3.org/1999/xlink:href";
                }
                attributesArray.push(
                    " " + attrName + '="' + escapeXmlAttr(attrValue) + '"'
                );
            }
        }

        attributesArray.sort();

        html += attributesArray.join("");

        html += ">";

        var hasEndTag = true;
        if (tagName.toUpperCase() === "TEXTAREA") {
            html += el.value;
        } else {
            var curChild = getFirstChild(el);
            if (curChild) {
                while (curChild) {
                    let nodeType = curChild.nodeType || curChild.___nodeType;
                    if (nodeType === 3) {
                        let escapeText = tagName.toUpperCase() !== "SCRIPT";
                        serializeTextHelper(curChild, escapeText);
                    } else {
                        serializeHelper(curChild);
                    }

                    curChild = getNextSibling(curChild);
                }
            } else if (openTagOnly[tagName.toLowerCase()]) {
                hasEndTag = false;
            }
        }

        if (hasEndTag) {
            html += "</" + tagName + ">";
        }
    }

    function serializeTextHelper(node, escape) {
        html +=
            escape !== false
                ? escapeXml(getNodeValue(node))
                : getNodeValue(node);
    }

    function serializeCommentHelper(node) {
        html += "<!--" + getNodeValue(node) + "-->";
    }

    let nodeType = node.nodeType || node.___nodeType;

    if (
        nodeType === 11 /* DocumentFragment */ ||
        (options && options.childrenOnly)
    ) {
        var curChild = getFirstChild(node);
        while (curChild) {
            serializeHelper(curChild);
            curChild = getNextSibling(curChild);
        }
    } else {
        serializeHelper(node);
    }

    return html;
}

module.exports = vdomToHTML;
