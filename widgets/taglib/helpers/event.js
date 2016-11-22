module.exports = function eventAttr(handlerMethodName, widgetId, extraArgs) {
    if (!handlerMethodName) {
        return;
    }

    return extraArgs ? [handlerMethodName, widgetId].concat(extraArgs) : [handlerMethodName, widgetId];
};