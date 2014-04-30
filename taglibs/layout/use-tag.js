var extend = require('raptor-util').extend;
module.exports = function render(input, context) {
    var content = {};
    
    input.invokeBody({
        handlePutTag: function (putTag) {
            content[putTag.into] = putTag;
        }
    });

    var viewModel = extend(input['*'] || {}, { layoutContent: content });
    input.template(viewModel, context);
};