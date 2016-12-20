var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function(input, out) {
    var label = input.label || 'BAR';
    template.render({
            label: label,
            widgetConfig: {
                label: label
            }
        },
        out);
};

module.exports = {
    onInput: function(input) {
        var label = input.label || 'BAR';
        this.label = label;
    }
};