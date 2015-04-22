var assert = require('assert');
var raptorRegexp = require('raptor-regexp');
var propertyHandlers = require('property-handlers');
var Taglib = require('../Taglib');

function AttrHandlers(attr){
    assert.ok(attr);
    assert.equal(typeof attr, 'object');
    this.attr = attr;
}

AttrHandlers.prototype = {
    type: function(value) {
        var attr = this.attr;
        attr.type = value;
    },
    targetProperty: function(value) {
        var attr = this.attr;
        attr.targetProperty = value;
    },
    defaultValue: function(value) {
        var attr = this.attr;
        attr.defaultValue = value;
    },
    pattern: function(value) {
        var attr = this.attr;
        if (value === true) {
            var patternRegExp = raptorRegexp.simple(attr.name);
            attr.pattern = patternRegExp;
        }
    },
    allowExpressions: function(value) {
        var attr = this.attr;
        attr.allowExpressions = value;
    },
    preserveName: function(value) {
        var attr = this.attr;
        attr.preserveName = value;
    },
    required: function(value) {
        var attr = this.attr;
        attr.required = value === true;
    },
    removeDashes: function(value) {
        var attr = this.attr;
        attr.removeDashes = value === true;
    },
    description: function() {

    },
    setFlag: function(value) {
        var attr = this.attr;
        attr.setFlag = value;
    },
    ignore: function(value) {
        var attr = this.attr;
        if (value === true) {
            attr.ignore = true;
        }
    }
};

exports.isSupportedProperty = function(name) {
    return AttrHandlers.prototype.hasOwnProperty(name);
};

exports.loadAttribute = function loadAttribute(attrName, attrProps, path) {
    var attr = new Taglib.Attribute(attrName);

    if (attrProps == null) {
        attrProps = {
            type: 'string'
        };
    } else if (typeof attrProps === 'string') {
        attrProps = {
            type: attrProps
        };
    }

    var attrHandlers = new AttrHandlers(attr);
    propertyHandlers(attrProps, attrHandlers, path);
    return attr;
};