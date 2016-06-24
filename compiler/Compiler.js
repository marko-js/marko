'use strict';
var ok = require('assert').ok;
var CodeGenerator = require('./CodeGenerator');
var CompileContext = require('./CompileContext');
var createError = require('raptor-util/createError');
var config = require('./config');
var extend = require('raptor-util/extend');

const FLAG_TRANSFORMER_APPLIED = 'transformerApply';

function transformNode(node, context) {
    try {
        context.taglibLookup.forEachNodeTransformer(node, function (transformer) {
            if (node.isDetached()) {
                return;    //The node might have been removed from the tree
            }
            if (!node.isTransformerApplied(transformer)) {
                //Check to make sure a transformer of a certain type is only applied once to a node
                node.setTransformerApplied(transformer);
                //Mark the node as have been transformed by the current transformer
                context.setFlag(FLAG_TRANSFORMER_APPLIED);
                //Set the flag to indicate that a node was transformed
                // node.compiler = this;
                var transformerFunc = transformer.getFunc();
                transformerFunc.call(transformer, node, context);    //Have the transformer process the node (NOTE: Just because a node is being processed by the transformer doesn't mean that it has to modify the parse tree)
            }
        });
    } catch (e) {
        throw createError(new Error('Unable to compile template at path "' + context.filename + '". Error: ' + e.message), e);
    }
}

function transformTreeHelper(node, context) {
    transformNode(node, context);

    /*
     * Now process the child nodes by looping over the child nodes
     * and transforming the subtree recursively
     *
     * NOTE: The length of the childNodes array might change as the tree is being performed.
     *       The checks to prevent transformers from being applied multiple times makes
     *       sure that this is not a problem.
     */
    node.forEachChild(function (childNode) {
        transformTreeHelper(childNode, context);
    });
}

function transformTree(rootNode, context) {
    /*
     * The tree is continuously transformed until we go through an entire pass where
     * there were no new nodes that needed to be transformed. This loop makes sure that
     * nodes added by transformers are also transformed.
     */
    do {
        context.clearFlag(FLAG_TRANSFORMER_APPLIED);
        //Reset the flag to indicate that no transforms were yet applied to any of the nodes for this pass
        transformTreeHelper(rootNode, context);    //Run the transforms on the tree
    } while (context.isFlagSet(FLAG_TRANSFORMER_APPLIED));

    return rootNode;
}

class Compiler {
    constructor(options) {
        ok(options, '"options" is required');

        this.builder = options.builder;
        this.parser = options.parser;

        ok(this.builder, '"options.builder" is required');
        ok(this.parser, '"options.parser" is required');
    }

    compile(src, filename, userOptions) {
        ok(typeof src === 'string', '"src" argument should be a string');
        ok(filename, '"filename" argument is required');
        ok(typeof filename === 'string', '"filename" argument should be a string');

        var context = new CompileContext(src, filename, this.builder);
        var options = {};

        extend(options, config);

        if (userOptions) {
            extend(options, userOptions);
        }

        if (options.preserveWhitespace) {
            context.setPreserveWhitespace(true);
        }

        var codeGenerator = new CodeGenerator(context);

        // STAGE 1: Parse the template to produce the initial AST
        var ast = this.parser.parse(src, context);

        // Trim start and end whitespace for the root node
        ast._normalizeChildTextNodes(codeGenerator, true /* trim start and end */, true /* force */);

        context.root = ast;
        // console.log('ROOT', JSON.stringify(ast, null, 2));

        // STAGE 2: Transform the initial AST to produce the final AST
        var transformedAST = transformTree(ast, context);
        // console.log('transformedAST', JSON.stringify(ast, null, 2));

        // Trim start and end whitespace for the root node (again, after the transformation)
        transformedAST._normalizeChildTextNodes(codeGenerator, true /* trim start and end */, true /* force */);

        // STAGE 3: Generate the code using the final AST

        codeGenerator.generateCode(transformedAST);

        // If there were any errors then compilation failed.
        if (context.hasErrors()) {
            var errors = context.getErrors();

            var message = 'An error occurred while trying to compile template at path "' + filename + '". Error(s) in template:\n';
            for (var i = 0, len = errors.length; i < len; i++) {
                let error = errors[i];
                message += (i + 1) + ') ' + error.toString() + '\n';
            }
            var error = new Error(message);
            error.errors = errors;
            throw error;
        }

        // Return the generated code as the compiled output:
        var compiledSrc = codeGenerator.getCode();
        return compiledSrc;
    }
}

module.exports = Compiler;