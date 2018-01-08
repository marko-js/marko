module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState: function() {
        return {
            name: 'app-foo'
        };
    },

    init: function(widgetConfig) {
        window.fooWidget = this;
        this.mouseMoveEvent = null;
        this.clickEvent = null;
    },

    handleButtonMouseMove: function() {
        this.mouseMoveEvent = arguments;
    },

    handleButtonClick: function() {
        this.clickEvent = arguments;
    }
});