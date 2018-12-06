"use strict";

module.exports = function(builder) {
    return builder.arrowFunction(
        [],
        [builder.returnStatement(builder.literal(true))]
    );
};
