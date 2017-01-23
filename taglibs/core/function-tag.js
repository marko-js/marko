module.exports = function functionCodeGenerator(el, codegen) {
    return codegen.builder.expression(el.tagString);
};