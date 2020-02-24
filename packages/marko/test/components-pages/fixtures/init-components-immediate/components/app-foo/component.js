module.exports = {
    onInput: function() {
        this.state = {
            type: "state",
            name: "foo"
        };
        this.type = "config";
        this.name = "foo";
    },

    onMount: function() {
        window.fooComponent = this;
        this.componentConfig = {
            type: this.type,
            name: this.name
        };
    }
};
