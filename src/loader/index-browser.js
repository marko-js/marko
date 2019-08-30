"use strict";
module.exports = function load(templatePath) {
    // We make the assumption that the template path is a
    // fully resolved module path and that the module exists
    // as a CommonJS module
    // eslint-disable-next-line no-undef
    if (typeof __webpack_require__ !== "undefined") {
        // In webpack we can accept paths from `require.resolve`.
        // eslint-disable-next-line no-undef
        return __webpack_require__(templatePath);
    } else {
        return require(templatePath);
    }
};
