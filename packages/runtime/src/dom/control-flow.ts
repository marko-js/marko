import {
  Source,
  createSource,
  isSignal,
  createComputation,
  createEffect,
  get,
  markFragmentDestroyed,
  UpstreamSignalOrValue,
  setSignalValue
} from "./signals";
import {
  Fragment,
  createFragment,
  createFragmentFromRenderer,
  currentFragment,
  replaceFragment
} from "./fragments";
import { Context, setContext } from "../common/context";
import { reconcile } from "./reconcile";
import { render, Renderer } from "./dom";
import { walk } from "./walker";

type ForIterationFragment<T> = Fragment & {
  ___itemSignal: Source<T>;
  ___indexSignal?: Source<number> | false;
};

export function loopOf<T>(
  array: UpstreamSignalOrValue<T[]>,
  renderer: Renderer<
    (
      item: UpstreamSignalOrValue<T>,
      index: UpstreamSignalOrValue<number> | boolean,
      all: typeof array
    ) => void
  >,
  getKey: (item: T, index: number) => string,
  hasIndex = false,
  onlyChild = false
) {
  if (isSignal(array)) {
    const ctx = Context;
    const rootFragment = currentFragment!;
    const emptyNodes: Map<string, Fragment> = new Map();
    let oldNodes: Map<string, Fragment> = emptyNodes;
    let oldKeys: string[] = [];
    let emptyMarker: Node;
    let emptyFragment: Fragment;
    let parent: Node & ParentNode;
    let trackFragmentFlags: number;

    if (onlyChild) {
      parent = walk() as Node & ParentNode;
      trackFragmentFlags = 0;
    } else {
      emptyMarker = walk();
      emptyFragment = createFragment(emptyMarker, rootFragment);
      trackFragmentFlags = trackFragmentChildren(rootFragment, emptyMarker);
      oldNodes.set(emptyFragment as any, emptyFragment);
      oldKeys.push(emptyFragment as any);
    }

    const newNodes = createComputation(
      _array => {
        let _newNodes: Map<string, Fragment>;
        let newItems = 0;
        let moved = false;
        const len = _array.length;

        if (len === 0) {
          _newNodes = emptyNodes;
        } else {
          _newNodes = new Map();
          setContext(ctx);
          for (let index = 0; index < len; index++) {
            const item = _array[index];
            const key = getKey ? getKey(item, index) : "" + index;
            let childFragment = oldNodes.get(key) as ForIterationFragment<
              typeof item
            >;
            if (!childFragment) {
              newItems++;
              const itemSignal = createSource(item);
              const indexSignal = hasIndex && createSource(index);
              childFragment = createFragmentFromRenderer(
                renderer,
                rootFragment,
                itemSignal,
                indexSignal,
                array
              ) as ForIterationFragment<T>;
              childFragment.___itemSignal = itemSignal;
              childFragment.___indexSignal = indexSignal;
            } else {
              setSignalValue(childFragment.___itemSignal, item);
              childFragment.___indexSignal &&
                setSignalValue(childFragment.___indexSignal, index);
              moved = moved || key !== oldKeys[index];
            }
            _newNodes.set(key, childFragment);
          }
          setContext(null);
        }

        const removals = _newNodes.size - oldNodes.size - newItems < 0;
        if (removals) {
          for (const k of oldKeys) {
            if (!_newNodes.has(k)) markFragmentDestroyed(oldNodes.get(k)!);
          }
        } else if (!newItems && !moved) {
          return oldNodes;
        }

        return _newNodes;
      },
      array,
      1
    );

    createEffect(
      _newNodes => {
        const newKeys = Array.from(_newNodes.keys());
        const oldLastChild = oldNodes.get(oldKeys[oldKeys.length - 1]);
        const afterReference = oldLastChild
          ? oldLastChild.___lastChild.nextSibling
          : null;
        const parentNode = parent || oldLastChild!.___lastChild.parentNode;
        reconcile(
          parentNode,
          oldKeys,
          oldNodes,
          newKeys,
          _newNodes,
          afterReference
        );

        if (trackFragmentFlags) {
          const newFirstChild = _newNodes.get(newKeys[0]);
          const newLastChild = _newNodes.get(newKeys[newKeys.length - 1]);
          updateFragmentChildren(
            rootFragment,
            trackFragmentFlags,
            newFirstChild!,
            newLastChild!
          );
        }

        oldKeys = newKeys;
        oldNodes = _newNodes;
      },
      newNodes,
      1
    );
  } else {
    let index = 0;
    for (const item of array) {
      render(renderer, item, index++, array);
    }
  }
}

