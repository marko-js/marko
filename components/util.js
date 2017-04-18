function nextComponentIdProvider(out) {
    var prefix = out.global.componentIdPrefix || 's'; // "s" is for server (we use "b" for the browser)
    var nextId = 0;

    return function nextComponentId() {
        return prefix + (nextId++);
    };
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

exports.$__nextComponentIdProvider = nextComponentIdProvider;
exports.$__isServer = true;
exports.$__attachBubblingEvent = attachBubblingEvent;
