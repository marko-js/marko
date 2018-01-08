module.exports = require('marko/legacy-components').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function (input) {
        return {
            buttonSize: 'small',
            buttonLabel: 'Initial Label'
        };
    },
    getTemplateData: function (state, input) {
        return {
            buttonSize: state.buttonSize,
            buttonLabel: state.buttonLabel
        };
    },

    update_buttonSize: function (newSize) {
        var button1Widget = this.getWidget('button1');
        button1Widget.setSize(newSize);
        button1Widget.update();
    }
});