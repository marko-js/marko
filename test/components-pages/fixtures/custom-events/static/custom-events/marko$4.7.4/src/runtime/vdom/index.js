$_mod.def("/marko$4.7.4/src/runtime/vdom/index", function(require, exports, module, __filename, __dirname) { 'use strict';
require('/marko$4.7.4/src/index-browser'/*'../../'*/);

// helpers provide a core set of various utility methods
// that are available in every template
var AsyncVDOMBuilder = require('/marko$4.7.4/src/runtime/vdom/AsyncVDOMBuilder'/*'./AsyncVDOMBuilder'*/);
var makeRenderable = require('/marko$4.7.4/src/runtime/renderable'/*'../renderable'*/);

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

function createOut(globalData, parent, parentOut) {
    return new AsyncVDOMBuilder(globalData, parent, parentOut);
}

var Template_prototype = Template.prototype = {
    createOut: createOut
};

makeRenderable(Template_prototype);

exports.Template = Template;
exports.___createOut = createOut;

require('/marko$4.7.4/src/runtime/createOut'/*'../createOut'*/).___setCreateOut(createOut);

});