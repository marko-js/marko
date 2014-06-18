require('raptor-polyfill/string/startsWith');
require('raptor-polyfill/string/endsWith');

var raptorDust = require('raptor-dust');
var raptorWidgets = require('../');
var attrs = require('raptor-util/attrs');
var path = require('path');
var isServer = typeof window === 'undefined';

exports.registerHelpers = function(dust) {
    raptorDust.registerHelpers({
        'init-widgets': require('../taglib/init-widgets-tag'),
        'widget': {
            buildInput: function(chunk, context, bodies, params, renderContext) {
                var module = params.module;

                if (!module) {
                    throw new Error('"module" is a required argument for the @widget helper');
                }

                if (module.startsWith('.')) {
                    module = path.join(path.dirname(context.templateName), module);

                    var hasExt = module.endsWith('.js');

                    // Hack alert:
                    // This code is fragile and depends on the module loader being used.
                    if (isServer) {
                        // Make sure the extension is included on server since it needs to be a path to a real file
                        if (!hasExt) {
                            module += '.js';
                        }
                    } else {
                        // Remove the extension on the client since we know that the CommonJS module loader implemented
                        // by raptor-modules/client does not keep file extensions.
                        if (hasExt) {
                            module = module.slice(0, -3);
                        }
                    }

                    params.module = module;
                }

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