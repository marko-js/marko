'use strict';
var specialElHandlers = require('./specialElHandlers');
var componentsUtil = require('../components/util');
var existingComponentLookup = componentsUtil.___componentLookup;
var destroyNodeRecursive = componentsUtil.___destroyNodeRecursive;
var VElement = require('../runtime/vdom/vdom').___VElement;
var virtualizeElement =  VElement.___virtualize;
var morphAttrs = VElement.___morphAttrs;
var eventDelegation = require('../components/event-delegation');

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var COMPONENT_NODE = 2;

// var FLAG_IS_SVG = 1;
// var FLAG_IS_TEXTAREA = 2;
// var FLAG_SIMPLE_ATTRS = 4;
var FLAG_PRESERVE = 8;
// var FLAG_CUSTOM_ELEMENT = 16;

function compareNodeNames(fromEl, toEl) {
    return fromEl.___nodeName === toEl.___nodeName;
}

function onNodeAdded(node, componentsContext) {
    if (node.nodeType === 1) {
        eventDelegation.___handleNodeAttach(node, componentsContext);
    }
}

function insertBefore(node, referenceNode, parentNode) {
    return parentNode.insertBefore(node, referenceNode);
}

function insertAfter(node, referenceNode, parentNode) {
    return parentNode.insertBefore(node, referenceNode && referenceNode.nextSibling);
}

