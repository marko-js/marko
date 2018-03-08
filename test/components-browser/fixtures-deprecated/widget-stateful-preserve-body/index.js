module.exports = require('marko/legacy-components').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function () {
        return {
            buttonLabel: 'Initial Button Label'
        };
    },
    getTemplateData: function (state) {
        return {
            buttonLabel: state.buttonLabel
        };
    }
});