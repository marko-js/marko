import {
  Signal,
  createSignal,
  isSignal,
  createComputation,
  createEffect,
  get,
  set,
  MaybeSignal
} from "./signals";
import { Fragment, insertFragmentBefore, removeFragment } from "./fragments";
import { reconcile } from "./reconcile";
import { createFragment, currentFragment, render, Renderer } from "./dom";
import { walkAndGetText } from "./walker";
import { createPool } from "./utils";

type ForIterationFragment<T> = Fragment & {
  ___itemSignal: Signal<T>;
  ___indexSignal: Signal<number>;
};

const mapPool = createPool(() => new Map());
export function loopOf<T>(
  array: MaybeSignal<T[]>,
  renderer: Renderer<
    (
      item: MaybeSignal<T>,
      index: MaybeSignal<number>,
      all: typeof array
    ) => void
  >,
  getKey: (item: T, index: number) => string
) {
  if (isSignal(array)) {
    const marker = walkAndGetText();
    const rootFragment = currentFragment;
    let oldNodes: Map<string, Fragment> = mapPool.get();
    let oldKeys: string[] = [];

    if (currentFragment!.___firstChild === marker) {
      setRefGetter(
        currentFragment!.___firstRef,
        "___firstChild",
        () => oldNodes!.get(oldKeys[0])!.___firstRef.___firstChild
      );
    }
    if (currentFragment!.___lastChild === marker) {
      setRefGetter(
        currentFragment!.___lastRef,
        "___lastChild",
        () =>
          oldNodes!.get(oldKeys[oldKeys.length - 1])!.___lastRef.___lastChild
      );
    }

    const newNodes = createComputation(
      _array => {
        let index = 0;
        const _newNodes = mapPool.get();

        for (const item of _array) {
          const key = getKey ? getKey(item, index) : "" + index;
          const previousChildFragment = oldNodes.get(
            key
          ) as ForIterationFragment<typeof item>;
          if (!previousChildFragment) {
            const itemSignal = createSignal(item);
            const indexSignal = createSignal(index);
            const childFragment = createFragment(
              renderer,
              rootFragment,
              itemSignal,
              indexSignal,
              array
            ) as ForIterationFragment<T>;
            childFragment.___itemSignal = itemSignal;
            childFragment.___indexSignal = indexSignal;
            _newNodes.set(key, childFragment);
          } else {
            set(previousChildFragment.___itemSignal, item);
            set(previousChildFragment.___indexSignal, index);
            _newNodes.set(key, previousChildFragment);
          }
          index++;
        }

        return _newNodes;
      },
      [array]
    ) as Signal<Map<string, Fragment>>;

    createEffect(
      _newNodes => {
        const newKeys = Array.from(_newNodes.keys());
        reconcile(
          marker.parentNode!,
          oldKeys,
          oldNodes,
          newKeys,
          _newNodes,
          marker
        );

        oldNodes.clear();
        mapPool.push(oldNodes);

        // TODO: we should be able to remove the marker if the loop was not empty
        // But we'll need to track the last fragment and ensure the marker is added if the loop becomes empty

        oldKeys = newKeys;
        oldNodes = _newNodes;
      },
      [newNodes]
    );
  } else {
    let index = 0;
    for (const item of array) {
      render(renderer, item, index++, array);
    }
  }
}

export function loopIn<T>(
  object: MaybeSignal<Record<string, T>>,
  renderer: Renderer<
    (
      key: MaybeSignal<string>,
      value: MaybeSignal<T>,
      all: typeof object
    ) => void
  >
) {
  let keyRenderer: Renderer;
  const originalHydrate = renderer.___hydrate;
  if (originalHydrate) {
    const newHydrate = (key: string) =>
      originalHydrate(
        get(key),
        createComputation(_object => _object[get(key)], [object]),
        object
      );
    keyRenderer = Object.assign(newHydrate, renderer);
    keyRenderer.___hydrate = newHydrate;
  } else {
    keyRenderer = renderer;
  }
  loopOf<string>(
    createComputation(_object => Object.keys(_object), [object]),
    keyRenderer,
    firstArgAsKey
  );
}

export function loopFrom(
  from: MaybeSignal<number>,
  to: MaybeSignal<number>,
  step: MaybeSignal<number>,
  renderer: Renderer<(i: MaybeSignal<number>) => void>
) {
  loopOf<number>(
    createComputation(
      (_from, _to, _step) => {
        const range: number[] = [];

        for (let i = _from; i <= _to; i += _step) {
          range.push(i);
        }

        return range;
      },
      [from, to, step]
    ),
    renderer,
    firstArgAsKey
  );
}

export function conditional(
  renderer: MaybeSignal<Renderer | undefined>,
  ...input: MaybeSignal[]
) {
  if (isSignal(renderer)) {
    let previousFragment: Fragment | undefined;
    const marker = walkAndGetText();
    const rootFragment = currentFragment!;
    const trackFirstRef = rootFragment.___firstRef.___firstChild === marker;
    const trackLastRef = rootFragment.___lastRef.___lastChild === marker;

    const fragmentSignal = createComputation(
      // TODO: hoist out this function and compare benchmarks
      _renderer =>
        _renderer && createFragment(_renderer, rootFragment, ...input),
      [renderer] as const
    );

    createEffect(
      nextFragment => {
        if (nextFragment) {
          insertFragmentBefore(null, nextFragment, marker);
          if (trackFirstRef) {
            nextFragment.___firstRef = rootFragment.___firstRef;
            nextFragment.___firstRef.___firstChild = nextFragment.___firstChild;
          }

          if (trackLastRef) {
            nextFragment.___lastRef = rootFragment.___lastRef;
            nextFragment.___lastRef.___lastChild = nextFragment.___lastChild;
          }
        }

        if (previousFragment) {
          removeFragment(previousFragment);
        }

        previousFragment = nextFragment;
      },
      [fragmentSignal] as const,
      (fragmentSignal as Signal).___sid // TODO: let's add a comment as to why this is needed.
    );
  } else if (!isSignal(renderer) && renderer) {
    render(renderer, ...input);
  }
}

function firstArgAsKey(key: unknown) {
  return key + "";
}

function setRefGetter(object, key, getter) {
  Object.defineProperty(object, key, {
    get: getter,
    set(value) {
      Object.defineProperty(object, key, {
        value,
        writable: true,
        configurable: true
      });
    },
    configurable: true
  });
}
