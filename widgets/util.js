var KEY = Symbol();
var isArray = Array.isArray;

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
        if (extraArgs) {
            var bubblingDomEvents = widgetDef.$__bubblingDomEvents ||
                ( widgetDef.$__bubblingDomEvents = [] );

            var eventIndex = bubblingDomEvents.length;
            if (extraArgs.length === 1) {
                var firstArg = extraArgs[0];
                if (isArray(firstArg)) {
                    bubblingDomEvents.push(extraArgs);
                } else {
                    bubblingDomEvents.push(firstArg);
                }
            } else {
                bubblingDomEvents.push(extraArgs);
            }

            return handlerMethodName + ' ' + widgetDef.id + ' ' + eventIndex;
        } else {
            return handlerMethodName + ' ' + widgetDef.id;
        }
    }
}

exports.$__nextWidgetId = nextWidgetId;
exports.$__server = true;
exports.$__attachBubblingEvent = attachBubblingEvent;