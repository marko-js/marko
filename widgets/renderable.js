var marko = require('marko');

module.exports = function(target, renderer) {
    var rendererFunc = renderer.renderer || renderer.render || renderer;
    var createOut = renderer.createOut || marko.createOut;

    target.renderer = rendererFunc;
    target.render = function(input) {
        var out = createOut();
        rendererFunc(input, out);
        return out.end();
    };
};