var util = require('./util');

var EMPTY_ARRAY = util.EMPTY_ARRAY;
var EMPTY_OBJECT = util.EMPTY_OBJECT;

function Attr(namespaceURI, name, value) {
    this.namespaceURI = namespaceURI;
    this.name = name;
    this.value = value;
}

function AttributeCollection(finalAttrCount) {
    var id;
    var attributesArray;
    var attributesLookup;

    if (finalAttrCount === 0) {
        attributesArray = EMPTY_ARRAY;
        attributesLookup = EMPTY_OBJECT;
    } else {
        attributesArray = finalAttrCount ? new Array(finalAttrCount) : [];
        attributesLookup = {};
    }

    this.id = id;
    this.attributes = attributesArray;
    this._attrLookup = attributesLookup;
    this._finalAttrCount = finalAttrCount;
    this._attrCount = 0;
}

AttributeCollection.prototype = {
    a: function(attrName, attrValue) {
        var attrNamespaceURI;
        var attr;

        if (attrName === 'id') {
            this.id = attrValue;
        } else if (attrName === 'xmlns') {
            attrNamespaceURI = 'http://www.w3.org/2000/xmlns/';
        } else if (attrName === 'xlink:href') {
            attrNamespaceURI = 'http://www.w3.org/1999/xlink';
        }

        if (typeof attrValue === 'string') {
            attr = new Attr(attrNamespaceURI, attrName, attrValue);
        } else if (attrValue === true) {
            attr = new Attr(attrNamespaceURI, attrName, (attrValue = ''));
        } else if (this._finalAttrCount) {
            this.attributes.length = --this._finalAttrCount;
        }

        if (attr) {
            this.attributes[this._attrCount++] = attr;
            this._attrLookup[attrName] = attrValue;
        }

        return this._attrCount === this._finalAttrCount ?
            this._finishChild() :
            this;
    },

    as: function(attributeCollection) {
        if (attributeCollection) {
            if (attributeCollection instanceof AttributeCollection) {
                this.attributes = attributeCollection.attributes;
                this._attrLookup = attributeCollection._attrLookup;
                this.id = attributeCollection.id;
            } else {
                for (var name in attributeCollection) {
                    if (attributeCollection.hasOwnProperty(name)) {
                        var value = attributeCollection[name];
                        this.a(name, value);
                    }
                }
            }
        }

        return this._finishChild();
    },

    _finishChild: function() {
        return this;
    }
};

module.exports = AttributeCollection;