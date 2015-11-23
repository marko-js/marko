'use strict';
var isArray = Array.isArray;
var Container = require('./ast/Container');

class Walker {
    constructor(options) {
        this._visit = options.visit;
        this.transform = options.transform !== false;
    }

    walk(node) {
        if (node == null) {
            return;
        }

        if (isArray(node)) {
            let nodes = node;
            let len = nodes.length;

            for (var i=0; i<len; i++) {
                this.walk(nodes[i]);
            }
        } else if (node instanceof Container) {
            let container = node;
            if (this.transform) {
                container.safeForEach(this.walk, this);
            } else {
                container.forEach(this.walk, this);
            }

        } else {
            this._visit(node);

            if (node.walkChildren) {
                node.walkChildren(this);
            } else if (node.forEachChild) {
                node.forEachChild(this.walk, this);
            }
        }
    }
}

module.exports = Walker;

