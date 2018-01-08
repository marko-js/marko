'use strict';

module.exports = function (builder) {
    return builder.vars({
        'aString': builder.literal('abc'),
        'aNumber': builder.literal(123),
        'aBoolean': builder.literal(false),
        'anObject': builder.literal({
            foo: 'bar',
            dynamic: builder.expression('data.name')
        }),
        'anArray': builder.literal(['foo', builder.expression('data.name')]),
        'literalTrue': builder.literalTrue(),
        'literalFalse': builder.literalFalse(),
        'literalNull': builder.literalNull(),
        'literalUndefined': builder.literalUndefined()
    });
};