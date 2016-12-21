module.exports = {
    onInput: function() {
        this.name = 'app-foo';
    },

    init: function(widgetConfig) {
        this.widgetConfig = {
            name: this.name
        };
        window.fooWidget = this;
    }
};