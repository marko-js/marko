'use strict';
var optimizer = require('raptor-optimizer');
module.exports = {
    process: function (input, context) {
        optimizer.disableExtensionForContext(context, input.name);
    }
};