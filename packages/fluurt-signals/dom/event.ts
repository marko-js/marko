import {
  beginBatch,
  endBatch,
  MaybeSignal,
  createSignal,
  createComputation,
  createEffect,
  set
} from "./signals";
import { lastElementRef } from "./dom";
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
  const el = lastElementRef;
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
  const el = lastElementRef;
  const key = getKey(type);
  on(type, null);
  createEffect(_handler => (el[key] = _handler), [handler]);
}

export function once<
  T extends EventNames,
  H extends (ev: GlobalEventHandlersEventMap[T], target: Element) => void
>(type: T, handler: MaybeSignal<H | Unset>) {
  const called = createSignal(false);
  dynamicOn(
    type,
    createComputation(
      (_handler, _called) => {
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
      [handler, called] as const
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
