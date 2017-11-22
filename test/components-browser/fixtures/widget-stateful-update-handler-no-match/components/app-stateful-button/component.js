module.exports = {
    onInput: function (input) {
        this.state = {
            size: input.size || 'normal',
            label: input.label || '(no label)'
        };
    },

    setSize: function (newSize) {
        this.state.size = newSize;
    },

    setLabel: function (newLabel) {
        this.state.label = newLabel;
    }
};