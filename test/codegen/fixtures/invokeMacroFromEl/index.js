'use strict';

module.exports = function (builder) {
    return builder.program([builder.macro('greeting', ['name', 'age'], [builder.text(builder.literal('Hello ')), builder.text(builder.identifier('name'))]), builder.invokeMacroFromEl(builder.htmlElement('greeting', {
        name: builder.literal('Frank'),
        age: builder.literal(10)
    }))]);
};