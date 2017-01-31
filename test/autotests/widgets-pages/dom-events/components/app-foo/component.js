module.exports = {

    onInput: function(input) {
        this.state = {
            name: 'app-foo'
        };
    },

    onMount: function() {
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
};