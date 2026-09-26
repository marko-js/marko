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

  if ((element as any)[1 + type] === undefined) {
    delegate(type, handleDelegated);
  }

  (element as any)[1 + type] = handler || null;
}

// Deliberately a single document-level listener (bundle size): ShadowRoot events
// retarget to the host and never reach handlers; shadow trees aren't a supported target.
export const delegate = (type: string, handler: EventListener) =>
  // The digit prefix keeps event types named after `Function` properties
  // (`name`, `length`, …) from reading truthy and skipping registration.
  ((handler as any)[1 + type] ||=
    (document.addEventListener(type, handler, true), 1));

let syncControllable: undefined | ((ev: Event) => void);

// A Controllable syncs in the one delegated `input` listener, so its bound value
// is stored before any `onInput` handler reads it.
export function delegateControllable(sync: (ev: Event) => void) {
  syncControllable = sync;
  delegate("input", handleDelegated);
}

function handleDelegated(ev: GlobalEventHandlersEventMap[EventNames]) {
  if (syncControllable) syncControllable(ev);
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
    (target as any)[1 + ev.type]?.(ev, target);
    target = ev.bubbles && !ev.cancelBubble && target.parentNode;
  }

  if (MARKO_DEBUG) {
    delete (ev as any).currentTarget;
  }
}
