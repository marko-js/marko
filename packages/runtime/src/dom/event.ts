import { read } from "./scope";

type Unset = false | null | undefined;
type EventNames = keyof GlobalEventHandlersEventMap;

const delegatedByType = new Map<
  string,
  WeakMap<Element, Unset | ((...args: any[]) => void)>
>();

const eventOpts: AddEventListenerOptions = {
  capture: true,
  passive: true
};

export function on<
  T extends EventNames,
  H extends
    | Unset
    | ((ev: GlobalEventHandlersEventMap[T], target: Element) => void)
>(elIndex: number, type: T, handler: H) {
  const el = read(elIndex) as Element;
  const delegated = delegatedByType.get(type);

  if (delegated) {
    delegated.set(el, handler);
  } else {
    delegatedByType.set(type, new WeakMap([[el, handler]]));
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
