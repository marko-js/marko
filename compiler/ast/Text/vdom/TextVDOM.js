'use strict';

const Node = require('../../Node');
const Literal = require('../../Literal');
const vdomUtil = require('../../../util/vdom');

class TextVDOM extends Node {
    constructor(def) {
        super('TextVDOM');
        this.arguments = [def.argument];
        this.isStatic = def.isStatic;
        this.isHtmlOnly = true;
        this.isChild = false;
        this.createTextId = undefined;
    }

    generateCode(codegen) {
        var context = codegen.context;
        
        // When there are any VDOM nodes in the AST then we need to optimize the intermediate AST
        // before the final AST is returned. We use the "afterTemplateRootBodyGenerated" event
        // to finalize the VDOM AST nodes.
        vdomUtil.attachEventListeners(context);

        return this;
    }

    _append(appendArgument) {
        let args = this.arguments;
        let len = args.length;
        let last = args[len-1];

        if (last instanceof Literal && appendArgument instanceof Literal) {
            last.value += appendArgument.value;
        } else {
            args.push(appendArgument);
        }
    }

    append(textVDOMToAppend) {
        if (!textVDOMToAppend.isStatic) {
            this.isStatic = false;
        }
        textVDOMToAppend.arguments.forEach(this._append, this);
    }

    writeCode(writer) {
        let builder = writer.builder;
        let args = this.arguments;
        let textArg = args[0];
        for (let i=1; i<args.length; i++) {
            textArg = builder.binaryExpression(textArg, '+', args[i]);
        }

        if (this.isChild) {
            let funcCall = builder.functionCall(
                builder.identifier('t'),
                [
                    textArg
                ]);

            writer.write('.');
            writer.write(funcCall);
        } else if (this.isStatic) {
            let funcCall = builder.functionCall(
                this.createTextId,
                [
                    textArg
                ]);

            writer.write(funcCall);
        } else {
            let funcCall = builder.functionCall(
                builder.identifier('t'),
                [
                    textArg
                ]);

            writer.write('out.');
            writer.write(funcCall);
        }


    }
}

module.exports = TextVDOM;