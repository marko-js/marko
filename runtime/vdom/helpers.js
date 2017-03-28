'use strict';

var vdom = require('./vdom');
var VElement = vdom.$__VElement;
var VText = vdom.$__VText;

var commonHelpers = require('../helpers');
var extend = require('raptor-util/extend');

var classList = commonHelpers.cl;

exports.e = function(tagName, attrs, childCount, flags, props) {
    return new VElement(tagName, attrs, childCount, flags, props);
};

exports.t = function(value) {
    return new VText(value);
};

exports.const = function(id) {
    var i=0;
    return function() {
        return id + (i++);
    };
};

/**
 * Internal helper method to handle the "class" attribute. The value can either
 * be a string, an array or an object. For example:
 *
 * ca('foo bar') ==> ' class="foo bar"'
 * ca({foo: true, bar: false, baz: true}) ==> ' class="foo baz"'
 * ca(['foo', 'bar']) ==> ' class="foo bar"'
 */
exports.ca = function(classNames) {
    if (!classNames) {
        return null;
    }

    if (typeof classNames === 'string') {
        return classNames;
    } else {
        return classList(classNames);
    }
};

extend(exports, commonHelpers);
