module.exports = require('marko/widgets/legacy').defineComponent({
    template: require('./template.marko'),
    getInitialState: function(input) {
        return {
            buttonSize: input.buttonSize || 'normal'
        };
    },
    getTemplateData: function(state, input) {
        return {
            buttonSize: state.buttonSize
        };
    },

    setButtonSize: function(size) {
        this.setState('buttonSize', size);
    },
    init: function() {
    }
});