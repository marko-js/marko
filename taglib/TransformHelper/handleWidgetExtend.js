module.exports = function handleWidgetExtend() {
    var props = this.nodeProps;

    var widgetExtend = props['w-extend'];
    if (widgetExtend == null) {
        return;
    }

    var node = this.node;

    var widgetArgs = this.getWidgetArgs();
    var template = this.template;

    if (widgetExtend === '') {
        widgetExtend = this.getDefaultWidgetModule();
        if (!widgetExtend) {
            node.addError('Unable to find default widget module when using w-extend without a value');
            return;
        }
    }

    node.data.widgetExtend = true;

    node.addNestedVariable('widget');

    var extendConfig = props['w-config'];

    if (extendConfig) {
        extendConfig = template.makeExpression(extendConfig);
    } else {
        extendConfig = template.makeExpression('data.widgetConfig');
    }

    var extendState = props['w-state'];

    if (extendState) {
        extendState = template.makeExpression(extendState);
    } else {
        extendState = template.makeExpression('data.widgetState');
    }

    widgetArgs.setExtend(
            this.registerWidgetType(widgetExtend),
            extendConfig,
            extendState);

    // Do some cleanup
    delete props['w-extend'];
    delete props['w-config'];
    delete props['w-state'];
};