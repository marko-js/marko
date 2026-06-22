import { assertHandlerIsFunction } from "../common/errors";
import { rendering } from "./queue";

type EventNames = keyof GlobalEventHandlersEventMap;
const defaultDelegator = createDelegator();

export function _on<
  T extends EventNames,
  H extends
    | false
    | null
    | undefined
    | ((ev: GlobalEventHandlersEventMap[T], target: Element) => void),
>(element: Element, type: T, handler: H) {
  if (!element) {
    // The element can be unresolved when a streamed boundary's resume
    // effects run before its nodes were walked (a torn/partial delivery
    // desync). Binding to a missing node is meaningless, so skip rather
    // than throwing — which would otherwise abort the remaining resume
    // effects and leave the rest of the page un-hydrated.
    if (MARKO_DEBUG) {
      console.error(
        `Skipped binding "on${type[0].toUpperCase() + type.slice(1)}": its target element was not resolved during resume.`,
      );
    }
    return;
  }

  if (MARKO_DEBUG) {
    assertHandlerIsFunction(
      "on" + type[0].toUpperCase() + type.slice(1),
      handler,
    );
  }

  if ((element as any)["$" + type] === undefined) {
    defaultDelegator(element, type, handleDelegated);
  }

  (element as any)["$" + type] = handler || null;
}

/* @__NO_SIDE_EFFECTS__ */
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
  if (MARKO_DEBUG) {
    Object.defineProperty(ev, "currentTarget", {
      configurable: true,
      get() {
        console.error(
          "Event.currentTarget is not supported in Marko's delegated events. Instead use an element reference or the second parameter of the event handler.",
        );
        return null;
      },
    });
  }

  while (target) {
    (target as any)["$" + ev.type]?.(ev, target);
    target = ev.bubbles && !ev.cancelBubble && target.parentNode;
  }

  if (MARKO_DEBUG) {
    delete (ev as any).currentTarget;
  }
}
