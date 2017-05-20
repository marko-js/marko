'use strict';

const VDOMOptimizer = require('./VDOMOptimizer');
const isStaticValue = require('./isStaticValue');

const OPTIMIZER_ADDED_KEY = Symbol();

function registerOptimizer(context) {
    var data = context.data;
    if (!data[OPTIMIZER_ADDED_KEY]) {
        data[OPTIMIZER_ADDED_KEY] = true;

        context.addOptimizer(new VDOMOptimizer());
    }
}

exports.registerOptimizer = registerOptimizer;
exports.isStaticValue = isStaticValue;
exports.registerOptimizer = registerOptimizer;