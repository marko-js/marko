"use strict";
var specialElHandlers = require("./specialElHandlers");
var componentsUtil = require("../components/util");
var existingComponentLookup = componentsUtil.___componentLookup;
var destroyNodeRecursive = componentsUtil.___destroyNodeRecursive;
var addComponentRootToKeyedElements =
    componentsUtil.___addComponentRootToKeyedElements;
var normalizeComponentKey = componentsUtil.___normalizeComponentKey;
var VElement = require("../runtime/vdom/vdom").___VElement;
var virtualizeElement = VElement.___virtualize;
var morphAttrs = VElement.___morphAttrs;
var eventDelegation = require("../components/event-delegation");
var fragment = require("./fragment");
var helpers = require("./helpers");

var insertBefore = helpers.___insertBefore;
var insertAfter = helpers.___insertAfter;
var nextSibling = helpers.___nextSibling;
var firstChild = helpers.___firstChild;
var removeChild = helpers.___removeChild;
var createFragmentNode = fragment.___createFragmentNode;
var beginFragmentNode = fragment.___beginFragmentNode;

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var COMPONENT_NODE = 2;
var FRAGMENT_NODE = 12;

// var FLAG_IS_SVG = 1;
// var FLAG_IS_TEXTAREA = 2;
// var FLAG_SIMPLE_ATTRS = 4;
var FLAG_PRESERVE = 8;
// var FLAG_CUSTOM_ELEMENT = 16;

function isAutoKey(key) {
    return !/^@/.test(key);
}

function compareNodeNames(fromEl, toEl) {
    return fromEl.___nodeName === toEl.___nodeName;
}

function onNodeAdded(node, componentsContext) {
    if (node.nodeType === 1) {
        eventDelegation.___handleNodeAttach(node, componentsContext);
    }
}

