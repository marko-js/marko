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

function _buildVersionComment(builder, context) {
    const version = context.compilerVersion;
    const compilerType = context.compilerType;
    return builder.comment(`Compiled using ${compilerType}@${version} - DO NOT EDIT`);
}

class TemplateRoot extends Node {
    constructor(def) {
        super('TemplateRoot');
        this.body = this.makeContainer(def.body);
        this.extraRenderParams = null;
        this.generateAssignRenderCode = null;
        this.moduleCode = undefined;
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

        if (this.moduleCode) {
            return codegen.builder.expression(this.moduleCode);
        }

        context.optimize(this);

        var builder = codegen.builder;

        let renderStatements = [
            builder.var('data', builder.identifier('input'))
        ];
        var vars = createVarsArray(context.getVars());
        if (vars.length) {
            renderStatements.push(builder.vars(vars));
        }

        renderStatements = renderStatements.concat(this.body);

        var renderParams = [builder.identifier('input'), builder.identifierOut()];
        if (this.extraRenderParams) {
            renderParams = renderParams.concat(this.extraRenderParams);
        }

        if (context.inline) {
            var createInlineMarkoTemplateVar = context.helper('createInlineTemplate');

            return builder.functionCall(
                createInlineMarkoTemplateVar,
                [
                    builder.identifier('__filename'),
                    builder.functionDeclaration(
                        null,
                        renderParams,
                        renderStatements)
                ]);
        } else {
            var createArgs = context.useMeta ?
                [ builder.identifier('__filename') ] :
                [];

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

            if (context.writeVersionComment) {
                body.push(_buildVersionComment(builder, context));
            }

            body.push(builder.literal('use strict'));

            let staticNodes = context.getStaticNodes([templateDeclaration]);
            if (staticNodes.length) {
                body = body.concat(staticNodes);
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

    setModuleCode(moduleCode) {
        this.moduleCode = moduleCode;
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
