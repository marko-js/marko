module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState: function() {
        return {
            type: 'state',
            name: 'foo'
        };
    },

    getWidgetConfig: function() {
        return {
            type: 'config',
            name: 'foo'
        };
    },

    init: function(widgetConfig) {
        window.fooWidget = this;
        this.widgetConfig = widgetConfig;
    }
});