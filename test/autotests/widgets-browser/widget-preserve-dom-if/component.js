module.exports = {
    getTemplateData: function(state, input) {
        return {
            preserveCondition: input.preserveCondition,
            renderId: input.renderId || 0
        };
    },
    onMount: function() {
    }
};