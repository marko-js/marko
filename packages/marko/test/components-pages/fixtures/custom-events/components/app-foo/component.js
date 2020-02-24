module.exports = {
    onMount: function() {
        window.fooComponent = this;
        this.pressEvent = undefined;
    },

    handleButtonPress: function() {
        this.pressEvent = arguments;
    }
};
