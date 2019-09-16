interface DocumentWithDelegated extends Document {
  ___delegated?: Set<string>;
}

type EventNames = keyof GlobalEventHandlersEventMap;
type Unset = false | null | undefined;

const eventOpts: AddEventListenerOptions = {
  capture: true,
  passive: true
};

export function on<
  E extends Element,
  T extends EventNames,
  H extends (ev: GlobalEventHandlersEventMap[T], target: E) => void
>(el: E, type: T, handler: H | Unset) {
  const doc = el.ownerDocument! as DocumentWithDelegated;
  const delegated = doc.___delegated || (doc.___delegated = new Set());
  if (!delegated.has(type)) {
    delegated.add(type);
    el.ownerDocument!.addEventListener(type, delegateEvent, eventOpts);
  }

  el[getKey(type)] = handler;
}

export function once<
  E extends Element,
  T extends EventNames,
  H extends (ev: GlobalEventHandlersEventMap[T], target: E) => void
>(el: E, type: T, handler: H | Unset) {
  on(el, type, (ev, target) => {
    if (handler) {
      handler(ev, target);
      handler = undefined;
    }
  });
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
      handler(ev, target);
    }
  }
}

function getKey(type: string) {
  return `#on${type}`;
}
