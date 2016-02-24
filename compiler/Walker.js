'use strict';
var isArray = Array.isArray;
var Container = require('./ast/Container');

function noop() {}

class Walker {
    constructor(options) {
        this._enter = options.enter || noop;
        this._exit = options.exit || noop;
        this._stopped = false;
        this._reset();
        this._stack = [];
    }

    _reset() {
        this._skipped = false;
        this._replaced = undefined;
        this._removed = false;
    }

    skip() {
        this._skipped = true;
    }

    stop() {
        this._stopped = true;
    }

    replace(newNode) {
        this._replaced = newNode;
    }

    remove() {
        this._removed = true;
    }

    _walkArray(array) {
        var hasRemoval = false;

        array.forEach((node, i) => {
            var transformed = this.walk(node);
            if (transformed == null) {
                array[i] = null;
                hasRemoval = true;
            } else if (transformed !== node) {
                array[i] = transformed;
            }
        });

        if (hasRemoval) {
            for (let i=array.length-1; i>=0; i--) {
                if (array[i] == null) {
                    array.splice(i, 1);
                }
            }
        }

        return array;
    }

    _walkContainer(nodes) {
        nodes.forEach((node) => {
            var transformed = this.walk(node);
            if (!transformed) {
                node.container.removeChild(node);
            } else if (transformed !== node) {
                node.container.replaceChild(transformed, node);
            }
        });
    }

    walk(node) {
        if (!node || this._stopped || typeof node === 'string') {
            return node;
        }

        this._reset();

        var parent = this._stack.length ? this._stack[this._stack.length - 1] : undefined;

        this._stack.push(node);

        var replaced = this._enter(node, parent);
        if (replaced === undefined) {
            replaced = this._replaced;
        }

        if (this._removed) {
            replaced = null;
        }

        if (replaced !== undefined) {
            this._stack.pop();
            return replaced;
        }

        if (this._skipped || this._stopped) {
            this._stack.pop();
            return node;
        }

        if (isArray(node)) {
            let array = node;
            let newArray = this._walkArray(array);
            this._stack.pop();
            return newArray;
        } else if (node instanceof Container) {
            let container = node;
            this._walkContainer(container);
            this._stack.pop();
            return container;
        } else {
            if (node.walk) {
                node.walk(this);
            }
        }

        if (this._stopped) {
            this._stack.pop();
            return node;
        }

        this._reset();

        replaced = this._exit(node, parent);
        if (replaced === undefined) {
            replaced = this._replaced;
        }

        if (this._removed) {
            replaced = null;
        }

        if (replaced !== undefined) {
            this._stack.pop();
            return replaced;
        }

        this._stack.pop();
        return node;
    }
}

module.exports = Walker;

