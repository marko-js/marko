var VNode = require('./VNode');
var inherit = require('raptor-util/inherit');
var extend = require('raptor-util/extend');

var NS_XLINK = 'http://www.w3.org/1999/xlink';
var ATTR_XLINK_HREF = 'xlink:href';
var toString = String;

var FLAG_IS_SVG = 1;
var FLAG_IS_TEXTAREA = 2;
var FLAG_SIMPLE_ATTRS = 4;

var defineProperty = Object.defineProperty;


var ATTR_HREF = 'href';
var EMPTY_OBJECT = Object.freeze({});
var ATTR_MARKO_CONST = 'data-_mc';

var specialAttrRegexp = /^data-_/;


function convertAttrValue(type, value) {
    if (value === true) {
        return '';
    } else if (type == 'object') {
        return JSON.stringify(value);
    } else {
        return toString(value);
    }
}

function VElementClone(other) {
    extend(this, other);
    this.$__parentNode = null;
    this.$__nextSibling = null;
}

function VElement(tagName, attrs, childCount, flags, constId) {
    this.$__VNode(childCount);

    if (constId) {
        if (!attrs) {
            attrs = {};
        }
        attrs[ATTR_MARKO_CONST] = constId;
    }

    var namespaceURI;

    if ((this.$__flags = flags || 0)) {
        if (flags & FLAG_IS_SVG) {
            namespaceURI = 'http://www.w3.org/2000/svg';
        }
    }

    this.$__attributes = attrs || EMPTY_OBJECT;
    this.$__namespaceURI = namespaceURI;
    this.nodeName = tagName;
    this.$__value = null;
    this.$__constId = constId;
}

