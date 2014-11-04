module.exports = function (out) {
    var global = out.global;
    if (!global._nextWidgetId) {
        global._nextWidgetId = 0;
    }
    return global._nextWidgetId++;
};