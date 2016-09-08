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

        var vdomEL = createElement(node.nodeName, attrCount, childCount);

        if (attrCount) {
            for (var i=0; i<attrCount; i++) {
                var attr = attributes[i];
                vdomEL.a(attr.name, attr.value);
            }
        }

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