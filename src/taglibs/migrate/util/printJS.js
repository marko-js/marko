const CodeWriter = require("../../../compiler/CodeWriter");

module.exports = function(node, context, options) {
    const writer = new CodeWriter(
        Object.assign({}, context.options, options),
        context.builder
    );
    writer.write(node);
    return writer.getCode();
};
