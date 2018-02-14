module.exports = require('marko/legacy-components').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function (input) {
        return {
            colors: input.colors || []
        };
    },
    getTemplateData: function (state, input) {
        return {
            colors: state.colors
        };
    },

    addColor: function (color) {
        this.state.colors.push(color);
        this.setStateDirty('color');
    }
});