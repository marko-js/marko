import { Signal, compute, get, set, MaybeSignal, Raw } from "./signals";
import { Fragment, clearFragment } from "./fragments";
import { reconcile } from "./reconcile";
import { beginFragment, endFragment, currentNS, beginNS, endNS } from "./dom";

type ForIterationFragment<T> = Fragment & {
  itemSignal: Signal<T>;
  indexSignal: Signal<number>;
};

export function loopOf<T>(
  array: MaybeSignal<T[]>,
  render: (
    item: MaybeSignal<T>,
    index: MaybeSignal<number>,
    all: typeof array
  ) => void,
  getKey: (item: T, index: number) => string
) {
  let oldNodes: Map<string, Fragment> = new Map();
  let newNodes: Map<string, Fragment> = new Map();
  let oldKeys: string[] = [];

  if (array instanceof Signal) {
    const rootFragment = beginFragment();
    const ns = currentNS;
    let firstRender = true;

    compute(() => {
      let index = 0;

      for (const item of get(array)) {
        const key = getKey ? getKey(item, index) : "" + index;
        const previousChildFragment = oldNodes.get(key) as ForIterationFragment<
          typeof item
        >;
        if (!previousChildFragment) {
          const childFragment = beginFragment() as ForIterationFragment<T>;
          const itemSignal = (childFragment.itemSignal = new Signal(item));
          const indexSignal = (childFragment.indexSignal = new Signal(index));
          beginNS(ns);
          render(itemSignal, indexSignal, array);
          endNS();
          endFragment(childFragment);
          newNodes.set(key, childFragment);
        } else {
          set(previousChildFragment.itemSignal, item);
          set(previousChildFragment.indexSignal, index);
          newNodes.set(key, previousChildFragment);
        }
        index++;
      }

      const newKeys = Array.from(newNodes.keys());

      if (!firstRender) {
        reconcile(rootFragment, oldKeys, oldNodes, newKeys, newNodes);
      }

      const clearedNodes = (oldNodes.clear(), oldNodes);
      oldKeys = newKeys;
      oldNodes = newNodes;
      newNodes = clearedNodes;
      firstRender = false;
    });

    endFragment(rootFragment);
  } else {
    let index = 0;
    for (const item of array) {
      render(item, index, array);
      index++;
    }
  }
}

export function loopIn<T>(
  object: MaybeSignal<Record<string, T>>,
  render: (
    key: MaybeSignal<string>,
    value: MaybeSignal<T>,
    all: typeof object
  ) => void
) {
  loopOf<string>(
    compute(() => Object.keys(get(object))),
    key => render(key, compute(() => get(object)[get(key)]), object),
    firstArgAsKey
  );
}

export function loopFrom(
  from: MaybeSignal<number>,
  to: MaybeSignal<number>,
  step: MaybeSignal<number>,
  render: (i: MaybeSignal<number>) => void
) {
  loopOf<number>(
    compute(() => {
      const _to = get(to);
      const _step = get(step);
      const range: number[] = [];

      for (let i = get(from); i <= _to; i += _step) {
        range.push(i);
      }

      return range;
    }),
    render,
    firstArgAsKey
  );
}

export function conditional(render: MaybeSignal<(() => void) | undefined>) {
  let lastRender: Raw<typeof render> | undefined;
  let rootFragment: Fragment | undefined;

  if (render instanceof Signal) {
    const ns = currentNS;
    compute(() => {
      const nextRender = get(render);
      if (nextRender !== lastRender) {
        if (rootFragment) {
          clearFragment(rootFragment);
        }
        rootFragment = beginFragment(rootFragment);
        if (nextRender) {
          beginNS(ns);
          nextRender();
          endNS();
        }
        endFragment(rootFragment);
        lastRender = nextRender;
      }
    });
  } else if (render) {
    render();
  }
}

function firstArgAsKey(key: unknown) {
  return key + "";
}
