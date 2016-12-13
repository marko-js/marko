'use strict';

var includeTagForWidgets = require.resolve('../include-tag');

module.exports = function(includeNode) {
    var builder = this.builder;
    var context = this.context;

    if (!this.hasBoundWidgetForTemplate()) {
        return;
    }

    var parentNode = includeNode.parentNode;

    parentNode._normalizeChildTextNodes(context);

    if (parentNode.childCount === 1) {
        let parentTransformHelper = this.getTransformHelper(parentNode);

        if (includeNode.argument) {
            let widgetIdInfo = parentTransformHelper.assignWidgetId(true /* repeated */);
            if (!widgetIdInfo.idVarNode) {
                let idVarNode = widgetIdInfo.createIdVarNode();
                parentNode.onBeforeGenerateCode((event) => {
                    event.insertCode(idVarNode);
                });
            }
        } else {
            parentTransformHelper.assignWidgetId(false /* not repeated */);
            var widgetProps = this.getWidgetProps();
            widgetProps.body = parentTransformHelper.getNestedIdExpression();
        }

        includeNode.setRendererPath(includeTagForWidgets);

        includeNode.onBeforeGenerateCode(function() {
            if (!includeNode.data.includeTarget) {
                includeNode.addProp('_target', builder.memberExpression(builder.identifier('widget'), builder.identifier('body')));
            }

            includeNode.addProp('_widgetId', parentTransformHelper.getIdExpression());
            includeNode.addProp('_arg', builder.identifier('widget'));
        });
    }



    // includeNode.generateCodeForDynamicInclude = (options, codegen) => {
    //     var target = options.target;
    //     var data = options.data;
    //
    //     if (!data) {
    //         data = builder.literal(null);
    //     }
    //
    //     let includeVar = context.importModule('marko_widget_include', this.getMarkoWidgetsRequirePath('marko/widgets/taglib/helpers/include'));
    //
    //     let includeArgs = [
    //         target,
    //         builder.identifierOut(),
    //         data
    //     ];
    //
    //     if (parentTransformHelper) {
    //         includeArgs = includeArgs.concat([
    //             parentTransformHelper.getIdExpression(),
    //
    //         ]);
    //     }
    //
    //     return builder.functionCall(includeVar, includeArgs);
    // };
};