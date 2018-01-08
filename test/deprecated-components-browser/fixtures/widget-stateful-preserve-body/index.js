module.exports = require('marko/legacy-components').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function (input) {
        return {
            buttonLabel: 'Initial Button Label'
        };
    },
    getTemplateData: function (state, input) {
        return {
            buttonLabel: state.buttonLabel
        };
    }
});