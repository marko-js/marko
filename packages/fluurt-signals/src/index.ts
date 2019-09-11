let depTracker: Set<Signal<any>> | undefined;
const IS_FRAGMENT = Symbol("fragment");
const IS_SIGNAL = Symbol("signal");
const GET = Symbol("get");
const SET = Symbol("set");
const ON = Symbol("on");
const OFF = Symbol("off");
const LISTENERS = Symbol("listeners");

export type MaybeSignal<T> = Signal<T> | T;
export type Raw<T> = T extends Signal<infer V> ? V : T;

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
  let update: Signal<any>[typeof SET];
  let deps: Set<Signal<any>> | undefined;

  const _compute = () => {
    const parentTracker = depTracker;
    const nextDeps = (depTracker = new Set() as Set<Signal<any>>);
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

  if ((deps as Set<Signal<any>>).size) {
    const value = new Signal(computed);
    update = value[SET];
    if (currentFragment) {
      currentFragment.cleanup.add(() => {
        for (const d of deps as Set<Signal<any>>) {
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

export function set(value: MaybeSignal<any>, newValue: any) {
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
  array: MaybeSignal<any[]>,
  render: (
    item: MaybeSignal<any>,
    index: MaybeSignal<number>,
    all: typeof array,
    parent: Fragment
  ) => void,
  parent: ContainerNode,
  getKey: (item: any, index: number) => string
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
      target = (resolveParent(parent)
        .ownerDocument as Document).createDocumentFragment();
    }

    for (const item of get(array)) {
      const key = getKey ? getKey(item, index) : "" + index;
      const previousChildFragment = oldNodes.get(key);
      if (!previousChildFragment) {
        const childFragment = beginFragment(target);
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
        previousChildFragment.itemSignal[SET](item);
        previousChildFragment.indexSignal[SET](index);
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
  const document = resolveParent(parent).ownerDocument as Document;
  const elNode = document.createElement(name);
  append(elNode, parent);
  return elNode;
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
  const document = resolveParent(parent).ownerDocument as Document;
  const textNode = document.createTextNode(normalizeValue(value));
  append(textNode, parent);
  return textNode;
}

export function dynamicText(value: MaybeSignal<string>, parent: ContainerNode) {
  const textNode = text("", parent);
  compute(() => (textNode.nodeValue = normalizeValue(get(value))));
  return textNode;
}

export function attr(
  element: Element,
  name: string,
  value: any,
  remove?: boolean
) {
  const normalized = normalizeAttributeValue(value);
  if (normalized) {
    element.setAttribute(name, normalized);
  } else if (remove) {
    element.removeAttribute(name);
  }
}

export function dynamicAttr(element: Element, name: string, value: any) {
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

export function prop(element: Element, name: string, value: any) {
  element[name] = value;
}

export function dynamicProp(element: Element, name: string, value: any) {
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

export type DefiniteNode = Fragment | Node;
export type ReferenceNode = Fragment | Node | null;
export type ContainerNode = Fragment | ParentNode & Node;
export interface Fragment {
  before: Text;
  after: Text;
  parent: Fragment | undefined;
  cleanup: Set<Fragment | (() => void)>;
  [IS_FRAGMENT]: true;
  [propName: string]: any;
}

let currentFragment: Fragment | undefined;

function beginFragment(parent: ContainerNode, fragment?: Fragment): Fragment {
  const parentFragment = currentFragment;
  currentFragment = fragment || {
    before: text("", parent),
    after: text("", parent),
    parent: parentFragment,
    cleanup: new Set(),
    [IS_FRAGMENT]: true
  };
  if (parentFragment) {
    parentFragment.cleanup.add(currentFragment);
  }
  return currentFragment;
}

function endFragment(fragment: Fragment) {
  currentFragment = fragment.parent;
}

function append(child: Node, parent: ContainerNode) {
  let next: Node | null = null;
  if (isFragment(parent)) {
    next = parent.after;
    parent = next.parentNode as ParentNode & Node;
  }
  parent.insertBefore(child, next);
}

function insertFragmentBefore(
  fragment: Fragment,
  parent: ContainerNode,
  next: ReferenceNode
) {
  const domParent = resolveParent(parent);
  const reference = resolveFirstChild(next);
  const stop = fragment.after.nextSibling;
  let current: Node | null = fragment.before;
  while (current && current !== stop) {
    domParent.insertBefore(current, reference);
    current = current.nextSibling;
  }
}

function clearFragment(fragment: Fragment, removeMarkers?: boolean) {
  const domParent = resolveParent(fragment);
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

function removeFragment(parent: ContainerNode, fragment: Fragment) {
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

function resolveFirstChild(node: ReferenceNode) {
  return node && isFragment(node) ? node.before : node;
}

function resolveParent(node: ContainerNode): ParentNode & Node {
  return isFragment(node)
    ? (node.before.parentNode as ParentNode & Node)
    : node;
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

export function classComponent(def) {
  const proto = typeof def === "function" ? def.proto : def;
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
      nextSibling =
        k < newKeys.length ? (newNodes.get(newKeys[k]) as Fragment) : null;
      do {
        insertFragmentBefore(
          parent,
          newNodes.get(newKeys[newStart++]) as Fragment,
          nextSibling
        );
      } while (newStart <= newEnd);
    }
  } else if (newStart > newEnd) {
    // All new nodes are in the correct place, remove the remaining old nodes.
    do {
      removeFragment(parent, oldNodes.get(oldKeys[oldStart++]) as Fragment);
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

    const keyIndex: Map<any, number> = new Map();
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
        insertFragmentBefore(
          parent,
          newNodes.get(newKeys[newStart]) as Fragment,
          null
        );
      }
    } else {
      i = oldLength - synced;
      while (i > 0) {
        oldKey = aNullable[oldStart++];
        if (oldKey !== null) {
          removeFragment(parent, oldNodes.get(oldKey) as Fragment);
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
            nextSibling =
              pos < k ? (newNodes.get(newKeys[pos]) as Fragment) : null;
            insertFragmentBefore(
              parent,
              newNodes.get(newKey) as Fragment,
              nextSibling
            );
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + newStart;
              newKey = newKeys[pos++];
              nextSibling =
                pos < k ? (newNodes.get(newKeys[pos]) as Fragment) : null;
              insertFragmentBefore(
                parent,
                newNodes.get(newKey) as Fragment,
                nextSibling
              );
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
            nextSibling =
              pos < k ? (newNodes.get(newKeys[pos]) as Fragment) : null;
            insertFragmentBefore(
              parent,
              newNodes.get(newKey) as Fragment,
              nextSibling
            );
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
