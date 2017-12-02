var template = require('./template.marko');

module.exports = function renderer(input, out) {
    template.render({}, out);
};