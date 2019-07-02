module.exports = function codeGenerator(el, context) {
    var code = el.tagString.replace(/^static\s*/, "").trim();

    if (code[0] === "{") {
        var statements = code.slice(1, -1);
        context.addStaticCode(context.builder.code(statements));
    } else {
        context.addStaticCode(context.builder.expression(code));
    }

    return null;
};
