var KEY = Symbol();

function UniqueId(out) {
    this.prefix = out.global.widgetIdPrefix || 'w';
    this.nextId = 0;
}

function nextWidgetId(out) {
    var global = out.global;

    var idProvider = global[KEY] ||
        (global[KEY] = new UniqueId(out));

    return idProvider.prefix + (idProvider.nextId++);
}

exports.$__nextWidgetId = nextWidgetId;