module.exports = {
    onInput: function() {
        this.state = {
            counter:0
        };
    },

    increment: function() {
        this.state.counter++;
    },

    onMount: function() {
        window.fooComponent = this;
    }
};