module.exports = {
    onInput: function() {
        this.state = {
            type: 'state',
            name: 'foo'
        };
        this.type = 'config';
        this.name = 'foo';
    },

    init: function() {
        window.fooWidget = this;
        this.widgetConfig = {
            type: this.type,
            name: this.name
        };
    }
};