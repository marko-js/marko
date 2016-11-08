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

        context.emit('beforeGenerateCodeTemplateRoot', this);

        var body = this.body;

        var builder = codegen.builder;

        let renderStatements = [];
        var vars = createVarsArray(context.getVars());
        if (vars.length) {
            renderStatements.push(builder.vars(vars));
        }

        renderStatements = renderStatements.concat(body);

        if (context.inline) {
            var createInlineMarkoTemplateVar = context.helper('createInlineTemplate');

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
            var templateArgs = [
                builder.identifier('__filename')
            ];

            let templateId = builder.identifier('template');

            let body = [
                builder.var(templateId, builder.functionCall(
                    builder.memberExpression(
                        builder.require(
                            builder.literal(context.getModuleRuntimeTarget())
                        ),
                        builder.identifier('c')
                    ),
                    templateArgs
                ))
            ];

            var templateExports = this.generateExports(templateId, context);

            body = body.concat(templateExports);

            let staticNodes = context.getStaticNodes();
            if (staticNodes.length) {
                body = body.concat(staticNodes);
            }

            let renderFunction = builder.functionDeclaration(
                'render',
                ['data', builder.identifierOut()],
                renderStatements);

            body = body.concat([
                renderFunction,
                builder.assignment(
                    builder.memberExpression(builder.identifier('template'), builder.identifier('_')),
                    builder.identifier('render'))
            ]);

            if (context.useMeta && context.meta) {
                body.push(builder.assignment(
                    builder.memberExpression(builder.identifier('template'), builder.identifier('meta')),
                    context.meta));
            }

            return builder.program(body);
        }
    }

    generateExports(template, context) {
        var builder = context.builder;

        return builder.assignment(
            builder.memberExpression('module', 'exports'),
            template
        );
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