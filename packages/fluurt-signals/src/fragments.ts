import { text } from "./dom";
import { ComputedSignal } from "./signals";

const IS_FRAGMENT = Symbol("fragment");

export type ContainerNode = Fragment | ParentNode & Node;

export let currentFragment: Fragment | undefined;

export class Fragment {
  public before: Text;
  public after: Text;
  public parent?: Fragment;
  public tracked: Set<Fragment | ComputedSignal<unknown>>;
  public [IS_FRAGMENT]: true;
  constructor(parent: ContainerNode) {
    this.before = text("", parent);
    this.after = text("", parent);
    this.tracked = new Set();
    this[IS_FRAGMENT] = true;
  }
  public appendChild(childNode: ChildNode & Node) {
    const after = this.after;
    after.parentNode!.insertBefore(childNode, this.after);
  }
  public get ownerDocument() {
    return this.before.ownerDocument;
  }
  public ___cleanup() {
    for (const tracked of this.tracked) {
      tracked.___cleanup();
    }
    this.tracked.clear();
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
    parentFragment.tracked.add(currentFragment);
  }
  return currentFragment;
}

export function endFragment(fragment: Fragment) {
  currentFragment = fragment.parent;
}

export function insertFragmentBefore(
  parent: Fragment,
  fragment: Fragment,
  nextSibling: Fragment | null
) {
  const domParent = parent.before.parentNode!;
  const reference = nextSibling ? nextSibling.before : parent.after;
  const stop = fragment.after.nextSibling;
  let current: Node | null = fragment.before;
  while (current && current !== stop) {
    const next = current.nextSibling;
    domParent.insertBefore(current, reference);
    current = next;
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
  fragment.___cleanup();
}

export function removeFragment(fragment: Fragment) {
  clearFragment(fragment, true);
}
