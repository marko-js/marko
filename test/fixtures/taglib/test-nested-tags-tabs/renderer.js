var marko = require('../../../../');
var template = marko.load(require.resolve('./template.marko'));

exports.renderer = function(input, out) {
    var tabs = input.tabs;

    template.render({
        tabs: tabs
    }, out);

};