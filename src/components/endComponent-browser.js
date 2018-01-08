'use strict';

module.exports = function endComponent(out) {
    out.ee(); // endElement() (also works for VComponent nodes pushed on to the stack)
};
