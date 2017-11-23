module.exports = {

    onInput: function (input) {
        this.state = {
            type: input.type || 'success',
            body: input.message || input.renderBody
        };
    },

    setType: function (newType) {
        this.setState('type', newType);
    }
};