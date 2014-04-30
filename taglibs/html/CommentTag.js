'use strict';
module.exports = function render(input, context) {
    context.write('<!--');
    if (input.invokeBody) {
        input.invokeBody();
    }
    context.write('-->');
};