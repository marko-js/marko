import { text } from "./dom";
import { ComputedSignal } from "./signals";

const IS_FRAGMENT = Symbol("fragment");

export type ContainerNode = Element | Fragment | DocumentFragment;

export class Fragment {
  public before: Text;
  public after: Text;
  public parent?: Fragment;
  public tracked: Set<Fragment | ComputedSignal<unknown>>;
  public [IS_FRAGMENT]: true;
  constructor() {
    this.before = text("");
    this.after = text("");
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
