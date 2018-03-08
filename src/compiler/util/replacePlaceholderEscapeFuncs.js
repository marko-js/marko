var AttributePlaceholder = require("../ast/AttributePlaceholder");

module.exports = function replacePlaceholderEscapeFuncs(node, context) {
    var walker = context.createWalker({
        exit: function(node) {
            if (
                node.type === "FunctionCall" &&
                node.callee.type === "Identifier"
            ) {
                if (node.callee.name === "$noEscapeXml") {
                    return new AttributePlaceholder({
                        escape: false,
                        value: node.args[0]
                    });
                } else if (node.callee.name === "$escapeXml") {
                    return new AttributePlaceholder({
                        escape: true,
                        value: node.args[0]
                    });
                }
            }
        }
    });

    return walker.walk(node);
};
