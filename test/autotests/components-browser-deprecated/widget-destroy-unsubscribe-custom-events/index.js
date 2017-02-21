module.exports = require('marko/components/legacy').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function(input) {
        return {
        };
    },
    getTemplateData: function(state, input) {
        return {
        };
    },

    destroyButton1: function(size) {
        this.getWidget('button1').destroy();
    },

    getButton1: function() {
        return this.getWidget('button1');
    }
});