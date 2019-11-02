import { Signal, compute, effect, get, set, MaybeSignal } from "./signals";
import { Fragment, replaceFragment } from "./fragments";
import { reconcile } from "./reconcile";
import {
  beginFragment,
  endFragment,
  currentNS,
  setNS,
  endNS,
  currentNode
} from "./dom";
import { createPool } from "./utils";

type ForIterationFragment<T> = Fragment & {
  itemSignal: Signal<T>;
  indexSignal: Signal<number>;
};

const mapPool = createPool(() => new Map());
export function loopOf<T>(
  array: MaybeSignal<T[]>,
  render: (
    item: MaybeSignal<T>,
    index: MaybeSignal<number>,
    all: typeof array
  ) => void,
  getKey: (item: T, index: number) => string
) {
  if (array instanceof Signal) {
    const rootFragment = beginFragment();
    const ns = currentNS;
    let firstRender = true;
    let oldNodes: Map<string, Fragment> = mapPool.get();
    let oldKeys: string[] = [];

    const newNodes = compute(
      _array => {
        let index = 0;
        const _newNodes = mapPool.get();

        for (const item of _array) {
          const key = getKey ? getKey(item, index) : "" + index;
          const previousChildFragment = oldNodes.get(
            key
          ) as ForIterationFragment<typeof item>;
          if (!previousChildFragment) {
            const childFragment = beginFragment() as ForIterationFragment<T>;
            const itemSignal = (childFragment.itemSignal = new Signal(item));
            const indexSignal = (childFragment.indexSignal = new Signal(index));
            setNS(ns);
            render(itemSignal, indexSignal, _array);
            endNS();
            endFragment(childFragment);
            _newNodes.set(key, childFragment);
          } else {
            set(previousChildFragment.itemSignal, item);
            set(previousChildFragment.indexSignal, index);
            _newNodes.set(key, previousChildFragment);
          }
          index++;
        }

        return _newNodes;
      },
      [array]
    ) as Signal<Map<string, Fragment>>;

    effect(
      _newNodes => {
        const newKeys = Array.from(_newNodes.keys());

        if (!firstRender) {
          reconcile(rootFragment, oldKeys, oldNodes, newKeys, _newNodes);
        }

        oldNodes.clear();
        mapPool.push(oldNodes);

        oldKeys = newKeys;
        oldNodes = _newNodes;
        firstRender = false;
      },
      [newNodes],
      newNodes.___sid
    );

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
    compute(_object => Object.keys(_object), [object]),
    key =>
      render(get(key), compute(_object => _object[get(key)], [object]), object),
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
    compute(
      (_from, _to, _step) => {
        const range: number[] = [];

        for (let i = _from; i <= _to; i += _step) {
          range.push(i);
        }

        return range;
      },
      [from, to, step]
    ),
    render,
    firstArgAsKey
  );
}

export function conditional(render: MaybeSignal<(() => void) | undefined>) {
  if (render instanceof Signal) {
    let previousFragment = beginFragment();
    let signalRanSync = false;

    const fragmentSignal = compute(
      (_render, ns) => {
        const fragment = (currentNode || beginFragment()) as Fragment;
        if (_render) {
          setNS(ns);
          _render();
          endNS();
        }
        signalRanSync = true;
        endFragment(fragment);
        return fragment;
      },
      [render, currentNS] as const
    );

    effect(
      nextFragment => {
        if (nextFragment !== previousFragment) {
          replaceFragment(previousFragment, nextFragment);
          previousFragment = nextFragment;
        }
      },
      [fragmentSignal] as const,
      (fragmentSignal as Signal).___sid
    );

    if (!signalRanSync) {
      endFragment(previousFragment);
    }
  } else if (render) {
    render();
  }
}

function firstArgAsKey(key: unknown) {
  return key + "";
}
