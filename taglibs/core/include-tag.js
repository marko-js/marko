'use strict';

module.exports = function codeGenerator(el, codegen) {
    let argument = el.argument;
    if (!argument) {
        return;
    }

    let builder = codegen.builder;
    let args = builder.parseJavaScriptArgs(argument);
    if (args.length === 0) {
        codegen.addError('Template path is required for the <include(templatePath[, templateData])> tag');
        return;
    } else if (args.length > 2) {
        codegen.addError('Wrong number of arguments passed to the <include> tag. Expected: <include(templatePath[, templateData])> tag');
        return;
    }

    let templatePath = args[0];
    let templateVar;

    if (templatePath.type === 'Literal') {
        templateVar = codegen.context.importTemplate(templatePath.value);
    } else {
        templateVar = templatePath;
    }

    let templateData = {};
    let attrs = el.getAttributes();
    attrs.forEach((attr) => {
        templateData[attr.name] = attr.value;
    });

    if (el.body && el.body.length) {
        templateData.renderBody = builder.renderBodyFunction(el.body);
    }

    if (args.length === 2) {
        if (Object.keys(templateData).length === 0) {
            templateData = args[1];
        } else {
            let mergeVar = codegen.addStaticVar('__merge', '__helpers.m');
            templateData = builder.functionCall(mergeVar, [
                builder.literal(templateData), // Input props from the attributes take precedence
                args[1] // The template data object is passed as the second argument: <include("./foo.marko", { ... })/>
            ]);
        }
    } else {
        templateData = builder.literal(templateData);
    }

    let renderMethod = builder.memberExpression(templateVar, builder.identifier('render'));
    let renderArgs = [ templateData, 'out' ];
    let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
    return renderFunctionCall;
};