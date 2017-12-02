$_mod.def("/marko$4.7.4/src/runtime/vdom/vdom", function(require, exports, module, __filename, __dirname) { var VNode = require('/marko$4.7.4/src/runtime/vdom/VNode'/*'./VNode'*/);
var VComment = require('/marko$4.7.4/src/runtime/vdom/VComment'/*'./VComment'*/);
var VDocumentFragment = require('/marko$4.7.4/src/runtime/vdom/VDocumentFragment'/*'./VDocumentFragment'*/);
var VElement = require('/marko$4.7.4/src/runtime/vdom/VElement'/*'./VElement'*/);
var VText = require('/marko$4.7.4/src/runtime/vdom/VText'/*'./VText'*/);
var VComponent = require('/marko$4.7.4/src/runtime/vdom/VComponent'/*'./VComponent'*/);

var defaultDocument = typeof document != 'undefined' && document;
var specialHtmlRegexp = /[&<]/;


function virtualizeChildNodes(node, vdomParent) {
    var curChild = node.firstChild;
    while(curChild) {
        vdomParent.___appendChild(virtualize(curChild));
        curChild = curChild.nextSibling;
    }
}

function virtualize(node, shallow) {
    switch(node.nodeType) {
        case 1:
            return VElement.___virtualize(node, virtualizeChildNodes);
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
        vdomFragment.___appendChild(virtualize(curChild));
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

    this.___appendChild(vdomNode || new VText(value.toString()));
    return this.___finishChild();
};

/**
 * Shorthand method for creating and appending a Comment node with a given value
 * @param  {String} value The value for the new Comment node
 */
Node_prototype.c = function(value) {
    this.___appendChild(new VComment(value));
    return this.___finishChild();
};

Node_prototype.___appendDocumentFragment = function() {
    return this.___appendChild(new VDocumentFragment());
};

exports.___VComment = VComment;
exports.___VDocumentFragment = VDocumentFragment;
exports.___VElement = VElement;
exports.___VText = VText;
exports.___VComponent = VComponent;
exports.___virtualize = virtualize;
exports.___virtualizeHTML = virtualizeHTML;
exports.___defaultDocument = defaultDocument;

});