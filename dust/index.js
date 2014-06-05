var raptorDust = require('raptor-dust');
var raptorWidgets = require('../');
var attrs = require('raptor-util/attrs');

exports.registerHelpers = function(dust) {
    raptorDust.registerHelpers({
        'init-widgets': require('../taglib/init-widgets-tag'),
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
            render: function(data, context) {
                var widgetsContext = raptorWidgets.getWidgetsContext(context);
                var tagName = data.tagName || 'div';
                var widgetConfig = data.config;
                var assignedId = data.assignedId;
                var modulePath = data.module;
                var invokeBody = data.invokeBody;
                var scope = data.scope || context.getAttribute('widget');

                console.log('WIDGET: ', modulePath, scope, context._dustContext);

                delete data.config;
                delete data.tagName;
                delete data.module;
                delete data.invokeBody;

                var widgetDef = widgetsContext.beginWidget({
                    module: modulePath,
                    id: data.id,
                    assignedId: assignedId,
                    config: widgetConfig,
                    scope: scope
                });

                data.id = widgetDef.id;

                var widgetAttrs = raptorWidgets.attrs(widgetDef);

                context.write('<' + tagName);
                context.write(attrs(data));
                context.write(attrs(widgetAttrs));
                context.write('>');

                invokeBody(widgetDef);

                context.write('</' + tagName + '>');

                widgetDef.end();
            }
        }
    }, dust);
};