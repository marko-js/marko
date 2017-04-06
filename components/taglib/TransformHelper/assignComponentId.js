'use strict';

module.exports = function assignComponentId(isRepeated) {
    // First check if we have already assigned an ID to thie element
    var componentIdInfo = this.componentIdInfo;

    if (componentIdInfo) {
        return this.componentIdInfo;
    }

    var el = this.el;
    var context = this.context;
    var builder = this.builder;

    let componentRef;
    var nestedIdExpression;
    var idExpression;

    if (!this.hasBoundComponentForTemplate()) {
        // We are assigning a component ID to a nested component in a template that does not have a component.
        // That means we do not have access to the parent component variable as part of a closure. We
        // need to look it up out of the `out.data` map
        if (!context.isFlagSet('hasComponentVar')) {
            context.setFlag('hasComponentVar');

            var getCurrentComponentVar = context.importModule('marko_getCurrentComponent',
                this.getMarkoComponentsRequirePath('marko/components/taglib/helpers/getCurrentComponent'));

            context.addVar('__component', builder.functionCall(getCurrentComponentVar, [builder.identifierOut()]));
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
        componentRef = el.getAttributeValue('key');
        el.removeAttribute('key');
    } else if (el.hasAttribute('ref')) {
        context.deprecate('The "ref" attribute is deprecated. Please use "key" instead.');
        componentRef = el.getAttributeValue('ref');
        el.removeAttribute('ref');
    }

    if (el.hasAttribute('w-id')) {
        context.deprecate('The "w-id" attribute is deprecated. Please use "key" instead.');

        if (componentRef) {
            this.addError('The "w-id" attribute cannot be used in conjuction with the "ref" or "key" attributes.');
            return;
        }

        componentRef = el.getAttributeValue('w-id');

        el.removeAttribute('w-id');
    }

    if (componentRef) {
        idExpression = this.buildComponentElIdFunctionCall(componentRef);

        nestedIdExpression = componentRef;

        if (isCustomTag) {
            // The element is a custom tag
            this.getComponentArgs().setId(nestedIdExpression);
        } else {
            if (el.hasAttribute('id')) {
                this.addError('The "ref", "key", and "w-id" attributes cannot be used in conjuction with the "id" attribute.');
                return;
            }
            el.setAttributeValue('id', idExpression);
        }
    } else if (el.hasAttribute('id')) {
        idExpression = el.getAttributeValue('id');

        if (el.isFlagSet('hasComponentBind')) {
            // We have to attach a listener to the root element of the component
            // We will use an empty string as an indicator that it is the root component
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

        idExpression = this.buildComponentElIdFunctionCall(nestedIdExpression);

        if (isCustomTag) {
            this.getComponentArgs().setId(nestedIdExpression);
        } else {
            el.setAttributeValue('id', idExpression);
        }
    }

    var transformHelper = this;

    this.componentIdInfo = {
        idExpression: idExpression,
        nestedIdExpression: nestedIdExpression,
        idVarNode: null,
        createIdVarNode: function() {
            if (this.idVarNode) {
                return this.idVarNode;
            }

            let uniqueElId = transformHelper.nextUniqueId();
            let idVarName = '__componentId' + uniqueElId;
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
                transformHelper.getComponentArgs().setId(nestedIdExpression);
            } else {
                el.setAttributeValue('id', idExpression);
            }

            return this.idVarNode;
        }
    };

    return this.componentIdInfo;
};
