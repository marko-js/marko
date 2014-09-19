var marko = require('../../');

exports.render = function(input, context) {
    marko.render(require.resolve('./popover.marko'), {
        content: input.content,
        title: input.title,
        tag: input
    }, context);
};