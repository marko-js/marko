module.exports = require('marko/components/legacy').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function(input) {
        return {
            buttonLabel: 'Initial Button Label'
        };
    },
    getTemplateData: function(state, input) {
        return {
            buttonLabel: state.buttonLabel
        };
    }
});