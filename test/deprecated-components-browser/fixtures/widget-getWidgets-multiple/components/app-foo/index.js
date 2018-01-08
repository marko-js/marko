module.exports = require('marko/legacy-components').defineComponent({
    template: require('./template.marko'),

    init: function (widgetConfig) {
        this.name = widgetConfig.name;
    },

    getWidgetConfig: function (input) {
        return {
            name: input.name
        };
    }
});