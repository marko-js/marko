module.exports = {
    onInput: function (input) {
        this.state = {
            colors: input.colors || []
        };
    },

    addColor: function (color) {
        this.state.colors.push(color);
        this.setStateDirty('color');
    }
};