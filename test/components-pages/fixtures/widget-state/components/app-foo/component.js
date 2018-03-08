module.exports = {
    onInput: function() {
        this.state = {
            name: "app-foo"
        };
    },

    onMount: function() {
        window.fooComponent = this;
    }
};
