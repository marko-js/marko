module.exports = function transformer(el, context) {
    if (el.parentNode.type !== "TemplateRoot") {
        context.addError(
            "class is a static tag and can only be declared at the template root"
        );
    }
};
