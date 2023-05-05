/* jshint newcap:false */

var domData = require("../components/dom-data");
var componentsUtil = require("@internal/components-util");
var vElementByDOMNode = domData.___vElementByDOMNode;
var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");
var ATTR_XLINK_HREF = "xlink:href";
var xmlnsRegExp = /^xmlns(:|$)/;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var NS_XLINK = "http://www.w3.org/1999/xlink";
var NS_HTML = "http://www.w3.org/1999/xhtml";
var NS_MATH = "http://www.w3.org/1998/Math/MathML";
var NS_SVG = "http://www.w3.org/2000/svg";
var DEFAULT_NS = {
  svg: NS_SVG,
  math: NS_MATH
};

var FLAG_SIMPLE_ATTRS = 1;
var FLAG_CUSTOM_ELEMENT = 2;
var FLAG_SPREAD_ATTRS = 4;

var defineProperty = Object.defineProperty;

var ATTR_HREF = "href";
var EMPTY_OBJECT = Object.freeze({});

function convertAttrValue(type, value) {
  if (value === true) {
    return "";
  } else if (type == "object") {
    if (value instanceof RegExp) {
      return value.source;
    }
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

function setAttribute(el, namespaceURI, name, value) {
  if (namespaceURI === null) {
    el.setAttribute(name, value);
  } else {
    el.setAttributeNS(namespaceURI, name, value);
  }
}

function removeAttribute(el, namespaceURI, name) {
  if (namespaceURI === null) {
    el.removeAttribute(name);
  } else {
    el.removeAttributeNS(namespaceURI, name);
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
  props
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
  this.___valueInternal = null;
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
        props
      )
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
      tagName
    );

    if (flags & FLAG_CUSTOM_ELEMENT) {
      assign(el, attributes);
    } else {
      for (var attrName in attributes) {
        var attrValue = attributes[attrName];

        if (attrValue !== false && attrValue != null) {
          var type = typeof attrValue;

          if (type !== "string") {
            // Special attributes aren't copied to the real DOM. They are only
            // kept in the virtual attributes map
            attrValue = convertAttrValue(type, attrValue);
          }

          if (attrName == ATTR_XLINK_HREF) {
            setAttribute(el, NS_XLINK, ATTR_HREF, attrValue);
          } else {
            el.setAttribute(attrName, attrValue);
          }
        }
      }

      if (tagName === "textarea") {
        el.defaultValue = el.value = this.___value;
      }
    }

    vElementByDOMNode.set(el, this);

    return el;
  },

  ___hasAttribute: function (name) {
    // We don't care about the namespaces since the there
    // is no chance that attributes with the same name will have
    // different namespaces
    var value = this.___attributes[name];
    return value != null && value !== false;
  }
};

inherit(VElement, VNode);

var proto = (VElementClone.prototype = VElement.prototype);

["checked", "selected", "disabled"].forEach(function (name) {
  defineProperty(proto, name, {
    get: function () {
      var value = this.___attributes[name];
      return value !== false && value != null;
    }
  });
});

defineProperty(proto, "___value", {
  get: function () {
    var value = this.___valueInternal;
    if (value == null) {
      value = this.___attributes.value;
    }
    return value != null && value !== false
      ? value + ""
      : this.___attributes.type === "checkbox" ||
        this.___attributes.type === "radio"
      ? "on"
      : "";
  }
});

VElement.___removePreservedAttributes = function (attrs) {
  // By default this static method is a no-op, but if there are any
  // compiled components that have "no-update" attributes then
  // `preserve-attrs.js` will be imported and this method will be replaced
  // with a method that actually does something
  return attrs;
};

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
    props
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
  var removePreservedAttributes = VElement.___removePreservedAttributes;

  var fromFlags = vFromEl.___flags;
  var toFlags = toEl.___flags;

  vElementByDOMNode.set(fromEl, toEl);

  var attrs = toEl.___attributes;
  var props = toEl.___properties;

  if (toFlags & FLAG_CUSTOM_ELEMENT) {
    return assign(fromEl, attrs);
  }

  var attrName;

  // We use expando properties to associate the previous HTML
  // attributes provided as part of the VDOM node with the
  // real VElement DOM node. When diffing attributes,
  // we only use our internal representation of the attributes.
  // When diffing for the first time it's possible that the
  // real VElement node will not have the expando property
  // so we build the attribute map from the expando property

  var oldAttrs = vFromEl.___attributes;

  if (oldAttrs) {
    if (oldAttrs === attrs) {
      // For constant attributes the same object will be provided
      // every render and we can use that to our advantage to
      // not waste time diffing a constant, immutable attribute
      // map.
      return;
    } else {
      oldAttrs = removePreservedAttributes(oldAttrs, props);
    }
  }

  var attrValue;

  if (toFlags & FLAG_SIMPLE_ATTRS && fromFlags & FLAG_SIMPLE_ATTRS) {
    if (oldAttrs["class"] !== (attrValue = attrs["class"])) {
      fromEl.className = attrValue;
    }
    if (oldAttrs.id !== (attrValue = attrs.id)) {
      fromEl.id = attrValue;
    }
    if (oldAttrs.style !== (attrValue = attrs.style)) {
      fromEl.style.cssText = attrValue;
    }
    return;
  }

  // In some cases we only want to set an attribute value for the first
  // render or we don't want certain attributes to be touched. To support
  // that use case we delete out all of the preserved attributes
  // so it's as if they never existed.
  attrs = removePreservedAttributes(attrs, props, true);

  var namespaceURI;

  // Loop over all of the attributes in the attribute map and compare
  // them to the value in the old map. However, if the value is
  // null/undefined/false then we want to remove the attribute
  for (attrName in attrs) {
    attrValue = attrs[attrName];
    namespaceURI = null;

    if (attrName === ATTR_XLINK_HREF) {
      namespaceURI = NS_XLINK;
      attrName = ATTR_HREF;
    }

    if (attrValue == null || attrValue === false) {
      removeAttribute(fromEl, namespaceURI, attrName);
    } else if (oldAttrs[attrName] !== attrValue) {
      var type = typeof attrValue;

      if (type !== "string") {
        attrValue = convertAttrValue(type, attrValue);
      }

      setAttribute(fromEl, namespaceURI, attrName, attrValue);
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
        if (attrName === ATTR_XLINK_HREF) {
          fromEl.removeAttributeNS(ATTR_XLINK_HREF, ATTR_HREF);
        } else {
          fromEl.removeAttribute(attrName);
        }
      }
    }
  }
};

module.exports = VElement;
