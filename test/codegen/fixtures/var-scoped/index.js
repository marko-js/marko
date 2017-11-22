'use strict';

module.exports = function (builder) {
    var declarations = [{
        id: builder.identifier('name'),
        init: builder.literal('string')
    }];
    var vars = builder.vars(declarations);
    vars.appendChild(builder.functionCall(builder.identifier('log'), [builder.identifier('name')]));
    return vars;
};