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
            builder.htmlElement(
                "greeting",
                [] /* empty attributes */,
                [
                    builder.text(
                        builder.literal("This is the body passed to the macro")
                    )
                ],
                '"Frank", 10'
            ) /* argument string */
        )
    ]);
};
