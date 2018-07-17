function insertBefore(node, referenceNode, parentNode) {
    if (node.insertInto) {
        return node.insertInto(parentNode, referenceNode);
    }
    return parentNode.insertBefore(
        node,
        (referenceNode && referenceNode.startNode) || referenceNode
    );
}

function insertAfter(node, referenceNode, parentNode) {
    return insertBefore(
        node,
        referenceNode && referenceNode.nextSibling,
        parentNode
    );
}

function nextSibling(node) {
    var next = node.nextSibling;
    var fragment = next && next.fragment;
    if (fragment) {
        return next === fragment.startNode ? fragment : null;
    }
    return next;
}

function firstChild(node) {
    var next = node.firstChild;
    return (next && next.fragment) || next;
}

function removeChild(node) {
    try {
        if (node.remove) node.remove();
        else node.parentNode.removeChild(node);
    }
    catch (e) {
        try {
            node.style.display = 'none'
        }
        catch (e) {}
        console.warn("Unable to remove node, hiding node and ignoring exception")
        console.warn(e)    
    }

}

exports.___insertBefore = insertBefore;
exports.___insertAfter = insertAfter;
exports.___nextSibling = nextSibling;
exports.___firstChild = firstChild;
exports.___removeChild = removeChild;
