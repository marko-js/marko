'use strict';
var ok = require('assert').ok;
var HtmlJsParser = require('./HtmlJsParser');
var CodeGenerator = require('./CodeGenerator');
var Builder = require('./Builder');
var path = require('path');
var taglibLookup = require('./taglib-lookup');
var createError = require('raptor-util/createError');
var deresolve = require('./util/deresolve');

function transformNode(compiler, node) {
    try {
        compiler.taglibLookup.forEachNodeTransformer(node, function (transformer) {
            if (!node.isTransformerApplied(transformer)) {
                //Check to make sure a transformer of a certain type is only applied once to a node
                node.setTransformerApplied(transformer);
                //Mark the node as have been transformed by the current transformer
                compiler._transformerApplied = true;
                //Set the flag to indicate that a node was transformed
                // node.compiler = this;
                var transformerFunc = transformer.getFunc();
                transformerFunc.call(transformer, node, compiler);    //Have the transformer process the node (NOTE: Just because a node is being processed by the transformer doesn't mean that it has to modify the parse tree)
            }
        });
    } catch (e) {

        throw createError(new Error('Unable to compile template at path "' + compiler.filename + '". Error: ' + e.message), e);
    }
}

function transformTreeHelper(compiler, node) {
    transformNode(compiler, node);

    /*
     * Now process the child nodes by looping over the child nodes
     * and transforming the subtree recursively
     *
     * NOTE: The length of the childNodes array might change as the tree is being performed.
     *       The checks to prevent transformers from being applied multiple times makes
     *       sure that this is not a problem.
     */
    node.forEachChild(function (childNode) {
        if (childNode.isDetached()) {
            return;    //The child node might have been removed from the tree
        }
        transformTreeHelper(compiler, childNode);
    });
}

function transformTree(compiler, rootNode) {
    /*
     * The tree is continuously transformed until we go through an entire pass where
     * there were no new nodes that needed to be transformed. This loop makes sure that
     * nodes added by transformers are also transformed.
     */
    do {
        compiler._transformerApplied = false;
        //Reset the flag to indicate that no transforms were yet applied to any of the nodes for this pass
        transformTreeHelper(compiler, rootNode);    //Run the transforms on the tree
    } while (compiler._transformerApplied);

    return rootNode;
}

class Compiler {
    constructor(options) {
        options = options || {};

        this.builder = options.builder || new Builder();
        this.parser = options.parser;

        if (!this.parser) {
            this.parser = new HtmlJsParser({
                compiler: this
            });
        }

        this.codeGenerator = options.codeGenerator || new CodeGenerator({
            builder: this.builder
        });

        this._reset();
    }

    _reset() {
        this.filename = undefined;
        this.dirname = undefined;
        this.codeGenerator.compiler = undefined;
        this.taglibLookup = null;
    }

    compile(src, filename) {
        ok(src);
        ok(filename);

        this._reset();

        this.filename = filename;
        this.dirname = path.dirname(filename);
        this.codeGenerator.compiler = this;
        this.taglibLookup = taglibLookup.buildLookup(this.dirname);

        var ast = this.parser.parse(src, this.filename);

        // console.log('ROOT', JSON.stringify(ast, null, 2));
        var transformedAST = transformTree(this, ast);
        // console.log('transformedAST', JSON.stringify(ast, null, 2));

        var self = this;

        var compiledSrc = this.codeGenerator.generateCode(transformedAST, {
            onError: function(eventArgs) {
                var node = eventArgs.node;
                var message = eventArgs.message;
                self.addError(node, message);
            }
        });
        return compiledSrc;
    }

    addError(node, message) {
        throw new Error('addError() not fully implemented. Error: ' + message); // TODO
    }

    getRequirePath(targetFilename) {
        return deresolve(targetFilename, this.dirname);
    }
}

module.exports = Compiler;