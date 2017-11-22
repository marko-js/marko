module.exports = {
    onInput: function (input) {
        this.state = {
            name: input.name,
            age: input.age
        };
    },
    getName: function () {
        return this.els[0].innerHTML;
    },
    getAge: function () {
        return this.els[1].innerHTML;
    }
};