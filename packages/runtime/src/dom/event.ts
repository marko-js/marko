import { read } from "./scope";

const doc = document as DocumentWithDelegated;

interface DocumentWithDelegated extends Document {
  ___delegated?: Record<string, 1>;
}

type EventNames = keyof GlobalEventHandlersEventMap;
type Unset = false | null | undefined;

const eventOpts: AddEventListenerOptions = {
  capture: true,
  passive: true
};

export function on<
  T extends EventNames,
  H extends (ev: GlobalEventHandlersEventMap[T], target: Element) => void
>(elIndex: number, type: T, handler: H | Unset) {
  (read(elIndex) as Element)[getKey(type)] = handler;
}

export function ensureDelegated(type: EventNames) {
  const delegated = doc.___delegated || (doc.___delegated = {});
  if (!delegated[type]) {
    delegated[type] = 1;
    doc.addEventListener(type, handleDelegated, eventOpts);
  }
}

function handleDelegated(ev: GlobalEventHandlersEventMap[EventNames]) {
  const key = getKey(ev.type);
  let target = ev.target as Node | null;

  if (target) {
    let handler = target[key];

    if (ev.bubbles) {
      while (!handler && !ev.cancelBubble && (target = target!.parentNode)) {
        handler = target[key];
      }
    }

    if (handler) {
      handler(ev, target);
    }
  }
}

function getKey(type: string) {
  return `#on${type}`;
}
