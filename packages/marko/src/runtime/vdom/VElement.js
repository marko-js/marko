// eslint-disable-next-line no-constant-binary-expression
var complain = "MARKO_DEBUG" && require("complain");
var inherit = require("raptor-util/inherit");
var componentsUtil = require("@internal/components-util");
var domData = require("../components/dom-data");
var vElementByDOMNode = domData.___vElementByDOMNode;
var VNode = require("./VNode");
var ATTR_XLINK_HREF = "xlink:href";
var xmlnsRegExp = /^xmlns(:|$)/;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var NS_XLINK = "http://www.w3.org/1999/xlink";
var NS_HTML = "http://www.w3.org/1999/xhtml";
var NS_MATH = "http://www.w3.org/1998/Math/MathML";
var NS_SVG = "http://www.w3.org/2000/svg";
var DEFAULT_NS = {
  svg: NS_SVG,
  math: NS_MATH,
};

var FLAG_SIMPLE_ATTRS = 1;
var FLAG_CUSTOM_ELEMENT = 2;
var FLAG_SPREAD_ATTRS = 4;

var ATTR_HREF = "href";
var EMPTY_OBJECT = Object.freeze(Object.create(null));
var specialElHandlers = {
  option: {
    selected: function (fromEl, value) {
      fromEl.selected = value !== undefined;
    },
  },
  input: {
    value: function (fromEl, value) {
      fromEl.value = value === undefined ? "" : value;
    },
    checked: function (fromEl, value) {
      fromEl.checked = value !== undefined;
    },
  },
};

function normalizeValue(value) {
  if (value === true) {
    return "";
  }

  if (value == null || value === false) {
    return;
  }

  switch (typeof value) {
    case "string":
      return value;
    case "object":
      switch (value.toString) {
        case Object.prototype.toString:
        case Array.prototype.toString:
          // eslint-disable-next-line no-constant-condition
          if ("MARKO_DEBUG") {
            complain(
              "Relying on JSON.stringify for attribute values is deprecated, in future versions of Marko these will be cast to strings instead.",
            );
          }
          return JSON.stringify(value);
        case RegExp.prototype.toString:
          return value.source;
      }
      break;
  }

  return value + "";
}

function assign(a, b) {
  for (var key in b) {
    if (hasOwnProperty.call(b, key)) {
      a[key] = b[key];
    }
  }
}

function VElementClone(other) {
  this.___firstChildInternal = other.___firstChildInternal;
  this.___parentNode = null;
  this.___nextSiblingInternal = null;

  this.___key = other.___key;
  this.___attributes = other.___attributes;
  this.___properties = other.___properties;
  this.___nodeName = other.___nodeName;
  this.___flags = other.___flags;
  this.___valueInternal = other.___valueInternal;
  this.___constId = other.___constId;
}

function VElement(
  tagName,
  attrs,
  key,
  ownerComponent,
  childCount,
  flags,
  props,
) {
  this.___VNode(childCount, ownerComponent);

  var constId;

  if (props) {
    constId = props.i;
  }

  this.___key = key;
  this.___flags = flags || 0;
  this.___attributes = attrs || EMPTY_OBJECT;
  this.___properties = props || EMPTY_OBJECT;
  this.___nodeName = tagName;
  this.___valueInternal = "";
  this.___constId = constId;
  this.___preserve = false;
  this.___preserveBody = false;
}

VElement.prototype = {
  ___nodeType: 1,

  ___cloneNode: function () {
    return new VElementClone(this);
  },

  /**
   * Shorthand method for creating and appending an HTML element
   *
   * @param  {String} tagName    The tag name (e.g. "div")
   * @param  {int|null} attrCount  The number of attributes (or `null` if not known)
   * @param  {int|null} childCount The number of child nodes (or `null` if not known)
   */
  e: function (tagName, attrs, key, ownerComponent, childCount, flags, props) {
    var child = this.___appendChild(
      new VElement(
        tagName,
        attrs,
        key,
        ownerComponent,
        childCount,
        flags,
        props,
      ),
    );

    if (childCount === 0) {
      return this.___finishChild();
    } else {
      return child;
    }
  },

  /**
   * Shorthand method for creating and appending a static node. The provided node is automatically cloned
   * using a shallow clone since it will be mutated as a result of setting `nextSibling` and `parentNode`.
   *
   * @param  {String} value The value for the new Comment node
   */
  n: function (node, ownerComponent) {
    node = node.___cloneNode();
    node.___ownerComponent = ownerComponent;
    this.___appendChild(node);
    return this.___finishChild();
  },

  ___actualize: function (host, parentNamespaceURI) {
    var tagName = this.___nodeName;
    var attributes = this.___attributes;
    var namespaceURI = DEFAULT_NS[tagName] || parentNamespaceURI || NS_HTML;

    var flags = this.___flags;
    var el = (host.ownerDocument || host).createElementNS(
      namespaceURI,
      tagName,
    );

    if (flags & FLAG_CUSTOM_ELEMENT) {
      assign(el, attributes);
    } else {
      for (var attrName in attributes) {
        var attrValue = normalizeValue(attributes[attrName]);

        if (attrValue !== undefined) {
          if (attrName == ATTR_XLINK_HREF) {
            el.setAttributeNS(NS_XLINK, ATTR_HREF, attrValue);
          } else {
            el.setAttribute(attrName, attrValue);
          }
        }
      }

      if (tagName === "textarea") {
        el.defaultValue = this.___valueInternal;
      }
    }

    vElementByDOMNode.set(el, this);

    return el;
  },
};

