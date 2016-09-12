var markoVDOM = require('./');

var createElement = markoVDOM.createElement;
var createText = markoVDOM.createText;
var createComment = markoVDOM.createComment;

function virtualize(node) {
    if (node.nodeType === 1) { // HtmlElement node
        var attributes = node.attributes;
        var attrCount = attributes.length;

        var childNodes = node.childNodes;
        var childCount = childNodes.length;

        var attrs;

        if (attrCount) {
            attrs = {};

            for (var i=0; i<attrCount; i++) {
                var attr = attributes[i];
                var attrName;

                if (attr.namespaceURI === 'http://www.w3.org/1999/xlink' && attr.localName === 'href') {
                    attrName = 'xlink:href';
                } else {
                    attrName = attr.name;
                }

                attrs[attrName] = attr.value;
            }
        }

        var vdomEL = createElement(node.nodeName, attrs, childCount);

        if (vdomEL._isTextArea) {
            vdomEL.value = node.value;
        } else {
            var curChild = node.firstChild;
            while(curChild) {
                var virtualChild = virtualize(curChild);
                vdomEL.appendChild(virtualChild);
                curChild = curChild.nextSibling;
            }
        }

        return vdomEL;
    } else if (node.nodeType === 3) { // Text node
        return createText(node.nodeValue);
    } else if (node.nodeType === 8) { // Text node
        return createComment(node.nodeValue);
    }
}

module.exports = virtualize;