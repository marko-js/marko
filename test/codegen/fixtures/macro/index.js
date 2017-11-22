'use strict';

module.exports = function (builder) {
    return builder.macro('greeting', ['name', 'age'], [builder.text(builder.literal('Hello ')), builder.text(builder.identifier('name'))]);
};