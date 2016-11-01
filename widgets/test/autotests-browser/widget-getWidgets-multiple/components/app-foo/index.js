module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    init: function(widgetConfig) {
        this.name = widgetConfig.name;
    },

    getWidgetConfig: function(input) {
        return {
            name: input.name
        };
    }
});