"use strict";

module.exports = function nodeFactory(el, context) {
    var elseStatement = context.builder.elseStatement();

    var argument = el.argument;
    if (argument) {
        context.addError(
            elseStatement,
            "Invalid <else> tag. Argument is not allowed"
        );
    }

    if (el.hasAttribute("if")) {
        let ifAttr = el.getAttribute("if");
        el.removeAttribute("if");

        if (el.attributes.length) {
            context.addError(
                elseStatement,
                'Invalid <else if> tag. Only the "if" attribute is allowed.'
            );
            return el;
        }

        var testExpression = ifAttr.argument;
        if (!testExpression) {
            context.addError(
                elseStatement,
                'Invalid <else if> tag. Invalid "if" attribute. Expected: <else if(<test>)>'
            );
            return el;
        }
        var elseIfStatement = context.builder.elseIfStatement(testExpression);
        return elseIfStatement;
    }

    if (el.attributes.length) {
        context.addError(
            elseStatement,
            "Invalid <else> tag. Attributes not allowed."
        );
        return el;
    }

    return elseStatement;
};
