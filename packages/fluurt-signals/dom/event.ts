import {
  beginBatch,
  endBatch,
  UpstreamSignalOrValue,
  createSource,
  createComputation,
  createPropertyEffect,
  set
} from "./signals";
import { walker } from "./walker";
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
>(type: T, handler: H | Unset) {
  const el = walker.currentNode as Element;
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
>(type: T, handler: UpstreamSignalOrValue<H | Unset>) {
  const el = walker.currentNode as Element;
  const key = getKey(type);
  on(type, null);
  createPropertyEffect(el, key, handler);
}

export function once<
  T extends EventNames,
  H extends (ev: GlobalEventHandlersEventMap[T], target: Element) => void
>(type: T, handler: UpstreamSignalOrValue<H | Unset>) {
  const called = createSource(false);
  dynamicOn(
    type,
    createComputation(
      ([_handler, _called]) => {
        return (
          !_called &&
          ((ev: GlobalEventHandlersEventMap[T], target: Element) => {
            if (_handler) {
              _handler(ev, target);
            }
            set(called, true);
          })
        );
      },
      [handler, called] as const,
      0
    )
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
