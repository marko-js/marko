"use strict";

var assert = require("assert");
var raptorRegexp = require("raptor-regexp");
var propertyHandlers = require("property-handlers");
var types = require("./types");
var createError = require("raptor-util/createError");

class AttrLoader {
    constructor(attr, dependencyChain) {
        assert.ok(attr, '"attr" is required');
        assert.ok(dependencyChain, '"dependencyChain" is required');

        this.attr = attr;
        this.dependencyChain = dependencyChain;
    }

    load(attrProps) {
        assert.ok(arguments.length === 1);

        if (attrProps == null) {
            attrProps = {};
        } else if (typeof attrProps === "string") {
            attrProps = {
                type: attrProps
            };
        } else {
            assert.ok(typeof attrProps === "object", 'Invalid "attrProps"');
        }

        propertyHandlers(attrProps, this, this.dependencyChain.toString());
    }

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
    type(value) {
        var attr = this.attr;
        if (value.charAt(0) === "#") {
            attr.ref = value.substring(1);
        } else {
            attr.type = value;
        }
    }

    /**
     * The name of the target property to use when mapping
     * the attribute to a property on the target object.
     */
    targetProperty(value) {
        var attr = this.attr;
        attr.targetProperty = value;
    }
    /**
     * The "default-value" property allows a default value
     * to be provided when the attribute is not declared
     * on the custom tag.
     */
    defaultValue(value) {
        var attr = this.attr;
        attr.defaultValue = value;
    }
    /**
     * The "pattern" property allows the attribute
     * to be matched based on a simplified regular expression.
     *
     * Example:
     *
     * "pattern": "myprefix-*"
     */
    pattern(value) {
        var attr = this.attr;
        if (value === true) {
            var patternRegExp = raptorRegexp.simple(attr.name);
            attr.pattern = patternRegExp;
        }
    }

    /**
     * If "allow-expressions" is set to true (the default) then
     * the the attribute value will be parsed to find any dynamic
     * parts.
     */
    allowExpressions(value) {
        var attr = this.attr;
        attr.allowExpressions = value;
    }

    /**
     * By default, the Marko compiler maps an attribute
     * to a property by removing all dashes from the attribute
     * name and converting each character after a dash to
     * an uppercase character (e.g. "my-attr" --> "myAttr").
     *
     * Setting "preserve-name" to true will prevent this from
     * happening for the attribute.
     */
    preserveName(value) {
        var attr = this.attr;
        attr.preserveName = value;
    }
    /**
     * Declares an attribute as required. Currently, this is
     * not enforced and is only used for documentation purposes.
     *
     * Example:
     * "required": true
     */
    required(value) {
        var attr = this.attr;
        attr.required = value === true;
    }
    /**
     * This is the opposite of "preserve-name" and will result
     * in dashes being removed from the attribute if set to true.
     */
    removeDashes(value) {
        var attr = this.attr;
        attr.removeDashes = value === true;
    }
    /**
     * The description of the attribute. Only used for documentation.
     */
    description() {}

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
    setFlag(value) {
        var attr = this.attr;
        attr.setFlag = value;
    }

    /**
     * The "set-context-flag" property allows a "flag" to be added to the CompilerContext instance
     * at compile time if the attribute is found on the node. This is helpful
     * if an attribute uses a pattern and a transformer wants to have a simple
     * check to see if any Node in the template has an attribute that matched the pattern.
     *
     * Example:
     *
     * "set-context-flag": "myCustomFlag"
     *
     * A Node instance can be checked if it has a flag set as shown below:
     *
     * if (context.isFlagSet('myCustomFlag')) { ... }
     *
     *
     */
    setContextFlag(value) {
        var attr = this.attr;
        attr.setContextFlag = value;
    }

    /**
     * An attribute can be marked for ignore. Ignored attributes
     * will be ignored during compilation.
     */
    ignore(value) {
        var attr = this.attr;
        if (value === true) {
            attr.ignore = true;
        }
    }

    autocomplete(value) {
        this.attr.autocomplete = value;
    }

    enum(value) {
        this.attr.enum = value;
    }

    deprecated(value) {
        this.attr.deprecated = value;
    }

    name(value) {
        this.attr.name = value;
    }

    html(value) {
        this.attr.html = value === true;
    }
}

function loadAttributeFromProps(attrName, attrProps, dependencyChain) {
    assert.ok(typeof attrName === "string");
    assert.ok(dependencyChain, '"dependencyChain" is required');

    var attr = new types.Attribute(attrName);

    var attrLoader = new AttrLoader(attr, dependencyChain);

    try {
        attrLoader.load(attrProps);
    } catch (err) {
        throw createError(
            'Unable to load attribute "' +
                attrName +
                '" (' +
                dependencyChain +
                "): " +
                err,
            err
        );
    }

    return attr;
}

loadAttributeFromProps.isSupportedProperty = function(name) {
    return AttrLoader.prototype.hasOwnProperty(name);
};

module.exports = loadAttributeFromProps;
