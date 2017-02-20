module.exports = {
    onInput: function(input) {
        this.label = input.label || 'BAR';
    },

    getTemplateData: function(state, input) {
        return {
            label: input.label || 'BAR'
        };
    }
};