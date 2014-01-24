'use strict';
var optimizer = require('raptor-optimizer');
module.exports = {
    process: function (input, context) {
        optimizer.enableExtensionForContext(context, input.name);
    }
};