module.exports = require('marko/widgets/legacy').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function(input) {
        return {
            buttonSize: 'small',
            buttonLabel: 'Initial Label'
        };
    },
    getTemplateData: function(state, input) {
        return {
            buttonSize: state.buttonSize,
            buttonLabel: state.buttonLabel
        };
    },

    update_buttonSize: function(newSize) {
        var button1Widget = this.getWidget('button1');
        button1Widget.setSize(newSize);
    }
});