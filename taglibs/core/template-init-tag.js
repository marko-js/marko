

module.exports = function codeGenerator(elNode, codegen) {
    var bodyText = elNode.bodyText;
    elNode.noOutput = true;
    codegen.addStaticCode(bodyText);
};