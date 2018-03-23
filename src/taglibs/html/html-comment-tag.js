"use strict";
module.exports = function render(input, out) {
    if (out.write) {
        out.write("<!--");
        if (input.renderBody) {
            input.renderBody(out);
        }
        out.write("-->");
    }
};
