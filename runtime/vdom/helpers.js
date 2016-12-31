'use strict';

var vdom = require('./vdom');
var HTMLElement = vdom.$__HTMLElement;
var Text = vdom.$__Text;

var commonHelpers = require('../helpers');
var extend = require('raptor-util/extend');

var classList = commonHelpers.cl;

exports.e = function(tagName, attrs, childCount, constId) {
    return new HTMLElement(tagName, attrs, childCount, constId);
};

exports.t = function(value) {
    return new Text(value);
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