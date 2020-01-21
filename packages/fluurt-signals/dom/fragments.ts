import { Computation } from "./signals";

export class Fragment {
  public ___before: Text;
  public ___after: Text | undefined;
  public ___parentFragment?: Fragment;
  public ___tracked: Set<Fragment | Computation>;
  constructor() {
    this.___tracked = new Set();
  }
  public ___cleanup() {
    for (const tracked of this.___tracked) {
      tracked.___cleanup();
    }
    this.___tracked.clear();
  }
}

export function insertFragmentBefore(
  parent: Fragment | null,
  fragment: Fragment,
  nextSibling: Fragment
): void;
export function insertFragmentBefore(
  parent: Fragment,
  fragment: Fragment,
  nextSibling: Fragment | null
): void;
export function insertFragmentBefore(
  parent: Fragment | null,
  fragment: Fragment,
  nextSibling: Fragment | null
) {
  const domParent = (parent || nextSibling)!.___before.parentNode!;
  withChildren(
    domParent,
    fragment.___before,
    fragment.___after!.nextSibling,
    nextSibling ? nextSibling.___before : parent!.___after!,
    domParent.insertBefore
  );
}

export function replaceFragment(current: Fragment, replacement: Fragment) {
  const domParent = current.___before.parentNode!;
  clearFragment(current);
  withChildren(
    domParent,
    replacement.___before.nextSibling,
    replacement.___after!,
    current.___after!,
    domParent.insertBefore
  );
  replacement.___before = current.___before;
  replacement.___after = current.___after;
}

export function clearFragment(fragment: Fragment, removeMarkers?: boolean) {
  const domParent = fragment.___before.parentNode!;
  withChildren(
    domParent,
    removeMarkers ? fragment.___before : fragment.___before.nextSibling,
    removeMarkers ? fragment.___after!.nextSibling : fragment.___after!,
    null,
    domParent.removeChild
  );
  fragment.___cleanup();
}

export function removeFragment(fragment: Fragment) {
  clearFragment(fragment, true);
}

function withChildren(
  parent: ParentNode,
  start: Node | null,
  stop: Node | null,
  reference: Node | null,
  method: (a: Node, b: Node | null) => void
) {
  while (start && start !== stop) {
    const next = start.nextSibling;
    method.call(parent, start, reference);
    start = next;
  }
}
