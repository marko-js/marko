var marko = require('../../../../');
marko.load(require.resolve('./template.marko'));

exports.renderer = function(input, out) {
    out.write('test-circular-renderer-b');
};