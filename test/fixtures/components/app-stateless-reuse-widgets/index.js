module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),

    getTemplateData: function(state, input) {
        return {
            buttonSize: input.buttonSize
        };
    }
});