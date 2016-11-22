'use strict';

module.exports = function(builder, codegen) {
    var templateRoot = builder.templateRoot([]);

    codegen.context.on('beforeGenerateCode:TemplateRoot', function(root) {
        root.node.generateExports = function(template) {
            return [
                builder.assignment(
                    builder.var('component'),
                    builder.require(
                        builder.literal('./component')
                    )
                ),
                builder.assignment(
                    builder.var('template'),
                    template
                ),
                builder.assignment(
                    builder.memberExpression(
                        builder.identifier('module'),
                        builder.identifier('exports')
                    ),
                    builder.functionCall(
                        builder.memberExpression(
                            builder.require(
                                builder.literal('marko-widgets')
                            ),
                            builder.identifier('c')
                        ),
                        [
                            builder.identifier('component'),
                            builder.identifier('template')
                        ]
                    )
                )
            ];
        };
    });

    return templateRoot;
};