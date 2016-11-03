'use strict';

var escapeXml = require('../../runtime/html/escapeXml');
var escapeXmlAttr = escapeXml.attr;

var openTagOnly = {};

[
    'base',
    'br',
    'col',
    'hr',
    'embed',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
].forEach(function(tagName) {
    openTagOnly[tagName] = true;
});


function vdomToHTML(node, options) {


    // NOTE: We don't use XMLSerializer because we need to sort the attributes to correctly compare output HTML strings
    // BAD: return (new XMLSerializer()).serializeToString(node);
    var html = '';
    function serializeHelper(node) {
        if (node.nodeType === 1) {
            serializeElHelper(node);
        } else if (node.nodeType === 3) {
            serializeTextHelper(node);
        } else if (node.nodeType === 8) {
            serializeCommentHelper(node);
        } else {
            console.log('Invalid node:', node);
            html += `INVALID NODE TYPE ${node.nodeType}\n`;
        }
    }

    function serializeElHelper(el) {
        var tagName = el.nodeName;

        html += '<' + tagName;

        var attributes = el.attributes;
        var attributesArray = [];
        var attrName;

        if (typeof attributes.length === 'number') {
            for (var i=0; i<attributes.length; i++) {
                var attr = attributes[i];
                attrName = attr.name;

                if (attrName === 'data-marko-const') {
                    continue;
                }
                attributesArray.push(' ' + attrName + '="' + escapeXmlAttr(attr.value) + '"');
            }
        } else {
            for (attrName in attributes) {
                if (attrName === 'data-marko-const') {
                    continue;
                }

                var attrValue = attributes[attrName];
                if (typeof attrValue !== 'string') {
                    if (attrValue === true) {
                        attrValue = '';
                    } else if (!attrValue) {
                        continue;
                    }
                }

                if (attrName === 'xlink:href') {
                    attrName = 'http://www.w3.org/1999/xlink:href';
                }
                attributesArray.push(' ' + attrName + '="' + escapeXmlAttr(attrValue) + '"');
            }
        }

        attributesArray.sort();

        html += attributesArray.join('');

        html += '>';

        var hasEndTag = true;
        if (tagName.toUpperCase() === 'TEXTAREA') {
            html += el.value;
        } else {
            var curChild = el.firstChild;
            if (curChild) {
                while(curChild) {
                    if (curChild.nodeType === 3) {
                        let escapeText = tagName.toUpperCase() !== 'SCRIPT';
                        serializeTextHelper(curChild, escapeText);
                    } else {
                        serializeHelper(curChild);
                    }

                    curChild = curChild.nextSibling;
                }
            } else if (openTagOnly[tagName.toLowerCase()]) {
                hasEndTag = false;
            }
        }

        if (hasEndTag) {
            html += '</' + tagName + '>';
        }
    }

    function serializeTextHelper(node, escape) {
        html += escape !== false ? escapeXml(node.nodeValue) : node.nodeValue;
    }

    function serializeCommentHelper(node) {
        html += '<!--' + node.nodeValue + '-->';
    }

    if (node.nodeType === 11 /* DocumentFragment */ || (options && options.childrenOnly)) {
        var curChild = node.firstChild;
        while(curChild) {
            serializeHelper(curChild);
            curChild = curChild.nextSibling;
        }
    } else {
        serializeHelper(node);
    }

    return html;
}

module.exports = vdomToHTML;