var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function (input, out) {
    var viewModel = {};
    var config = {
        string: 'world',
        number: 12,
        boolean: true,
        complex: {
            a: '<\"hello">',
            b: 'test'
        }
    };

    viewModel._widgetConfig = config;

    template.render(viewModel, out);
};