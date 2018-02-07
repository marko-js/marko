module.exports = require('marko/legacy-components').defineComponent({
    template: require('./template.marko'),

    getWidgetConfig: function (input) {
        return {
            string: input.name,
            number: 12,
            boolean: true,
            complex: {
                a: '<\"hello">',
                b: 'test'
            }
        };
    },

    init: function (config) {
        this.config = config;
    }
});