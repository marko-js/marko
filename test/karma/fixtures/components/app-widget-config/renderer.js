var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function(input, out) {
    var useAttribute = input.useAttribute === true;
    var viewModel = {

    };
    var config = {
        useAttribute: useAttribute,
        string: 'world',
        number: 12,
        boolean: true,
        complex: {
            a: '<\"hello">',
            b: 'test'
        }
    };

    if (useAttribute) {
        viewModel._widgetConfig = config;
    } else {
        viewModel.widgetConfig = config;
    }

    template.render(viewModel, out);
};