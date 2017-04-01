var VNode = require('./VNode');
var VComment = require('./VComment');
var VDocumentFragment = require('./VDocumentFragment');
var VElement = require('./VElement');
var VText = require('./VText');

var FLAG_IS_TEXTAREA = 2;
var defaultDocument = typeof document != 'undefined' && document;
var specialHtmlRegexp = /[&<]/;
var xmlnsRegExp = /^xmlns(:|$)/;
var virtualizedProps = { $__virtualized: true };

function virtualizeChildNodes(node, vdomParent) {
    var curChild = node.firstChild;
    while(curChild) {
        vdomParent.$__appendChild(virtualize(curChild));
        curChild = curChild.nextSibling;
    }
}

function virtualize(node) {
    switch(node.nodeType) {
        case 1:
            var attributes = node.attributes;
            var attrCount = attributes.length;

            var attrs;

            if (attrCount) {
                attrs = {};
                for (var i=0; i<attrCount; i++) {
                    var attr = attributes[i];
                    var attrName = attr.name;
                    if (!xmlnsRegExp.test(attrName)) {
                        attrs[attrName] = attr.value;
                    }
                }
            }

            var flags = 0;

            var tagName = node.nodeName;
            if (tagName === 'TEXTAREA') {
                flags |= FLAG_IS_TEXTAREA;
            }

            var vdomEl = new VElement(tagName, attrs, null, flags, virtualizedProps);
            if (node.namespaceURI !== 'http://www.w3.org/1999/xhtml') {
                vdomEl.$__namespaceURI = node.namespaceURI;
            }

            if (vdomEl.$__isTextArea) {
                vdomEl.$__value = node.value;
            } else {
                virtualizeChildNodes(node, vdomEl);
            }

            return vdomEl;
        case 3:
            return new VText(node.nodeValue);
        case 8:
            return new VComment(node.nodeValue);
        case 11:
            var vdomDocFragment = new VDocumentFragment();
            virtualizeChildNodes(node, vdomDocFragment);
            return vdomDocFragment;
    }
}

function virtualizeHTML(html, doc) {
    if (!specialHtmlRegexp.test(html)) {
        return new VText(html);
    }

    var container = doc.createElement('body');
    container.innerHTML = html;
    var vdomFragment = new VDocumentFragment();

    var curChild = container.firstChild;
    while(curChild) {
        vdomFragment.$__appendChild(virtualize(curChild));
        curChild = curChild.nextSibling;
    }

    return vdomFragment;
}

var Node_prototype = VNode.prototype;

/**
 * Shorthand method for creating and appending a Text node with a given value
 * @param  {String} value The text value for the new Text node
 */
Node_prototype.t = function(value) {
    var type = typeof value;
    var vdomNode;

    if (type !== 'string') {
        if (value == null) {
            value = '';
        } else if (type === 'object') {
            if (value.toHTML) {
                vdomNode = virtualizeHTML(value.toHTML(), document);
            }
        }
    }

    this.$__appendChild(vdomNode || new VText(value.toString()));
    return this.$__finishChild();
};

/**
 * Shorthand method for creating and appending a Comment node with a given value
 * @param  {String} value The value for the new Comment node
 */
Node_prototype.c = function(value) {
    this.$__appendChild(new VComment(value));
    return this.$__finishChild();
};

Node_prototype.$__appendDocumentFragment = function() {
    return this.$__appendChild(new VDocumentFragment());
};

exports.$__VComment = VComment;
exports.$__VDocumentFragment = VDocumentFragment;
exports.$__VElement = VElement;
exports.$__VText = VText;
exports.$__virtualize = virtualize;
exports.$__virtualizeHTML = virtualizeHTML;
exports.$__defaultDocument = defaultDocument;
