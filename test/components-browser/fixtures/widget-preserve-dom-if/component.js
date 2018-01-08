module.exports = {
    onInput: function (input) {
        return {
            preserveCondition: input.preserveCondition,
            renderId: input.renderId || 0
        };
    },
    onMount: function () {}
};