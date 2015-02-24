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
            buildInput: function(chunk, context, bodies, params, out) {
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

                params.renderBody = function(out, widgetDef) {
                    context = context.push({
                            widget: {
                                id: widgetDef.id
                            }
                        });

                    out.renderDustBody(bodies.block, context);
                };

                return params;
            },
            render: function(input, out) {
                var widgetsContext = raptorWidgets.getWidgetsContext(out);
                var tagName = input.tagName || 'div';
                var widgetConfig = input.config;
                var assignedId = input.assignedId;
                var modulePath = input.module;
                var renderBody = input.renderBody;
                var scope = input.scope || out.getAttribute('widget');

                delete input.config;
                delete input.tagName;
                delete input.module;
                delete input.renderBody;

                var widgetDef = widgetsContext.beginWidget({
                    module: modulePath,
                    id: input.id,
                    assignedId: assignedId,
                    config: widgetConfig,
                    scope: scope
                });

                input.id = widgetDef.id;

                var widgetAttrs = raptorWidgets.attrs(widgetDef);

                out.write('<' + tagName);
                out.write(attrs(input));
                out.write(attrs(widgetAttrs));
                out.write('>');

                renderBody(out, widgetDef);

                out.write('</' + tagName + '>');

                widgetDef.end();
            }
        }
    }, dust);
};