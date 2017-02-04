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

function attachBubblingEvent(widgetDef, handlerMethodName, extraArgs) {
    if (handlerMethodName) {
        var bubblingDomEvents = widgetDef.$__bubblingDomEvents ||
            ( widgetDef.$__bubblingDomEvents = [] );

        var eventIndex = bubblingDomEvents.length;
        var entry = extraArgs ? [handlerMethodName, extraArgs] : [handlerMethodName];
        bubblingDomEvents.push(entry);

        return widgetDef.id + ' ' + eventIndex;
    }
}

exports.$__nextWidgetId = nextWidgetId;
exports.$__server = true;
exports.$__attachBubblingEvent = attachBubblingEvent;