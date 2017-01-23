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
        this.extraRenderParams = null;
        this.generateAssignRenderCode = null;
    }

    addRenderFunctionParam(id) {
        if (!this.extraRenderParams) {
            this.extraRenderParams = [];
        }

        this.extraRenderParams.push(id);
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
            var isBrowser = context.options.browser;
            var createArgs = isBrowser ?
                [] :
                [ builder.identifier('__filename') ];

            let templateDeclaration = builder.variableDeclarator('marko_template',
                builder.assignment(
                    builder.moduleExports(),
                    builder.functionCall(
                        builder.memberExpression(
                            builder.require(
                                builder.literal(context.getModuleRuntimeTarget())
                            ),
                            builder.identifier('t')
                        ),
                        createArgs
                    )
                )
            );

            let body = [];

            let staticNodes = context.getStaticNodes([templateDeclaration]);
            if (staticNodes.length) {
                body = body.concat(staticNodes);
            }

            var renderParams = [builder.identifier('data'), builder.identifierOut()];
            if (this.extraRenderParams) {
                renderParams = renderParams.concat(this.extraRenderParams);
            }

            let renderFunction = builder.functionDeclaration(
                'render',
                renderParams,
                renderStatements);

            body = body.concat([
                renderFunction,
            ]);

            var assignRenderCode;

            let templateVar = builder.identifier('marko_template');
            let renderFunctionVar = builder.identifier('render');
            let templateRendererMember = builder.memberExpression(
                builder.identifier('marko_template'),
                builder.identifier('_'));

            if (this.generateAssignRenderCode) {
                var eventArgs = {
                    context,
                    templateVar,
                    templateRendererMember,
                    renderFunctionVar
                };

                assignRenderCode = this.generateAssignRenderCode(eventArgs);
            } else {

                assignRenderCode = builder.assignment(
                    templateRendererMember,
                    renderFunctionVar);
            }

            if (assignRenderCode) {
                body = body.concat(assignRenderCode);
            }

            if (context.useMeta && context.meta) {
                body.push(builder.assignment(
                    builder.memberExpression(builder.identifier('marko_template'), builder.identifier('meta')),
                    builder.literal(context.meta)));
            }

            return builder.program(body);
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