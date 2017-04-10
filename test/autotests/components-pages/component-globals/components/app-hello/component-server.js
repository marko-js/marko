var foo = require('./path/to/foo');

module.exports = {
    onServerCreate(input, out) {
        this.foo = foo.getValue(out);
    }
};
