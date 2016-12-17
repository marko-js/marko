'use strict';
var documentProvider = require('./document-provider');

var runtime;

function setRuntime(_runtime) {
    runtime = _runtime;
}
exports.$__setRuntime = setRuntime;

function createOut(globalData) {
    return runtime.createOut(globalData);
}

/**
 * Used to associate a DOM Document with marko. This is needed
 * to parse HTML fragments to insert into the VDOM tree.
 */
exports.setDocument = function(newDoc) {
    documentProvider.$__document = newDoc;
};

exports.createOut = createOut;
exports.load = require('./loader');
exports.events = require('./events');