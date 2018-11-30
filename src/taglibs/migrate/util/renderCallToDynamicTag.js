const printJS = require("./printJS");

module.exports = function renderCallToDynamicTag(ast, context) {
    const builder = context.builder;
    const args = ast.args;
    const callee = ast.callee;
    const argsLength = args.length;
    const outIndex = args.findIndex(arg => arg.name === "out");
    const calleeProperty = callee.property && callee.property.name;

    if (outIndex === -1) {
        return false;
    }

    let tagName;
    let tagAttrs;

    if (argsLength <= 2) {
        if (outIndex === 0) {
            // Handles cases for the following:
            // 1. input.renderBody(out) --> <${input}/>
            // 2. input.renderThing(out) --> <${input.renderThing}/>
            // 3. input.renderBody(out, attrs) --> <${input} ...attrs/>
            // 4. renderBody(out) --> <${renderBody}/>
            if (argsLength === 2) {
                tagName = callee;
                tagAttrs = toAttributesOrSpread(args[1]);
            }

            // Removes `.renderBody` which is optional.
            if (calleeProperty === "renderBody") {
                tagName = callee.object;
            } else {
                tagName = callee;
            }
        } else if (outIndex === 1) {
            // Handles cases for the following:
            // 1. input.template.render({}, out) --> <${input.template} ...{}/>
            // 2. input.template.renderer({}, out) --> <${input.template} ...{}/>
            // 3. input.barRenderer({}, out) --> <${{ render:input.barRenderer }} ...{}/>

            tagAttrs = toAttributesOrSpread(args[0]);

            // Removes `.render` or `.renderer` which are optional.
            if (calleeProperty === "render" || calleeProperty === "renderer") {
                tagName = callee.object;
            } else {
                tagName = builder.objectExpression({
                    render: callee
                });
            }
        }
    } else {
        // Handles worst case scenario:
        // 1. input.barRenderer({}, true, out) --> <${(out) => input.barRenderer({}, true, out)}/>
        tagName = builder.functionDeclaration(
            null,
            [builder.identifier("out")],
            [ast]
        );
    }

    const el = builder.htmlElement(
        undefined,
        tagAttrs,
        undefined,
        undefined,
        true,
        true
    );

    el.rawTagNameExpression = printJS(tagName, context);
    return el;
};

function toAttributesOrSpread(val) {
    if (
        !val ||
        (val.type === "Literal" && val.value === null) ||
        (val.type === "Identifier" && val.name === "undefined")
    ) {
        return [];
    }

    if (
        val.type === "ObjectExpression" &&
        val.properties.every(prop => !prop.computed)
    ) {
        return val.properties.map(prop => ({
            name: prop.literalKeyValue,
            value: prop.value
        }));
    }

    return [
        {
            value: val,
            spread: true
        }
    ];
}
