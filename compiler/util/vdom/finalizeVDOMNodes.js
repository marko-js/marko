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

class EndElementNode extends Node {
    constructor() {
        super('EndElementNode');
    }

    writeCode(writer) {
        writer.write('out.ee()');
    }
}

function finalizeVDOMNodes(nodes, context) {
    let builder = context.builder;
    let nextNodeId = 0;
    let nextAttrsId = 0;
    function generateStaticNode(node) {
        if (node.type === 'HtmlElementVDOM') {
            node.createElementId = context.importModule('marko_createElement', 'marko/vdom/createElement');
        } else {
            node.createTextId = context.importModule('marko_createText', 'marko/vdom/createText');
        }

        let nextConstIdFunc = context.data[nextConstIdFuncSymbol];
        if (!nextConstIdFunc) {
            let constId = context.importModule('marko_const', 'marko/runtime/vdom/const');
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

    function generateNodesForArray(nodes) {
        let finalNodes = [];
        let i = 0;

        while (i<nodes.length) {
            let node = nodes[i];
            if (node.type === 'HtmlElementVDOM') {
                if (node.isStatic) {
                    finalNodes.push(generateStaticNode(node));
                } else {
                    if (node.isAttrsStatic) {
                        handleStaticAttributes(node);
                    }

                    if (node.isHtmlOnly) {
                        finalNodes.push(node);
                    } else {
                        finalNodes.push(node);
                        finalNodes = finalNodes.concat(generateNodesForArray(node.body));
                        node.body = null;
                        finalNodes.push(new EndElementNode());
                    }
                }
            } else if (node.type === 'TextVDOM') {
                let firstTextNode = node;
                // We will need to merge the text nodes into a single node
                while(++i<nodes.length) {
                    let currentTextNode = nodes[i];
                    if (currentTextNode.type === 'TextVDOM') {
                        firstTextNode.append(currentTextNode);
                    } else {
                        break;
                    }
                }

                // if (firstTextNode.isStatic) {
                //     finalNodes.push(generateStaticNode(firstTextNode));
                //     continue;
                // } else {
                //     finalNodes.push(firstTextNode);
                // }
                firstTextNode.isStatic = false;
                finalNodes.push(firstTextNode);

                continue;
            } else {
                finalNodes.push(node);
            }

            i++;
        }

        return finalNodes;
    }

    let walker = context.createWalker({
        enterArray(nodes) {
            return generateNodesForArray(nodes);
        }
    });

    return walker.walk(nodes);
}

module.exports = finalizeVDOMNodes;