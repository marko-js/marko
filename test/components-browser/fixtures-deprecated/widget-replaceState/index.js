module.exports = require('marko/legacy-components').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function (input) {
        return {
            heading: input.heading || '',
            message: input.message || '',
            colors: input.colors || []
        };
    },
    getTemplateData: function (state, input) {
        return {
            heading: state.heading,
            message: state.message,
            colors: state.colors
        };
    }
});