function morphdom(fromNode, toNode, doc, componentsContext) {
    var globalComponentsContext;
    var isRerenderInBrowser = false;
    var keySequences = {};

    if (componentsContext) {
        globalComponentsContext = componentsContext.___globalContext;
        isRerenderInBrowser = globalComponentsContext.___isRerenderInBrowser;
    }

    function insertVirtualNodeBefore(
        vNode,
        key,
        referenceEl,
        parentEl,
        ownerComponent,
        parentComponent
    ) {
        var realNode = vNode.___actualize(doc);
        insertBefore(realNode, referenceEl, parentEl);

        if (
            vNode.___nodeType === ELEMENT_NODE ||
            vNode.___nodeType === FRAGMENT_NODE
        ) {
            if (key) {
                realNode.___markoKey = key;
                (isAutoKey(key)
                    ? parentComponent
                    : ownerComponent
                ).___keyedElements[key] = realNode;
            }

            morphChildren(realNode, vNode, parentComponent);
        }

        onNodeAdded(realNode, componentsContext);
    }

    function insertVirtualComponentBefore(
        vComponent,
        referenceNode,
        referenceNodeParentEl,
        component,
        key,
        ownerComponent,
        parentComponent
    ) {
        var rootNode = (component.___rootNode = insertBefore(
            createFragmentNode(),
            referenceNode,
            referenceNodeParentEl
        ));
        rootNode.___markoComponent = component;

        if (key && ownerComponent) {
            key = normalizeComponentKey(key, parentComponent.id);
            addComponentRootToKeyedElements(
                ownerComponent.___keyedElements,
                key,
                rootNode,
                component.id
            );
            rootNode.___markoKey = key;
        }

        morphComponent(component, vComponent);
    }

    function morphComponent(component, vComponent) {
        morphChildren(component.___rootNode, vComponent, component);
    }

    var detachedNodes = [];

    function detachNode(node, parentNode, ownerComponent) {
        if (node.nodeType === ELEMENT_NODE || node.nodeType === FRAGMENT_NODE) {
            detachedNodes.push(node);
            node.___markoDetached = ownerComponent || true;
        } else {
            destroyNodeRecursive(node);
            removeChild(node);
        }
    }

    function destroyComponent(component) {
        component.destroy();
    }

    function morphChildren(fromNode, toNode, parentComponent) {
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
            curToNodeKey = curToNodeChild.___key;

            var ownerComponent =
                curToNodeChild.___ownerComponent || parentComponent;
            var referenceComponent;

            if (curToNodeType === COMPONENT_NODE) {
                var component = curToNodeChild.___component;
                if (
                    (matchingFromComponent =
                        existingComponentLookup[component.id]) === undefined
                ) {
                    if (isRerenderInBrowser === true) {
                        var rootNode = beginFragmentNode(
                            curFromNodeChild,
                            fromNode
                        );
                        component.___rootNode = rootNode;
                        rootNode.___markoComponent = component;

                        if (ownerComponent && curToNodeKey) {
                            curToNodeKey = normalizeComponentKey(
                                curToNodeKey,
                                parentComponent.id
                            );
                            addComponentRootToKeyedElements(
                                ownerComponent.___keyedElements,
                                curToNodeKey,
                                rootNode,
                                component.id
                            );
                            rootNode.___markoKey = curToNodeKey;
                        }

                        morphComponent(component, curToNodeChild);

                        curFromNodeChild = nextSibling(rootNode);
                    } else {
                        insertVirtualComponentBefore(
                            curToNodeChild,
                            curFromNodeChild,
                            fromNode,
                            component,
                            curToNodeKey,
                            ownerComponent,
                            parentComponent
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
                        // the correct location
                        insertBefore(
                            matchingFromComponent.___rootNode,
                            curFromNodeChild,
                            fromNode
                        );
                    } else {
                        curFromNodeChild =
                            curFromNodeChild && nextSibling(curFromNodeChild);
                    }

                    if (!curToNodeChild.___preserve) {
                        morphComponent(component, curToNodeChild);
                    }
                }

                curToNodeChild = toNextSibling;
                continue;
            } else if (curToNodeKey) {
                curVFromNodeChild = undefined;
                curFromNodeKey = undefined;

                if (isAutoKey(curToNodeKey)) {
                    if (ownerComponent !== parentComponent) {
                        curToNodeKey += ":" + ownerComponent.id;
                    }
                    referenceComponent = parentComponent;
                } else {
                    referenceComponent = ownerComponent;
                }

                var keySequence =
                    keySequences[referenceComponent.id] ||
                    (keySequences[
                        referenceComponent.id
                    ] = globalComponentsContext.___createKeySequence());

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
                    if (
                        (curToNodeChild.___flags & FLAG_PRESERVE) === 0 &&
                        !curToNodeChild.___preserve
                    ) {
                        // We just skip over the fromNode if it is preserved

                        if (
                            compareNodeNames(curToNodeChild, curVFromNodeChild)
                        ) {
                            morphEl(
                                curFromNodeChild,
                                curVFromNodeChild,
                                curToNodeChild,
                                curToNodeKey,
                                ownerComponent,
                                parentComponent
                            );
                        } else {
                            // Remove the old node
                            detachNode(
                                curFromNodeChild,
                                fromNode,
                                ownerComponent
                            );

                            // Incompatible nodes. Just move the target VNode into the DOM at this position
                            insertVirtualNodeBefore(
                                curToNodeChild,
                                curToNodeKey,
                                curFromNodeChild,
                                fromNode,
                                ownerComponent,
                                parentComponent
                            );
                        }
                    } else {
                        // this should be preserved.
                    }
                } else {
                    if (
                        (matchingFromEl =
                            referenceComponent.___keyedElements[
                                curToNodeKey
                            ]) === undefined
                    ) {
                        if (isRerenderInBrowser === true && curFromNodeChild) {
                            if (
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
                                    curToNodeKey,
                                    ownerComponent,
                                    parentComponent
                                );
                                curToNodeChild = toNextSibling;
                                curFromNodeChild = fromNextSibling;
                                continue;
                            } else if (
                                curToNodeChild.___nodeType === FRAGMENT_NODE &&
                                curFromNodeChild.nodeType === COMMENT_NODE
                            ) {
                                var content = curFromNodeChild.nodeValue;
                                if (content == "F#" + curToNodeKey) {
                                    var endNode = curFromNodeChild;
                                    while (
                                        endNode.nodeType !== COMMENT_NODE ||
                                        endNode.nodeValue !== "F/"
                                    )
                                        endNode = endNode.nextSibling;

                                    var fragment = createFragmentNode(
                                        curFromNodeChild,
                                        endNode.nextSibling,
                                        fromNode
                                    );
                                    fragment.___markoKey = curToNodeKey;
                                    fragment.___markoVElement = curToNodeChild;
                                    removeChild(curFromNodeChild);
                                    removeChild(endNode);

                                    if (!curToNodeChild.___preserve) {
                                        morphChildren(
                                            fragment,
                                            curToNodeChild,
                                            parentComponent
                                        );
                                    }

                                    curToNodeChild = toNextSibling;
                                    curFromNodeChild = fragment.nextSibling;
                                    continue;
                                }
                            }
                        }

                        insertVirtualNodeBefore(
                            curToNodeChild,
                            curToNodeKey,
                            curFromNodeChild,
                            fromNode,
                            ownerComponent,
                            parentComponent
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
                                            ownerComponent
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
                                        ownerComponent
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
                                    curToNodeKey,
                                    ownerComponent,
                                    parentComponent
                                );
                            }
                        } else {
                            insertVirtualNodeBefore(
                                curToNodeChild,
                                curToNodeKey,
                                curFromNodeChild,
                                fromNode,
                                ownerComponent,
                                parentComponent
                            );
                            detachNode(
                                matchingFromEl,
                                fromNode,
                                ownerComponent
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

                if ((fromComponent = curFromNodeChild.___markoComponent)) {
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
                                curToNodeKey,
                                ownerComponent,
                                parentComponent
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
                        if (
                            curFromNodeChild.nodeValue !==
                            curToNodeChild.___nodeValue
                        ) {
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
                        detachNode(curFromNodeChild, fromNode, ownerComponent);
                    }
                } else {
                    detachNode(curFromNodeChild, fromNode, ownerComponent);
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
                ownerComponent,
                parentComponent
            );

            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
        }

        // We have processed all of the "to nodes".
        if (fromNode.___finishFragment) {
            // If we are in an unfinished fragment, we have reached the end of the nodes
            // we were matching up and need to end the fragment
            fromNode.___finishFragment(curFromNodeChild);
        } else {
            // If curFromNodeChild is non-null then we still have some from nodes
            // left over that need to be removed
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
                if (isAutoKey(fromNode.___markoKey)) {
                    referenceComponent = parentComponent;
                } else {
                    referenceComponent =
                        curVFromNodeChild &&
                        curVFromNodeChild.___ownerComponent;
                }

                detachNode(curFromNodeChild, fromNode, referenceComponent);

                curFromNodeChild = fromNextSibling;
            }
        }
    }

    function morphEl(
        fromEl,
        vFromEl,
        toEl,
        toElKey,
        ownerComponent,
        parentComponent
    ) {
        var nodeName = toEl.___nodeName;

        if (isRerenderInBrowser === true && toElKey) {
            ownerComponent.___keyedElements[toElKey] = fromEl;
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
            morphChildren(fromEl, toEl, parentComponent);
        }

        var specialElHandler = specialElHandlers[nodeName];
        if (specialElHandler !== undefined) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    morphChildren(fromNode, toNode, toNode.___component);

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
