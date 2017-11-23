module.exports = {
    onInput: function (input) {
        this.state = {
            name: input.name,
            age: input.age
        };
    },
    getName: function () {
        return this.getEl('name').innerHTML;
    },
    getAge: function () {
        return this.getEl('age').innerHTML;
    }
};