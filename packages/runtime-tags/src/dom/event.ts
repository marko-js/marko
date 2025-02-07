import { rendering } from "./queue";

type EventNames = keyof GlobalEventHandlersEventMap;

const elementHandlersByEvent = new Map<
  string,
  WeakMap<ParentNode, null | ((...args: any[]) => void)>
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

  handlersByElement.set(element, handler || null);
}

export function createDelegator() {
  const kEvents = Symbol();
  return function ensureDelegated(
    node: Node,
    type: string,
    handler: EventListener,
  ) {
    const root = node.getRootNode();
    ((root as any)[kEvents] ||= {})[type] ||=
      (root.addEventListener(type, handler, true), 1);
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
