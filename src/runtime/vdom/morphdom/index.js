"use strict";
var specialElHandlers = require("./specialElHandlers");
var componentsUtil = require("../../components/util");
var existingComponentLookup = componentsUtil.___componentLookup;
var destroyNodeRecursive = componentsUtil.___destroyNodeRecursive;
var addComponentRootToKeyedElements =
    componentsUtil.___addComponentRootToKeyedElements;
var normalizeComponentKey = componentsUtil.___normalizeComponentKey;
var VElement = require("../vdom").___VElement;
var virtualizeElement = VElement.___virtualize;
var morphAttrs = VElement.___morphAttrs;
var eventDelegation = require("../../components/event-delegation");
var fragment = require("./fragment");
var helpers = require("./helpers");
var domData = require("../../components/dom-data");
var keysByDOMNode = domData.___keyByDOMNode;
var componentByDOMNode = domData.___componentByDOMNode;
var vElementByDOMNode = domData.___vElementByDOMNode;
var detachedByDOMNode = domData.___detachedByDOMNode;

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

// var FLAG_SIMPLE_ATTRS = 1;
var FLAG_PRESERVE = 2;
// var FLAG_CUSTOM_ELEMENT = 4;

function isAutoKey(key) {
    return !/^@/.test(key);
}

function compareNodeNames(fromEl, toEl) {
    return fromEl.___nodeName === toEl.___nodeName;
}

function caseInsensitiveCompare(a, b) {
    return a.toLowerCase() === b.toLowerCase();
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
        isRerenderInBrowser = globalComponentsContext.___isHydrate;
    }

    function insertVirtualNodeBefore(
        vNode,
        key,
        referenceEl,
        parentEl,
        ownerComponent,
        parentComponent
    ) {
        var realNode = vNode.___actualize(doc, parentEl.namespaceURI);
        insertBefore(realNode, referenceEl, parentEl);

        if (
            vNode.___nodeType === ELEMENT_NODE ||
            vNode.___nodeType === FRAGMENT_NODE
        ) {
            if (key) {
                keysByDOMNode.set(realNode, key);
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
        componentByDOMNode.set(rootNode, component);

        if (key && ownerComponent) {
            key = normalizeComponentKey(key, parentComponent.id);
            addComponentRootToKeyedElements(
                ownerComponent.___keyedElements,
                key,
                rootNode,
                component.id
            );
            keysByDOMNode.set(rootNode, key);
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
            detachedByDOMNode.set(node, ownerComponent || true);
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
                        componentByDOMNode.set(rootNode, component);

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

                            keysByDOMNode.set(rootNode, curToNodeKey);
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
                            (fromComponent = componentByDOMNode.get(
                                curFromNodeChild
                            )) &&
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
                var curToNodeKeyOriginal = curToNodeKey;

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
                    curFromNodeKey = keysByDOMNode.get(curFromNodeChild);
                    curVFromNodeChild = vElementByDOMNode.get(curFromNodeChild);
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
                                caseInsensitiveCompare(
                                    curFromNodeChild.nodeName,
                                    curToNodeChild.___nodeName || ""
                                )
                            ) {
                                curVFromNodeChild = virtualizeElement(
                                    curFromNodeChild
                                );
                                curVFromNodeChild.___nodeName =
                                    curToNodeChild.___nodeName;
                                keysByDOMNode.set(
                                    curFromNodeChild,
                                    curToNodeKey
                                );
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
                                if (content == "F#" + curToNodeKeyOriginal) {
                                    var endNode = curFromNodeChild.nextSibling;
                                    var depth = 0;
                                    var nodeValue;

                                    // eslint-disable-next-line no-constant-condition
                                    while (true) {
                                        if (endNode.nodeType === COMMENT_NODE) {
                                            nodeValue = endNode.nodeValue;
                                            if (nodeValue === "F/") {
                                                if (depth === 0) {
                                                    break;
                                                } else {
                                                    depth--;
                                                }
                                            } else if (
                                                nodeValue.indexOf("F#") === 0
                                            ) {
                                                depth++;
                                            }
                                        }
                                        endNode = endNode.nextSibling;
                                    }

                                    var fragment = createFragmentNode(
                                        curFromNodeChild,
                                        endNode.nextSibling,
                                        fromNode
                                    );
                                    keysByDOMNode.set(fragment, curToNodeKey);
                                    vElementByDOMNode.set(
                                        fragment,
                                        curToNodeChild
                                    );
                                    referenceComponent.___keyedElements[
                                        curToNodeKey
                                    ] = fragment;
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
                        if (
                            detachedByDOMNode.get(matchingFromEl) !== undefined
                        ) {
                            detachedByDOMNode.set(matchingFromEl, undefined);
                        }

                        if (
                            (curToNodeChild.___flags & FLAG_PRESERVE) === 0 &&
                            !curToNodeChild.___preserve
                        ) {
                            curVFromNodeChild = vElementByDOMNode.get(
                                matchingFromEl
                            );

                            if (
                                compareNodeNames(
                                    curVFromNodeChild,
                                    curToNodeChild
                                )
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
                                    (curToNodeChild.___flags &
                                        FLAG_PRESERVE) ===
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
                        } else {
                            // preserve the node
                            // but still we need to diff the current from node
                            insertBefore(
                                matchingFromEl,
                                curFromNodeChild,
                                fromNode
                            );
                            fromNextSibling = curFromNodeChild;
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
                    (fromComponent = componentByDOMNode.get(curFromNodeChild))
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
                        curVFromNodeChild = vElementByDOMNode.get(
                            curFromNodeChild
                        );
                        if (curVFromNodeChild === undefined) {
                            if (isRerenderInBrowser === true) {
                                curVFromNodeChild = virtualizeElement(
                                    curFromNodeChild
                                );

                                if (
                                    caseInsensitiveCompare(
                                        curVFromNodeChild.___nodeName,
                                        curToNodeChild.___nodeName
                                    )
                                ) {
                                    curVFromNodeChild.___nodeName =
                                        curToNodeChild.___nodeName;
                                }
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
                            parentComponent.id + "-" + curFromNodeKey
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

                if (
                    (fromComponent = componentByDOMNode.get(curFromNodeChild))
                ) {
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

                curVFromNodeChild = vElementByDOMNode.get(curFromNodeChild);

                // For transcluded content, we need to check if the element belongs to a different component
                // context than the current component and ensure it gets removed from its key index.
                if (isAutoKey(keysByDOMNode.get(fromNode))) {
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
            globalComponentsContext.___preservedElBodies[
                parentComponent.id + "-" + toElKey
            ] === true
        ) {
            // Don't morph the children since they are preserved
            return;
        }

        if (nodeName !== "textarea") {
            morphChildren(fromEl, toEl, parentComponent);
        }

        var specialElHandler = specialElHandlers[nodeName];
        if (specialElHandler !== undefined) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    morphChildren(fromNode, toNode, toNode.___component);

    detachedNodes.forEach(function(node) {
        var detachedFromComponent = detachedByDOMNode.get(node);

        if (detachedFromComponent !== undefined) {
            detachedByDOMNode.set(node, undefined);

            var componentToDestroy = componentByDOMNode.get(node);
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
