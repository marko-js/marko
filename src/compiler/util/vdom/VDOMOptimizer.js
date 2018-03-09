"use strict";

/*
Algorithm:

Walk the DOM tree to find all HtmlElementVDOM and TextVDOM nodes

a) If a node is static then move to a static variable. Depending on whether or not the node is a root or nested,
we will need to replace it with one of the following:
- out.n(staticVar)
- .n(staticVar)

b) If a node is HTML-only then generate code depending on if it is root or not:

- out.e('div', ...) | out.t('foo')
- .e('div', ...) || .t('foo')

c) Else, generate one of the following:

- out.beginElement()

*/

const Node = require("../../ast/Node");
const OPTIMIZER_CONTEXT_KEY = Symbol();

const OPTIONS_DEFAULT = { optimizeTextNodes: true, optimizeStaticNodes: true };
const OPTIONS_OPTIMIZE_TEXT_NODES = {
    optimizeTextNodes: true,
    optimizeStaticNodes: false
};

class OptimizerContext {
    constructor(context) {
        this.context = context;

        this.nextAttrsId = 0;
        this.nextNodeId = 0;
        this._nextConstIdFunc = null;
    }

    get nextConstIdFunc() {
        let nextConstIdFunc = this._nextConstIdFunc;
        if (!nextConstIdFunc) {
            let context = this.context;
            let builder = context.builder;
            let constId = this.context.helper("const");
            let fingerprintLiteral = builder.literal(context.getFingerprint(6));
            nextConstIdFunc = this._nextConstIdFunc = context.addStaticVar(
                "marko_const_nextId",
                builder.functionCall(constId, [fingerprintLiteral])
            );
        }
        return nextConstIdFunc;
    }
}

class NodeVDOM extends Node {
    constructor(variableIdentifier, isComponent) {
        super("NodeVDOM");
        this.variableIdentifier = variableIdentifier;
        this.isComponent = isComponent;
    }

    writeCode(writer) {
        var builder = writer.builder;
        var funcCallArgs = [this.variableIdentifier];

        if (this.isComponent) {
            funcCallArgs.push(builder.identifier("component"));
        }

        let funcCall = builder.functionCall(
            builder.identifier("n"),
            funcCallArgs
        );

        if (this.isChild) {
            writer.write(".");
        } else {
            writer.write("out.");
        }

        writer.write(funcCall);
    }
}

function generateNodesForArray(nodes, context, options) {
    let builder = context.builder;

    var optimizerContext =
        context[OPTIMIZER_CONTEXT_KEY] ||
        (context[OPTIMIZER_CONTEXT_KEY] = new OptimizerContext(context));

    var optimizeStaticNodes = options.optimizeStaticNodes !== false;

    function generateStaticNode(node) {
        if (node.type === "HtmlElementVDOM") {
            node.createElementId = context.helper("createElement");

            node.setConstId(
                builder.functionCall(optimizerContext.nextConstIdFunc, [])
            );
        } /* else {
            node.createTextId = context.importModule('marko_createText', 'marko/vdom/createText');
        }*/

        node.isStaticRoot = true;
        let staticNodeId = context.addStaticVar(
            "marko_node" + optimizerContext.nextNodeId++,
            node
        );

        return new NodeVDOM(staticNodeId, context.isComponent);
    }

    function handleStaticAttributes(node) {
        var attributesArg = node.attributesArg;
        if (attributesArg) {
            node.isStaticRoot = true;
            let staticAttrsId = context.addStaticVar(
                "marko_attrs" + optimizerContext.nextAttrsId++,
                attributesArg
            );
            node.attributesArg = staticAttrsId;
        }
    }

    let finalNodes = [];
    let i = 0;

    while (i < nodes.length) {
        let node = nodes[i];
        if (node.type === "HtmlElementVDOM") {
            if (optimizeStaticNodes) {
                if (node.isStatic) {
                    finalNodes.push(generateStaticNode(node));
                    doOptimizeNode(node, context, OPTIONS_OPTIMIZE_TEXT_NODES);
                } else {
                    if (node.isAttrsStatic) {
                        handleStaticAttributes(node);
                    }

                    finalNodes.push(node);
                }
            } else {
                finalNodes.push(node);
            }

            node.finalizeProperties(context);
        } else {
            finalNodes.push(node);
        }

        i++;
    }

    return finalNodes;
}

function doOptimizeNode(node, context, options) {
    let walker = context.createWalker({
        enterArray(nodes) {
            return generateNodesForArray(nodes, context, options);
        }
    });

    return walker.walk(node);
}

class VDOMOptimizer {
    optimize(node, context) {
        doOptimizeNode(node, context, OPTIONS_DEFAULT);
    }
}

module.exports = VDOMOptimizer;
