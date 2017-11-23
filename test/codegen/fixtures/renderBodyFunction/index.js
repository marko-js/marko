'use strict';

module.exports = function (builder) {
    return builder.renderBodyFunction([builder.text(builder.literal('Hello World!'))]);
};