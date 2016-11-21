require('raptor-polyfill/string/startsWith');
var inherit = require('raptor-util/inherit');
var extend = require('raptor-util/extend');
var Text = require('./Text');
var Comment = require('./Comment');
var Node = require('./Node');
var documentProvider = require('../document-provider');
var virtualizeHTML;

var NS_XLINK = 'http://www.w3.org/1999/xlink';
var ATTR_HREF = 'href';
var EMPTY_OBJECT = require('./util').EMPTY_OBJECT;
var ATTR_MARKO_CONST = 'data-marko-const';

function removePreservedAttributes(attrs) {
    var preservedAttrs = attrs['data-preserve-attrs'];
    if (preservedAttrs) {
        preservedAttrs = preservedAttrs.split(/\s*[,]\s*/);

        for (var i=0, len=preservedAttrs.length; i<len; i++) {
            var preservedAttrName = preservedAttrs[i];
            delete attrs[preservedAttrName];
        }
    }
    return attrs;
}

function convertAttrValue(type, value) {
    if (value === true) {
        return '';
    } else if (type === 'object') {
        return JSON.stringify(value);
    } else {
        return value.toString();
    }
}

function HTMLElementClone(other) {
    extend(this, other);
    this.parentNode = undefined;
    this._nextSibling = undefined;
}

function HTMLElement(tagName, attrs, childCount, constId) {
    var namespaceURI;
    var isTextArea;

    switch(tagName) {
        case 'svg':
            namespaceURI = 'http://www.w3.org/2000/svg';
            break;
        case 'math':
            namespaceURI = 'http://www.w3.org/1998/Math/MathML';
            break;
        case 'textarea':
        case 'TEXTAREA':
            isTextArea = true;
            break;
    }

    Node.call(this, childCount);

    if (constId) {
        if (!attrs) {
            attrs = {};
        }
        attrs[ATTR_MARKO_CONST] = constId;
    }

    this.attributes = attrs || EMPTY_OBJECT;
    this._isTextArea = isTextArea;
    this.namespaceURI = namespaceURI;
    this.nodeName = tagName;
    this._value = undefined;
    this._constId = constId;
}

