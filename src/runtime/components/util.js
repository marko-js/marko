var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_BODY_EL = 2;
// var FLAG_HAS_HEAD_EL = 4;

function nextComponentIdProvider(out) {
    var prefix = out.global.componentIdPrefix || "s"; // "s" is for server (we use "b" for the browser)
    var nextId = 0;

    return function nextComponentId() {
        return prefix + nextId++;
    };
}

function attachBubblingEvent(
    componentDef,
    handlerMethodName,
    isOnce,
    extraArgs
) {
    if (handlerMethodName) {
        if (extraArgs) {
            var component = componentDef.___component;
            var eventIndex = component.___bubblingDomEventsExtraArgsCount++;

            // If we are not going to be doing a rerender in the browser
            // then we need to actually store the extra args with the UI component
            // so that they will be serialized down to the browser.
            // If we are rerendering in the browser then we just need to
            // increment ___bubblingDomEventsExtraArgsCount to keep track of
            // where the extra args will be found when the UI component is
            // rerendered in the browser

            if (!(componentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER)) {
                if (eventIndex === 0) {
                    component.___bubblingDomEvents = [extraArgs];
                } else {
                    component.___bubblingDomEvents.push(extraArgs);
                }
            }

            return (
                handlerMethodName +
                " " +
                componentDef.id +
                " " +
                isOnce +
                " " +
                eventIndex
            );
        } else {
            return handlerMethodName + " " + componentDef.id + " " + isOnce;
        }
    }
}

exports.___nextComponentIdProvider = nextComponentIdProvider;
exports.___isServer = true;
exports.___attachBubblingEvent = attachBubblingEvent;
exports.___destroyComponentForNode = function noop() {};
exports.___destroyNodeRecursive = function noop() {};
