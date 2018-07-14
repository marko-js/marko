"use strict";
var specialElHandlers = require("./specialElHandlers");
var componentsUtil = require("../components/util");
var existingComponentLookup = componentsUtil.___componentLookup;
var destroyNodeRecursive = componentsUtil.___destroyNodeRecursive;
var VElement = require("../runtime/vdom/vdom").___VElement;
var virtualizeElement = VElement.___virtualize;
var morphAttrs = VElement.___morphAttrs;
var eventDelegation = require("../components/event-delegation");

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
    if (node.remove) node.remove();
    else node.parentNode.removeChild(node);
}
// var counter = 0;
class HTMLFragment {
    constructor() {
        this.startNode = document.createTextNode(""); //document.createComment(++counter + ':');
        this.endNode = document.createTextNode(""); //document.createComment('/' + counter);
        this.startNode.fragment = this;
        this.endNode.fragment = this;
        this.detachedContainer = document.createDocumentFragment();
        this.detachedContainer.appendChild(this.startNode);
        this.detachedContainer.appendChild(this.endNode);
    }
    get firstChild() {
        let firstChild = this.startNode.nextSibling;
        return firstChild === this.endNode ? undefined : firstChild;
    }
    get lastChild() {
        let lastChild = this.endNode.previousSibling;
        return lastChild === this.startNode ? undefined : lastChild;
    }
    get nextSibling() {
        return this.endNode.nextSibling;
    }
    get nodes() {
        const nodes = [];
        let current = this.startNode;
        while (current !== this.endNode) {
            nodes.push(current);
            current = current.nextSibling;
        }
        nodes.push(current);
        return nodes;
    }
    insertBefore(newChildNode, referenceNode) {
        const actualReference =
            referenceNode == null ? this.endNode : referenceNode;
        return insertBefore(
            newChildNode,
            actualReference,
            this.startNode.parentNode
        );
    }
    insertInto(newParentNode, referenceNode) {
        this.nodes.forEach(node =>
            insertBefore(node, referenceNode, newParentNode)
        );
        return this;
    }
    remove() {
        this.nodes.forEach(node => this.detachedContainer.appendChild(node));
    }
}

