'use strict';

module.exports = function (builder) {
    return builder.selfInvokingFunction(['win'], ['window'], [builder.assignment('win.foo', builder.literal('bar'))]);
};