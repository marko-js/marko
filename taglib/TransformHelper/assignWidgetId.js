function assignWidgetId() {
    var compiler = this.compiler;
    var node = this.node;

    var widgetIdInfo = this.widgetIdInfo;

    if (widgetIdInfo) {
        return this.widgetIdInfo;
    }

    var idAttr;
    var nodeProps = this.nodeProps;

    var nestedIdExpression;
    var idExpression;

    // In order to attach a DOM event listener directly we need to make sure
    // the target HTML element has an ID that we can use to get a reference
    // to the element during initialization. We generate this unique ID
    // at compile-time to allow consistent IDs during rendering.
    // We need to handle the following scenarios:
    //
    // 1) The HTML element already has an "id" attribute
    // 2) The HTML element has a "w-el-id" attribute (we already converted this
    //    to an "id" attribute above)
    // 3) The HTML does not have an "id" or "w-el-id" attribute. We must add
    //    an "id" attribute with a unique ID.

    var widgetId = nodeProps['w-el-id'];

    if (widgetId) {
        var warning = 'The "w-el-id" attribute is deprecated. Use "w-id" instead. ' + node;
        var pos = node.getPosition();
        if (pos) {
            warning += ' at ' + pos;
        }
        delete nodeProps['w-el-id'];
        console.log(warning);
    }

    if (widgetId == null) {
        widgetId = nodeProps['w-id'];
    }

    delete nodeProps['w-id'];

    if (widgetId != null) {

        idExpression = compiler.makeExpression('widget.elId(' +
            widgetId +
            ')');

        // Prefix the unique ID with an exclamation point to make it clear that we
        // we need to resolve the ID as a widget element ID.
        nestedIdExpression = compiler.makeExpression(widgetId);

        if (node.tag) {
            var widgetArgs = this.getWidgetArgs();
            widgetArgs.id = widgetId;
        } else {
            if (node.hasAttribute('id')) {
                node.addError('The "w-id" attribute cannot be used in conjuction with the "id" attribute');
                return;
            }

            node.setAttribute(
                'id',
                idExpression);
        }
    } else if ((idAttr = node.getAttribute('id'))) {
        // Case 1 and 2 -- Using the existing "id" attribute
        // The "id" attribute can be a JavaScript expression or a raw String
        // value. We need a JavaScript expression that can be used to
        // provide the same ID at runtime.

        if (typeof idAttr === 'string') {
            idExpression = compiler.convertType(idAttr, 'string', true);
        } else {
            idExpression = idAttr;
        }


        var widgetElIdExpression = this.node.tag == null ? this.nodeProps['w-id'] : null;

        if (nodeProps['w-bind'] != null || nodeProps['w-extend'] != null) {
            // We have to attach a listener to the root element of the widget
            // We will use an empty string as an indicator that it is the root widget
            // element.
            nestedIdExpression = compiler.makeExpression('""');
        } else if (widgetElIdExpression) {
            // We have to attach a listener to a nested HTML element of the widget
            // that was assigned an ID using "w-id". This ID will not be a fully
            // resolved DOM element ID.
            nestedIdExpression = compiler.makeExpression(widgetElIdExpression.toString());
        } else if (typeof idAttr === 'string') {
            // Convert the raw String to a JavaScript expression. we need to prefix
            // with '#' to make it clear this is a fully resolved element ID
            nestedIdExpression = compiler.makeExpression('"#"+' + idExpression);
        } else {
            // The "id" attribute is already expression but we need to prefix
            // with '#' to make it clear this is a fully resolved element ID
            nestedIdExpression = compiler.makeExpression('"#"+' + idAttr);
        }
    } else {
        // Case 3 - We need to add a unique "id" attribute
        var uniqueElId = this.nextUniqueId();

        // Prefix the unique ID with an exclamation point to make it clear that we
        // we need to resolve the ID as a widget element ID.
        nestedIdExpression = compiler.makeExpression(JSON.stringify(uniqueElId));

        idExpression = compiler.makeExpression('widget.elId("' +
            uniqueElId +
            '")');

        node.setAttribute('id', idExpression);
    }

    this.widgetIdInfo = {
        idExpression: idExpression,
        nestedIdExpression: nestedIdExpression
    };
}

module.exports = assignWidgetId;