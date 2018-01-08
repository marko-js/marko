var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function (input, out) {
    var viewModel = {};
    template.render(viewModel, out);
};