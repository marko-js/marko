var Node = require('./Node');
var Comment = require('./Comment');
var DocumentFragment = require('./DocumentFragment');
var HTMLElement = require('./HTMLElement');
var Text = require('./Text');
var defaultDocument = typeof document != 'undefined' && document;

var specialHtmlRegexp = /[&<]/;
var range;

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
                    var attrName;

                    if (attr.namespaceURI === 'http://www.w3.org/1999/xlink' && attr.localName === 'href') {
                        attrName = 'xlink:href';
                    } else {
                        attrName = attr.name;
                    }

                    attrs[attrName] = attr.value;
                }
            }

            var vdomEL = new HTMLElement(node.nodeName, attrs);

            if (vdomEL.$__isTextArea) {
                vdomEL.$__value = node.value;
            } else {
                virtualizeChildNodes(node, vdomEL);
            }

            return vdomEL;
        case 3:
            return new Text(node.nodeValue);
        case 8:
            return new Comment(node.nodeValue);
        case 11:
            var vdomDocFragment = new DocumentFragment();
            virtualizeChildNodes(node, vdomDocFragment);
            return vdomDocFragment;
    }
}

function virtualizeHTML(html, doc) {
    if (!specialHtmlRegexp.test(html)) {
        return new Text(html);
    }

    if (!range && doc.createRange) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var vdomFragment;

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(html);
        vdomFragment = virtualize(fragment);
    } else {
        var container = doc.createElement('body');
        container.innerHTML = html;
        vdomFragment = new DocumentFragment();

        var curChild = container.firstChild;
        while(curChild) {
            vdomFragment.$__appendChild(virtualize(curChild));
            curChild = curChild.nextSibling;
        }
    }

    return vdomFragment;
}

var Node_prototype = Node.prototype;

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

    this.$__appendChild(vdomNode || new Text(value.toString()));
    return this.$__finishChild();
};

/**
 * Shorthand method for creating and appending a Comment node with a given value
 * @param  {String} value The value for the new Comment node
 */
Node_prototype.c = function(value) {
    this.$__appendChild(new Comment(value));
    return this.$__finishChild();
};

Node_prototype.$__appendDocumentFragment = function() {
    return this.$__appendChild(new DocumentFragment());
};

exports.$__Comment = Comment;
exports.$__DocumentFragment = DocumentFragment;
exports.$__HTMLElement = HTMLElement;
exports.$__Text = Text;
exports.$__virtualize = virtualize;
exports.$__virtualizeHTML = virtualizeHTML;
exports.$__defaultDocument = defaultDocument;
