type EventNames = keyof GlobalEventHandlersEventMap;

const handlersByElement = new WeakMap<
  Element,
  undefined | ((...args: any[]) => void)
>();
const delegatedEventsByRoot = new WeakMap<Node, Set<string>>();

const eventOpts: AddEventListenerOptions = { capture: true };

export function on<
  T extends EventNames,
  H extends
    | false
    | null
    | undefined
    | ((ev: GlobalEventHandlersEventMap[T], target: Element) => void),
>(element: Element, type: T, handler: H) {
  if (!handlersByElement.has(element)) {
    const root = element.getRootNode();
    const delegatedEvents = delegatedEventsByRoot.get(root);

    if (!delegatedEvents) {
      delegatedEventsByRoot.set(root, new Set([type]));
    } else {
      delegatedEvents.add(type);
    }

    root.addEventListener(type, handleDelegated, eventOpts);
  }

  handlersByElement.set(element, handler || undefined);
}

function handleDelegated(ev: GlobalEventHandlersEventMap[EventNames]) {
  let target = ev.target as Element | null;
  if (target) {
    handlersByElement.get(target)?.(ev, target);

    if (ev.bubbles) {
      while ((target = target.parentElement) && !ev.cancelBubble) {
        handlersByElement.get(target)?.(ev, target);
      }
    }
  }
}
