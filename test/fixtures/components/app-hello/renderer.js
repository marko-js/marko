var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function(input, out) {
    template.render(
        {
            name: input.name,
            widgetConfig: {
                name: input.name
            }
        },
        out);

};