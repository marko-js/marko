var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function render(input, out) {
    template.render({
            widgetConfig: {
                string: 'world',
                number: 12,
                boolean: true,
                complex: {
                    a: '<\"hello">',
                    b: 'test'
                }
            }
        },
        out);
};