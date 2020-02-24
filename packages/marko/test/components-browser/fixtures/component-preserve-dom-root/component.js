module.exports = {
    onInput: function(input) {
        this.state = {
            name: input.name,
            messageCount: input.messageCount
        };
    },

    getTemplateData: function(state) {
        return {
            name: state.name,
            messageCount: state.messageCount
        };
    },

    setName: function(newName) {
        this.setState("name", newName);
    }
};
