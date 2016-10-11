'use strict';

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

const Node = require('../../ast/Node');
const nextConstIdFuncSymbol = Symbol();

const OPTIONS_DEFAULT =             { optimizeTextNodes: true, optimizeStaticNodes: true };
const OPTIONS_OPTIMIZE_TEXT_NODES = { optimizeTextNodes: true, optimizeStaticNodes: false };

class NodeVDOM extends Node {
    constructor(variableIdentifier) {
        super('NodeVDOM');
        this.variableIdentifier = variableIdentifier;
    }

    writeCode(writer) {
        var builder = writer.builder;

        let funcCall = builder.functionCall(
            builder.identifier('n'),
            [
                this.variableIdentifier
            ]);

        if (this.isChild) {
            writer.write('.');
        } else {
            writer.write('out.');
        }

        writer.write(funcCall);
    }
}

function generateNodesForArray(nodes, context, options) {
    let builder = context.builder;
    let nextNodeId = 0;
    let nextAttrsId = 0;

    var optimizeTextNodes = options.optimizeTextNodes !== false;
    var optimizeStaticNodes = options.optimizeStaticNodes !== false;

    function generateStaticNode(node) {
        if (node.type === 'HtmlElementVDOM') {
            node.createElementId = context.helper('createElement');
        }/* else {
            node.createTextId = context.importModule('marko_createText', 'marko/vdom/createText');
        }*/

        let nextConstIdFunc = context.data[nextConstIdFuncSymbol];
        if (!nextConstIdFunc) {
            let constId = context.helper('const');
            let fingerprintLiteral = builder.literal(context.getFingerprint(6));
            nextConstIdFunc = context.data[nextConstIdFuncSymbol] = context.addStaticVar('marko_const_nextId', builder.functionCall(constId, [ fingerprintLiteral ]));
        }

        node.nextConstId = builder.functionCall(nextConstIdFunc, []);

        node.isStaticRoot = true;
        let staticNodeId = context.addStaticVar('marko_node' + (nextNodeId++), node);

        return new NodeVDOM(staticNodeId);
    }

    function handleStaticAttributes(node) {
        var attributesArg = node.attributesArg;
        if (attributesArg) {
            node.isStaticRoot = true;
            let staticAttrsId = context.addStaticVar('marko_attrs' + (nextAttrsId++), attributesArg);
            node.attributesArg = staticAttrsId;
        }
    }

    let finalNodes = [];
    let i = 0;

    while (i<nodes.length) {
        let node = nodes[i];
        if (node.type === 'HtmlElementVDOM') {
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

        } else if (node.type === 'TextVDOM') {
            if (optimizeTextNodes) {
                let firstTextNode = node;

                // We will need to merge the text nodes into a single node
                while(++i<nodes.length) {
                    let currentTextNode = nodes[i];
                    if (currentTextNode.type === 'TextVDOM') {
                        if (!firstTextNode.append(currentTextNode)) {
                            // If the current text node was not appendable then
                            // we will stop. We can only merge text nodes that are compatible
                            break;
                        }
                    } else {
                        break;
                    }
                }

                // firstTextNode.isStatic = false;
                finalNodes.push(firstTextNode);
                continue;
            } else {
                finalNodes.push(node);
            }

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