module.exports = {
    onInput: function (input) {
        this.state = {
            name: input.name
        };
    },
    setName: function (newName) {
        this.setState('name', newName);
    }
};