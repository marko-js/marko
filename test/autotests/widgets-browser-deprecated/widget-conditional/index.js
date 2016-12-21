module.exports = require('marko/widgets/legacy').defineComponent({
    template: require('./template.marko'),

    getTemplateData: function(state, input) {
        return {
            includeWidget: input.includeWidget
        };
    },

    init: function() {

    }
});