'use strict';

var Node = require('./Node');

function removeWhitespaceNodes(whitespaceNodes) {
    for (var i=0; i<whitespaceNodes.length; i++) {
        whitespaceNodes[i].detach();
    }
    whitespaceNodes.length = 0;
}

class If extends Node {
    constructor(def) {
        super('If');
        this.test = def.test;
        this.body = this.makeContainer(def.body);
        this.else = def.else;
    }

    generateCode(codegen) {

        if (this.else) {
            this.else.matched = true;
        } else {
            // We want to match up any else/else if statements
            // with this node so that we can generate the code
            // correctly.
            let previous = this;
            let whitespaceNodes = [];
            this.forEachNextSibling((curNode) => {
                if (curNode.type === 'Else') {
                    curNode.detach();
                    if (whitespaceNodes.length) {
                        removeWhitespaceNodes(whitespaceNodes);
                    }
                    previous.else = curNode;
                    curNode.matched = true;
                    return false; // Stop searching
                } else if (curNode.type === 'ElseIf') {
                    curNode.detach();
                    if (whitespaceNodes.length) {
                        removeWhitespaceNodes(whitespaceNodes);
                    }

                    previous.else = curNode;
                    previous = curNode;
                    curNode.matched = true;
                    return true; // Keep searching since they may be more ElseIf/Else nodes...
                } else if (curNode.type === 'Text') {
                    if (curNode.isWhitespace()) {
                        whitespaceNodes.push(curNode);
                        return true; // Just whitespace... keep searching
                    } else {
                        return false; // Stop searching
                    }
                } else {
                    return false; // Stop searching
                }
            });
        }

        var test = this.test;
        var body = this.body;

        codegen.write('if (');
        codegen.generateCode(test);
        codegen.write(') ');
        codegen.generateBlock(body);
        if (this.else) {
            codegen.write(' ');
            codegen.generateCode(this.else);
        } else {
            codegen.write('\n');
        }
    }

    appendChild(newChild) {
        this.body.appendChild(newChild);
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.body = walker.walk(this.body);
        this.else = walker.walk(this.else);
    }
}

module.exports = If;