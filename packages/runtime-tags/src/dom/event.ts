import { assertHandlerIsFunction } from "../common/errors";
import { rendering } from "./queue";

type EventNames = keyof GlobalEventHandlersEventMap;

export function _on<
  T extends EventNames,
  H extends
    | false
    | null
    | undefined
    | ((ev: GlobalEventHandlersEventMap[T], target: Element) => void),
>(element: Element, type: T, handler: H) {
  if (MARKO_DEBUG) {
    assertHandlerIsFunction(
      "on" + type[0].toUpperCase() + type.slice(1),
      handler,
    );
  }

  if ((element as any)["$" + type] === undefined) {
    delegate(type, handleDelegated);
  }

  (element as any)["$" + type] = handler || null;
}

export const delegate = (type: string, handler: EventListener) =>
  ((handler as any)[type] ||=
    (document.addEventListener(type, handler, true), 1));

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
