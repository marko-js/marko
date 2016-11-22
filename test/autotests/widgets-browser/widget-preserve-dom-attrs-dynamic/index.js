var expect = require('chai').expect;

module.exports = require('marko/widgets').defineComponent({
    template: require('./template.marko'),
    init: function() {
    },
    getInitialState: function(input) {
        return {
            className: input.className
        };
    },

    getTemplateData: function(state) {
        return state;
    }
});