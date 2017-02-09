'use strict';

module.exports = function assignWidgetId(isRepeated) {

    // First check if we have already assigned an ID to thie element
    var widgetIdInfo = this.widgetIdInfo;

    if (widgetIdInfo) {
        return this.widgetIdInfo;
    }

    var el = this.el;
    var context = this.context;
    var builder = this.builder;

    let widgetRef;
    var nestedIdExpression;
    var idExpression;

    if (!this.hasBoundWidgetForTemplate()) {
        // We are assigning a widget ID to a nested widget in a template that does not have a widget.
        // That means we do not have access to the parent widget variable as part of a closure. We
        // need to look it up out of the `out.data` map
        if (!context.isFlagSet('hasWidgetVar')) {
            context.setFlag('hasWidgetVar');

            var getCurrentWidgetVar = context.importModule('marko_getCurrentWidget',
                this.getMarkoWidgetsRequirePath('marko/widgets/taglib/helpers/getCurrentWidget'));

            context.addVar('widget', builder.functionCall(getCurrentWidgetVar, [builder.identifierOut()]));
        }
    }

    // In order to attach a DOM event listener directly we need to make sure
    // the target HTML element has an ID that we can use to get a reference
    // to the element during initialization. We generate this unique ID
    // at compile-time to allow consistent IDs during rendering.
    // We need to handle the following scenarios:
    //
    // 1) The HTML element already has an "id" attribute
    // 2) The HTML element has a "ref" or "w-id" attribute (we already converted this
    //    to an "id" attribute above)
    // 3) The HTML does not have an "id" or "ref" attribute. We must add
    //    an "id" attribute with a unique ID.

    var isCustomTag = el.type !== 'HtmlElement';

    if (el.hasAttribute('key')) {
        widgetRef = el.getAttributeValue('key');
        el.removeAttribute('key');
    } else if (el.hasAttribute('ref')) {
        context.deprecate('The "ref" attribute is deprecated. Please use "key" instead.');
        widgetRef = el.getAttributeValue('ref');
        el.removeAttribute('ref');
    }

    if (el.hasAttribute('w-id')) {
        context.deprecate('The "w-id" attribute is deprecated. Please use "key" instead.');

        if (widgetRef) {
            this.addError('The "w-id" attribute cannot be used in conjuction with the "ref" or "key" attributes.');
            return;
        }

        widgetRef = el.getAttributeValue('w-id');

        el.removeAttribute('w-id');
    }

    if (widgetRef) {
        idExpression = this.buildWidgetElIdFunctionCall(widgetRef);

        nestedIdExpression = widgetRef;

        if (isCustomTag) {
            // The element is a custom tag
            this.getWidgetArgs().setId(nestedIdExpression);
        } else {
            if (el.hasAttribute('id')) {
                this.addError('The "ref", "key", and "w-id" attributes cannot be used in conjuction with the "id" attribute.');
                return;
            }
            el.setAttributeValue('id', idExpression);
        }
    } else if (el.hasAttribute('id')) {
        idExpression = el.getAttributeValue('id');

        if (el.isFlagSet('hasWidgetBind')) {
            // We have to attach a listener to the root element of the widget
            // We will use an empty string as an indicator that it is the root widget
            // element.
            nestedIdExpression = builder.literal('');
        } else {
            // Convert the raw String to a JavaScript expression. we need to prefix
            // with '#' to make it clear this is a fully resolved element ID
            nestedIdExpression = builder.concat(
                builder.literal('#'),
                idExpression);
        }
    } else {
        // Case 3 - We need to add a unique "id" attribute
        let uniqueElId = this.nextUniqueId();

        nestedIdExpression = isRepeated ? builder.literal(uniqueElId + '[]') : builder.literal(uniqueElId);

        idExpression = this.buildWidgetElIdFunctionCall(nestedIdExpression);

        if (isCustomTag) {
            this.getWidgetArgs().setId(nestedIdExpression);
        } else {
            el.setAttributeValue('id', idExpression);
        }
    }

    var transformHelper = this;

    this.widgetIdInfo = {
        idExpression: idExpression,
        nestedIdExpression: nestedIdExpression,
        idVarNode: null,
        createIdVarNode: function() {
            if (this.idVarNode) {
                return this.idVarNode;
            }

            let uniqueElId = transformHelper.nextUniqueId();
            let idVarName = '__widgetId' + uniqueElId;
            let idVar = builder.identifier(idVarName);

            this.idVarNode = builder.vars([
                {
                    id: idVarName,
                    init: idExpression
                }
            ]);

            this.idExpression = idExpression = idVar;

            this.nestedIdExpression = nestedIdExpression = builder.concat(
                builder.literal('#'),
                idVar);

            if (isCustomTag) {
                transformHelper.getWidgetArgs().setId(nestedIdExpression);
            } else {
                el.setAttributeValue('id', idExpression);
            }

            return this.idVarNode;
        }
    };

    return this.widgetIdInfo;
};
