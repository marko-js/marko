'use strict';
var removeHyphens = require('../../compiler/util/removeDashes');

module.exports = function codeGenerator(el, codegen) {
    let argument = el.argument;
    if (!argument) {
        argument = 'data.renderBody';
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
    let targetVar;

    var isTemplate = false;

    if (templatePath.type === 'Literal') {
        targetVar = codegen.context.importTemplate(templatePath.value);
        isTemplate = true;
    } else {
        targetVar = templatePath;
    }

    let templateData = {};
    let attrs = el.getAttributes();
    attrs.forEach((attr) => {
        var propName = attr.name;
        if (propName.indexOf('-') !== -1) {
            propName = removeHyphens(propName); // Convert the property name to camel case
        }

        templateData[propName] = attr.value;
    });

    if (el.body && el.body.length) {
        templateData.renderBody = builder.renderBodyFunction(el.body);
    }

    if (args.length === 2) {
        if (Object.keys(templateData).length === 0) {
            templateData = args[1];
        } else {
            let mergeVar = codegen.context.helper('merge');
            templateData = builder.functionCall(mergeVar, [
                builder.literal(templateData), // Input props from the attributes take precedence
                args[1] // The template data object is passed as the second argument: <include("./foo.marko", { ... })/>
            ]);
        }
    } else {
        templateData = builder.literal(templateData);
    }

    if (isTemplate) {
        let renderMethod = builder.memberExpression(targetVar, builder.identifier('render'));
        let renderArgs = [ templateData, 'out' ];
        let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
        return renderFunctionCall;
    } else {
        let includeVar = codegen.context.helper('include');
        let includeArgs = [ targetVar, 'out'];

        if (Object.keys(templateData).length > 0) {
            includeArgs.push(templateData);
        }

        return builder.functionCall(includeVar, includeArgs);
    }
};