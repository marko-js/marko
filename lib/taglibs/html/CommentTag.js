'use strict';
module.exports = {
    process: function (input, context) {
        context.write('<!--');
        if (input.invokeBody) {
            input.invokeBody();
        }
        context.write('-->');
    }
};