inherit(VElement, VNode);

VElementClone.prototype = VElement.prototype;

function virtualizeElement(node, virtualizeChildNodes, ownerComponent) {
  var attributes = node.attributes;
  var attrCount = attributes.length;

  var attrs = null;
  var props = null;

  if (attrCount) {
    attrs = {};
    for (var i = 0; i < attrCount; i++) {
      var attr = attributes[i];
      var attrName = attr.name;
      if (!xmlnsRegExp.test(attrName)) {
        if (attrName === "data-marko") {
          props = componentsUtil.___getMarkoPropsFromEl(node);
        } else if (attr.namespaceURI === NS_XLINK) {
          attrs[ATTR_XLINK_HREF] = attr.value;
        } else {
          attrs[attrName] = attr.value;
        }
      }
    }
  }

  var tagName = node.nodeName;

  if (node.namespaceURI === NS_HTML) {
    tagName = tagName.toLowerCase();
  }

  var vdomEl = new VElement(
    tagName,
    attrs,
    null /*key*/,
    ownerComponent,
    0 /*child count*/,
    0 /*flags*/,
    props,
  );

  if (vdomEl.___nodeName === "textarea") {
    vdomEl.___valueInternal = node.value;
  } else if (virtualizeChildNodes) {
    virtualizeChildNodes(node, vdomEl, ownerComponent);
  }

  return vdomEl;
}

VElement.___virtualize = virtualizeElement;

VElement.___morphAttrs = function (fromEl, vFromEl, toEl) {
  var fromFlags = vFromEl.___flags;
  var toFlags = toEl.___flags;
  var attrs = toEl.___attributes;

  if (toFlags & FLAG_CUSTOM_ELEMENT) {
    return assign(fromEl, attrs);
  }

  var props = toEl.___properties;
  var attrName;

  // We use expando properties to associate the previous HTML
  // attributes provided as part of the VDOM node with the
  // real VElement DOM node. When diffing attributes,
  // we only use our internal representation of the attributes.
  // When diffing for the first time it's possible that the
  // real VElement node will not have the expando property
  // so we build the attribute map from the expando property

  var oldAttrs = vFromEl.___attributes;

  if (oldAttrs === attrs) {
    // For constant attributes the same object will be provided
    // every render and we can use that to our advantage to
    // not waste time diffing a constant, immutable attribute
    // map.
    return;
  }

  var attrValue;

  if (toFlags & FLAG_SIMPLE_ATTRS && fromFlags & FLAG_SIMPLE_ATTRS) {
    if (oldAttrs["class"] !== (attrValue = attrs["class"])) {
      if (attrValue) {
        fromEl.className = attrValue;
      } else {
        fromEl.removeAttribute("class");
      }
    }
    if (oldAttrs.id !== (attrValue = attrs.id)) {
      if (attrValue) {
        fromEl.id = attrValue;
      } else {
        fromEl.removeAttribute("id");
      }
    }
    if (oldAttrs.style !== (attrValue = attrs.style)) {
      if (attrValue) {
        fromEl.style.cssText = attrValue;
      } else {
        fromEl.removeAttribute("style");
      }
    }
    return;
  }

  var preserve = (props && props.pa) || EMPTY_OBJECT;
  var specialAttrs = specialElHandlers[toEl.___nodeName] || EMPTY_OBJECT;
  var specialAttr;

  // Loop over all of the attributes in the attribute map and compare
  // them to the value in the old map. However, if the value is
  // null/undefined/false then we want to remove the attribute
  for (attrName in attrs) {
    if (
      !preserve[attrName] &&
      normalizeValue(oldAttrs[attrName]) !==
        (attrValue = normalizeValue(attrs[attrName]))
    ) {
      if ((specialAttr = specialAttrs[attrName])) {
        specialAttr(fromEl, attrValue);
      } else if (attrName === ATTR_XLINK_HREF) {
        if (attrValue === undefined) {
          fromEl.removeAttributeNS(NS_XLINK, ATTR_HREF);
        } else {
          fromEl.setAttributeNS(NS_XLINK, ATTR_HREF, attrValue);
        }
      } else if (attrValue === undefined) {
        fromEl.removeAttribute(attrName);
      } else {
        fromEl.setAttribute(attrName, attrValue);
      }
    }
  }

  // If there are any old attributes that are not in the new set of attributes
  // then we need to remove those attributes from the target node
  //
  // NOTE: We can skip this if the the element is keyed and didn't have spread attributes
  //       because we know we already processed all of the attributes for
  //       both the target and original element since target VElement nodes will
  //       have all attributes declared. However, we can only skip if the node
  //       was not a virtualized node (i.e., a node that was not rendered by a
  //       Marko template, but rather a node that was created from an HTML
  //       string or a real DOM node).
  if (toEl.___key === null || fromFlags & FLAG_SPREAD_ATTRS) {
    for (attrName in oldAttrs) {
      if (!(attrName in attrs)) {
        if ((specialAttr = specialAttrs[attrName])) {
          specialAttr(fromEl, undefined);
        } else if (attrName === ATTR_XLINK_HREF) {
          fromEl.removeAttributeNS(ATTR_XLINK_HREF, ATTR_HREF);
        } else {
          fromEl.removeAttribute(attrName);
        }
      }
    }
  }
};

module.exports = VElement;
