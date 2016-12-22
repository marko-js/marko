module.exports = {
    onInput: function(input) {
        this.state = {
            name: 'app-foo'
        };
    },

    init: function(widgetConfig) {
        window.fooWidget = this;
    }
};