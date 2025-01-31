import { rendering } from "./queue";

type EventNames = keyof GlobalEventHandlersEventMap;

const elementHandlersByEvent = new Map<
  string,
  WeakMap<ParentNode, undefined | ((...args: any[]) => void)>
>();

const defaultDelegator = createDelegator();

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
    defaultDelegator(element, type, handleDelegated);
  }

  handlersByElement.set(element, handler || undefined);
}

export function createDelegator() {
  const delegatedEventsByRoot = new WeakMap<Node, Set<string>>();
  return function ensureDelegated(
    node: Node,
    type: string,
    handler: EventListener,
  ) {
    const root = node.getRootNode();
    let delegatedEvents = delegatedEventsByRoot.get(root);

    if (!delegatedEvents) {
      delegatedEventsByRoot.set(root, (delegatedEvents = new Set()));
    }

    if (!delegatedEvents.has(type)) {
      delegatedEvents.add(type);
      root.addEventListener(type, handler, true);
    }
  };
}

function handleDelegated(ev: GlobalEventHandlersEventMap[EventNames]) {
  let target = !rendering && (ev.target as ParentNode | null);
  if (target) {
    const handlersByElement = elementHandlersByEvent.get(ev.type)!;
    handlersByElement.get(target)?.(ev, target);

    if (ev.bubbles) {
      while ((target = target.parentNode) && !ev.cancelBubble) {
        handlersByElement.get(target)?.(ev, target);
      }
    }
  }
}
