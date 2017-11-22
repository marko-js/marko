module.exports = {
    onInput: function (input) {
        this.state = {
            name: input.name,
            age: input.age
        };
    },
    setName: function (newName) {
        this.setState('name', newName);
    },
    setAge: function (newAge) {
        this.setState('age', newAge);
    }
};