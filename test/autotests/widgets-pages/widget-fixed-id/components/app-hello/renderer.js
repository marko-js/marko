module.exports = {
    onInput: function(input) {
        this.name = input.name;
    },

    getTemplateData: function(state, input) {
        var className = input['class'] || 'app-hello';
        return {
            name: input.name,
            className: className
        };
    }
};