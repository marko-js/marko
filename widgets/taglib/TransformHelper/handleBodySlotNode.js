'use strict';

var includeTagForWidgets = require.resolve('../include-tag');

module.exports = function(bodySlotNode) {
    if (!this.hasBoundWidgetForTemplate()) {
        return;
    }

    var context = this.context;
    var builder = this.builder;

    var parentNode = bodySlotNode.parentNode;

    parentNode._normalizeChildTextNodes(context);

    if (parentNode.childCount !== 1) {
        throw new Error('TBD');
    }

    let parentTransformHelper = this.getTransformHelper(parentNode);

    let includeNode = context.createNodeForEl('include');
    includeNode.data.bodySlot = true;
    includeNode.addProp('_target', builder.memberExpression(builder.identifier('widget'), builder.identifier('b')));
    includeNode.addProp('_elId', parentTransformHelper.getIdExpression());
    includeNode.addProp('_arg', builder.identifier('widget'));

    parentTransformHelper.assignWidgetId(false /* not repeated */);
    var widgetProps = this.getWidgetProps();
    widgetProps.body = parentTransformHelper.getNestedIdExpression();

    includeNode.setRendererPath(includeTagForWidgets);

    // includeNode.onBeforeGenerateCode(function() {
    //     includeNode.addProp('_elId', parentTransformHelper.getIdExpression());
    //     includeNode.addProp('_arg', builder.identifier('widget'));
    // });

    bodySlotNode.replaceWith(includeNode);
};