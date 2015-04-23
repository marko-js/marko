var marko = require('../../../../');
var template = marko.load(require.resolve('./template.marko'));

exports.renderer = function(input, out) {
    template.render({}, out);
};