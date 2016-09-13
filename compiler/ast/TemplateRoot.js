'use strict';
var Node = require('./Node');

function createVarsArray(vars) {
    return Object.keys(vars).map(function(varName) {
        var varInit = vars[varName];
        return {
            id: varName,
            init: varInit
        };
    });
}

var templateExports = null;

class TemplateRoot extends Node {
    constructor(def) {
        super('TemplateRoot');
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var context = codegen.context;

        var body = codegen.generateCode(this.body);

        var templateRootBodyEvent = {
            body,
            context
        };

        // Emit an event to give code generators one more chance to optimize/finalize the AST
        // before the final AST is returned. This VDOM AST nodes use this event to otpimize
        // the AST by separating out static subtrees
        context.emit('afterTemplateRootBodyGenerated', templateRootBodyEvent);

        body = templateRootBodyEvent.body;

        var builder = codegen.builder;

        let renderStatements = [];
        var vars = createVarsArray(context.getVars());
        if (vars.length) {
            renderStatements.push(builder.vars(vars));
        }

        renderStatements = renderStatements.concat(body);

        if (context.inline) {
            var createInlineMarkoTemplateVar = context.importModule('marko_createInlineTemplate', 'marko/runtime/inline');

            return builder.functionCall(
                createInlineMarkoTemplateVar,
                [
                    builder.identifier('__filename'),
                    builder.functionDeclaration(
                        null,
                        [
                            builder.identifier('data'),
                            builder.identifierOut()
                        ],
                        renderStatements)
                ]);
        } else {
            let createStatements = [];
            let staticNodes = context.getStaticNodes();
            if (staticNodes.length) {
                createStatements = createStatements.concat(staticNodes);
            }

            let renderFunction = builder.functionDeclaration(
                'render',
                ['data', builder.identifierOut()],
                renderStatements);

            createStatements.push(builder.returnStatement(renderFunction));

            if (!templateExports) {
                templateExports = builder.parseStatement('(module.exports = require("marko").c(__filename)).c(create)');
            }

            return builder.program([
                builder.functionDeclaration(
                    'create',
                    [
                        context.helpersIdentifier
                    ],
                    createStatements),
                templateExports
            ]);
        }
    }

    toJSON(prettyPrinter) {
        return {
            type: this.type,
            body: this.body
        };
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = TemplateRoot;