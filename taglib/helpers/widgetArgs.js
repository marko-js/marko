var extend = require('raptor-util/extend');

var widgetArgs = module.exports = function widgetArgs(out, scope, assignedId, customEvents, extendModule, extendConfig, extendState) {
    var data = out.data;
    var __widgetArgs = data.widgetArgs;
    var id;

    if (!__widgetArgs) {
        if (assignedId != null) {
            id = assignedId.toString();
        }

        __widgetArgs = data.widgetArgs = {
            out: out,
            id: id,
            scope: scope,
            customEvents: customEvents
        };
    }

    if (extendModule) {
        if (__widgetArgs.extend) {
            // The nested extends should come before the outer extends
            // since the extends are applied from left to right and the
            // outer widget will expect for the inner widget to have been
            // patched
            __widgetArgs.extend.push(extendModule);
        } else {
            __widgetArgs.extend = [extendModule];
        }
    }

    // Merge in the extend config...
    if (extendConfig) {
        __widgetArgs.extendConfig = __widgetArgs.extendConfig ?
            extend(extendConfig, __widgetArgs.extendConfig) :
            extendConfig;
    }

    // Merge in the extend state...
    if (extendState) {
        __widgetArgs.extendState = __widgetArgs.extendState ?
            extend(extendState, __widgetArgs.extendState) :
            extendState;
    }
};

widgetArgs.cleanup = function(out) {
    delete out.data.widgetArgs;
};