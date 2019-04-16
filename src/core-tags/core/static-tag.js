module.exports = function functionCodeGenerator(el, context) {
    var parent = el.parentNode;
    var isTopLevel = parent.type === "TemplateRoot";

    if (!isTopLevel) {
        context.addError(
            "static is a static tag and can only be declared at the template root"
        );
    }

    var code = el.tagString.replace(/^static\s*/, "").trim();

    if (code[0] === "{") {
        var statements = code.slice(1, -1);
        context.addStaticCode(context.builder.code(statements));
    } else {
        context.addStaticCode(context.builder.expression(code));
    }

    el.detach();
};
