import { rendering } from "./queue";

type EventNames = keyof GlobalEventHandlersEventMap;
const defaultDelegator = createDelegator();

export function on<
  T extends EventNames,
  H extends
    | false
    | null
    | undefined
    | ((ev: GlobalEventHandlersEventMap[T], target: Element) => void),
>(element: Element, type: T, handler: H) {
  if ((element as any)["$" + type] === undefined) {
    defaultDelegator(element, type, handleDelegated);
  }

  (element as any)["$" + type] = handler || null;
}

export function createDelegator() {
  const kEvents = Symbol();
  return function ensureDelegated(
    node: Node,
    type: string,
    handler: EventListener,
  ) {
    ((
      (node = node.getRootNode()) as Document & {
        [kEvents]?: Record<string, 1>;
      }
    )[kEvents] ||= {})[type] ||=
      (node.addEventListener(type, handler, true), 1);
  };
}

function handleDelegated(ev: GlobalEventHandlersEventMap[EventNames]) {
  let target = !rendering && (ev.target as ParentNode | null);
  while (target) {
    (target as any)["$" + ev.type]?.(ev, target);
    target = ev.bubbles && !ev.cancelBubble && target.parentNode;
  }
}
