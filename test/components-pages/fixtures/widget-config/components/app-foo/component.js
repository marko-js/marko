module.exports = {
    onInput: function() {
        this.name = 'app-foo';
    },

    onMount: function() {
        this.componentConfig = {
            name: this.name
        };
        window.fooComponent = this;
    }
};