
var template = require('./template.marko');

exports.renderer = function(input, out) {
    var header = input.header;
    var body = input.body;
    var footer = input.footer;

    console.log(module.id, input);

    template.render({
        header: header,
        body: body,
        footer: footer
    }, out);

};