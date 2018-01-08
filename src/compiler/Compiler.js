'use strict';
var ok = require('assert').ok;
var path = require('path');
var CodeGenerator = require('./CodeGenerator');
var CodeWriter = require('./CodeWriter');
var createError = require('raptor-util/createError');
var resolveDep = require('../components/legacy/dependencies').resolveDep;

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
                //Set the current node
                context._currentNode = node;
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

    context.taglibLookup.forEachTemplateTransformer((transformer) => {
        var transformFunc = transformer.getFunc();
        rootNode = transformFunc(rootNode, context) || rootNode;
    });

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

function handleErrors(context) {
    // If there were any errors then compilation failed.
    if (context.hasErrors()) {
        var errors = context.getErrors();

        var message = 'An error occurred while trying to compile template at path "' + context.filename + '". Error(s) in template:\n';
        for (var i = 0, len = errors.length; i < len; i++) {
            let error = errors[i];
            message += (i + 1) + ') ' + error.toString() + '\n';
        }
        var error = new Error(message);
        error.errors = errors;
        throw error;
    }
}

class CompiledTemplate {
    constructor(ast, context, codeGenerator) {
        this.ast = ast;
        this.context = context;
        this.filename = context.filename;
    }

    get meta() {
        return this.context.meta;
    }

    get dependencies() {
        var meta = this.context.meta;
        if (meta) {
            var root = path.dirname(this.filename);
            return (meta.deps || []).map(dep => resolveDep(dep, root));
        } else {
            return [];
        }
    }

    get code() {
        // STAGE 3: Generate the code using the final AST
        handleErrors(this.context);

        // console.log(module.id, 'FINAL AST:' + JSON.stringify(finalAST, null, 4));
        var codeWriter = new CodeWriter(this.context.options, this.context.builder);
        codeWriter.write(this.ast);

        handleErrors(this.context);

        // Return the generated code as the compiled output:
        var compiledSrc = codeWriter.getCode();
        return compiledSrc;
    }
}

class Compiler {
    constructor(options, userOptions, inline) {
        ok(options, '"options" is required');

        this.builder = options.builder;
        this.parser = options.parser;

        ok(this.builder, '"options.builder" is required');
        ok(this.parser, '"options.parser" is required');
    }

    compile(src, context) {
        ok(typeof src === 'string', '"src" argument should be a string');

        var codeGenerator = new CodeGenerator(context);

        // STAGE 1: Parse the template to produce the initial AST
        var ast = this.parser.parse(src, context);
        context._parsingFinished = true;

        if (!context.ignoreUnrecognizedTags && context.unrecognizedTags) {
            for(let i=0; i<context.unrecognizedTags.length; i++) {
                let unrecognizedTag = context.unrecognizedTags[i];
                // See if the tag is a macro
                if (!context.isMacro(unrecognizedTag.tagName)) {
                    context.addErrorUnrecognizedTag(unrecognizedTag.tagName, unrecognizedTag.node);
                }
            }
        }

        handleErrors(context);

        context.root = ast;
        // console.log('ROOT', JSON.stringify(ast, null, 2));

        // STAGE 2: Transform the initial AST to produce the final AST
        var transformedAST = transformTree(ast, context);
        // console.log('transformedAST', JSON.stringify(ast, null, 2));

        handleErrors(context);

        var finalAST = codeGenerator.generateCode(transformedAST);

        handleErrors(context);

        return new CompiledTemplate(finalAST, context);
    }
}

module.exports = Compiler;
