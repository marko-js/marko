'use strict';

module.exports = function (builder) {
        return builder.selfInvokingFunction([builder.vars(['foo']), builder.assignment('foo', builder.literal('bar'))]);
};