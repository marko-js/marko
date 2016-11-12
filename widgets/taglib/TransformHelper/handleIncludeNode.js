'use strict';

module.exports = function(includeNode) {
    var builder = this.builder;
    var context = this.context;

    let widgetTagNode = this.getContainingWidgetNode();
    if (!widgetTagNode) {
        return;
    }

    var parentNode = includeNode.parentNode;

    var parentTransformHelper;

    parentNode._normalizeChildTextNodes(context);

    if (parentNode.childCount === 1) {
        parentTransformHelper = this.getTransformHelper(parentNode);

        if (includeNode.argument) {
            var widgetIdInfo = parentTransformHelper.assignWidgetId(true /* repeated */);
            if (!widgetIdInfo.idVarNode) {
                let idVarNode = widgetIdInfo.createIdVarNode();
                parentNode.onBeforeGenerateCode((event) => {
                    event.insertCode(idVarNode);
                });
            }
        } else {
            parentTransformHelper.assignWidgetId(false /* not repeated */);
            widgetTagNode.setAttributeValue('body', parentTransformHelper.getNestedIdExpression());
        }
    }

    includeNode.generateCodeForDynamicInclude = (options, codegen) => {
        var target = options.target;
        var data = options.data;

        if (!target) {
            target = builder.memberExpression(builder.identifier('data'), builder.identifier('widgetBody'));
        }

        if (!data) {
            data = builder.literal(null);
        }

        let includeVar = context.importModule('marko_widget_include', this.getMarkoWidgetsRequirePath('marko/widgets/taglib/helpers/include'));

        let includeArgs = [
            target,
            builder.identifierOut(),
            data
        ];

        if (parentTransformHelper) {
            includeArgs = includeArgs.concat([
                parentTransformHelper.getIdExpression(),
                builder.identifier('widget')
            ]);
        }

        return builder.functionCall(includeVar, includeArgs);
    };
};