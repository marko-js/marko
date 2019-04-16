var createRendererFunc = require("../../renderer");

module.exports = function(componentProps) {
    var renderer = createRendererFunc(
        function(data, out, component, state) {
            data.$renderBody(out, component, state);
        },
        componentProps,
        null
    );

    return function bindComponent(renderBody, out) {
        renderer(
            {
                $renderBody: renderBody
            },
            out
        );
    };
};
