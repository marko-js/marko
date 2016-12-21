module.exports = {
    onInput: function(input) {
        this.state = {
            'evil': '</script><script>alert("hello")</script>'
        };

        this.evil = '</script><script>alert("hello")</script>';
    },

    init: function(widgetConfig) {
        this.widgetConfig = {
            evil: this.evil
        };
        window.fooWidget = this;
    }
};