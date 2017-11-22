module.exports = {
    onInput: function (input) {
        this.state = {
            heading: input.heading || '',
            message: input.message || '',
            colors: input.colors || []
        };
    }
};