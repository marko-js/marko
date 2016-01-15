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
        this.tagDef = null; // The tag definition associated with this Node
        this._codeGeneratorFuncs = null;
        this._flags = {};
        this._transformersApplied = {};
        this._preserveWhitespace = null;
        this.data = {};
    }

    wrap(wrapperNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        var replaced = this.container.replaceChild(wrapperNode, this);
        ok(replaced, 'Invalid state. Child does not belong to the container');
        wrapperNode.appendChild(this);
    }

    /**
     * Converts the provided `array` into a `ArrayContainer`. If the provided `array` is already an instance of a `Container` then it is simply returned.
     * @param  {[type]} array [description]
     * @return {[type]}       [description]
     */
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
        delete result.tagDef;
        delete result._preserveWhitespace;
        return result;
    }

    detach() {
        if (this.container) {
            this.container.removeChild(this);
        }
    }

    /**
     * Returns true if the current node represents a compound expression (e.g. )
     * @return {Boolean} [description]
     */
    isCompoundExpression() {
        return false;
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

    get bodyText() {
        var bodyText = '';

        this.forEachChild((child) => {
            if (child.type === 'Text') {
                var childText = child.argument;
                if (childText && childText.type === 'Literal') {
                    bodyText += childText.value;
                }
            }
        });

        return bodyText;
    }

    get parentNode() {
        return this.container && this.container.node;
    }

    setPreserveWhitespace(isPreserved) {
        this._preserveWhitespace = isPreserved;
    }

    isPreserveWhitespace() {
        var preserveWhitespace = this._preserveWhitespace;
        if (preserveWhitespace == null) {
            preserveWhitespace = this.tagDef && this.tagDef.preserveWhitespace;
        }

        return preserveWhitespace === true;
    }
}

module.exports = Node;