'use strict';

var HTMLElement = require('./HTMLElement');
var Text = require('./Text');
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
 * Helper for generating the string for a style attribute
 * @param  {[type]} style [description]
 * @return {[type]}       [description]
 */
exports.sa = function(style) {
    if (!style) {
        return null;
    }

    if (typeof style === 'string') {
        return style;
    } else if (typeof style === 'object') {
        var parts = [];
        for (var name in style) {
            if (style.hasOwnProperty(name)) {
                var value = style[name];
                if (value) {
                    parts.push(name + ':' + value);
                }
            }
        }
        return parts ? parts.join(';') : null;
    } else {
        return null;
    }
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

exports.inline = require('./')._inline;

extend(exports, commonHelpers);