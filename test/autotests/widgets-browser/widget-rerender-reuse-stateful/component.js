module.exports = {
    onInput: function(input) {
        this.state = {
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
    }
};