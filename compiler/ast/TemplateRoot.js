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

class TemplateRoot extends Node {
    constructor(def) {
        super('TemplateRoot');
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var context = codegen.context;

        this.body = codegen.generateCode(this.body);

        context.optimize(this);

        var body = this.body;

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

            var templateExports = builder.parseStatement(`(module.exports = require("${context.getModuleRuntimeTarget()}").c(__filename)).c(create)`);

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