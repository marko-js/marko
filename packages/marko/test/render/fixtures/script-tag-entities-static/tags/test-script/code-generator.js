module.exports = function generateCode(elNode, codegen) {
    var builder = codegen.builder;
    return builder.htmlElement("script", { type: '"n/a"' }, [
        builder.text(builder.literal("<test>"))
    ]);
};
