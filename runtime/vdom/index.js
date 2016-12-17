'use strict';
// helpers provide a core set of various utility methods
// that are available in every template
var AsyncVDOMBuilder = require('./AsyncVDOMBuilder');
var makeRenderable = require('../renderable');

/**
 * Method is for internal usage only. This method
 * is invoked by code in a compiled Marko template and
 * it is used to create a new Template instance.
 * @private
 */
exports.t = function createTemplate(path) {
     return new Template(path);
};

function Template(path, func) {
    this.path = path;
    this._ = func;
    this.meta = undefined;
}

function createOut(globalData, parent, state) {
    return new AsyncVDOMBuilder(globalData, parent, state);
}

Template.prototype = {
    createOut: createOut
};

makeRenderable(Template.prototype);

exports._inline = function(filename, renderFunc) {
    return new Template(filename, renderFunc);
};

exports.Template = Template;
exports.createOut = createOut;
exports.helpers = require('./helpers');

require('../').$__setRuntime(exports);
