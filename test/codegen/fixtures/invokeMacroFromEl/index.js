"use strict";

module.exports = function(builder) {
    return builder.program([
        builder.macro(
            "greeting",
            ["macroInput"],
            [
                builder.text(builder.literal("Hello ")),
                builder.text(
                    builder.memberExpression(
                        builder.identifier("macroInput"),
                        builder.identifier("name")
                    )
                )
            ]
        ),
        builder.invokeMacroFromEl(
            builder.htmlElement("greeting", {
                name: builder.literal("Frank"),
                age: builder.literal(10)
            })
        )
    ]);
};
