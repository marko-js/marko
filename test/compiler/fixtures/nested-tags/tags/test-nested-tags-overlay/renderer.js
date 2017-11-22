var template = require('./template.marko');

exports.renderer = function (input, out) {
    var header = input.header;
    var body = input.body;
    var footer = input.footer;

    template.render({
        header: header,
        body: body,
        footer: footer
    }, out);
};