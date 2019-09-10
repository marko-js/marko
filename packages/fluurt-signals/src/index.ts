let depTracker: Set<Signal<any>> | undefined;
let cleanupTracker: Function[] | undefined;
const IS_FRAGMENT = Symbol("fragment");
const IS_SIGNAL = Symbol("signal")
const GET =  Symbol("get");
const SET =  Symbol("set");
const ON =  Symbol("on");
const OFF =  Symbol("off");
const LISTENERS = Symbol("listeners");

export type MaybeSignal<T> = Signal<T> | T;
export type DefiniteNode = Fragment | Node;
export type ReferenceNode = Fragment | Node | null | undefined;
export type ContainerNode = Fragment | ParentNode & Node;

class Fragment {
  public prev: ReferenceNode;
  public last: DefiniteNode;
  public [IS_FRAGMENT]: boolean;
  constructor(prev: ReferenceNode, last: DefiniteNode) {
    this.prev = prev;
    this.last = last;
    this[IS_FRAGMENT] = true;
  }
}

export class Signal<T> {
  public [GET]: T;
  constructor(current: T) {
    this[IS_SIGNAL] = true;
    this[GET] = current;
    this[LISTENERS] = new Set();
  }
  [SET](next: T) {
    this[GET] = next;
    for(const l of this[LISTENERS]) {
      l();
    }
  }
  [ON](listener: Function) {
    this[LISTENERS].add(listener);
  }
  [OFF](listener: Function) {
    this[LISTENERS].remove(listener);
  }
}

