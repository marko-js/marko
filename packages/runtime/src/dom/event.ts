type Unset = false | null | undefined;
type EventNames = keyof GlobalEventHandlersEventMap;

const delegationRoots = new WeakMap<
  Node,
  Map<string, WeakMap<Element, Unset | ((...args: any[]) => void)>>
>();

const eventOpts: AddEventListenerOptions = {
  capture: true,
};

export function on<
  T extends EventNames,
  H extends
    | Unset
    | ((ev: GlobalEventHandlersEventMap[T], target: Element) => void)
>(element: Element, type: T, handler: H) {
  const delegationRoot = element.getRootNode();
  let delegationEvents = delegationRoots.get(delegationRoot);
  if (!delegationEvents) {
    delegationRoots.set(delegationRoot, (delegationEvents = new Map()));
  }
  let delegationHandlers = delegationEvents.get(type);
  if (!delegationHandlers) {
    delegationEvents!.set(type, (delegationHandlers = new WeakMap()));
    delegationRoot.addEventListener(type, handleDelegated, eventOpts);
  }

  delegationHandlers.set(element, handler);
}

function handleDelegated(ev: GlobalEventHandlersEventMap[EventNames]) {
  let target = ev.target as Element | null;
  if (target) {
    const delegationRoot = target.getRootNode();
    const delegationEvents = delegationRoots.get(delegationRoot);
    const delegationHandlers = delegationEvents!.get(ev.type!);

    let handler = delegationHandlers!.get(target);

    if (ev.bubbles) {
      while (
        !handler &&
        !ev.cancelBubble &&
        (target = target!.parentElement!)
      ) {
        handler = delegationHandlers!.get(target);
      }
    }

    if (handler) {
      handler(ev, target);
    }
  }
}
