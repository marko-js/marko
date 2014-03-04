var extend = require('raptor-util').extend;
var raptorTemplates = require('../../');
module.exports = {
    render: function (input, context) {
        var content = {};
        input.invokeBody({
            handlePutTag: function (putTag) {
                content[putTag.into] = putTag;
            }
        });
        var viewModel = extend(input['*'] || {}, { layoutContent: content });
        raptorTemplates.render(input.template, viewModel, context);
    }
};