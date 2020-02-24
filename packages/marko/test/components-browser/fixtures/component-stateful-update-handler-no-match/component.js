module.exports = {
    onInput: function() {
        this.state = {
            buttonSize: "small",
            buttonLabel: "Initial Label"
        };
    },

    update_buttonSize: function(newSize) {
        var button1Component = this.getComponent("button1");
        button1Component.setSize(newSize);
    }
};
