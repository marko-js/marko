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
import { Fragment, replaceFragment, insertFragmentBefore, removeFragment } from "./fragments";
import { reconcile } from "./reconcile";
import {
  beginFragment,
  endFragment,
  RendererWithTemplate,
  withTemplate,
  nextFragmentRef,
  parentFragment
} from "./dom";
import { createPool } from "./utils";
import { Renderer } from '../common/types';

type ForIterationFragment<T> = Fragment & {
  itemSignal: Signal<T>;
  indexSignal: Signal<number>;
};

const mapPool = createPool(() => new Map());
export function loopOf<T>(
  array: MaybeSignal<T[]>,
  render: RendererWithTemplate<(
    item: MaybeSignal<T>,
    index: MaybeSignal<number>,
    all: typeof array
  ) => void>,
  getKey: (item: T, index: number) => string
) {
  if (isSignal(array)) {
    const loopMarker = nextFragmentRef();
    const rootFragment = parentFragment;
    let oldNodes: Map<string, Fragment> = mapPool.get();
    let oldKeys: string[] = [];

    if (parentFragment!.___firstChild === loopMarker) {
      setRefGetter(parentFragment!.___firstRef, "___firstChild", () => oldNodes!.get(oldKeys[0])!.___firstRef.___firstChild);
    }
    if (parentFragment!.___lastChild === loopMarker) {
      setRefGetter(parentFragment!.___lastRef, "___lastChild", () => oldNodes!.get(oldKeys[oldKeys.length - 1])!.___lastRef.___lastChild);
    }

    const newNodes = createComputation(
      _array => {
        let index = 0;
        const _newNodes = mapPool.get();

        for (const item of _array) {
          const key = getKey ? getKey(item, index) : "" + index;
          const previousChildFragment = oldNodes.get(key) as ForIterationFragment<typeof item>;
          if (!previousChildFragment) {
            const childFragment = beginFragment(render.___template, rootFragment) as ForIterationFragment<T>;
            const itemSignal = (childFragment.itemSignal = createSignal(item));
            const indexSignal = (childFragment.indexSignal = createSignal(
              index
            ));
            render(itemSignal, indexSignal, _array);
            endFragment();
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

    createEffect(
      _newNodes => {
        const newKeys = Array.from(_newNodes.keys());
        reconcile(
          loopMarker.parentNode!,
          oldKeys,
          oldNodes,
          newKeys,
          _newNodes,
          loopMarker
        );
        oldNodes.clear();
        mapPool.push(oldNodes);

        // TODO: we should be able to remove the loopMarker if the loop was not empty
        // But we'll need to track the last fragment and ensure the marker is added if the loop becomes empty

        oldKeys = newKeys;
        oldNodes = _newNodes;
      },
      [newNodes],
      newNodes.___sid
    );
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
  render: RendererWithTemplate<(
    key: MaybeSignal<string>,
    value: MaybeSignal<T>,
    all: typeof object
  ) => void>
) {
  loopOf<string>(
    createComputation(_object => Object.keys(_object), [object]),
    withTemplate(key =>
      render(
        get(key),
        createComputation(_object => _object[get(key)], [object]),
        object
      ),
      render.___template
    ),
    firstArgAsKey
  );
}

export function loopFrom(
  from: MaybeSignal<number>,
  to: MaybeSignal<number>,
  step: MaybeSignal<number>,
  render: RendererWithTemplate<(i: MaybeSignal<number>) => void>
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
    render,
    firstArgAsKey
  );
}

export function conditional(render: MaybeSignal<RendererWithTemplate<Renderer> | undefined>) {
  if (isSignal(render)) {
    let previousFragment: Fragment;
    const marker = nextFragmentRef();
    const rootFragment = parentFragment!;
    const trackFirstRef = rootFragment.___firstRef.___firstChild === marker;
    const trackLastRef = rootFragment.___lastRef.___lastChild === marker;

    const fragmentSignal = createComputation(
      // TODO: hoist out this function and compare benchmarks
      (_render) => {
        const fragment = beginFragment(_render!.___template, rootFragment);
        if (_render) {
          _render();
        }
        endFragment();
        return fragment;
      },
      [render] as const
    );

    createEffect(
      nextFragment => {
        insertFragmentBefore(null, nextFragment, marker);

        if (previousFragment) {
          removeFragment(previousFragment);
        }

        if (trackFirstRef) {
          nextFragment.___firstRef = rootFragment.___firstRef;
          nextFragment.___firstRef.___firstChild = nextFragment.___firstChild;
        }

        if (trackLastRef) {
          nextFragment.___lastRef = rootFragment.___lastRef;
          nextFragment.___lastRef.___lastChild = nextFragment.___lastChild;
        }

        previousFragment = nextFragment;
      },
      [fragmentSignal] as const,
      (fragmentSignal as Signal).___sid // TODO: let's add a comment as to why this is needed.
    );
  } else if (render) {
    render();
  }
}

function firstArgAsKey(key: unknown) {
  return key + "";
}

function setRefGetter(object, key, get) {
  Object.defineProperty(object, key, {
    get,
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