require("./");

exports.r = require("./renderer");

exports.c = function() {
    /* no op for defining a component on teh server */
};

// registerComponent is a no-op on the server.
// Fixes https://github.com/marko-js/marko-components/issues/111
exports.rc = function(typeName) {
    return typeName;
};
