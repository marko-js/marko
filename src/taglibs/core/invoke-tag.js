module.exports = function codeGenerator(elNode, context) {
    const functionAttr = elNode.attributes[0];
    const attrs = elNode.attributes;
    const args = context.builder.parseJavaScriptArgs(functionAttr.argument);
    const argsLength = args.length;
    const functionName = functionAttr.name;

    let outIsFirstIndex = false;
    let argsContainsOut = false;
    let functionCallExpression = null;
    let newNode = null;

    args.map((arg, i) => {
        if (arg.name === "out") {
            if (i === 0) {
                outIsFirstIndex = true;
            }

            argsContainsOut = true;
        }
    });

    attrs.splice(0, 1);

    if (
        (functionName === "data.renderBody" ||
            functionName === "input.renderBody") &&
        argsContainsOut &&
        outIsFirstIndex
    ) {
        // <invoke data.renderBody(out) w-id="barTest"/>
        // <${data.renderBody} w-id="barTest"/>

        attrs.unshift({
            value: args[0],
            spread: true
        });

        newNode = context.createNodeForEl(
            context.builder.parseExpression(functionName),
            attrs
        );
    } else if (argsLength > 1 && argsContainsOut && !outIsFirstIndex) {
        // <invoke data.barRenderer({}, out) w-id="barTest"/>
        // <${{ render:data.barRenderer }} ...{} w-id="barTest"/>

        // <invoke data.template.render({}, out) w-id="barTest"/>
        // <${{ render: data.template.render }} ...{} w-id="barTest"/>

        // <invoke data.template.renderer({}, out) w-id="barTest"/>
        // <${{ render: data.template.renderer }} ...{} w-id="barTest"/>

        attrs.unshift({
            value: args[0],
            spread: true
        });

        newNode = context.createNodeForEl(
            context.builder.parseExpression("{renderer:" + functionName + "}"),
            attrs
        );
    } else {
        functionCallExpression = functionName + "(" + args + ");";
        newNode = context.builder.scriptlet({
            value: functionCallExpression
        });
    }

    context.deprecate(
        'The "<invoke>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    if (!functionAttr) {
        context.addError(
            'Invalid <invoke> tag. Missing function attribute. Expected: <invoke console.log("Hello World")'
        );
        return;
    }

    if (args === undefined) {
        context.addError(
            'Invalid <invoke> tag. Missing function arguments. Expected: <invoke console.log("Hello World")'
        );
        return;
    }

    elNode.insertSiblingBefore(newNode);
    elNode.detach();
};
