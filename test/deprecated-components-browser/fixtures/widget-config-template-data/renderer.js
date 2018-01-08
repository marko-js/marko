var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function (input, out) {
    var templateData = {
        widgetConfig: {
            string: 'world',
            number: 12,
            boolean: true,
            complex: {
                a: '<\"hello">',
                b: 'test'
            }
        }
    };

    template.render(templateData, out);
};