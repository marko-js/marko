module.exports = {
    onInput: function (input) {
        this.state = {
            size: input.size || 'normal',
            label: input.label || '(no label)'
        };
    }
};