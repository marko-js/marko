module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState: function() {
        return {
            'evil': '</script><script>alert("hello")</script>'
        };
    },

    getWidgetConfig: function() {
        return {
            'evil': '</script><script>alert("hello")</script>'
        };
    },

    init: function(widgetConfig) {
        this.widgetConfig = widgetConfig;
        window.fooWidget = this;
    }
});