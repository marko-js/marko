module.exports = {
    onInput: function(input) {
        this.state = {
            name: 'app-foo'
        };
    },

    onMount: function(widgetConfig) {
        window.fooWidget = this;
    }
};