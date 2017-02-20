var createRendererFunc = require('../../renderer');

module.exports = function(widgetProps) {
    var renderer = createRendererFunc(
        function(data, out, widget, state) {
            data.$renderBody(out, widget, state);
        },
        widgetProps,
        null);

    return function bindWidget(renderBody, out) {
        renderer({
            $renderBody: renderBody
        }, out);
    };
};