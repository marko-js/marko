module.exports = {
    onInput: function(input) {
        this.label = input.label || 'app-fixed-id';
    },

    getTemplateData: function(state, input) {
        var label = input.label || 'app-fixed-id';
        return {
            label: label
        };
    }
};