var extend = require('raptor-util').extend;
var templating = require('raptor-templates');
module.exports = {
    render: function (input, context) {
        var content = {};
        input.invokeBody({
            handlePutTag: function (putTag) {
                content[putTag.into] = putTag;
            }
        });
        var viewModel = extend(input.dynamicAttributes || {}, { layoutContent: content });
        templating.render(input.template, viewModel, context);
    }
};