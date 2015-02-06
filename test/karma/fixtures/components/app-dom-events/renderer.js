var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function render(input, out) {
    template.render(input, out);
};