module.exports = require('marko/legacy-components').defineComponent({
    template: require('./template.marko'),

    getInitialState: function (input) {
        var type = input.type || 'success';

        return {
            type: type
        };
    },

    getInitialBody: function (input) {
        return input.message || input.renderBody;
    },

    getTemplateData: function (state, input) {
        var type = state.type;

        var className = 'alert alert-' + type;

        return {
            className: className,
            type: type
        };
    },

    setType: function (newType) {
        this.setState('type', newType);
    }
});