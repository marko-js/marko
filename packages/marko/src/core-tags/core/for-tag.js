module.exports = function codeGenerator(elNode, codegen) {
    const builder = codegen.builder;
    const params = elNode.params;
    const ofAttr = elNode.getAttributeValue("of");
    const inAttr = elNode.getAttributeValue("in");
    const toAttr = elNode.getAttributeValue("to");

    if (ofAttr) {
        if (params.length > 3) {
            codegen.addError(
                "'<for|value, index, all| of=...>' only receives three parameters."
            );
            return elNode;
        }

        return builder.forEach(params, ofAttr, elNode.body);
    } else if (inAttr) {
        if (params.length > 2) {
            codegen.addError(
                "'<for|key, value| in=...>' only receives two parameters."
            );
            return elNode;
        }

        return builder.forEachProp(params, inAttr, elNode.body);
    } else if (toAttr) {
        if (params.length > 1) {
            codegen.addError(
                "'<for|i| from=... to=...>' only receives one parameter."
            );
            return elNode;
        }
        return builder.forRange(
            params,
            elNode.getAttributeValue("from"),
            toAttr,
            elNode.getAttributeValue("step"),
            elNode.body
        );
    }

    codegen.addError(
        "Invalid '<for>' tag, missing an 'of', 'in' or 'to' attribute."
    );
    return elNode;
};
