import { text } from "./dom";

const IS_FRAGMENT = Symbol("fragment");

export type ContainerNode = Fragment | ParentNode & Node;

export let currentFragment: Fragment | undefined;

export class Fragment {
  public before: Text;
  public after: Text;
  public parent?: Fragment;
  public cleanup: Set<Fragment | (() => void)>;
  public [IS_FRAGMENT]: true;
  constructor(parent: ContainerNode) {
    this.before = text("", parent);
    this.after = text("", parent);
    this.cleanup = new Set();
    this[IS_FRAGMENT] = true;
  }
  public appendChild(childNode: ChildNode & Node) {
    const after = this.after;
    after.parentNode!.insertBefore(childNode, this.after);
  }
  public get ownerDocument() {
    return this.before.ownerDocument;
  }
}

export function beginFragment(
  parent: ContainerNode,
  fragment?: Fragment
): Fragment {
  const parentFragment = currentFragment;
  currentFragment = fragment || new Fragment(parent);
  currentFragment.parent = parentFragment;
  if (parentFragment) {
    parentFragment.cleanup.add(currentFragment);
  }
  return currentFragment;
}

export function endFragment(fragment: Fragment) {
  currentFragment = fragment.parent;
}

export function insertFragmentBefore(
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

export function clearFragment(fragment: Fragment, removeMarkers?: boolean) {
  const domParent = fragment.before.parentNode!;
  const stop = removeMarkers ? fragment.after.nextSibling : fragment.after;
  let current: Node | null = removeMarkers
    ? fragment.before
    : fragment.before.nextSibling;
  while (current && current !== stop) {
    const next = current.nextSibling;
    domParent.removeChild(current);
    current = next;
  }
  cleanupFragment(fragment);
}

export function removeFragment(fragment: Fragment) {
  clearFragment(fragment, true);
}

export function cleanupFragment(fragment: Fragment) {
  for (const cleanup of fragment.cleanup) {
    if (isFragment(cleanup)) {
      cleanupFragment(cleanup);
    } else {
      cleanup();
    }
  }
  fragment.cleanup.clear();
}

function isFragment(value: any): value is Fragment {
  return value[IS_FRAGMENT] === true;
}
