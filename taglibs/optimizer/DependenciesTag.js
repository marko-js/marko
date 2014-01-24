'use strict';
module.exports = {
    process: function (input, context) {
        if (input.invokeBody) {
            input.invokeBody();
        }
    }
};