var raptorDust = require('raptor-dust');

exports.registerHelpers = function(dust) {
    raptorDust.registerHelpers({
            'widget': {
            buildInput: function(chunk, context, bodies, params, renderContext) {
                params.invokeBody = function(widgetDef) {
                    context = context.push({
                            widget: {
                                id: widgetDef.id
                            }
                        });

                    renderContext.renderDustBody(bodies.block, context);
                };

                return params;
            },
            render: require('../taglib/widget-tag')
        },

        'init-widgets': require('../taglib/init-widgets-tag')
    }, dust);
};