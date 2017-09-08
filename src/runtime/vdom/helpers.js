'use strict';

var vdom = require('./vdom');
var VElement = vdom.___VElement;
var VText = vdom.___VText;

var commonHelpers = require('../helpers');
var extend = require('raptor-util/extend');

var classList = commonHelpers.cl;

var helpers = extend({
    e: function(tagName, attrs, key, component, childCount, flags, props) {
        return new VElement(tagName, attrs, key, component, childCount, flags, props);
    },

    t: function(value) {
        return new VText(value);
    },

    const: function(id) {
        var i=0;
        return function() {
            return id + (i++);
        };
    },

    /**
     * Internal helper method to handle the "class" attribute. The value can either
     * be a string, an array or an object. For example:
     *
     * ca('foo bar') ==> ' class="foo bar"'
     * ca({foo: true, bar: false, baz: true}) ==> ' class="foo baz"'
     * ca(['foo', 'bar']) ==> ' class="foo bar"'
     */
    ca: function(classNames) {
        if (!classNames) {
            return null;
        }

        if (typeof classNames === 'string') {
            return classNames;
        } else {
            return classList(classNames);
        }
    }
}, commonHelpers);

module.exports = helpers;
