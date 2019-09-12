let depTracker: Set<Signal<unknown>> | undefined;
const IS_FRAGMENT = Symbol("fragment");
const IS_SIGNAL = Symbol("signal");
const GET = Symbol("get");
const SET = Symbol("set");
const ON = Symbol("on");
const OFF = Symbol("off");
const LISTENERS = Symbol("listeners");

export type MaybeSignal<T> = Signal<T> | T;
export type Raw<T> = T extends Signal<infer V> ? V : T;

type ContainerNode = Fragment | ParentNode & Node;
type ForIterationFragment<T> = Fragment & {
  itemSignal?: Signal<T>;
  indexSignal?: Signal<number>;
};

export class Signal<T> {
  public [GET]: T;
  constructor(current: T) {
    this[IS_SIGNAL] = true;
    this[GET] = current;
    this[LISTENERS] = new Set();
  }
  public [SET](next: T) {
    this[GET] = next;
    for (const l of this[LISTENERS]) {
      l();
    }
  }
  public [ON](listener: () => void) {
    this[LISTENERS].add(listener);
  }
  public [OFF](listener: () => void) {
    this[LISTENERS].remove(listener);
  }
}

export function compute<T>(fn: () => T) {
  let update: Signal<unknown>[typeof SET];
  let deps: Set<Signal<unknown>>;

  const _compute = () => {
    const parentTracker = depTracker;
    const nextDeps = (depTracker = new Set());
    const value = fn();
    depTracker = parentTracker;
    for (const d of nextDeps) {
      d[ON](_compute);
    }
    if (deps) {
      for (const d of deps) {
        if (!nextDeps.has(d)) {
          d[OFF](_compute);
        }
      }
    }
    deps = nextDeps;
    if (update) {
      update(value);
    }
    return value;
  };

  const computed = _compute();

  if (deps!.size) {
    const value = new Signal(computed);
    update = value[SET];
    if (currentFragment) {
      currentFragment.cleanup.add(() => {
        for (const d of deps) {
          d[OFF](_compute);
        }
      });
    }
    return value;
  } else {
    return computed;
  }
}

export function get<T>(value: MaybeSignal<T>): T {
  if (isSignal(value)) {
    if (depTracker) {
      depTracker.add(value);
    }
    value = value[GET];
  }
  return value;
}

export function set(value: MaybeSignal<unknown>, newValue: unknown) {
  if (isSignal(value)) {
    value[SET](newValue);
  }
  return newValue;
}

export function computeInput(fn: () => object, names: string[]) {
  const input = compute(fn);
  if (isSignal(input)) {
    names.forEach(name =>
      Object.defineProperty(input, name, {
        value: compute(() => get(get(input)[name]))
      })
    );
  }
  return input;
}

