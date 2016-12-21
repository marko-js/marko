module.exports = require('marko/widgets/legacy').defineComponent({
    template: require('./template.marko'),
    getTemplateData: function(state, input) {
        return {
            preserveCondition: input.preserveCondition,
            renderId: input.renderId || 0
        };
    },
    init: function() {
    }
});