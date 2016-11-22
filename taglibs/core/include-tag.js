'use strict';
var removeHyphens = require('../../compiler/util/removeDashes');

module.exports = function codeGenerator(el, codegen) {
    let builder = codegen.builder;

    let target;
    let data;

    if (el.argument) {
        let args = el.argument && builder.parseJavaScriptArgs(el.argument);
        target = args[0];
        data = args[1];
    }

    var isTemplate = false;

    if (target) {
        if (target.type === 'Literal') {
            target = codegen.context.importTemplate(target.value);
            isTemplate = true;
        }
    }

    let finalData = {};
    let attrs = el.getAttributes();
    attrs.forEach((attr) => {
        var propName = attr.name;
        if (propName.indexOf('-') !== -1) {
            propName = removeHyphens(propName); // Convert the property name to camel case
        }

        finalData[propName] = attr.value;
    });

    if (el.body && el.body.length) {
        finalData.renderBody = builder.renderBodyFunction(el.body);
    }

    if (data) {
        if (Object.keys(finalData).length === 0) {
            finalData = data;
        } else {
            let mergeVar = codegen.context.helper('merge');
            finalData = builder.functionCall(mergeVar, [
                builder.literal(finalData), // Input props from the attributes take precedence
                data // The template data object is passed as the second argument: <include("./foo.marko", { ... })/>
            ]);
        }
    } else {
        if (Object.keys(finalData).length === 0) {
            finalData = null;
        } else {
            finalData = builder.literal(finalData);
        }
    }

    if (isTemplate) {
        let renderMethod = builder.memberExpression(target, builder.identifier('render'));
        if (!finalData) {
            finalData = builder.literal({});
        }
        let renderArgs = [ finalData, builder.identifierOut()  ];
        let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
        return renderFunctionCall;
    } else {
        if (this.generateCodeForDynamicInclude) {
            return this.generateCodeForDynamicInclude({
                target: target,
                data: finalData
            }, codegen);
        } else {
            if (!target) {
                target = builder.memberExpression(builder.identifier('data'), builder.identifier('renderBody'));
            }

            let includeVar = codegen.context.helper('include');
            let includeArgs = [ target, builder.identifierOut() ];

            if (finalData) {
                includeArgs.push(finalData);
            }

            return builder.functionCall(includeVar, includeArgs);
        }
    }
};