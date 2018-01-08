'use strict';
var Literal = require('../../ast/Literal');
var Node = require('../../ast/Node');

function isStaticArray(array) {
    for (let i=0; i<array.length; i++) {
        if (!isStaticValue(array[i])) {
            return false;
        }
    }

    return true;
}

function isStaticObject(object) {
    for (var k in object) {
        if (object.hasOwnProperty(k)) {
            let v = object[k];
            if (!isStaticValue(v)) {
                return false;
            }
        }
    }
}

function isStaticValue(value) {
    if (value == null) {
        return true;
    }

    if (value instanceof Node) {
         if (value instanceof Literal) {
             return isStaticValue(value.value);
         } else {
             return false;
         }
    } else {
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                return isStaticArray(value);
            } else {
                return isStaticObject(value);
            }
        } else {
            return true;
        }
    }
}

module.exports = isStaticValue;