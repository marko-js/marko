var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function (input, out) {
    template.render({}, out);
};