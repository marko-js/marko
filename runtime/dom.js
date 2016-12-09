var events = require('./events');

function getNode(el) {
    if (typeof el === 'string') {
        var elId = el;
        el = document.getElementById(elId);
        if (!el) {
            throw new Error('Target element not found: "' + elId + '"');
        }
    }
    return el;
}

function _beforeRemove(referenceEl) {
    events.emit('dom/beforeRemove', {
        el: referenceEl
    });
}

function forEachChild(node, callback, scope, nodeType) {
    if (!node) {
        return;
    }
    var i = 0;
    var childNodes = node.childNodes;
    var len = childNodes.length;
    for (; i < len; i++) {
        var childNode = childNodes[i];
        if (childNode && (nodeType == null || nodeType == childNode.nodeType)) {
            callback.call(scope, childNode);
        }
    }
}

function forEachChildEl(node, callback, scope) {
    forEachChild(node, callback, scope, 1);
}

function detach(child) {
    child = getNode(child);
    child.parentNode.removeChild(child);
}

function appendTo(newChild, referenceParentEl) {
    getNode(referenceParentEl).appendChild(getNode(newChild));
}

function remove(el) {
    el = getNode(el);
    _beforeRemove(el);
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

function removeChildren(parentEl) {
    parentEl = getNode(parentEl);

    var i = 0;
    var childNodes = parentEl.childNodes;
    var len = childNodes.length;
    for (; i < len; i++) {
        var childNode = childNodes[i];
        if (childNode && childNode.nodeType === 1) {
            _beforeRemove(childNode);
        }
    }
    parentEl.innerHTML = '';
}

function replace(newChild, replacedChild) {
    replacedChild = getNode(replacedChild);
    _beforeRemove(replacedChild);
    replacedChild.parentNode.replaceChild(getNode(newChild), replacedChild);
}

function replaceChildrenOf(newChild, referenceParentEl) {
    referenceParentEl = getNode(referenceParentEl);
    forEachChildEl(referenceParentEl, function(childEl) {
        _beforeRemove(childEl);
    });
    referenceParentEl.innerHTML = '';
    referenceParentEl.appendChild(getNode(newChild));
}

function insertBefore(newChild, referenceChild) {
    referenceChild = getNode(referenceChild);
    referenceChild.parentNode.insertBefore(getNode(newChild), referenceChild);
}

function insertAfter(newChild, referenceChild) {
    referenceChild = getNode(referenceChild);
    newChild = getNode(newChild);
    var nextSibling = referenceChild.nextSibling;
    var parentNode = referenceChild.parentNode;
    if (nextSibling) {
        parentNode.insertBefore(newChild, nextSibling);
    } else {
        parentNode.appendChild(newChild);
    }
}

function prependTo(newChild, referenceParentEl) {
    referenceParentEl = getNode(referenceParentEl);
    referenceParentEl.insertBefore(getNode(newChild), referenceParentEl.firstChild || null);
}

exports.forEachChildEl = forEachChildEl;
exports.forEachChild = forEachChild;
exports.detach = detach;
exports.appendTo = appendTo;
exports.remove = remove;
exports.removeChildren = removeChildren;
exports.replace = replace;
exports.replaceChildrenOf = replaceChildrenOf;
exports.insertBefore = insertBefore;
exports.insertAfter = insertAfter;
exports.prependTo = prependTo;

exports.mixin = function(target, getNode, afterInsert) {
    Object.keys(exports).forEach(function(methodName) {
        var func = exports[methodName];

        target[methodName] = function(referenceEl) {
            var doc = referenceEl.ownerDocument;

            var newNode = getNode.call(this, doc);
            func.call(exports, newNode, referenceEl);
            if (afterInsert) {
                afterInsert.call(this, doc);
            }
            return this;
        };
    });
};