var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function (input, out) {
    template.render(input, out);
};