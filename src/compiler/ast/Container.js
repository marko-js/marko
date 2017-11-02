'use strict';

class Container {
    constructor(node) {
        this.node = node;
    }

    toJSON() {
        return this.items;
    }
}

Container.prototype.Container = true;

module.exports = Container;
