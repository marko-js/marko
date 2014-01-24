'use strict';
var optimizer = require('raptor-optimizer');
module.exports = {
    render: function (input, context) {
        var pageOptimizer = input.optimizer;
        if (!pageOptimizer) {
            pageOptimizer = optimizer.pageOptimizer;
        }
        if (!pageOptimizer) {
            throw require('raptor').createError(new Error('Page optimizer not configured for application. require("raptor/optimizer").configure(config) or provide an optimizer as input using the "optimizer" attribute.'));
        }
        var src = input.src;
        var templateInfo = input.templateInfo || {};
        var optimizerRenderContext = optimizer.getRenderContext(context);
        var optimizerContext = context.getAttributes().optimizerContext || {};
        optimizerContext.renderContext = context;
        optimizerContext.enabledExtensions = optimizerRenderContext.getEnabledExtensions();
        context.beginAsyncFragment(function (asyncContext, asyncFragment) {
            return pageOptimizer.resolveResourceUrlCached(src, templateInfo.resource, optimizerContext).then(function (url) {
                asyncContext.write('<img src="' + url + '"');
                if (input.dynamicAttributes) {
                    asyncContext.attrs(input.dynamicAttributes);
                }
                asyncContext.write('>');
            });
        });
    }
};