VElement.prototype = {
    $__VElement: true,

    nodeType: 1,

    $__cloneNode: function() {
        return new VElementClone(this);
    },

    /**
     * Shorthand method for creating and appending an HTML element
     *
     * @param  {String} tagName    The tag name (e.g. "div")
     * @param  {int|null} attrCount  The number of attributes (or `null` if not known)
     * @param  {int|null} childCount The number of child nodes (or `null` if not known)
     */
    e: function(tagName, attrs, childCount, flags, constId) {
        var child = this.$__appendChild(new VElement(tagName, attrs, childCount, flags, constId));

        if (childCount === 0) {
            return this.$__finishChild();
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
    n: function(node) {
        this.$__appendChild(node.$__cloneNode());
        return this.$__finishChild();
    },

    $__actualize: function(doc) {
        var namespaceURI = this.$__namespaceURI;
        var tagName = this.nodeName;

        var el = namespaceURI ?
            doc.createElementNS(namespaceURI, tagName) :
            doc.createElement(tagName);


        var attributes = this.$__attributes;
        for (var attrName in attributes) {
            var attrValue = attributes[attrName];

            if (attrName[5] == '_' && specialAttrRegexp.test(attrName)) {
                continue;
            }

            if (attrValue !== false && attrValue != null) {
                var type = typeof attrValue;

                if (type != 'string') {
                    // Special attributes aren't copied to the real DOM. They are only
                    // kept in the virtual attributes map
                    attrValue = convertAttrValue(type, attrValue);
                }

                namespaceURI = null;

                if (attrName == ATTR_XLINK_HREF) {
                    namespaceURI = NS_XLINK;
                    attrName = ATTR_HREF;
                }

                el.setAttributeNS(namespaceURI, attrName, attrValue);
            }
        }

        var flags = this.$__flags;

        if (flags & FLAG_IS_TEXTAREA) {
            el.value = this.$__value;
        }

        el._vattrs = attributes;
        el._vflags = flags;

        return el;
    },

    $__hasAttribute: function(name) {
        // We don't care about the namespaces since the there
        // is no chance that attributes with the same name will have
        // different namespaces
        var value = this.$__attributes[name];
        return value != null && value !== false;
    },

    $__isSameNode: function(otherNode) {
        if (otherNode.nodeType == 1) {
            var constId = this.$__constId;
            if (constId) {
                var otherVirtualAttrs;

                var otherConstId = otherNode.$__VNode ?
                    otherNode.$__constId :
                    (otherVirtualAttrs = otherNode._vattrs) && otherVirtualAttrs[ATTR_MARKO_CONST];
                return constId === otherConstId;
            }
        }

        return false;
    }
};

inherit(VElement, VNode);

var proto = VElementClone.prototype = VElement.prototype;

['checked', 'selected', 'disabled'].forEach(function(name) {
    defineProperty(proto, name, {
        get: function () {
            var value = this.$__attributes[name];
            return value !== false && value != null;
        }
    });
});

defineProperty(proto, 'id', {
    get: function () {
        return this.$__attributes.id;
    }
});

defineProperty(proto, 'value', {
    get: function () {
        var value = this.$__value;
        if (value == null) {
            value = this.$__attributes.value;
        }
        return value != null ? toString(value) : '';
    }
});

defineProperty(proto, '$__isTextArea', {
    get: function () {
        return this.$__flags & FLAG_IS_TEXTAREA;
    }
});

VElement.$__removePreservedAttributes = function(attrs) {
    // By default this static method is a no-op, but if there are any
    // compiled components that have "no-update" attributes then
    // `preserve-attrs.js` will be imported and this method will be replaced
    // with a method that actually does something
    return attrs;
};

VElement.$__morphAttrs = function(fromEl, toEl) {

    var removePreservedAttributes = VElement.$__removePreservedAttributes;

    var attrs = toEl.$__attributes || toEl._vattrs;
    var attrName;
    var i;

    // We use expando properties to associate the previous HTML
    // attributes provided as part of the VDOM node with the
    // real VElement DOM node. When diffing attributes,
    // we only use our internal representation of the attributes.
    // When diffing for the first time it's possible that the
    // real VElement node will not have the expando property
    // so we build the attribute map from the expando property

    var oldAttrs = fromEl._vattrs;
    if (oldAttrs) {
        if (oldAttrs == attrs) {
            // For constant attributes the same object will be provided
            // every render and we can use that to our advantage to
            // not waste time diffing a constant, immutable attribute
            // map.
            return;
        } else {
            oldAttrs = removePreservedAttributes(oldAttrs, true);
        }
    } else {
        // We need to build the attribute map from the real attributes
        oldAttrs = {};

        var oldAttributesList = fromEl.attributes;
        for (i = oldAttributesList.length - 1; i >= 0; --i) {
            var attr = oldAttributesList[i];

            if (attr.specified !== false) {
                attrName = attr.name;
                var attrNamespaceURI = attr.namespaceURI;
                if (attrNamespaceURI === NS_XLINK) {
                    oldAttrs[ATTR_XLINK_HREF] = attr.value;
                } else {
                    oldAttrs[attrName] = attr.value;
                }
            }
        }

        // We don't want preserved attributes to show up in either the old
        // or new attribute map.
        removePreservedAttributes(oldAttrs, false);
    }

    fromEl._vattrs = attrs;

    var attrValue;

    var flags = toEl.$__flags;
    var oldFlags;

    if (flags & FLAG_SIMPLE_ATTRS && ((oldFlags = fromEl._vflags) & FLAG_SIMPLE_ATTRS)) {
        if (oldAttrs['class'] != (attrValue = attrs['class'])) {
            fromEl.className = attrValue;
        }
        if (oldAttrs.id != (attrValue = attrs.id)) {
            fromEl.id = attrValue;
        }
        if (oldAttrs.style != (attrValue = attrs.style)) {
            fromEl.style.cssText = attrValue;
        }
        return;
    }

    // In some cases we only want to set an attribute value for the first
    // render or we don't want certain attributes to be touched. To support
    // that use case we delete out all of the preserved attributes
    // so it's as if they never existed.
    attrs = removePreservedAttributes(attrs, true);

    var namespaceURI;

    // Loop over all of the attributes in the attribute map and compare
    // them to the value in the old map. However, if the value is
    // null/undefined/false then we want to remove the attribute
    for (attrName in attrs) {
        attrValue = attrs[attrName];
        namespaceURI = null;

        if (attrName == ATTR_XLINK_HREF) {
            namespaceURI = NS_XLINK;
            attrName = ATTR_HREF;
        }

        if (attrValue == null || attrValue === false) {
            fromEl.removeAttributeNS(namespaceURI, attrName);
        } else if (oldAttrs[attrName] !== attrValue) {

            if (attrName[5] == '_' && specialAttrRegexp.test(attrName)) {
                // Special attributes aren't copied to the real DOM. They are only
                // kept in the virtual attributes map
                continue;
            }

            var type = typeof attrValue;

            if (type != 'string') {
                attrValue = convertAttrValue(type, attrValue);
            }

            fromEl.setAttributeNS(namespaceURI, attrName, attrValue);
        }
    }

    // If there are any old attributes that are not in the new set of attributes
    // then we need to remove those attributes from the target node
    for (attrName in oldAttrs) {
        if (!(attrName in attrs)) {

            if (attrName == ATTR_XLINK_HREF) {
                namespaceURI = ATTR_XLINK_HREF;
                attrName = ATTR_HREF;
            }

            fromEl.removeAttributeNS(namespaceURI, attrName);
        }
    }
};

module.exports = VElement;
