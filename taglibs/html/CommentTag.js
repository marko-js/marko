'use strict';
module.exports = function render(input, out) {
    out.write('<!--');
    if (input.renderBody) {
        input.renderBody(out);
    }
    out.write('-->');
};
