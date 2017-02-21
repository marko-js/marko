module.exports = require('marko/components/legacy').defineComponent({
    template: require('./template.marko'),

    getTemplateData: function(state, input) {
        return {
            includeWidget: input.includeWidget
        };
    },

    init: function() {

    }
});