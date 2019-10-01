import {
  beginBatch,
  endBatch,
  MaybeSignal,
  compute,
  get,
  Signal,
  set
} from "./signals";
import { currentNode } from "./dom";
const doc = document as DocumentWithDelegated;

interface DocumentWithDelegated extends Document {
  ___delegated?: { [x: string]: 1 };
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
>(type: T, handler: H | Unset) {
  const el = currentNode as Element;
  const delegated = doc.___delegated || (doc.___delegated = {});
  if (!delegated[type]) {
    delegated[type] = 1;
    doc.addEventListener(type, delegateEvent, eventOpts);
  }

  el[getKey(type)] = handler;
}

export function dynamicOn<
  T extends EventNames,
  H extends (ev: GlobalEventHandlersEventMap[T], target: Element) => void
>(type: T, handler: MaybeSignal<H | Unset>) {
  const el = currentNode as Element;
  const key = getKey(type);
  on(type, null);
  compute(() => (el[key] = get(handler)));
}

export function once<
  T extends EventNames,
  H extends (ev: GlobalEventHandlersEventMap[T], target: Element) => void
>(type: T, handler: MaybeSignal<H | Unset>) {
  const calledSignal = new Signal(false);
  dynamicOn(
    type,
    compute(() => {
      const h = get(handler);
      return (
        !get(calledSignal) &&
        ((ev: GlobalEventHandlersEventMap[T], target: Element) => {
          if (h) {
            h(ev, target);
          }
          set(calledSignal, true);
        })
      );
    })
  );
}

function delegateEvent(ev: GlobalEventHandlersEventMap[EventNames]) {
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
      const batch = beginBatch();
      handler(ev, target);
      endBatch(batch);
    }
  }
}

function getKey(type: string) {
  return `#on${type}`;
}