export function compute(fn: Function) {
  let set: Signal<any>[typeof SET];
  let deps: Set<Signal<any>> | undefined;
  
  const compute = () => {
    const parentTracker = depTracker;
    const nextDeps = depTracker = new Set() as Set<Signal<any>>;
    const computed = fn();
    depTracker = parentTracker;
    for(const d of nextDeps) {
      d[ON](compute)
    }
    if (deps) {
      for(const d of deps) {
        if (!nextDeps.has(d)) d[OFF](compute);
      }
    }
    deps = nextDeps;
    set && set(computed);
    return computed;
  }

  const computed = compute();

  if ((deps as Set<Signal<any>>).size) {
    const value = new Signal(computed);
    set = value[SET];
    if (cleanupTracker) {
      cleanupTracker.push(() => {
        for(const d of deps as Set<Signal<any>>) {
          d[OFF](compute);
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

export function computeInput(fn: Function, names: string[]) {
  const input = compute(fn) as object;
  if (isSignal(input)) {
    names.forEach(name => Object.defineProperty(input, name, {
      value: compute(() => get(get(input)[name]))
    }));
  }
  return input;
}

export function loop(array: MaybeSignal<Array<any>>, render: Function, parent: ContainerNode, prev: ReferenceNode, getKey: Function) {
  let oldNodes: Map<string, Fragment> = new Map();
  let newNodes: Map<string, Fragment> = new Map();
  let oldKeys: string[] = [];
  let previousSibling: ReferenceNode;
  let emptyNode: Text;
  
  compute(() => {
    let index = 0;
    previousSibling = prev;

    for (const item of get(array)) {
      const key = getKey ? getKey(item, index) : index;
      const previousFragment = oldNodes.get(key);
      if (!previousFragment) {
        const lastChild = render(item, index, array, parent, previousSibling);
        newNodes.set(key, previousSibling = new Fragment(previousSibling, lastChild));
      } else {
        newNodes.set(key, previousSibling = previousFragment);
      }
    }

    const newKeys = Array.from(newNodes.keys());

    if (newKeys.length === 0) {
      clearFragment(fragment);
    } else {
      reconcile(fragment, oldKeys, oldNodes, newKeys, newNodes);
    }

    const clearedNodes = (oldNodes.clear(), oldNodes);
    oldKeys = newKeys;
    oldNodes = newNodes;
    newNodes = clearedNodes;
  });

  const fragment = new Fragment(prev, previousSibling || text("", parent, prev));
  return fragment;
}

export function conditional(branchIndex: MaybeSignal<number>, branches: Function[], parent: ContainerNode, prev: ReferenceNode) {
  let emptyNode: Text | undefined;
  let emptyCleanup: [] | undefined;
  let lastIndex: number | undefined;
  let cleanupFns: Function[];
  const fragment = new Fragment(prev, undefined as any as Node);

  compute(() => {
    const index = get(branchIndex);
    if (index !== lastIndex) {
      if (lastIndex !== undefined) {
        clearFragment(fragment);
      }
      const branch = branches[index];
      if (branch) {
        const parentTracker = cleanupTracker;
        cleanupFns = cleanupTracker = [];
        fragment.last = branch();
        cleanupTracker = parentTracker;
      } else {
        cleanupFns = emptyCleanup || (emptyCleanup = []);
        fragment.last = emptyNode || (emptyNode = text("", parent, prev));
      }
      lastIndex = index;
    }
  });

  if (cleanupTracker) {
    cleanupTracker.push(() => {
      for(const clean of cleanupFns) {
        clean();
      }
    });
  }

  return fragment;
}

export function el(name: string, parent: ContainerNode, prev: DefiniteNode | null | undefined) {
  const document = asParent(parent).ownerDocument as Document;
  const el = document.createElement(name);
  insertAfter(el, parent, prev);
  return el;
}

export function dynamicEl(name: MaybeSignal<string>, parent: ContainerNode, prev: ReferenceNode) {
  let currentEl: Element | undefined;
  compute(() => {
    const nextEl = el(get(name), parent, currentEl ? currentEl.previousSibling : prev);
    if (currentEl) {
      while(currentEl.firstChild) {
        nextEl.appendChild(currentEl.firstChild);
      }
      asParent(parent).removeChild(currentEl);
      fragment.last = nextEl;
    }
    currentEl = nextEl;
  });
  const fragment = new Fragment(prev, currentEl as Element);
  return fragment;
}

export function text(value: string, parent: ContainerNode, prev: ReferenceNode) {
  const document = asParent(parent).ownerDocument as Document;
  const text = document.createTextNode(value);
  insertAfter(text, parent, prev);
  return text;
}

export function dynamicText(value: MaybeSignal<string>, parent: ContainerNode, prev: ReferenceNode) {
  const textNode = text("", parent, prev);
  compute(() => textNode.nodeValue = get(value));
  return textNode;
}

export function attr(el: Element, name: string, value: any, remove?: boolean) {
  const normalized = normalizeAttributeValue(value);
  if (normalized) {
    el.setAttribute(name, normalized);
  } else if(remove) {
    el.removeAttribute(name);
  }
}

export function dynamicAttr(el: Element, name: string, value: any) {
  compute(() => attr(el, name, get(value), true));
}

export function dynamicAttrs(el: Element, attrs: MaybeSignal<object>) {
  let previousAttrs: object;
  let seenAttrs: Set<string> = new Set();
  compute(() => {
    const nextAttrs = get(attrs);
    for(const name in previousAttrs) {
      if (!nextAttrs.hasOwnProperty(name)) {
        el.removeAttribute(name);
      }
    }
    if (seenAttrs.has(name))
    for(const name in nextAttrs) {
      if (seenAttrs.has(name))
      attr(el, name, get(nextAttrs[name]), true);
    }
    previousAttrs = nextAttrs;
  });
}

export function prop(el: Element, name: string, value: any) {
  el[name] = value;
}

export function dynamicProp(el: Element, name: string, value: any) {
  compute(() => el[name] = get(value));
}

export function dynamicProps(el: Element, props: MaybeSignal<object>) {
  let previousProps: object;
  compute(() => {
    const nextProps = get(props);
    for(const name in previousProps) {
      if (!nextProps.hasOwnProperty(name)) {
        delete el[name];
      }
    }
    for(const name in nextProps) {
      el[name] = nextProps[name];
    }
    previousProps = nextProps;
  });
}

function insertAfter(node: ChildNode, parent: ContainerNode, prev: ReferenceNode) {
  asParent(parent).insertBefore(node, prev ? nextSibling(prev) : firstChild(parent));
}

function asParent(node: ContainerNode): ParentNode & Node {
  return isFragment(node) ? getParent(node.last) : node;
}

function getParent(node: DefiniteNode) {
  return isFragment(node) ? getParent(node.last) : node.parentNode;
}

function nextSibling(node: DefiniteNode): Node | null {
  return isFragment(node) ? nextSibling(node.last) : node.nextSibling;
}

function firstChild(node: DefiniteNode): Node | null {
  return isFragment(node) ? (node.prev ? nextSibling(node.prev) : isFragment(node.last) ? firstChild(node.last) : node.last) : node.firstChild;
}

function lastChild(node: DefiniteNode): Node | null {
  return isFragment(node) ? (isFragment(node.last) ? lastChild(node.last) : node.last) : node.lastChild;
}

function clearFragment(fragment: Fragment) {
  const parent = getParent(fragment.last);
  const next = nextSibling(fragment.last);
  let current = fragment.prev ? nextSibling(fragment.prev) : firstChild(parent);
  while (current && current !== next) {
    parent.removeChild(current as Node);
    current = current.nextSibling;
  }
}

function insertFragmentBefore(fragment: Fragment, parent: ContainerNode, next: ReferenceNode) {
  const last = lastChild(fragment);
}

function removeFragment(parent: ContainerNode, node: Fragment) {

}

function isSignal(value: MaybeSignal<any>): value is Signal<any> {
  return value[IS_SIGNAL] === true;
}

function isFragment(value: DefiniteNode): value is Fragment {
  return value[IS_FRAGMENT] === true;
}

function normalizeAttributeValue(value: unknown) {
  return value == null || value === false ? undefined : value + "";
}

function normalizeValue(value: unknown) {
  return (value == null ? "" : value + "");
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
      nextSibling = k < newKeys.length ? newNodes.get(newKeys[k]) as Fragment : null;
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
        insertFragmentBefore(parent, newNodes.get(newKeys[newStart]) as Fragment, null);
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
            nextSibling = pos < k ? newNodes.get(newKeys[pos]) as Fragment : null;
            insertFragmentBefore(parent, newNodes.get(newKey) as Fragment, nextSibling);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + newStart;
              newKey = newKeys[pos++];
              nextSibling = pos < k ? newNodes.get(newKeys[pos]) as Fragment : null;
              insertFragmentBefore(parent, newNodes.get(newKey) as Fragment, nextSibling);
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
            nextSibling = pos < k ? newNodes.get(newKeys[pos]) as Fragment : null;
            insertFragmentBefore(parent, newNodes.get(newKey) as Fragment, nextSibling);
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