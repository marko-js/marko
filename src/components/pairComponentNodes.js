var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var COMPONENT_NODE = 2;

function pairComponentNodes(startNode, endNode, vDocumentFragment) {
    function pairComponentNodesHelper(realNode, vComponentNode) {
        var component = vComponentNode.___component;
        var commentPlaceholder;
        var previousSibling;
        var vComponentFirstChild = vComponentNode.___firstChild;

        if (!vComponentFirstChild) {
            // Target component does not have any children. We still need
            // to assign it with a DOM node so we will create a placeholder
            commentPlaceholder = document.createComment('$marko');
            realNode.parentNode.insertBefore(commentPlaceholder, realNode);
            component.___startNode = component.___endNode = commentPlaceholder;

            // Continue pairing from the current DOM node that was already in
            // the DOM:
            return realNode;
        }

        var vFirstChildType = vComponentFirstChild.___nodeType;
        if (vFirstChildType === COMPONENT_NODE) {
            // The first child of this component is another component. We need
            // our own DOM start node so we will have to create placeholder
            // and use that
            commentPlaceholder = document.createComment('$marko');
            realNode.parentNode.insertBefore(commentPlaceholder, realNode);
            component.___startNode = commentPlaceholder;

            // Go ahead and pair the child component and we will continue
            // pairing with the next DOM node after the component
            previousSibling = pairComponentNodesHelper(realNode, vComponentFirstChild);
            realNode = previousSibling.nextSibling;
        } else {
            previousSibling = component.___startNode = realNode;

            realNode = realNode.nextSibling;
        }


        // We paired up the start node. Now we need to pair up the end nodes

        var vCurrentNode = vComponentFirstChild.___nextSibling;
        var vNextSibling;

        while(vCurrentNode && realNode) {
            var vNodeType = vCurrentNode.___nodeType;
            vNextSibling = vCurrentNode.___nextSibling;

            if (vNodeType === COMPONENT_NODE) {
                previousSibling = pairComponentNodesHelper(realNode, vComponentFirstChild);
                realNode = previousSibling.nextSibling;
            } else {
                if (vNextSibling) {
                    realNode = realNode.nextSibling;
                } else {
                    // We reached the last vNode of the component and that means
                    // that the current real DOM node is the end node for this
                    // component
                    return (component.___endNode = realNode);
                }
            }

            previousSibling = realNode;
            vCurrentNode = vNextSibling;
        }

        commentPlaceholder = document.createComment('$marko');
        realNode.parentNode.insertBefore(commentPlaceholder, previousSibling.nextSibling);
        component.___endNode = commentPlaceholder;

        return commentPlaceholder;
    }

    pairComponentNodesHelper(startNode.nextSibling, vDocumentFragment.___firstChild);
}

module.exports = pairComponentNodes;
