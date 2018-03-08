"use strict";

module.exports = function(builder) {
    return builder.program([
        builder.macro(
            "greeting",
            ["name", "age"],
            [
                builder.text(builder.literal("Hello ")),
                builder.text(builder.identifier("name"))
            ]
        ),
        builder.invokeMacro("greeting", [
            builder.literal("Frank"),
            builder.literal(10)
        ])
    ]);
};
