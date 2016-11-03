'use strict';
var runtime;

function setRuntime(_runtime) {
    runtime = _runtime;
}
exports._setRuntime = setRuntime;

var load = require('./loader');


function createOut(globalData) {
    return runtime.createOut(globalData);
}

exports.createOut = createOut;
exports.load = load;
exports.events = require('./events');