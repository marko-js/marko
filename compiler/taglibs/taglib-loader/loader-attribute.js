/*
* Copyright 2011 eBay Software Foundation
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
*    http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

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
    /**
     * The attribute type. One of the following:
     * - string (the default)
     * - expression (a JavaScript expression)
     * - number
     * - integer
     * - int
     * - boolean
     * - float
     * - double
     * - object
     * - array
     *
     */
    type: function(value) {
        var attr = this.attr;
        attr.type = value;
    },

    /**
     * The name of the target property to use when mapping
     * the attribute to a property on the target object.
     */
    targetProperty: function(value) {
        var attr = this.attr;
        attr.targetProperty = value;
    },
    /**
     * The "default-value" property allows a default value
     * to be provided when the attribute is not declared
     * on the custom tag.
     */
    defaultValue: function(value) {
        var attr = this.attr;
        attr.defaultValue = value;
    },
    /**
     * The "pattern" property allows the attribute
     * to be matched based on a simplified regular expression.
     *
     * Example:
     *
     * "pattern": "myprefix-*"
     */
    pattern: function(value) {
        var attr = this.attr;
        if (value === true) {
            var patternRegExp = raptorRegexp.simple(attr.name);
            attr.pattern = patternRegExp;
        }
    },

    /**
     * If "allow-expressions" is set to true (the default) then
     * the the attribute value will be parsed to find any dynamic
     * parts.
     */
    allowExpressions: function(value) {
        var attr = this.attr;
        attr.allowExpressions = value;
    },

    /**
     * By default, the Marko compiler maps an attribute
     * to a property by removing all dashes from the attribute
     * name and converting each character after a dash to
     * an uppercase character (e.g. "my-attr" --> "myAttr").
     *
     * Setting "preserve-name" to true will prevent this from
     * happening for the attribute.
     */
    preserveName: function(value) {
        var attr = this.attr;
        attr.preserveName = value;
    },
    /**
     * Declares an attribute as required. Currently, this is
     * not enforced and is only used for documentation purposes.
     *
     * Example:
     * "required": true
     */
    required: function(value) {
        var attr = this.attr;
        attr.required = value === true;
    },
    /**
     * This is the opposite of "preserve-name" and will result
     * in dashes being removed from the attribute if set to true.
     */
    removeDashes: function(value) {
        var attr = this.attr;
        attr.removeDashes = value === true;
    },
    /**
     * The description of the attribute. Only used for documentation.
     */
    description: function() {

    },

    /**
     * The "set-flag" property allows a "flag" to be added to a Node instance
     * at compile time if the attribute is found on the node. This is helpful
     * if an attribute uses a pattern and a transformer wants to have a simple
     * check to see if the Node has an attribute that matched the pattern.
     *
     * Example:
     *
     * "set-flag": "myCustomFlag"
     *
     * A Node instance can be checked if it has a flag set as shown below:
     *
     * if (node.hasFlag('myCustomFlag')) { ... }
     *
     *
     */
    setFlag: function(value) {
        var attr = this.attr;
        attr.setFlag = value;
    },
    /**
     * An attribute can be marked for ignore. Ignored attributes
     * will be ignored during compilation.
     */
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