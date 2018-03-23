module.exports = function codeGenerator(elNode, codegen) {
    var builder = codegen.builder;

    return builder.ifStatement(builder.identifier("renderBody"), [
        builder.functionCall("renderBody", ["out"])
    ]);
};
