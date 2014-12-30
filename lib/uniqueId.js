function IdProvider(out) {
    var global = this.global = out.global;
    this.prefix = global.widgetIdPrefix || 'w';

    if (global._nextWidgetId == null) {
        global._nextWidgetId = 0;
    }
}

IdProvider.prototype.nextId = function() {
    return this.prefix + (this.global._nextWidgetId++);
};

module.exports = function (out) {
    var global = this.global;
    var idProvider = global._widgetIdProvider ||
        (global._widgetIdProvider = new IdProvider(out));

    return idProvider.nextId();
};