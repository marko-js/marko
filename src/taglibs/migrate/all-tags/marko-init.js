const printJS = require("../util/printJS");
const SAFE_TO_PRINT_ON_ONE_LINE = [
    "If",
    "Else",
    "ElseIf",
    "ForStatement",
    "WhileStatement",
    "FunctionDeclaration"
];

module.exports = function migrate(el, context) {
    if (el.hasAttribute("marko-init")) {
        if (el.tagName !== "script") {
            context.addError(
                'The "marko-init" attribute should only be used on the <script> tag'
            );
            return;
        }

        context.deprecate(
            'The "marko-init" attribute is deprecated.  Use the static tag instead. See https://github.com/marko-js/marko/wiki/Deprecation:-script-template-helpers'
        );
        el.removeAttribute("marko-init");
    } else if (el.hasAttribute("template-helpers")) {
        if (el.tagName !== "script") {
            context.addError(
                'The "template-helpers" attribute should only be used on the <script> tag'
            );
            return;
        }

        context.deprecate(
            'The "template-helpers" attribute is deprecated and will be removed in the next release candidate. Use the static tag instead. See https://github.com/marko-js/marko/wiki/Deprecation:-script-template-helpers'
        );
        el.removeAttribute("template-helpers");
    } else {
        return;
    }

    const builder = context.builder;
    let parsed = builder.parseStatement(el.bodyText);

    if (parsed.type) {
        const container = builder.containerNode();
        container.appendChild(parsed);
        parsed = container;
    }

    parsed.forEachChild(function insertStaticOrImport(child) {
        if (!child.type) {
            child.forEachChild(insertStaticOrImport);
        } else if (child.type === "Vars") {
            child.declarations.forEach(declaration => {
                const id = declaration.id;
                const init = declaration.init;
                el.insertSiblingBefore(
                    isRequireCall(init)
                        ? toImportTag(id, init.args[0].value, context)
                        : toStaticTag(builder.vars([declaration]), context)
                );
            });
        } else {
            el.insertSiblingBefore(
                isRequireCall(child)
                    ? toImportTag(undefined, child.args[0].value, context)
                    : toStaticTag(child, context)
            );
        }
    });

    el.detach();
};

function toStaticTag(node, context) {
    const staticTag = context.builder.htmlElement("static");
    let jsStr = printJS(node, context).trim();

    if (
        !SAFE_TO_PRINT_ON_ONE_LINE.includes(node.type) &&
        /[\n\r]/g.test(jsStr)
    ) {
        jsStr = `{\n${jsStr}\n}`;
    }

    staticTag.tagString = `static ${jsStr}`;
    return staticTag;
}

function toImportTag(id, from, context) {
    const importTag = context.builder.htmlElement("import");
    let importString = "import";

    if (id) {
        importString += ` ${printJS(id, context)}`;
    }

    importString += ` from ${JSON.stringify(from)}`;

    importTag.tagString = importString;
    return importTag;
}

function isRequireCall(node) {
    return (
        node.type === "FunctionCall" &&
        node.callee.name === "require" &&
        node.args.length === 1 &&
        node.args[0].type === "Literal"
    );
}
