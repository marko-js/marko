module.exports = {
    getTemplateData: function(state, input) {
        return {
            name: input.name.toUpperCase()
        };
    }
};