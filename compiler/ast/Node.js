'use strict';
var Container = require('./Container');
var ArrayContainer = require('./ArrayContainer');
var ok = require('assert').ok;
var extend = require('raptor-util/extend');

class Node {
    constructor(type) {
        this.type = type;
        this.statement = false;
        this.container = null;
        this.pos = null;
        this.transformersApplied = {};
    }

    wrap(wrapperNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        var replaced = this.container.replaceChild(wrapperNode, this);
        ok(replaced, 'Invalid state. Child does not belong to the container');
        wrapperNode.appendChild(this);
    }

    makeContainer(array) {
        if (array instanceof Container) {
            return array;
        }

        return new ArrayContainer(this, array);
    }

    appendChild(node) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        this.body.appendChild(node);
    }

    forEachChild(callback, thisObj) {
        if (this.body) {
            this.body.forEach(callback, thisObj);
        }
    }

    forEachNextSibling(callback, thisObj) {
        var container = this.container;

        if (container) {
            container.forEachNextSibling(this, callback, thisObj);
        }
    }

    isTransformerApplied(transformer) {
        return this.transformersApplied[transformer.id] === true;
    }

    setTransformerApplied(transformer) {
        this.transformersApplied[transformer.id] = true;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }

    toJSON() {
        let result = extend({}, this);
        delete result.container;
        delete result.statement;
        delete result.pos;
        delete result.transformersApplied;
        return result;
    }

    detach() {
        this.container.removeChild(this);
    }

    isDetached() {
        return this.container == null;
    }
}

module.exports = Node;