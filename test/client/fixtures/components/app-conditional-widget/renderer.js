var template = require('marko').load(require.resolve('./template.marko'));
var widgetPath = require.resolve('./widget');

module.exports = function(input, out) {
    template.render(
        {
            includeWidget: input.includeWidget,
            widgetPath: widgetPath
        },
        out);

};