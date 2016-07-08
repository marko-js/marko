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

    handleButtonMouseMove: function(event, el) {
        this.mouseMoveEvent = {event: event, el: el};
    },

    handleButtonClick: function(event, el) {
        this.clickEvent = {event: event, el: el};
    }
});