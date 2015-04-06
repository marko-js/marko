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

    // Handle the "w-extend" attribute
    delete props['w-extend'];

    template.addStaticVar('__markoWidgets', 'require("marko-widgets")');
    widgetArgs.extend = this.registerWidgetType(widgetExtend);

    var extendConfig = props['w-config'];

    if (extendConfig) {
        widgetArgs.extendConfig = template.makeExpression(extendConfig);
    } else {
        widgetArgs.extendConfig = template.makeExpression('data.widgetConfig');
    }

    var extendState = props['w-state'];

    if (extendState) {
        widgetArgs.extendState = template.makeExpression(extendState);
    } else {
        widgetArgs.extendState = template.makeExpression('data.widgetState');
    }
};