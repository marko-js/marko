module.exports = {
    onInput: function (input) {
        this.state = {
            size: input.size || 'normal',
            variant: input.variant || 'primary'
        };
    }
};