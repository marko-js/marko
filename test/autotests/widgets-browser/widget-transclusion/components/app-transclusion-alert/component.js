module.exports = {

    onInput: function(input) {
        var type = input.type || 'success';

        this.state = {
            type: type
        };
    },

    getInitialBody: function(input) {
        return input.message || input.renderBody;
    },

    setType: function(newType) {
        this.setState('type', newType);
    }
};