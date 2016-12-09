module.exports = {
    getInitialState: function(input) {
        return {
            name: input.name
        };
    },
    setName: function(newName) {
        this.setState('name', newName);
    }
};