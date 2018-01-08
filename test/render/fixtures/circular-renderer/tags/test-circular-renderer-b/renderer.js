var template = require('./template.marko');

exports.renderer = function (input, out) {
    out.write('test-circular-renderer-b');
};