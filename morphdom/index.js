'use strict';
var defaultDoc = typeof document == 'undefined' ? undefined : document;
var specialElHandlers = require('./specialElHandlers');

var morphAttrs = require('../runtime/vdom/VElement').$__morphAttrs;

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    return fromEl.nodeName == toEl.nodeName;
}

function replaceChild(child, newChild) {
    if (child.parentNode) {
        child.parentNode.replaceChild(newChild, child);
    }
    return newChild;
}

function morphdom(
        fromNode,
        toNode,
        context,
        onNodeAdded,
        onBeforeElUpdated,
        onBeforeNodeDiscarded,
        onNodeDiscarded,
        onBeforeElChildrenUpdated
    ) {

    var doc = fromNode.ownerDocument || defaultDoc;

    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
    var fromNodesLookup = {};
    var keyedRemovalList;

    function addKeyedRemoval(key) {
        if (keyedRemovalList) {
            keyedRemovalList.push(key);
        } else {
            keyedRemovalList = [key];
        }
    }

    function walkDiscardedChildNodes(node, skipKeyedNodes) {
        if (node.nodeType == ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {
                var key;

                if (skipKeyedNodes && (key = curChild.id)) {
                    // If we are skipping keyed nodes then we add the key
                    // to a list so that it can be handled at the very end.
                    addKeyedRemoval(key);
                } else {
                    // Only report the node as discarded if it is not keyed. We do this because
                    // at the end we loop through all keyed elements that were unmatched
                    // and then discard them in one final pass.
                    onNodeDiscarded(curChild);
                    if (curChild.firstChild) {
                        walkDiscardedChildNodes(curChild, skipKeyedNodes);
                    }
                }

                curChild = curChild.nextSibling;
            }
        }
    }

    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */
    function removeNode(node, parentNode, skipKeyedNodes) {
        if (onBeforeNodeDiscarded(node) == false) {
            return;
        }

        if (parentNode) {
            parentNode.removeChild(node);
        }

        onNodeDiscarded(node);
        walkDiscardedChildNodes(node, skipKeyedNodes);
    }

    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    function indexTree(node) {
        if (node.nodeType == ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {
                var key = curChild.id;
                if (key) {
                    fromNodesLookup[key] = curChild;
                }

                // Walk recursively
                indexTree(curChild);

                curChild = curChild.nextSibling;
            }
        }
    }

    indexTree(fromNode);

    function addVirtualNode(vEl, parentEl) {
        var realEl = vEl.$__actualize(doc);

        if (parentEl) {
            parentEl.appendChild(realEl);
        }

        onNodeAdded(realEl, context);

        var vCurChild = vEl.firstChild;
        while (vCurChild) {
            var realCurChild = null;

            var key = vCurChild.id;
            if (key) {
                var unmatchedFromEl = fromNodesLookup[key];
                if (unmatchedFromEl && compareNodeNames(vCurChild, unmatchedFromEl)) {
                    morphEl(unmatchedFromEl, vCurChild, false);
                    realEl.appendChild(realCurChild = unmatchedFromEl);
                }
            }

            if (!realCurChild) {
                addVirtualNode(vCurChild, realEl);
            }

            vCurChild = vCurChild.nextSibling;
        }

        return realEl;
    }

    function morphEl(fromEl, toEl, childrenOnly) {

        if (!childrenOnly) {
            var toElKey = toEl.id;


            if (toElKey) {
                // If an element with an ID is being morphed then it is will be in the final
                // DOM so clear it out of the saved elements collection
                delete fromNodesLookup[toElKey];
            }

            if (toNode.$__isSameNode(fromNode)) {
                return;
            }

            if (onBeforeElUpdated(fromEl, context)) {
                return;
            }

            morphAttrs(fromEl, toEl);
        }


        if (onBeforeElChildrenUpdated(fromEl, context)) {
            return;
        }

        if (fromEl.nodeName != 'TEXTAREA') {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeKey;
            var curFromNodeKey;

            var fromNextSibling;
            var toNextSibling;
            var matchingFromEl;

            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeKey = curToNodeChild.id;

                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    curFromNodeKey = curFromNodeChild.id;

                    var curFromNodeType = curFromNodeChild.nodeType;

                    var isCompatible = undefined;

                    if (curFromNodeType == curToNodeChild.nodeType) {
                        if (curFromNodeType == ELEMENT_NODE) {
                            // Both nodes being compared are Element nodes

                            if (curToNodeKey) {
                                // The target node has a key so we want to match it up with the correct element
                                // in the original DOM tree
                                if (curToNodeKey != curFromNodeKey) {
                                    // The current element in the original DOM tree does not have a matching key so
                                    // let's check our lookup to see if there is a matching element in the original
                                    // DOM tree
                                    if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                        if (curFromNodeChild.nextSibling == matchingFromEl) {
                                            // Special case for single element removals. To avoid removing the original
                                            // DOM node out of the tree (since that can break CSS transitions, etc.),
                                            // we will instead discard the current node and wait until the next
                                            // iteration to properly match up the keyed target element with its matching
                                            // element in the original tree
                                            isCompatible = false;
                                        } else {
                                            // We found a matching keyed element somewhere in the original DOM tree.
                                            // Let's moving the original DOM node into the current position and morph
                                            // it.

                                            // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                            // the `removeNode()` function for the node that is being discarded so that
                                            // all lifecycle hooks are correctly invoked
                                            fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                            fromNextSibling = curFromNodeChild.nextSibling;

                                            if (curFromNodeKey) {
                                                // Since the node is keyed it might be matched up later so we defer
                                                // the actual removal to later
                                                addKeyedRemoval(curFromNodeKey);
                                            } else {
                                                // NOTE: we skip nested keyed nodes from being removed since there is
                                                //       still a chance they will be matched up later
                                                removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                            }

                                            curFromNodeChild = matchingFromEl;
                                        }
                                    } else {
                                        // The nodes are not compatible since the "to" node has a key and there
                                        // is no matching keyed node in the source tree
                                        isCompatible = false;
                                    }
                                }
                            } else if (curFromNodeKey) {
                                // The original has a key
                                isCompatible = false;
                            }

                            isCompatible = isCompatible != false && compareNodeNames(curFromNodeChild, curToNodeChild);
                            if (isCompatible) {
                                // We found compatible DOM elements so transform
                                // the current "from" node to match the current
                                // target DOM node.
                                morphEl(curFromNodeChild, curToNodeChild, false);
                            }

                        } else if (curFromNodeType == TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                            // Both nodes being compared are Text or Comment nodes
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                        }
                    }

                    if (isCompatible) {
                        // Advance both the "to" child and the "from" child since we found a match
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    // No compatible match so remove the old node from the DOM and continue trying to find a
                    // match in the original DOM. However, we only do this if the from node is not keyed
                    // since it is possible that a keyed node might match up with a node somewhere else in the
                    // target tree and we don't want to discard it just yet since it still might find a
                    // home in the final DOM tree. After everything is done we will remove any keyed nodes
                    // that didn't find a home
                    if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }

                    curFromNodeChild = fromNextSibling;
                }

                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to" node
                // to the end
                if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                    fromEl.appendChild(matchingFromEl);
                    morphEl(matchingFromEl, curToNodeChild, false);
                } else {
                    addVirtualNode(curToNodeChild, fromEl);
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while (curFromNodeChild) {
                fromNextSibling = curFromNodeChild.nextSibling;
                if ((curFromNodeKey = curFromNodeChild.id)) {
                    // Since the node is keyed it might be matched up later so we defer
                    // the actual removal to later
                    addKeyedRemoval(curFromNodeKey);
                } else {
                    // NOTE: we skip nested keyed nodes from being removed since there is
                    //       still a chance they will be matched up later
                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                }
                curFromNodeChild = fromNextSibling;
            }
        }

        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    var morphedNode = fromNode;
    var fromNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    var morphChildrenOnly = false;

    // Handle the case where we are given two DOM nodes that are not
    // compatible (e.g. <div> --> <span> or <div> --> TEXT)
    if (fromNodeType == ELEMENT_NODE) {
        if (toNodeType == ELEMENT_NODE) {
            if (!compareNodeNames(fromNode, toNode)) {
                morphedNode = toNode.$__actualize(doc);
                replaceChild(fromNode, morphedNode);
                morphChildrenOnly = true;
                onNodeDiscarded(fromNode);
                walkDiscardedChildNodes(fromNode, true);
            }
        } else {
            // Going from an element node to a text or comment node
            onNodeDiscarded(fromNode);
            walkDiscardedChildNodes(fromNode, false);
            morphedNode = toNode.$__actualize(doc);
            return replaceChild(fromNode, morphedNode);
        }
    } else if (fromNodeType == TEXT_NODE || fromNodeType == COMMENT_NODE) { // Text or comment node
        if (toNodeType == fromNodeType) {
            morphedNode.nodeValue = toNode.nodeValue;
            return morphedNode;
        } else {
            // Text node to something else
            onNodeDiscarded(fromNode);
            return replaceChild(fromNode, addVirtualNode(toNode));
        }
    }

    morphEl(morphedNode, toNode, morphChildrenOnly);

    // We now need to loop over any keyed nodes that might need to be
    // removed. We only do the removal if we know that the keyed node
    // never found a match. When a keyed node is matched up we remove
    // it out of fromNodesLookup and we use fromNodesLookup to determine
    // if a keyed node has been matched up or not
    if (keyedRemovalList) {
        keyedRemovalList.forEach(function(key) {
            var elToRemove = fromNodesLookup[key];
            if (elToRemove) {
                removeNode(elToRemove, elToRemove.parentNode, false);
            }
        });
    }

    return morphedNode;
}

module.exports = morphdom;
