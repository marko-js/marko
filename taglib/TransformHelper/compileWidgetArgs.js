var isObjectEmpty = require('raptor-util/isObjectEmpty');

module.exports = function compileWidgetArgs() {
    var node = this.node;
    var template = this.template;

    if (this.widgetArgs && !isObjectEmpty(this.widgetArgs)) {

        template.addStaticVar('_widgetArgs',
            'require("marko-widgets/taglib/helpers").widgetArgs');

        template.addStaticVar('_cleanupWidgetArgs',
            'require("marko-widgets/taglib/helpers").cleanupWidgetArgs');

        var widgetArgs = this.getWidgetArgs();

        node.addBeforeCode(function() {

            // Make sure the nested widget has access to the ID of the containing
            // widget if it is needed
            var shouldProvideScope = widgetArgs.id || widgetArgs.customEvents;

            var widgetArgsParts = [shouldProvideScope ? 'widget.id' : 'null'];

            if (widgetArgs.id != null) {
                widgetArgsParts.push(widgetArgs.id.toString());
            } else {
                widgetArgsParts.push('null');
            }

            if (widgetArgs.customEvents) {
                widgetArgsParts.push('[' + widgetArgs.customEvents.join(',') + ']');
            }

            if (widgetArgs.extend) {
                if (!widgetArgs.customEvents) {
                    widgetArgsParts.push('null');
                }

                widgetArgsParts.push(widgetArgs.extend);
                widgetArgsParts.push(widgetArgs.extendConfig);
                widgetArgsParts.push(widgetArgs.extendState);
            }

            return template.makeExpression('_widgetArgs(out, ' + widgetArgsParts.join(', ') + ');');
        });
        node.addAfterCode(template.makeExpression('_cleanupWidgetArgs(out);'));
    }
};