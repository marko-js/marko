
module.exports = function generateCode(elNode, codegen) {
    var builder = codegen.builder;
    return builder.htmlElement('script', {}, [builder.text(builder.literal('<test>'))]);
};