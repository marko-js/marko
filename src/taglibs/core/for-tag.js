var createLoopNode = require("./util/createLoopNode");

module.exports = function codeGenerator(elNode, codegen) {
    var argument = elNode.argument;
    if (!argument) {
        codegen.addError(
            "Invalid <for> tag. Argument is missing. Example: <for(color in colors)>"
        );
        return elNode;
    }

    var builder = codegen.builder;

    try {
        var loopNode = createLoopNode(argument, elNode.body, builder);
        return loopNode;
    } catch (e) {
        if (e.code === "INVALID_FOR") {
            codegen.addError(e.message);
        } else {
            throw e;
        }
    }
};
