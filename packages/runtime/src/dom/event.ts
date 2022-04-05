type Unset = false | null | undefined;
type EventNames = keyof GlobalEventHandlersEventMap;

const delegatedByType = new Map<
  string,
  WeakMap<Element, Unset | ((...args: any[]) => void)>
>();

const eventOpts: AddEventListenerOptions = {
  capture: true,
  passive: true,
};

export function on<
  T extends EventNames,
  H extends
    | Unset
    | ((ev: GlobalEventHandlersEventMap[T], target: Element) => void)
>(element: Element, type: T, handler: H) {
  const delegated = delegatedByType.get(type);

  if (delegated) {
    delegated.set(element, handler);
  } else {
    delegatedByType.set(type, new WeakMap([[element, handler]]));
    document.addEventListener(type, handleDelegated, eventOpts);
  }
}

function handleDelegated(ev: GlobalEventHandlersEventMap[EventNames]) {
  let target = ev.target as Element | null;
  const delegated = delegatedByType.get(ev.type)!;

  if (target) {
    let handler = delegated.get(target);

    if (ev.bubbles) {
      while (
        !handler &&
        !ev.cancelBubble &&
        (target = target!.parentElement!)
      ) {
        handler = delegated.get(target);
      }
    }

    if (handler) {
      handler(ev, target);
    }
  }
}
