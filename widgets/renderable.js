var marko = require('marko');
var RenderResult = require('../runtime/RenderResult');

module.exports = function(target, renderer) {
    var rendererFunc = renderer.renderer || renderer.render || renderer;
    var createOut = renderer.createOut || marko.createOut;

    target.renderer = rendererFunc;

    target.render = function(input, cb) {
        var out = createOut();
        rendererFunc(input, out);
        out.end();

        if(cb) {
            out.on('finished', function() {
                cb(null, new RenderResult(out));
            });
            out.on('error', function(err) {
                cb(err);
            });
        }

        return out;
    };

    target.renderSync = function(input) {
        var out = createOut();
        out.sync();
        rendererFunc(input, out);
        out.end();
        return new RenderResult(out);
    };
};