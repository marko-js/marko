'use strict';

var includeTagForComponents = require.resolve('../include-tag');

module.exports = function(includeNode) {
    var context = this.context;

    if (!this.hasBoundComponentForTemplate()) {
        return;
    }

    var parentNode = includeNode.parentNode;

    if (!parentNode.hasAttribute) {
        return;
    }

    parentNode._normalizeChildTextNodes(context, true /* force trim */);

    if (parentNode.childCount === 1) {
        if (includeNode.hasAttribute('key') || includeNode.hasAttribute('ref')) {
            this.assignComponentId();
        }

        let parentTransformHelper = this.getTransformHelper(parentNode);

        if (includeNode.data.bodySlot) {
            parentTransformHelper.assignComponentId(false /* not repeated */);
            var componentProps = this.getComponentProps();
            componentProps.body = parentTransformHelper.getNestedIdExpression();
        } else {
            let componentIdInfo = parentTransformHelper.assignComponentId(true /* repeated */);
            if (!componentIdInfo.idVarNode) {
                let idVarNode = componentIdInfo.createIdVarNode();
                parentNode.onBeforeGenerateCode((event) => {
                    event.insertCode(idVarNode);
                });
            }
        }

        includeNode.setRendererPath(includeTagForComponents);

        includeNode.onBeforeGenerateCode(function() {
            includeNode.addProp('_elId', parentTransformHelper.getIdExpression());
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
    //     let includeVar = context.importModule('marko_component_include', this.getMarkoComponentsRequirePath('marko/components/taglib/helpers/include'));
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