function morphdom(fromNode, toNode, doc, componentsContext) {
    var globalComponentsContext;
    var isRerenderInBrowser = false;

    if (componentsContext) {
        globalComponentsContext = componentsContext.___globalContext;
        isRerenderInBrowser = globalComponentsContext.___isRerenderInBrowser;
    }

    function createFragmentNode() {
        /*var fragment = doc.createElement('div');
        fragment.type = "fragment";
        fragment.style.display = "contents";
        return fragment;*/
        return new HTMLFragment();
    }

    function insertVirtualNodeBefore(
        vNode,
        key,
        referenceEl,
        parentEl,
        component
    ) {
        var realNode = vNode.___actualize(doc);
        insertBefore(realNode, referenceEl, parentEl);

        if (vNode.___nodeType === ELEMENT_NODE) {
            if (key) {
                realNode.___markoKey = key;
                component.___keyedElements[key] = realNode;
            }

            morphChildren(realNode, vNode, component);
        }

        onNodeAdded(realNode, componentsContext);
    }

    function insertVirtualComponentBefore(
        vComponent,
        referenceNode,
        referenceNodeParentEl,
        component
    ) {
        component.___rootNode = insertBefore(
            createFragmentNode(),
            referenceNode,
            referenceNodeParentEl
        );
        component.___rootNode.___markoComponent = component;
        morphComponent(component, vComponent);
    }

    function morphComponent(component, vComponent) {
        component.___keySequence = globalComponentsContext.___createKeySequence();
        morphChildren(component.___rootNode, vComponent, component);
        component.___keySequence = undefined; // We don't need to track keys anymore
    }

    var detachedNodes = [];

    function detachNode(node, parentNode, component) {
        if (node.nodeType === ELEMENT_NODE) {
            detachedNodes.push(node);
            node.___markoDetached = component || true;
        } else {
            destroyNodeRecursive(node);
            removeChild(node);
        }
    }

    function destroyComponent(component) {
        component.destroy();
    }

    function morphChildren(fromNode, toNode, component) {
        var curFromNodeChild = firstChild(fromNode);
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
                if (
                    (matchingFromComponent =
                        existingComponentLookup[componentForNode.id]) ===
                    undefined
                ) {
                    if (isRerenderInBrowser === true) {
                        var rootNode = (componentForNode.___rootNode = createFragmentNode());
                        var numChildren = curToNodeChild.___childCount;
                        var targetNode = curFromNodeChild;

                        insertBefore(rootNode.startNode, targetNode, fromNode);

                        while (numChildren--)
                            targetNode = targetNode && targetNode.nextSibling;

                        insertBefore(rootNode.endNode, targetNode, fromNode);

                        rootNode.___markoComponent = componentForNode;

                        morphComponent(componentForNode, curToNodeChild);

                        curFromNodeChild = nextSibling(rootNode);
                    } else {
                        insertVirtualComponentBefore(
                            curToNodeChild,
                            curFromNodeChild,
                            fromNode,
                            componentForNode
                        );
                    }
                } else {
                    if (
                        matchingFromComponent.___rootNode !== curFromNodeChild
                    ) {
                        if (
                            curFromNodeChild &&
                            (fromComponent =
                                curFromNodeChild.___markoComponent) &&
                            globalComponentsContext.___renderedComponentsById[
                                fromComponent.id
                            ] === undefined
                        ) {
                            // The component associated with the current real DOM node was not rendered
                            // so we should just remove it out of the real DOM by destroying it
                            curFromNodeChild = nextSibling(
                                fromComponent.___rootNode
                            );
                            destroyComponent(fromComponent);
                            continue;
                        }

                        // We need to move the existing component into
                        // the correct location and preserve focus.
                        var activeElement = doc.activeElement;
                        insertBefore(
                            matchingFromComponent.___detach(),
                            curFromNodeChild,
                            fromNode
                        );
                        // This focus patch should be a temporary fix.
                        if (
                            activeElement !== doc.activeElement &&
                            activeElement.focus
                        ) {
                            activeElement.focus();
                        }
                    } else {
                        curFromNodeChild =
                            curFromNodeChild && nextSibling(curFromNodeChild);
                    }

                    if (!curToNodeChild.___preserve) {
                        morphComponent(componentForNode, curToNodeChild);
                    }
                }

                curToNodeChild = toNextSibling;
                continue;
            } else if ((curToNodeKey = curToNodeChild.___key)) {
                curVFromNodeChild = undefined;
                curFromNodeKey = undefined;

                var keySequence =
                    componentForNode.___keySequence ||
                    (componentForNode.___keySequence = globalComponentsContext.___createKeySequence());

                // We have a keyed element. This is the fast path for matching
                // up elements
                curToNodeKey = keySequence.___nextKey(curToNodeKey);

                if (curFromNodeChild) {
                    curFromNodeKey = curFromNodeChild.___markoKey;
                    curVFromNodeChild = curFromNodeChild.___markoVElement;
                    fromNextSibling = nextSibling(curFromNodeChild);
                }

                if (curFromNodeKey === curToNodeKey) {
                    // Elements line up. Now we just have to make sure they are compatible
                    if ((curToNodeChild.___flags & FLAG_PRESERVE) === 0) {
                        // We just skip over the fromNode if it is preserved

                        if (
                            compareNodeNames(curToNodeChild, curVFromNodeChild)
                        ) {
                            morphEl(
                                curFromNodeChild,
                                curVFromNodeChild,
                                curToNodeChild,
                                componentForNode,
                                curToNodeKey
                            );
                        } else {
                            // Remove the old node
                            detachNode(
                                curFromNodeChild,
                                fromNode,
                                componentForNode
                            );

                            // Incompatible nodes. Just move the target VNode into the DOM at this position
                            insertVirtualNodeBefore(
                                curToNodeChild,
                                curToNodeKey,
                                curFromNodeChild,
                                fromNode,
                                componentForNode
                            );
                        }
                    } else {
                        // this should be preserved.
                    }
                } else {
                    if (
                        (matchingFromEl =
                            componentForNode.___keyedElements[curToNodeKey]) ===
                        undefined
                    ) {
                        if (
                            isRerenderInBrowser === true &&
                            curFromNodeChild &&
                            curFromNodeChild.nodeType === ELEMENT_NODE &&
                            curFromNodeChild.nodeName ===
                                curToNodeChild.___nodeName
                        ) {
                            curVFromNodeChild = virtualizeElement(
                                curFromNodeChild
                            );
                            curFromNodeChild.___markoKey = curToNodeKey;
                            morphEl(
                                curFromNodeChild,
                                curVFromNodeChild,
                                curToNodeChild,
                                componentForNode,
                                curToNodeKey
                            );
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue;
                        }

                        insertVirtualNodeBefore(
                            curToNodeChild,
                            curToNodeKey,
                            curFromNodeChild,
                            fromNode,
                            componentForNode
                        );
                        fromNextSibling = curFromNodeChild;
                    } else {
                        if (matchingFromEl.___markoDetached !== undefined) {
                            matchingFromEl.___markoDetached = undefined;
                        }
                        curVFromNodeChild = matchingFromEl.___markoVElement;

                        if (
                            compareNodeNames(curVFromNodeChild, curToNodeChild)
                        ) {
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

                                if (
                                    toNextSibling &&
                                    toNextSibling.___key === curFromNodeKey
                                ) {
                                    // Single element swap

                                    // We want to stay on the current real DOM node
                                    fromNextSibling = curFromNodeChild;

                                    // But move the matching element into place
                                    insertBefore(
                                        matchingFromEl,
                                        curFromNodeChild,
                                        fromNode
                                    );
                                } else {
                                    // Single element removal

                                    // We need to remove the current real DOM node
                                    // and the matching real DOM node will fall into
                                    // place. We will continue diffing with next sibling
                                    // after the real DOM node that just fell into place
                                    fromNextSibling = nextSibling(
                                        fromNextSibling
                                    );

                                    if (curFromNodeChild) {
                                        detachNode(
                                            curFromNodeChild,
                                            fromNode,
                                            componentForNode
                                        );
                                    }
                                }
                            } else {
                                // A <-> A
                                // B <-> D <-- We are here
                                // C
                                // D

                                // We need to move the matching node into place
                                insertAfter(
                                    matchingFromEl,
                                    curFromNodeChild,
                                    fromNode
                                );

                                if (curFromNodeChild) {
                                    detachNode(
                                        curFromNodeChild,
                                        fromNode,
                                        componentForNode
                                    );
                                }
                            }

                            if (
                                (curToNodeChild.___flags & FLAG_PRESERVE) ===
                                0
                            ) {
                                morphEl(
                                    matchingFromEl,
                                    curVFromNodeChild,
                                    curToNodeChild,
                                    componentForNode,
                                    curToNodeKey,
                                    curToNodeKey
                                );
                            }
                        } else {
                            insertVirtualNodeBefore(
                                curToNodeChild,
                                curToNodeKey,
                                curFromNodeChild,
                                fromNode,
                                componentForNode
                            );
                            detachNode(
                                matchingFromEl,
                                fromNode,
                                componentForNode
                            );
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
            while (curFromNodeChild) {
                fromNextSibling = nextSibling(curFromNodeChild);

                if (
                    (fromComponent = curFromNodeChild.___markoComponent) &&
                    fromComponent !== componentForNode
                ) {
                    // The current "to" element is not associated with a component,
                    // but the current "from" element is associated with a component

                    // Even if we destroy the current component in the original
                    // DOM or not, we still need to skip over it since it is
                    // not compatible with the current "to" node
                    curFromNodeChild = fromNextSibling;

                    if (
                        !globalComponentsContext.___renderedComponentsById[
                            fromComponent.id
                        ]
                    ) {
                        destroyComponent(fromComponent);
                    }

                    continue; // Move to the next "from" node
                }

                var curFromNodeType = curFromNodeChild.nodeType;

                var isCompatible = undefined;

                if (curFromNodeType === curToNodeType) {
                    if (curFromNodeType === ELEMENT_NODE) {
                        // Both nodes being compared are Element nodes
                        curVFromNodeChild = curFromNodeChild.___markoVElement;
                        if (curVFromNodeChild === undefined) {
                            if (isRerenderInBrowser === true) {
                                curVFromNodeChild = virtualizeElement(
                                    curFromNodeChild
                                );
                            } else {
                                // Skip over nodes that don't look like ours...
                                curFromNodeChild = fromNextSibling;
                                continue;
                            }
                        } else if (
                            (curFromNodeKey = curVFromNodeChild.___key)
                        ) {
                            // We have a keyed element here but our target VDOM node
                            // is not keyed so this not doesn't belong
                            isCompatible = false;
                        }

                        isCompatible =
                            isCompatible !== false &&
                            compareNodeNames(
                                curVFromNodeChild,
                                curToNodeChild
                            ) === true;

                        if (isCompatible === true) {
                            // We found compatible DOM elements so transform
                            // the current "from" node to match the current
                            // target DOM node.
                            morphEl(
                                curFromNodeChild,
                                curVFromNodeChild,
                                curToNodeChild,
                                component,
                                curToNodeKey
                            );
                        }
                    } else if (
                        curFromNodeType === TEXT_NODE ||
                        curFromNodeType === COMMENT_NODE
                    ) {
                        // Both nodes being compared are Text or Comment nodes
                        isCompatible = true;
                        // Simply update nodeValue on the original node to
                        // change the text value

                        var content = curFromNodeChild.nodeValue;
                        if (content == curToNodeChild.___nodeValue) {
                            if (/^F\^/.test(content)) {
                                var closingContent = content.replace(
                                    /^F\^/,
                                    "F/"
                                );
                                while (
                                    (curFromNodeChild = nextSibling(
                                        curFromNodeChild
                                    ))
                                ) {
                                    if (
                                        curFromNodeChild.nodeValue ===
                                        closingContent
                                    ) {
                                        break;
                                    }
                                }
                                while (
                                    (curToNodeChild =
                                        curToNodeChild.___nextSibling)
                                ) {
                                    if (
                                        curToNodeChild.___nodeValue ===
                                        closingContent
                                    ) {
                                        break;
                                    }
                                }
                                curToNodeChild = curToNodeChild.___nextSibling;
                                curFromNodeChild = nextSibling(
                                    curFromNodeChild
                                );
                                continue outer;
                            }
                        } else {
                            curFromNodeChild.nodeValue =
                                curToNodeChild.___nodeValue;
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
                    if (
                        globalComponentsContext.___preservedEls[
                            curFromNodeKey
                        ] === undefined
                    ) {
                        detachNode(
                            curFromNodeChild,
                            fromNode,
                            componentForNode
                        );
                    }
                } else {
                    detachNode(curFromNodeChild, fromNode, componentForNode);
                }

                curFromNodeChild = fromNextSibling;
            } // END: while (curFromNodeChild)

            // If we got this far then we did not find a candidate match for
            // our "to node" and we exhausted all of the children "from"
            // nodes. Therefore, we will just append the current "to" node
            // to the end
            insertVirtualNodeBefore(
                curToNodeChild,
                curToNodeKey,
                curFromNodeChild,
                fromNode,
                componentForNode
            );

            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
        }

        // We have processed all of the "to nodes". If curFromNodeChild is
        // non-null then we still have some from nodes left over that need
        // to be removed
        while (curFromNodeChild) {
            fromNextSibling = nextSibling(curFromNodeChild);

            if ((fromComponent = curFromNodeChild.___markoComponent)) {
                curFromNodeChild = fromNextSibling;
                if (
                    !globalComponentsContext.___renderedComponentsById[
                        fromComponent.id
                    ]
                ) {
                    destroyComponent(fromComponent);
                }
                continue;
            }

            curVFromNodeChild = curFromNodeChild.___markoVElement;

            // For transcluded content, we need to check if the element belongs to a different component
            // context than the current component and ensure it gets removed from its key index.
            fromComponent =
                (curVFromNodeChild && curVFromNodeChild.___component) ||
                component;

            detachNode(curFromNodeChild, fromNode, fromComponent);

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

        if (
            toElKey &&
            globalComponentsContext.___preservedElBodies[toElKey] === true
        ) {
            // Don't morph the children since they are preserved
            return;
        }

        if (nodeName !== "TEXTAREA") {
            morphChildren(fromEl, toEl, component);
        }

        var specialElHandler = specialElHandlers[nodeName];
        if (specialElHandler !== undefined) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    var component = toNode.___component;

    if (component) {
        component.___keySequence = null;
    }

    morphChildren(fromNode, toNode, component);

    detachedNodes.forEach(function(node) {
        var detachedFromComponent = node.___markoDetached;

        if (detachedFromComponent !== undefined) {
            node.___markoDetached = undefined;

            var componentToDestroy = node.___markoComponent;
            if (componentToDestroy) {
                componentToDestroy.destroy();
            } else if (node.parentNode) {
                destroyNodeRecursive(
                    node,
                    detachedFromComponent !== true && detachedFromComponent
                );

                if (eventDelegation.___handleNodeDetach(node) != false) {
                    removeChild(node);
                }
            }
        }
    });
}

module.exports = morphdom;
module.exports.HTMLFragment = HTMLFragment;
