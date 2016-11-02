var expect = require('chai').expect;

module.exports = require('marko/widgets').defineComponent({
    template: require('./template.marko'),
    init: function() {
    },
    getInitialState: function() {
        return {
            name: 'Joe'
        };
    },

    getTemplateData: function(state) {
        return state;
    }
});