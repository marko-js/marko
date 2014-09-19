'use strict';
module.exports = function render(input, out) {
    out.write('<!--');
    if (input.invokeBody) {
        input.invokeBody();
    }
    out.write('-->');
};
