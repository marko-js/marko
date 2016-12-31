'use strict';
var AsyncStream = require('./AsyncStream');
var makeRenderable = require('../renderable');

function Template(path, renderFunc, options) {
    this.path = path;
    this._ = renderFunc;
    this.$__shouldBuffer = !options || options.shouldBuffer !== false;
    this.meta = undefined;
}

function createOut(globalData, parent, state, buffer) {
    return new AsyncStream(globalData, parent, state, buffer);
}

Template.prototype = {
    createOut: createOut,
    stream: function() {
        throw new Error('You must require("marko/stream")');
    }
};

makeRenderable(Template.prototype);

module.exports = Template;
