type EventNames = keyof GlobalEventHandlersEventMap;

const elementHandlersByEvent = new Map<
  string,
  WeakMap<Element, undefined | ((...args: any[]) => void)>
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
  let handlersByElement = elementHandlersByEvent.get(type);

  if (!handlersByElement) {
    elementHandlersByEvent.set(type, (handlersByElement = new WeakMap()));
  }

  if (!handlersByElement.has(element)) {
    ensureDelegated(element, type);
  }

  handlersByElement.set(element, handler || undefined);
}

function ensureDelegated(node: Node, type: string) {
  const root = node.getRootNode();
  let delegatedEvents = delegatedEventsByRoot.get(root);

  if (!delegatedEvents) {
    delegatedEventsByRoot.set(root, (delegatedEvents = new Set()));
  }

  if (!delegatedEvents.has(type)) {
    delegatedEvents.add(type);
    root.addEventListener(type, handleDelegated, eventOpts);
  }
}

function handleDelegated(ev: GlobalEventHandlersEventMap[EventNames]) {
  let target = ev.target as Element | null;
  if (target) {
    const handlersByElement = elementHandlersByEvent.get(ev.type)!;
    handlersByElement.get(target)?.(ev, target);

    if (ev.bubbles) {
      while ((target = target.parentElement) && !ev.cancelBubble) {
        handlersByElement.get(target)?.(ev, target);
      }
    }
  }
}
