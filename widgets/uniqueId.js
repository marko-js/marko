function IdProvider(out) {
    var global = this.global = out.global;
    this.$__prefix = global.widgetIdPrefix || 'w';

    if (global._nextWidgetId == null) {
        global._nextWidgetId = 0;
    }
}

IdProvider.prototype.$__nextId = function() {
    return this.$__prefix + (this.global._nextWidgetId++);
};

module.exports = function (out) {
    var global = out.global;
    var idProvider = global._widgetIdProvider ||
        (global._widgetIdProvider = new IdProvider(out));

    return idProvider.$__nextId();
};