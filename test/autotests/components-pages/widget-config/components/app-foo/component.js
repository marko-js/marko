module.exports = {
    onInput: function() {
        this.name = 'app-foo';
    },

    onMount: function(widgetConfig) {
        this.widgetConfig = {
            name: this.name
        };
        window.fooWidget = this;
    }
};