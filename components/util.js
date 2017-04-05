var KEY = Symbol();

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
            var component = componentDef.$__component;
            var eventIndex = component.$__bubblingDomEventsExtraArgsCount++;

            // If we are not going to be doing a rerender in the browser
            // then we need to actually store the extra args with the UI component
            // so that they will be serialized down to the browser.
            // If we are rerendering in the browser then we just need to
            // increment $__bubblingDomEventsExtraArgsCount to keep track of
            // where the extra args will be found when the UI component is
            // rerendered in the browser

            if (componentDef.$__willRerenderInBrowser === false) {
                if (eventIndex === 0) {
                    component.$__bubblingDomEvents = [extraArgs];
                } else {
                    component.$__bubblingDomEvents.push(extraArgs);
                }
            }

            return handlerMethodName + ' ' + componentDef.id + ' ' + eventIndex;

        } else {
            return handlerMethodName + ' ' + componentDef.id;
        }
    }
}

exports.$__nextComponentId = nextComponentId;
exports.$__isServer = true;
exports.$__attachBubblingEvent = attachBubblingEvent;
