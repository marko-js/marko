module.exports = function nodeFactory(el, context) {
    var parent = el.parentNode;
    var isTopLevel = parent.type === "TemplateRoot";

    if (!isTopLevel) {
        context.addError(
            "static is a static tag and can only be declared at the template root"
        );
    }

    return el;
};
