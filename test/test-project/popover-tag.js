var raptorTemplates = require('../../');

exports.render = function(input, context) {
    raptorTemplates.render(require.resolve('./popover.rhtml'), {
        content: input.content,
        title: input.title,
        tag: input
    }, context);
};