var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function render(input, out) {
    var label = input.label || 'BAR';
    template.render({
            label: label,
            widgetConfig: {
                label: label
            }
        },
        out);
};