const CodeWriter = require("../../../compiler/CodeWriter");
const CodeGenerator = require("../../../compiler/CodeGenerator");

module.exports = function(node, context, options) {
    const codeGenerator = new CodeGenerator(context);
    node = codeGenerator.generateCode(node);
    const writer = new CodeWriter(
        Object.assign({}, context.options, options),
        context.builder
    );
    writer.write(node);
    return writer.getCode();
};
