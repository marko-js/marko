'use strict';
var Container = require('./Container');
var ArrayContainer = require('./ArrayContainer');
var ok = require('assert').ok;
var extend = require('raptor-util/extend');
var inspect = require('util').inspect;

class Node {
    constructor(type) {
        this.type = type;
        this.statement = false;
        this.container = null;
        this.pos = null; // The character index of the node in the original source file
        this._codeGeneratorFuncs = null;
        this._flags = {};
        this._transformersApplied = {};
        this.data = {};
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
        return this._transformersApplied[transformer.id] === true;
    }

    setTransformerApplied(transformer) {
        this._transformersApplied[transformer.id] = true;
    }

    toString() {
        return inspect(this);
    }

    toJSON() {
        let result = extend({}, this);
        delete result.container;
        delete result.statement;
        delete result.pos;
        delete result._transformersApplied;
        delete result._codeGeneratorFuncs;
        delete result._flags;
        delete result.data;
        return result;
    }

    detach() {
        this.container.removeChild(this);
    }

    isDetached() {
        return this.container == null;
    }

    /**
     * Used by the Node.js require('util').inspect function.
     * We default to inspecting on the simplified version
     * of this node that is the same version we use when
     * serializing to JSON.
     */
    inspect(depth, opts) {
        // We inspect in the simplified version of this object t
        return this.toJSON();
    }

    setType(newType) {
        this.type = newType;
    }

    setCodeGenerator(mode, codeGeneratorFunc) {
        if (arguments.length === 1) {
            codeGeneratorFunc = arguments[0];
            mode = null;
        }

        if (!this._codeGeneratorFuncs) {
            this._codeGeneratorFuncs = {};
        }
        this._codeGeneratorFuncs[mode || 'DEFAULT'] = codeGeneratorFunc;
    }

    getCodeGenerator(mode) {
        if (this._codeGeneratorFuncs) {
            return this._codeGeneratorFuncs[mode] || this._codeGeneratorFuncs.DEFAULT;
        } else {
            return undefined;
        }
    }

    setFlag(name) {
        this._flags[name] = true;
    }

    clearFlag(name) {
        delete this._flags[name];
    }

    isFlagSet(name) {
        return this._flags.hasOwnProperty(name);
    }

    get parentNode() {
        return this.container && this.container.node;
    }
}

module.exports = Node;