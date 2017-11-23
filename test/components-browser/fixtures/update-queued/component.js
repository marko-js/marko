module.exports = {
    onInput: function (input) {
        this.state = {
            name: input.name
        };
    },
    setName: function (newName) {
        this.state.name = newName;
    }
};