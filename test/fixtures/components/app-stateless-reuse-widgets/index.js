module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),

    getTemplateData: function(state, input) {
        return {
            buttonSize: input.buttonSize
        };
    }
});