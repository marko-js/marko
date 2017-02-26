var KEY = Symbol();
var isArray = Array.isArray;

function UniqueId(out) {
    this.prefix = out.global.componentIdPrefix || 's'; // "s" is for server (we use "b" for the browser)
    this.nextId = 0;
}

function nextComponentId(out) {
    var global = out.global;

    var idProvider = global[KEY] ||
        (global[KEY] = new UniqueId(out));

    return idProvider.prefix + (idProvider.nextId++);
}

function attachBubblingEvent(componentDef, handlerMethodName, extraArgs) {
    if (handlerMethodName) {
        if (extraArgs) {
            var bubblingDomEvents = componentDef.$__bubblingDomEvents ||
                ( componentDef.$__bubblingDomEvents = [] );

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

            return handlerMethodName + ' ' + componentDef.id + ' ' + eventIndex;
        } else {
            return handlerMethodName + ' ' + componentDef.id;
        }
    }
}

exports.$__nextComponentId = nextComponentId;
exports.$__server = true;
exports.$__attachBubblingEvent = attachBubblingEvent;