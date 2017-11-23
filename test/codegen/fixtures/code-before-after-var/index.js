'use strict';

module.exports = function (builder) {
    var vars = builder.vars(['foo']);

    vars.onBeforeGenerateCode(event => {
        event.insertCode(builder.functionCall('before', []));
    });

    vars.onAfterGenerateCode(event => {
        event.insertCode(builder.functionCall('after', []));
    });

    var ifStatement = builder.ifStatement('a > b', [vars]);

    return ifStatement;
};