function morphdom(
        parentNode,
        startNode,
        endNode,
        toNode,
        doc,
        componentsContext
    ) {
    var globalComponentsContext;
    var isRerenderInBrowser = false;

    if (componentsContext) {
        globalComponentsContext = componentsContext.___globalContext;
        isRerenderInBrowser = globalComponentsContext.___isRerenderInBrowser;
    }

    function createMarkerComment(referenceNode, parentNode) {
        return doc.createComment('$marko');
    }

    function insertVirtualNodeBefore(vNode, key, referenceEl, parentEl, component) {
        var realNode = vNode.___actualize(doc);
        insertBefore(realNode, referenceEl, parentEl);

        if (vNode.___nodeType === ELEMENT_NODE) {
            if (key) {
                realNode.___markoKey = key;
                component.___keyedElements[key] = realNode;
            }

            morphChildren(realNode, null, null, vNode, component);
        }

        onNodeAdded(realNode, componentsContext);
    }

    function insertVirtualComponentBefore(vComponent, referenceNode, referenceNodeParentEl, component) {
        component.___startNode = component.___endNode = insertBefore(createMarkerComment(), referenceNode, referenceNodeParentEl);
        morphComponent(referenceNodeParentEl, component, vComponent);
    }

    function resolveComponentEndNode(startNode, vChild, parentNode) {
        var endNode = startNode;

        // We track text nodes because multiple adjacent VText nodes should
        // be treated as a single VText node for purposes of pairing with HTML
        // that was rendered on the server since browsers will only see
        // a single text node
        var isPrevText = vChild.___nodeType === TEXT_NODE;

        while((vChild = vChild.___nextSibling)) {
            var nextRealNode = endNode.nextSibling;

            // We stop when there are no more corresponding real nodes or when
            // we reach the end boundary for our UI component
            if (!nextRealNode || nextRealNode.___endNode) {
                break;
            }
            var isText = vChild.___nodeType === TEXT_NODE;
            if (isText && isPrevText) {
                // Pretend like we didn't see this VText node since it
                // the previous vnode was also a VText node
                continue;
            }
            endNode = nextRealNode;
            isPrevText = isText;
        }

        if (endNode === startNode) {
            return insertAfter(createMarkerComment(), startNode, parentNode);
        }

        return endNode;
    }

    function morphComponent(parentFromNode, component, vComponent) {
        // We create a key sequence to generate unique keys since a key
        // can be repeated
        component.___keySequence = globalComponentsContext.___createKeySequence();

        var startNode = component.___startNode;
        var endNode = component.___endNode;
        startNode.___markoComponent = undefined;
        endNode.___endNode = undefined;

        var beforeChild = startNode.previousSibling;
        var afterChild = endNode.nextSibling;
        var tempChild;

        if (!beforeChild) {
            tempChild = beforeChild = insertBefore(createMarkerComment(), startNode, parentFromNode);
        }

        morphChildren(parentFromNode, startNode, afterChild, vComponent, component);

        endNode = undefined;

        startNode = beforeChild.nextSibling;
        if (!startNode || startNode === afterChild) {
            startNode = endNode = insertAfter(createMarkerComment(), beforeChild, parentFromNode);
        }

        if (tempChild) {
            parentFromNode.removeChild(tempChild);
        }

        if (!endNode) {
            if (afterChild) {
                endNode = afterChild.previousSibling;
            } else {
                endNode = parentFromNode.lastChild;
            }
        }

        // Make sure we don't use a detached node as the component boundary and
        // we can't use a node that is already the boundary node for another component
        if (startNode.___markoDetached !== undefined || startNode.___markoComponent) {
            startNode = insertBefore(createMarkerComment(), startNode, parentFromNode);
        }

        if (endNode.___markoDetached !== undefined || endNode.___endNode) {
            endNode = insertAfter(createMarkerComment(), endNode, parentFromNode);
        }


        startNode.___markoComponent = component;
        endNode.___endNode = true;

        component.___startNode = startNode;
        component.___endNode = endNode;

        component.___keySequence = undefined; // We don't need to track keys anymore

        return afterChild;
    }

    var detachedNodes = [];

    function detachNode(node, parentNode, component) {
        if (node.nodeType === ELEMENT_NODE) {
            detachedNodes.push(node);
            node.___markoDetached = component || true;
        } else {
            destroyNodeRecursive(node);
            parentNode.removeChild(node);
        }
    }

    function destroyComponent(component) {
        component.destroy();
    }

    function morphChildren(parentFromNode, startNode, endNode, toNode, component) {
        var curFromNodeChild = startNode;
        var curToNodeChild = toNode.___firstChild;

        var curToNodeKey;
        var curFromNodeKey;
        var curToNodeType;

        var fromNextSibling;
        var toNextSibling;
        var matchingFromEl;
        var matchingFromComponent;
        var curVFromNodeChild;
        var fromComponent;

        outer: while (curToNodeChild) {
            toNextSibling = curToNodeChild.___nextSibling;
            curToNodeType = curToNodeChild.___nodeType;

            var componentForNode = curToNodeChild.___component || component;

            if (curToNodeType === COMPONENT_NODE) {

                if ((matchingFromComponent = existingComponentLookup[componentForNode.id]) === undefined) {
                    if (isRerenderInBrowser === true) {
                        var firstVChild = curToNodeChild.___firstChild;
                        if (firstVChild) {
                            if (!curFromNodeChild) {
                                curFromNodeChild = insertBefore(createMarkerComment(), null, parentFromNode);
                            }

                            componentForNode.___startNode = curFromNodeChild;
                            componentForNode.___endNode = resolveComponentEndNode(curFromNodeChild, firstVChild, parentFromNode);

                        }  else {
                            componentForNode.___startNode = componentForNode.___endNode = insertBefore(createMarkerComment(), curFromNodeChild, parentFromNode);
                        }

                        curFromNodeChild = morphComponent(parentFromNode, componentForNode, curToNodeChild);
                    } else {
                        insertVirtualComponentBefore(curToNodeChild, curFromNodeChild, parentFromNode, componentForNode);
                    }
                } else {
                    if (matchingFromComponent.___startNode !== curFromNodeChild) {
                        if (curFromNodeChild &&
                            (fromComponent = curFromNodeChild.___markoComponent) &&
                            globalComponentsContext.___renderedComponentsById[fromComponent.id] === undefined) {

                            // The component associated with the current real DOM node was not rendered
                            // so we should just remove it out of the real DOM by destroying it
                            curFromNodeChild = fromComponent.___endNode.nextSibling;
                            destroyComponent(fromComponent);
                            continue;
                        }

                        // We need to move the existing component into
                        // the correct location and preserve focus.
                        var activeElement = doc.activeElement;
                        insertBefore(matchingFromComponent.___detach(), curFromNodeChild, parentFromNode);
                        // This focus patch should be a temporary fix.
                        if (activeElement !== doc.activeElement && activeElement.focus) {
                            activeElement.focus();
                        }
                    }

                    if (curToNodeChild.___preserve) {
                        curFromNodeChild = matchingFromComponent.___endNode.nextSibling;
                    } else {
                        curFromNodeChild = morphComponent(parentFromNode, componentForNode, curToNodeChild);
                    }
                }

                curToNodeChild = toNextSibling;
                continue;
            } else if ((curToNodeKey = curToNodeChild.___key)) {
                curVFromNodeChild = undefined;
                curFromNodeKey = undefined;

                var keySequence = componentForNode.___keySequence ||
                    (componentForNode.___keySequence = globalComponentsContext.___createKeySequence());

                // We have a keyed element. This is the fast path for matching
                // up elements
                curToNodeKey = keySequence.___nextKey(curToNodeKey);


                if (curFromNodeChild) {
                    if (curFromNodeChild !== endNode) {
                        curFromNodeKey = curFromNodeChild.___markoKey;
                        curVFromNodeChild = curFromNodeChild.___markoVElement;
                        fromNextSibling = curFromNodeChild.nextSibling;
                    }
                }

                if (curFromNodeKey === curToNodeKey) {
                    // Elements line up. Now we just have to make sure they are compatible
                    if ((curToNodeChild.___flags & FLAG_PRESERVE) === 0) {
                        // We just skip over the fromNode if it is preserved


                        if (compareNodeNames(curToNodeChild, curVFromNodeChild)) {
                            morphEl(curFromNodeChild, curVFromNodeChild, curToNodeChild, componentForNode, curToNodeKey);
                        } else {
                            // Remove the old node
                            detachNode(curFromNodeChild, parentFromNode, componentForNode);

                            // Incompatible nodes. Just move the target VNode into the DOM at this position
                            insertVirtualNodeBefore(curToNodeChild, curToNodeKey, curFromNodeChild, parentFromNode, componentForNode);
                        }
                    } else {
                        // this should be preserved.

                    }
                } else {
                    if ((matchingFromEl = componentForNode.___keyedElements[curToNodeKey]) === undefined) {
                        if (isRerenderInBrowser === true && curFromNodeChild &&
                                curFromNodeChild.nodeType === ELEMENT_NODE &&
                                curFromNodeChild.nodeName === curToNodeChild.___nodeName) {
                            curVFromNodeChild = virtualizeElement(curFromNodeChild);
                            curFromNodeChild.___markoKey = curToNodeKey;
                            morphEl(curFromNodeChild, curVFromNodeChild, curToNodeChild, componentForNode, curToNodeKey);
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue;
                        }

                        insertVirtualNodeBefore(curToNodeChild, curToNodeKey, curFromNodeChild, parentFromNode, componentForNode);
                        fromNextSibling = curFromNodeChild;
                    } else {
                        if (matchingFromEl.___markoDetached !== undefined) {
                            matchingFromEl.___markoDetached = undefined;
                        }
                        curVFromNodeChild = matchingFromEl.___markoVElement;

                        if (compareNodeNames(curVFromNodeChild, curToNodeChild)) {
                            if (fromNextSibling === matchingFromEl) {
                                // Single element removal:
                                // A <-> A
                                // B <-> C <-- We are here
                                // C     D
                                // D
                                //
                                // Single element swap:
                                // A <-> A
                                // B <-> C <-- We are here
                                // C     B

                                if (toNextSibling && toNextSibling.___key === curFromNodeKey) {
                                    // Single element swap

                                    // We want to stay on the current real DOM node
                                    fromNextSibling = curFromNodeChild;

                                    // But move the matching element into place
                                    insertBefore(matchingFromEl, curFromNodeChild, parentFromNode);
                                } else {
                                    // Single element removal

                                    // We need to remove the current real DOM node
                                    // and the matching real DOM node will fall into
                                    // place. We will continue diffing with next sibling
                                    // after the real DOM node that just fell into place
                                    fromNextSibling = fromNextSibling.nextSibling;

                                    if (curFromNodeChild) {
                                        detachNode(curFromNodeChild, parentFromNode, componentForNode);
                                    }
                                }

                            } else {
                                // A <-> A
                                // B <-> D <-- We are here
                                // C
                                // D

                                // We need to move the matching node into place
                                insertAfter(matchingFromEl, curFromNodeChild, parentFromNode);

                                if (curFromNodeChild) {
                                    detachNode(curFromNodeChild, parentFromNode, componentForNode);
                                }
                            }

                            if ((curToNodeChild.___flags & FLAG_PRESERVE) === 0) {
                                morphEl(matchingFromEl, curVFromNodeChild, curToNodeChild, componentForNode, curToNodeKey, curToNodeKey);
                            }


                        } else {
                            insertVirtualNodeBefore(curToNodeChild, curToNodeKey, curFromNodeChild, parentFromNode, componentForNode);
                            detachNode(matchingFromEl, parentFromNode, componentForNode);
                        }
                    }
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue;
            }

            // The know the target node is not a VComponent node and we know
            // it is also not a preserve node. Let's now match up the HTML
            // element, text node, comment, etc.
            while (curFromNodeChild && curFromNodeChild !== endNode) {
                if ((fromComponent = curFromNodeChild.___markoComponent) && fromComponent !== componentForNode) {
                    // The current "to" element is not associated with a component,
                    // but the current "from" element is associated with a component

                    // Even if we destroy the current component in the original
                    // DOM or not, we still need to skip over it since it is
                    // not compatible with the current "to" node
                    curFromNodeChild = fromComponent.___endNode.nextSibling;

                    if (!globalComponentsContext.___renderedComponentsById[fromComponent.id]) {
                        destroyComponent(fromComponent);
                    }

                    continue; // Move to the next "from" node
                }

                fromNextSibling = curFromNodeChild.nextSibling;

                var curFromNodeType = curFromNodeChild.nodeType;

                var isCompatible = undefined;

                if (curFromNodeType === curToNodeType) {
                    if (curFromNodeType === ELEMENT_NODE) {
                        // Both nodes being compared are Element nodes
                        curVFromNodeChild = curFromNodeChild.___markoVElement;
                        if (curVFromNodeChild === undefined) {
                            if (isRerenderInBrowser === true) {
                                curVFromNodeChild = virtualizeElement(curFromNodeChild);
                            } else {
                                // Skip over nodes that don't look like ours...
                                curFromNodeChild = fromNextSibling;
                                continue;
                            }
                        } else if ((curFromNodeKey = curVFromNodeChild.___key)) {
                            // We have a keyed element here but our target VDOM node
                            // is not keyed so this not doesn't belong
                            isCompatible = false;
                        }

                        isCompatible = isCompatible !== false && compareNodeNames(curVFromNodeChild, curToNodeChild) === true;

                        if (isCompatible === true) {
                            // We found compatible DOM elements so transform
                            // the current "from" node to match the current
                            // target DOM node.
                            morphEl(curFromNodeChild, curVFromNodeChild, curToNodeChild, component, curToNodeKey);
                        }

                    } else if (curFromNodeType === TEXT_NODE || curFromNodeType === COMMENT_NODE) {
                        // Both nodes being compared are Text or Comment nodes
                        isCompatible = true;
                        // Simply update nodeValue on the original node to
                        // change the text value

                        var content = curFromNodeChild.nodeValue;
                        if (content == curToNodeChild.___nodeValue) {
                            if (/^F\^/.test(content)) {
                                var closingContent = content.replace(/^F\^/, 'F/');
                                while((curFromNodeChild = curFromNodeChild.nextSibling)) {
                                    if (curFromNodeChild.nodeValue === closingContent) {
                                        break;
                                    }
                                }
                                while((curToNodeChild = curToNodeChild.___nextSibling)) {
                                    if (curToNodeChild.___nodeValue === closingContent) {
                                        break;
                                    }
                                }
                                curToNodeChild = curToNodeChild.___nextSibling;
                                curFromNodeChild = curFromNodeChild === endNode ? null : curFromNodeChild.nextSibling;
                                continue outer;
                            }
                        } else {
                            curFromNodeChild.nodeValue = curToNodeChild.___nodeValue;
                        }
                    }
                }

                if (isCompatible === true) {
                    // Advance both the "to" child and the "from" child since we found a match
                    curToNodeChild = toNextSibling;
                    curFromNodeChild = fromNextSibling;
                    continue outer;
                }

                if (curFromNodeKey) {
                    if (globalComponentsContext.___preservedEls[curFromNodeKey] === undefined) {
                        detachNode(curFromNodeChild, parentFromNode, componentForNode);
                    }
                } else {
                    detachNode(curFromNodeChild, parentFromNode, componentForNode);
                }

                curFromNodeChild = fromNextSibling;
            } // END: while (curFromNodeChild)

            // If we got this far then we did not find a candidate match for
            // our "to node" and we exhausted all of the children "from"
            // nodes. Therefore, we will just append the current "to" node
            // to the end
            insertVirtualNodeBefore(curToNodeChild, curToNodeKey, curFromNodeChild, parentFromNode, componentForNode);

            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
        }

        // We have processed all of the "to nodes". If curFromNodeChild is
        // non-null then we still have some from nodes left over that need
        // to be removed
        while (curFromNodeChild && (endNode === null || curFromNodeChild !== endNode)) {
            fromNextSibling = curFromNodeChild.nextSibling;

            if ((fromComponent = curFromNodeChild.___markoComponent)) {
                if (globalComponentsContext.___renderedComponentsById[fromComponent.id]) {
                    // Skip over this component since it was rendered in the target VDOM
                    // and will be moved into place later
                    curFromNodeChild = fromComponent.___endNode.nextSibling;
                    continue;
                }
            }

            curVFromNodeChild = curFromNodeChild.___markoVElement;

            // For transcluded content, we need to check if the element belongs to a different component
            // context than the current component and ensure it gets removed from its key index.
            fromComponent = curVFromNodeChild && curVFromNodeChild.___component || component;

            detachNode(curFromNodeChild, parentFromNode, fromComponent);

            curFromNodeChild = fromNextSibling;
        }
    }

    function morphEl(fromEl, vFromEl, toEl, component, toElKey) {
        var nodeName = toEl.___nodeName;

        if (isRerenderInBrowser === true && toElKey) {
            component.___keyedElements[toElKey] = fromEl;
        }

        var constId = toEl.___constId;
        if (constId !== undefined && vFromEl.___constId === constId) {
            return;
        }

        morphAttrs(fromEl, vFromEl, toEl);

        if (toElKey && globalComponentsContext.___preservedElBodies[toElKey] === true) {
            // Don't morph the children since they are preserved
            return;
        }

        if (nodeName !== 'TEXTAREA') {
            morphChildren(fromEl, fromEl.firstChild, null, toEl, component);
        }

        var specialElHandler = specialElHandlers[nodeName];
        if (specialElHandler !== undefined) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    morphChildren(parentNode, startNode, endNode, toNode);

    detachedNodes.forEach(function(node) {
        var detachedFromComponent = node.___markoDetached;

        if (detachedFromComponent !== undefined) {
            node.___markoDetached = undefined;

            var componentToDestroy = node.___markoComponent;
            if (componentToDestroy) {
                componentToDestroy.destroy();
            } else if (node.parentNode) {
                destroyNodeRecursive(node, detachedFromComponent !== true && detachedFromComponent);

                if (eventDelegation.___handleNodeDetach(node) != false) {
                     node.parentNode.removeChild(node);
                }
            }
        }

    });
}

module.exports = morphdom;
