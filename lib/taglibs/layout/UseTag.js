define(
    'raptor/templating/taglibs/layout/UseTag', 
    function(require) {

        var templating = require('raptor/templating');
        var raptor = require('raptor');

        return {
            render: function(input, context) {
                var content = {};

                input.invokeBody({
                    handlePutTag: function(putTag) {
                        content[putTag.into] = putTag;
                    }
                });

                var viewModel = raptor.extend(
                    input.dynamicAttributes || {}, 
                    {
                        layoutContent: content
                    });

                templating.render(
                    input.template, 
                    viewModel,
                    context);

            }
        };
    });