

module.exports = function codeGenerator(elNode, codegen) {
    var bodyText = elNode.bodyText;
    codegen.addStaticCode(bodyText);
};