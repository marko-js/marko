var expect = require('chai').expect;

module.exports = require('marko/components/legacy').defineComponent({
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