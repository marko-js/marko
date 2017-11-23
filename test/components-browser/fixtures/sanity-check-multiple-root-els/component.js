module.exports = {
    onInput: function (input) {
        this.state = {
            name: input.name,
            age: input.age,
            url: input.url
        };
    },
    setName: function (newName) {
        this.setState('name', newName);
    },
    setAge: function (newAge) {
        this.setState('age', newAge);
    },
    setUrl: function (newUrl) {
        this.setState('url', newUrl);
    }
};