var domData = require("../dom-data");
var componentsByDOMNode = domData.___componentByDOMNode;
var keysByDOMNode = domData.___keyByDOMNode;
var vElementsByDOMNode = domData.___vElementByDOMNode;
var vPropsByDOMNode = domData.___vPropsByDOMNode;
var markoUID = window.$MUID || (window.$MUID = { i: 0 });
var runtimeId = markoUID.i++;

var componentLookup = {};

var EMPTY_OBJECT = {};

function getComponentForEl(el, host) {
  var node =
    typeof el == "string"
      ? ((host ? host.ownerDocument : host) || document).getElementById(el)
      : el;
  var component;
  var vElement;

  while (node) {
    if (node.fragment) {
      if (node.fragment.endNode === node) {
        node = node.fragment.startNode;
      } else {
        node = node.fragment;
        component = componentsByDOMNode.get(node);
      }
    } else if ((vElement = vElementsByDOMNode.get(node))) {
      component = vElement.___ownerComponent;
    }

    if (component) {
      return component;
    }

    node = node.previousSibling || node.parentNode;
  }
}

function destroyComponentForNode(node) {
  var componentToDestroy = componentsByDOMNode.get(node.fragment || node);
  if (componentToDestroy) {
    componentToDestroy.___destroyShallow();
    delete componentLookup[componentToDestroy.id];
  }
}
function destroyNodeRecursive(node, component) {
  destroyComponentForNode(node);
  if (node.nodeType === 1 || node.nodeType === 12) {
    var key;

    if (component && (key = keysByDOMNode.get(node))) {
      if (node === component.___keyedElements[key]) {
        if (componentsByDOMNode.get(node) && /\[\]$/.test(key)) {
          delete component.___keyedElements[key][
            componentsByDOMNode.get(node).id
          ];
        } else {
          delete component.___keyedElements[key];
        }
      }
    }

    var curChild = node.firstChild;
    while (curChild && curChild !== node.endNode) {
      destroyNodeRecursive(curChild, component);
      curChild = curChild.nextSibling;
    }
  }
}

function nextComponentId() {
  // Each component will get an ID that is unique across all loaded
  // marko runtimes. This allows multiple instances of marko to be
  // loaded in the same window and they should all place nice
  // together
  return "c" + markoUID.i++;
}

function nextComponentIdProvider() {
  return nextComponentId;
}

function attachBubblingEvent(
  componentDef,
  handlerMethodName,
  isOnce,
  extraArgs
) {
  if (handlerMethodName) {
    var componentId = componentDef.id;
    if (extraArgs) {
      return [handlerMethodName, componentId, isOnce, extraArgs];
    } else {
      return [handlerMethodName, componentId, isOnce];
    }
  }
}

function getMarkoPropsFromEl(el) {
  var vElement = vElementsByDOMNode.get(el);
  var virtualProps;

  if (vElement) {
    virtualProps = vElement.___properties;
  } else {
    virtualProps = vPropsByDOMNode.get(el);
    if (!virtualProps) {
      virtualProps = el.getAttribute("data-marko");
      vPropsByDOMNode.set(
        el,
        (virtualProps = virtualProps ? JSON.parse(virtualProps) : EMPTY_OBJECT)
      );
    }
  }

  return virtualProps;
}

function normalizeComponentKey(key, parentId) {
  if (key[0] === "#") {
    key = key.replace("#" + parentId + "-", "");
  }
  return key;
}

function addComponentRootToKeyedElements(
  keyedElements,
  key,
  rootNode,
  componentId
) {
  if (/\[\]$/.test(key)) {
    var repeatedElementsForKey = (keyedElements[key] =
      keyedElements[key] || {});
    repeatedElementsForKey[componentId] = rootNode;
  } else {
    keyedElements[key] = rootNode;
  }
}

// eslint-disable-next-line no-constant-condition
if ("MARKO_DEBUG") {
  var warnNodeRemoved = function (event) {
    var fragment = event.target.fragment;
    if (fragment) {
      var baseError = new Error(
        "Fragment boundary marker removed.  This will cause an error when the fragment is updated."
      );
      fragment.___markersRemovedError = function (message) {
        var error = new Error(message + " Boundary markers missing.");

        baseError.stack = baseError.stack.replace(/.*warnNodeRemoved.*\n/, "");

        // eslint-disable-next-line no-console
        console.warn(baseError);
        return error;
      };
    }
  };
  exports.___startDOMManipulationWarning = function (host) {
    host.addEventListener("DOMNodeRemoved", warnNodeRemoved);
  };
  exports.___stopDOMManipulationWarning = function (host) {
    host.removeEventListener("DOMNodeRemoved", warnNodeRemoved);
  };
}

exports.___runtimeId = runtimeId;
exports.___componentLookup = componentLookup;
exports.___getComponentForEl = getComponentForEl;
exports.___destroyComponentForNode = destroyComponentForNode;
exports.___destroyNodeRecursive = destroyNodeRecursive;
exports.___nextComponentIdProvider = nextComponentIdProvider;
exports.___attachBubblingEvent = attachBubblingEvent;
exports.___getMarkoPropsFromEl = getMarkoPropsFromEl;
exports.___addComponentRootToKeyedElements = addComponentRootToKeyedElements;
exports.___normalizeComponentKey = normalizeComponentKey;
