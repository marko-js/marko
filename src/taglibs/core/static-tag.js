module.exports = function functionCodeGenerator(el, codegen) {
    if(el.parentNode.type !== 'TemplateRoot') {
        codegen.addError('static is a static tag and can only be declared at the template root');
    }

    var code = el.tagString.replace(/^static\s*/, '').trim();

    if(code[0] === '{') {
        var statements = code.slice(1, -1);
        codegen.addStaticCode(codegen.builder.code(statements));
    } else {
        codegen.addStaticCode(codegen.builder.expression(code));
    }

    return null;
};