'use strict';

module.exports = function (builder) {
    return builder.selfInvokingFunction(null, null, [builder.vars(['foo']), builder.assignment('foo', builder.literal('bar'))]);
};