HTMLElement.prototype = {
    nodeType: 1,

    _nsAware: true,

    assignAttributes: function(targetNode) {
        var attrs = this.attributes;
        var attrName;
        var i;

        // We use expando properties to associate the previous HTML
        // attributes provided as part of the VDOM node with the
        // real HTMLElement DOM node. When diffing attributes,
        // we only use our internal representation of the attributes.
        // When diffing for the first time it's possible that the
        // real HTMLElement node will not have the expando property
        // so we build the attribute map from the expando property

        var oldAttrs = targetNode._vattrs;
        if (oldAttrs) {
            if (oldAttrs === attrs) {
                // For constant attributes the same object will be provided
                // every render and we can use that to our advantage to
                // not waste time diffing a constant, immutable attribute
                // map.
                return;
            } else {
                oldAttrs = removePreservedAttributes(extend({}, oldAttrs));
            }
        } else {
            // We need to build the attribute map from the real attributes
            oldAttrs = {};

            var oldAttributesList = targetNode.attributes;
            for (i = oldAttributesList.length - 1; i >= 0; --i) {
                var attr = oldAttributesList[i];

                if (attr.specified !== false) {
                    attrName = attr.name;
                    var attrNamespaceURI = attr.namespaceURI;
                    if (attrNamespaceURI === NS_XLINK) {
                        oldAttrs['xlink:href'] = attr.value;
                    } else {
                        oldAttrs[attrName] = attr.value;
                    }
                }
            }

            // We don't want preserved attributes to show up in either the old
            // or new attribute map.
            removePreservedAttributes(oldAttrs);
        }

        // In some cases we only want to set an attribute value for the first
        // render or we don't want certain attributes to be touched. To support
        // that use case we delete out all of the preserved attributes
        // so it's as if they never existed.
        var preservedAttrs = attrs['data-preserve-attrs'];
        if (preservedAttrs) {
            attrs = removePreservedAttributes(extend({}, attrs));
        }

        // Loop over all of the attributes in the attribute map and compare
        // them to the value in the old map. However, if the value is
        // null/undefined/false then we want to remove the attribute
        for (attrName in attrs) {
            var attrValue = attrs[attrName];

            if (attrName === 'xlink:href') {
                if (attrValue == null || attrValue === false) {
                    targetNode.removeAttributeNS(NS_XLINK, ATTR_HREF);
                } else if (oldAttrs[attrName] !== attrValue) {
                    targetNode.setAttributeNS(NS_XLINK, ATTR_HREF, attrValue);
                }
            } else {
                if (attrValue == null || attrValue === false) {
                    targetNode.removeAttribute(attrName);
                } else if (oldAttrs[attrName] !== attrValue) {

                    if (attrName.startsWith('data-_')) {
                        // Special attributes aren't copied to the real DOM. They are only
                        // kept in the virtual attributes map
                        continue;
                    }

                    var type = typeof attrValue;

                    if (type !== 'string') {
                        attrValue = convertAttrValue(type, attrValue);
                    }

                    targetNode.setAttribute(attrName, attrValue);
                }
            }
        }

        // If there are any old attributes that are not in the new set of attributes
        // then we need to remove those attributes from the target node
        for (attrName in oldAttrs) {
            if (attrs.hasOwnProperty(attrName) === false) {
                if (attrName === 'xlink:href') {
                    targetNode.removeAttributeNS(NS_XLINK, ATTR_HREF);
                } else {
                    targetNode.removeAttribute(attrName);
                }
            }
        }

        targetNode._vattrs = attrs;
    },

    cloneNode: function() {
        return new HTMLElementClone(this);
    },

    /**
     * Shorthand method for creating and appending an HTML element
     *
     * @param  {String} tagName    The tag name (e.g. "div")
     * @param  {int|null} attrCount  The number of attributes (or `null` if not known)
     * @param  {int|null} childCount The number of child nodes (or `null` if not known)
     */
    e: function(tagName, attrs, childCount, constId) {
        var child = this.appendChild(new HTMLElement(tagName, attrs, childCount, constId));

        if (childCount === 0) {
            return this._finishChild();
        } else {
            return child;
        }
    },

    /**
     * Shorthand method for creating and appending a Text node with a given value
     * @param  {String} value The text value for the new Text node
     */
    t: function(value) {
        var type = typeof value;

        if (type !== 'string') {
            if (value == null) {
                value = '';
            } else if (type === 'object') {
                var safeHTML = value.safeHTML;
                var vdomNode = virtualizeHTML(safeHTML || '', documentProvider.document);
                this.appendChild(vdomNode);
                return this._finishChild();
            } else {
                value = value.toString();
            }
        }
        this.appendChild(new Text(value));
        return this._finishChild();
    },

    /**
     * Shorthand method for creating and appending a Comment node with a given value
     * @param  {String} value The value for the new Comment node
     */
    c: function(value) {
        this.appendChild(new Comment(value));
        return this._finishChild();
    },

    /**
     * Shorthand method for creating and appending a static node. The provided node is automatically cloned
     * using a shallow clone since it will be mutated as a result of setting `nextSibling` and `parentNode`.
     *
     * @param  {String} value The value for the new Comment node
     */
    n: function(node) {
        this.appendChild(node.cloneNode());
        return this._finishChild();
    },

    actualize: function(document) {
        var el;
        var namespaceURI = this.namespaceURI;
        var tagName = this.nodeName;

        if (namespaceURI) {
            el = document.createElementNS(namespaceURI, tagName);
        } else {
            el = document.createElement(tagName);
        }

        var attributes = this.attributes;
        for (var attrName in attributes) {
            var attrValue = attributes[attrName];

            if (attrName.startsWith('data-_')) {
                continue;
            }

            if (attrValue !== false && attrValue != null) {
                var type = typeof attrValue;

                if (type !== 'string') {
                    // Special attributes aren't copied to the real DOM. They are only
                    // kept in the virtual attributes map
                    attrValue = convertAttrValue(type, attrValue);
                }

                if (attrName === 'xlink:href') {
                    el.setAttributeNS(NS_XLINK, ATTR_HREF, attrValue);
                } else {
                    el.setAttribute(attrName, attrValue);
                }
            }
        }

        if (this._isTextArea) {
            el.value = this.value;
        } else {
            var curChild = this.firstChild;

            while(curChild) {
                el.appendChild(curChild.actualize(document));
                curChild = curChild.nextSibling;
            }
        }

        el._vattrs = attributes;

        return el;
    },

    hasAttributeNS: function(namespaceURI, name) {
        // We don't care about the namespaces since the there
        // is no chance that attributes with the same name will have
        // different namespaces
        return this.attributes[name] !== undefined;
    },

    getAttribute: function(name) {
        return this.attributes[name];
    },

    isSameNode: function(otherNode) {
        if (otherNode.nodeType !== 1) {
            return false;
        }

        var constId = this._constId;
        if (constId) {
            var otherSameId = otherNode.actualize ? otherNode._constId : otherNode.getAttribute(ATTR_MARKO_CONST);
            return constId === otherSameId;
        } else {
            return false;
        }
    }
};

inherit(HTMLElement, Node);

var proto = HTMLElementClone.prototype = HTMLElement.prototype;

Object.defineProperty(proto, 'checked', {
    get: function () {
        return this.attributes.checked !== undefined;
    }
});

Object.defineProperty(proto, 'selected', {
    get: function () {
        return this.attributes.selected !== undefined;
    }
});

Object.defineProperty(proto, 'id', {
    get: function () {
        return this.attributes.id;
    }
});

Object.defineProperty(proto, 'value', {
    get: function () {
        return this._value || this.attributes.value;
    },
    set: function (value) {
        this._value = value;
    }
});

Object.defineProperty(proto, 'disabled', {
    get: function () {
        return this.attributes.disabled !== undefined;
    }
});

module.exports = HTMLElement;

virtualizeHTML = require('./virtualizeHTML');