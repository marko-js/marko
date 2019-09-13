import {
  Signal,
  compute,
  get,
  set,
  isSignal,
  MaybeSignal,
  Raw
} from "./signals";
import {
  Fragment,
  ContainerNode,
  beginFragment,
  endFragment,
  clearFragment
} from "./fragments";
import { reconcile } from "./reconcile";

type ForIterationFragment<T> = Fragment & {
  itemSignal?: Signal<T>;
  indexSignal?: Signal<number>;
};

export function loop<T>(
  array: MaybeSignal<T[]>,
  render: (
    parent: Fragment,
    item: MaybeSignal<T>,
    index: MaybeSignal<number>,
    all: typeof array
  ) => void,
  parent: ContainerNode,
  getKey: (item: T, index: number) => string
) {
  let oldNodes: Map<string, Fragment> = new Map();
  let newNodes: Map<string, Fragment> = new Map();
  let oldKeys: string[] = [];

  const rootFragment = beginFragment(parent);
  let target: DocumentFragment | Fragment = rootFragment;
  let firstRender = true;

  compute(() => {
    let index = 0;

    if (!firstRender && target === rootFragment) {
      target = parent.ownerDocument!.createDocumentFragment();
    }

    for (const item of get(array)) {
      const key = getKey ? getKey(item, index) : "" + index;
      const previousChildFragment = oldNodes.get(key) as ForIterationFragment<
        typeof item
      >;
      if (!previousChildFragment) {
        const childFragment = beginFragment(target) as ForIterationFragment<
          typeof item
        >;
        const itemSignal = isSignal(array)
          ? (childFragment.itemSignal = new Signal(item))
          : item;
        const indexSignal = isSignal(array)
          ? (childFragment.indexSignal = new Signal(index))
          : index;
        render(childFragment, itemSignal, indexSignal, array);
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
      if (newKeys.length === 0) {
        clearFragment(rootFragment);
      } else {
        reconcile(rootFragment, oldKeys, oldNodes, newKeys, newNodes);
      }
    }

    const clearedNodes = (oldNodes.clear(), oldNodes);
    oldKeys = newKeys;
    oldNodes = newNodes;
    newNodes = clearedNodes;
    firstRender = false;
  });

  endFragment(rootFragment);

  return rootFragment;
}

export function conditional(
  render: MaybeSignal<(parent: Fragment) => void>,
  parent: ContainerNode
) {
  let lastRender: Raw<typeof render> | undefined;
  let rootFragment: Fragment | undefined;

  compute(() => {
    const nextRender = get(render);
    if (nextRender !== lastRender) {
      if (rootFragment) {
        clearFragment(rootFragment);
      }
      rootFragment = beginFragment(parent, rootFragment);
      if (nextRender) {
        nextRender(rootFragment);
      }
      endFragment(rootFragment);
      lastRender = nextRender;
    }
  });

  return rootFragment;
}

// could remove this and do it in the template
export function ifConditional(
  branchIndex: MaybeSignal<number>,
  branches: Array<(parent: Fragment) => void>,
  parent: ContainerNode
) {
  return conditional(compute(() => branches[get(branchIndex)]), parent);
}
