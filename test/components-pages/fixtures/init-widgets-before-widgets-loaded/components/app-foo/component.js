module.exports = {
    onInput: function(input) {
        this.state = {
            name: 'app-foo'
        };
    },

    onMount: function() {
        window.fooComponent = this;
    }
};