export function loop(
  array: MaybeSignal<unknown[]>,
  render: (
    item: MaybeSignal<unknown>,
    index: MaybeSignal<number>,
    all: typeof array,
    parent: Fragment
  ) => void,
  parent: ContainerNode,
  getKey: (item: unknown, index: number) => string
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
        render(itemSignal, indexSignal, array, childFragment);
        endFragment(childFragment);
        newNodes.set(key, childFragment);
      } else {
        previousChildFragment.itemSignal![SET](item);
        previousChildFragment.indexSignal![SET](index);
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

function conditional(
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

export function el(name: string, parent: ContainerNode) {
  return parent.appendChild(
    parent.ownerDocument!.createElement(name)
  ) as Element;
}

export function dynamicTag(
  tag: MaybeSignal<
    | string
    | (((input: MaybeSignal<object>, parent: ContainerNode) => void) & {
        names: string[];
      })
  >,
  input: MaybeSignal<object>,
  parent: ContainerNode,
  body: ((parent: ContainerNode) => void) | undefined
) {
  const renderFns = new Map();

  return conditional(
    compute(() => {
      const nextTag = get(tag);
      let nextRender = renderFns.get(nextTag);
      if (!nextRender) {
        if (typeof nextTag === "string") {
          nextRender = (fragmentParent: Fragment) => {
            const nextEl = el(nextTag, fragmentParent);
            dynamicAttrs(nextEl, input);
            if (body) {
              body(nextEl);
            }
          };
        } else if (nextTag) {
          const getInput = body
            ? () => ({ ...get(input), renderBody: body })
            : () => input;
          nextRender = (fragmentParent: Fragment) =>
            nextTag(computeInput(getInput, nextTag.names), fragmentParent);
        } else {
          nextRender = body || (() => {});
        }
        renderFns.set(nextTag, nextRender);
      }
      return nextRender;
    }),
    parent
  );
}

export function text(value: string, parent: ContainerNode) {
  return parent.appendChild(
    parent.ownerDocument!.createTextNode(normalizeValue(value))
  ) as Text;
}

export function dynamicText(value: MaybeSignal<string>, parent: ContainerNode) {
  const textNode = text("", parent);
  compute(() => (textNode.nodeValue = normalizeValue(get(value))));
  return textNode;
}

export function attr(
  element: Element,
  name: string,
  value: unknown,
  remove?: boolean
) {
  const normalized = normalizeAttributeValue(value);
  if (normalized) {
    element.setAttribute(name, normalized);
  } else if (remove) {
    element.removeAttribute(name);
  }
}

export function dynamicAttr(element: Element, name: string, value: unknown) {
  compute(() => attr(element, name, get(value), true));
}

export function dynamicAttrs(element: Element, attrs: MaybeSignal<object>) {
  let previousAttrs: object;
  const seenAttrs: Set<string> = new Set();
  compute(() => {
    const nextAttrs = get(attrs);
    for (const name in previousAttrs) {
      if (!nextAttrs.hasOwnProperty(name)) {
        element.removeAttribute(name);
      }
    }
    if (seenAttrs.has(name)) {
      for (const name in nextAttrs) {
        if (seenAttrs.has(name)) {
          attr(element, name, get(nextAttrs[name]), true);
        }
      }
    }
    previousAttrs = nextAttrs;
  });
}

export function prop(element: Element, name: string, value: unknown) {
  element[name] = value;
}

export function dynamicProp(element: Element, name: string, value: unknown) {
  compute(() => (element[name] = get(value)));
}

export function dynamicProps(element: Element, props: MaybeSignal<object>) {
  let previousProps: object;
  compute(() => {
    const nextProps = get(props);
    for (const name in previousProps) {
      if (!nextProps.hasOwnProperty(name)) {
        delete element[name];
      }
    }
    for (const name in nextProps) {
      element[name] = nextProps[name];
    }
    previousProps = nextProps;
  });
}

class Fragment {
  public before: Text;
  public after: Text;
  public parent?: Fragment;
  public cleanup: Set<Fragment | (() => void)>;
  constructor(parent) {
    this.before = text("", parent);
    this.after = text("", parent);
    this.cleanup = new Set();
  }
  public appendChild(childNode: ChildNode & Node) {
    const after = this.after;
    after.parentNode!.insertBefore(childNode, this.after);
  }
  public get ownerDocument() {
    return this.before.ownerDocument;
  }
}

let currentFragment: Fragment | undefined;

function beginFragment(parent: ContainerNode, fragment?: Fragment): Fragment {
  const parentFragment = currentFragment;
  currentFragment = fragment || new Fragment(parent);
  currentFragment.parent = parentFragment;
  if (parentFragment) {
    parentFragment.cleanup.add(currentFragment);
  }
  return currentFragment;
}

function endFragment(fragment: Fragment) {
  currentFragment = fragment.parent;
}

function insertFragmentBefore(
  fragment: Fragment,
  parent: Fragment,
  next: Fragment | null
) {
  const domParent = parent.before.parentNode!;
  const reference = next && next.before;
  const stop = fragment.after.nextSibling;
  let current: Node | null = fragment.before;
  while (current && current !== stop) {
    domParent.insertBefore(current, reference);
    current = current.nextSibling;
  }
}

function clearFragment(fragment: Fragment, removeMarkers?: boolean) {
  const domParent = fragment.before.parentNode!;
  const stop = removeMarkers ? fragment.after.nextSibling : fragment.after;
  let current: Node | null = removeMarkers
    ? fragment.before
    : fragment.before.nextSibling;
  while (current && current !== stop) {
    domParent.removeChild(current);
    current = current.nextSibling;
  }
  cleanupFragment(fragment);
}

function removeFragment(fragment: Fragment) {
  clearFragment(fragment, true);
}

function cleanupFragment(fragment: Fragment) {
  for (const cleanup of fragment.cleanup) {
    if (isFragment(cleanup)) {
      cleanupFragment(cleanup);
    } else {
      cleanup();
    }
  }
}

function isSignal(value: MaybeSignal<any>): value is Signal<any> {
  return value[IS_SIGNAL] === true;
}

function isFragment(value: any): value is Fragment {
  return value[IS_FRAGMENT] === true;
}

function normalizeAttributeValue(value: unknown) {
  return value == null || value === false ? undefined : value + "";
}

function normalizeValue(value: unknown) {
  return value == null ? "" : value + "";
}

const WRONG_POS = 2147483647;

function reconcile(
  parent: Fragment,
  oldKeys: string[],
  oldNodes: Map<string, Fragment>,
  newKeys: string[],
  newNodes: Map<string, Fragment>
): void {
  let oldStart = 0;
  let newStart = 0;
  let oldEnd = oldKeys.length - 1;
  let newEnd = newKeys.length - 1;
  let oldStartKey = oldKeys[oldStart];
  let newStartKey = newKeys[newStart];
  let oldEndKey = oldKeys[oldEnd];
  let newEndKey = newKeys[newEnd];
  let i: number;
  let j: number | undefined;
  let k: number;
  let nextSibling: Fragment | null;
  let oldKey: string | null;
  let newKey: string;

  // Step 1
  // tslint:disable-next-line: label-position
  outer: {
    // Skip nodes with the same key at the beginning.
    while (oldStartKey === newStartKey) {
      ++oldStart;
      ++newStart;
      if (oldStart > oldEnd || newStart > newEnd) {
        break outer;
      }
      oldStartKey = oldKeys[oldStart];
      newStartKey = newKeys[newStart];
    }

    // Skip nodes with the same key at the end.
    while (oldEndKey === newEndKey) {
      --oldEnd;
      --newEnd;
      if (oldStart > oldEnd || newStart > newEnd) {
        break outer;
      }
      oldEndKey = oldKeys[oldEnd];
      newEndKey = newKeys[newEnd];
    }
  }

  if (oldStart > oldEnd) {
    // All old nodes are in the correct place, insert the remaining new nodes.
    if (newStart <= newEnd) {
      k = newEnd + 1;
      nextSibling = k < newKeys.length ? newNodes.get(newKeys[k])! : null;
      do {
        insertFragmentBefore(
          parent,
          newNodes.get(newKeys[newStart++])!,
          nextSibling
        );
      } while (newStart <= newEnd);
    }
  } else if (newStart > newEnd) {
    // All new nodes are in the correct place, remove the remaining old nodes.
    do {
      removeFragment(oldNodes.get(oldKeys[oldStart++])!);
    } while (oldStart <= oldEnd);
  } else {
    // Step 2
    const oldLength = oldEnd - oldStart + 1;
    const newLength = newEnd - newStart + 1;

    const aNullable = oldKeys as Array<string | null>; // will be removed by js optimizing compilers.
    // Mark all nodes as inserted.
    const sources = new Array(newLength);
    for (i = 0; i < newLength; ++i) {
      sources[i] = -1;
    }

    // When pos === WRONG_POS, it means that one of the nodes in the wrong position.
    let pos = 0;
    let synced = 0;

    const keyIndex: Map<string, number> = new Map();
    for (j = newStart; j <= newEnd; ++j) {
      keyIndex.set(newKeys[j], j);
    }

    for (i = oldStart; i <= oldEnd && synced < newLength; ++i) {
      oldKey = oldKeys[i];
      j = keyIndex.get(oldKey);
      if (j !== undefined) {
        pos = pos > j ? WRONG_POS : j;
        ++synced;
        newKey = newKeys[j];
        sources[j - newStart] = i;
        aNullable[i] = null;
      }
    }

    if (oldLength === oldKeys.length && synced === 0) {
      // None of the newNodes already exist in the DOM
      // All oldNodes need to be removed, all newNodes need to be inserted
      clearFragment(parent);
      for (; newStart < newLength; ++newStart) {
        insertFragmentBefore(parent, newNodes.get(newKeys[newStart])!, null);
      }
    } else {
      i = oldLength - synced;
      while (i > 0) {
        oldKey = aNullable[oldStart++];
        if (oldKey !== null) {
          removeFragment(oldNodes.get(oldKey)!);
          i--;
        }
      }

      // Step 3
      if (pos === WRONG_POS) {
        const seq = longestIncreasingSubsequence(sources);
        j = seq.length - 1;
        k = newKeys.length;
        for (i = newLength - 1; i >= 0; --i) {
          if (sources[i] === -1) {
            pos = i + newStart;
            newKey = newKeys[pos++];
            nextSibling = pos < k ? newNodes.get(newKeys[pos])! : null;
            insertFragmentBefore(parent, newNodes.get(newKey)!, nextSibling);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + newStart;
              newKey = newKeys[pos++];
              nextSibling = pos < k ? newNodes.get(newKeys[pos])! : null;
              insertFragmentBefore(parent, newNodes.get(newKey)!, nextSibling);
            } else {
              --j;
            }
          }
        }
      } else if (synced !== newLength) {
        k = newKeys.length;
        for (i = newLength - 1; i >= 0; --i) {
          if (sources[i] === -1) {
            pos = i + newStart;
            newKey = newKeys[pos++];
            nextSibling = pos < k ? newNodes.get(newKeys[pos])! : null;
            insertFragmentBefore(parent, newNodes.get(newKey)!, nextSibling);
          }
        }
      }
    }
  }
}

function longestIncreasingSubsequence(a: number[]): number[] {
  const p = a.slice();
  const result: number[] = [];
  result.push(0);
  let u: number;
  let v: number;

  for (let i = 0, il = a.length; i < il; ++i) {
    if (a[i] === -1) {
      continue;
    }

    const j = result[result.length - 1];
    if (a[j] < a[i]) {
      p[i] = j;
      result.push(i);
      continue;
    }

    u = 0;
    v = result.length - 1;

    while (u < v) {
      // tslint:disable-next-line:no-bitwise
      const c = ((u + v) / 2) | 0;
      if (a[result[c]] < a[i]) {
        u = c + 1;
      } else {
        v = c;
      }
    }

    if (a[i] < a[result[u]]) {
      if (u > 0) {
        p[i] = result[u - 1];
      }
      result[u] = i;
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}
