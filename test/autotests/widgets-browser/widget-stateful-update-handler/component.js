module.exports = {
    onInput: function(input) {
        this.state = {
            buttonSize: 'small',
            buttonLabel: 'Initial Label'
        };
    },

    update_buttonSize: function(newSize) {
        var button1Widget = this.getWidget('button1');
        button1Widget.setSize(newSize);
    }
};