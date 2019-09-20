import { text } from "./dom";
import { ComputedSignal } from "./signals";

export interface DetachedElementWithParent extends Element {
  ___eventualParentNode?: ContainerNode;
}

export interface DetachedDocumentFragmentWithParent extends DocumentFragment {
  ___eventualParentNode?: ContainerNode;
}

export type ContainerNode =
  | DetachedElementWithParent
  | DetachedDocumentFragmentWithParent
  | Fragment;

export class Fragment {
  public ___before: Text;
  public ___after: Text;
  public ___parentFragment?: Fragment;
  public ___eventualParentNode?: ContainerNode;
  public ___tracked: Set<Fragment | ComputedSignal<unknown>>;
  constructor() {
    this.___before = text("");
    this.___after = text("");
    this.___tracked = new Set();
  }
  public appendChild(childNode: ChildNode & Node) {
    const after = this.___after;
    after.parentNode!.insertBefore(childNode, this.___after);
  }
  public ___cleanup() {
    for (const tracked of this.___tracked) {
      tracked.___cleanup();
    }
    this.___tracked.clear();
  }
}

export function insertFragmentBefore(
  parent: Fragment,
  fragment: Fragment,
  nextSibling: Fragment | null
) {
  const domParent = parent.___before.parentNode!;
  const reference = nextSibling ? nextSibling.___before : parent.___after;
  const stop = fragment.___after.nextSibling;
  let current: Node | null = fragment.___before;
  while (current && current !== stop) {
    const next = current.nextSibling;
    domParent.insertBefore(current, reference);
    current = next;
  }
}

export function clearFragment(fragment: Fragment, removeMarkers?: boolean) {
  const domParent = fragment.___before.parentNode!;
  const stop = removeMarkers
    ? fragment.___after.nextSibling
    : fragment.___after;
  let current: Node | null = removeMarkers
    ? fragment.___before
    : fragment.___before.nextSibling;
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
