var template = require('./template.marko');

exports.renderer = function (input, out) {
    var tabs = input.tabs;

    template.render({
        tabs: tabs
    }, out);
};