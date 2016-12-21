module.exports = {
    onInput: function(input) {
        this.state = {
            colors: input.colors || []
        };
    },
    getTemplateData: function(state, input) {
        return {
            colors: state.colors
        };
    },

    addColor: function(color) {
        this.state.colors.push(color);
        this.setStateDirty('color');
    }
};