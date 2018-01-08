module.exports = {
    onInput: function (input) {
        this.state = {
            name: input.name,
            count: input.count,
            className: input['class'],
            foo: 'bar',
            hello: 'world'
        };
    }
};