export function loopIn<T>(
  object: UpstreamSignalOrValue<Record<string, T>>,
  renderer: Renderer<
    (
      key: UpstreamSignalOrValue<string>,
      value: UpstreamSignalOrValue<T>,
      all: typeof object
    ) => void
  >,
  onlyChild?: boolean
) {
  let keyRenderer: Renderer;
  const originalHydrate = renderer.___hydrate;
  if (originalHydrate) {
    const newHydrate = (key: Source<string>) =>
      originalHydrate(
        get(key),
        createComputation(_object => _object[get(key)], object, 1),
        object
      );
    keyRenderer = Object.assign(newHydrate, renderer);
    keyRenderer.___hydrate = newHydrate;
  } else {
    keyRenderer = renderer;
  }
  loopOf<string>(
    createComputation(_object => Object.keys(_object), object, 1),
    keyRenderer,
    firstArgAsKey,
    false,
    onlyChild
  );
}

export function loopFrom(
  from: UpstreamSignalOrValue<number>,
  to: UpstreamSignalOrValue<number>,
  step: UpstreamSignalOrValue<number>,
  renderer: Renderer<(i: UpstreamSignalOrValue<number>) => void>,
  onlyChild?: boolean
) {
  loopOf<number>(
    createComputation(
      ([_from, _to, _step]) => {
        const range: number[] = [];

        for (let i = _from; i <= _to; i += _step) {
          range.push(i);
        }

        return range;
      },
      [from, to, step] as const,
      0
    ),
    renderer,
    firstArgAsKey,
    false,
    onlyChild
  );
}

export function conditional(
  renderer: UpstreamSignalOrValue<Renderer | undefined>,
  ...input: UpstreamSignalOrValue[]
) {
  if (isSignal(renderer)) {
    const rootFragment = currentFragment!;
    const ctx = Context;
    const emptyMarker = walk();
    const trackFragmentFlags = trackFragmentChildren(rootFragment, emptyMarker);
    const emptyFragment = createFragment(emptyMarker, rootFragment);
    let previousFragment = emptyFragment;

    const fragmentSignal = createComputation(
      // TODO: hoist out this function and compare benchmarks
      _renderer => {
        setContext(ctx);
        if (!_renderer && previousFragment)
          markFragmentDestroyed(previousFragment);
        const result = _renderer
          ? createFragmentFromRenderer(_renderer, rootFragment, ...input)
          : emptyFragment;
        setContext(null);
        return result;
      },
      renderer,
      1
    );

    createEffect(
      nextFragment => {
        replaceFragment(previousFragment, nextFragment);
        previousFragment = nextFragment;
        updateFragmentChildren(
          rootFragment,
          trackFragmentFlags,
          nextFragment,
          nextFragment
        );
      },
      fragmentSignal,
      1
      // (fragmentSignal as Signal).___sid // TODO: let's add a comment as to why this is needed.
    );
  } else if (!isSignal(renderer) && renderer) {
    render(renderer, ...input);
  }
}

function firstArgAsKey(key: unknown) {
  return key + "";
}

const TRACK_FIRST = 1;
const TRACK_LAST = 2;

function trackFragmentChildren(rootFragment: Fragment, marker: Node) {
  let flags = 0;
  if (rootFragment.___firstChild === marker) flags |= TRACK_FIRST;
  if (rootFragment.___lastChild === marker) flags |= TRACK_LAST;
  return flags;
}

function updateFragmentChildren(
  rootFragment: Fragment,
  flags: number,
  firstChildFragment: Fragment | undefined,
  lastChildFragment: Fragment | undefined
) {
  if (flags & TRACK_FIRST) {
    updateFragmentChild(
      rootFragment,
      firstChildFragment!,
      "___firstRef",
      "___firstChild"
    );
  }
  if (flags & TRACK_LAST) {
    updateFragmentChild(
      rootFragment,
      lastChildFragment!,
      "___lastRef",
      "___lastChild"
    );
  }
}

function updateFragmentChild(
  fragment: Fragment,
  child: Fragment,
  refKey: "___firstRef" | "___lastRef",
  childKey: "___firstChild" | "___lastChild",
  parent = fragment.___parentFragment
) {
  fragment[refKey] = child;
  fragment[childKey] = child[childKey];
  if (parent && parent[refKey] === fragment) {
    updateFragmentChild(parent, fragment, refKey, childKey);
  }
}
