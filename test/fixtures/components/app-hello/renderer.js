var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function(input, out) {
    var className = input['class'] || 'app-hello';

    template.render(
        {
            name: input.name,
            className: className,
            widgetConfig: {
                name: input.name
            }
        },
        out);

};