module.exports = {
    getInitialState: function(input) {
        return {
            name: input.name,
            age: input.age
        };
    },
    setName: function(newName) {
        this.setState('name', newName);
    },
    setAge: function(newAge) {
        this.setState('age', newAge);
    }
};