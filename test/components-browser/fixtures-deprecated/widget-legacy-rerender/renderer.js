var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function render(input, out) {
    template.render({
        label: input.label
    }, out);
};