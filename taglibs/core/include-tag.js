'use strict';
var removeHyphens = require('../../compiler/util/removeDashes');
var deprecateHyphensPath = require.resolve('../../runtime/deprecateHyphens');

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

    var deprecateHyphensArgs = [];


    let templateData = {};
    let attrs = el.getAttributes();
    attrs.forEach((attr) => {
        var propName = attr.name;
        if (propName.indexOf('-') !== -1) {
            // For now, we will add both the property name converted to camel
            // case and a getter that allows the property to still be accessed
            // with the hyphens. This was done to prevent breaking applications
            // that may be accessing properties with the hyphen due to the following
            // bug: https://github.com/marko-js/marko/issues/314
            //
            // This code should be removed in the future.
            deprecateHyphensArgs.push(builder.literal(propName)); // Append the hyphenated property name
            propName = removeHyphens(propName); // Convert the property name to camel case
            deprecateHyphensArgs.push(builder.literal(propName)); // Append the target camel-cased property name
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
            let mergeVar = codegen.addStaticVar('__merge', '__helpers.m');
            templateData = builder.functionCall(mergeVar, [
                builder.literal(templateData), // Input props from the attributes take precedence
                args[1] // The template data object is passed as the second argument: <include("./foo.marko", { ... })/>
            ]);
        }
    } else {
        templateData = builder.literal(templateData);
    }

    if (deprecateHyphensArgs.length) {
        // We import a helper function into the template to allow the properties to
        // still be accessed with the hyphenated name while showing a deprecation warning.
        //
        // This compiled code is being added due to the following bug:
        // https://github.com/marko-js/marko/issues/314
        //
        // It should be removed in the future.
        var deprecateHyphensVar = codegen.importModule(
            'deprecateHyphens',
            codegen.getRequirePath(deprecateHyphensPath));
        templateData = builder.functionCall(deprecateHyphensVar, [templateData].concat(deprecateHyphensArgs));
    }

    let renderMethod = builder.memberExpression(templateVar, builder.identifier('render'));
    let renderArgs = [ templateData, 'out' ];
    let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
    return renderFunctionCall;
};