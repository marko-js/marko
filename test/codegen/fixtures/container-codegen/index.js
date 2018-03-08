"use strict";

module.exports = function(builder) {
    var containerNode = builder.containerNode("Test", function() {
        return builder.htmlElement(
            "div",
            [
                {
                    name: "class",
                    value: builder.literal("greeting")
                }
            ],
            [builder.text(builder.literal("Hello World"))]
        );
    });

    return containerNode;
};
