import { Computation } from "./signals";

export class Fragment {
  public ___firstRef: Fragment & { ___firstChild: Node };
  public ___lastRef: Fragment & { ___lastChild: Node };
  public ___nextNode?: Node;
  public ___firstChild: Node;
  public ___lastChild: Node;
  public ___parentFragment?: Fragment;
  public ___cachedFragment?: Fragment;
  public ___dom?: Node;
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
  parent: Node & ParentNode | null,
  fragment: Fragment,
  nextSibling: Node
): void;
export function insertFragmentBefore(
  parent: Node & ParentNode,
  fragment: Fragment,
  nextSibling: Node | null
): void;
export function insertFragmentBefore(
  parent: Node & ParentNode | null,
  fragment: Fragment,
  nextSibling: Node | null
) {
  const domParent = parent || nextSibling!.parentNode!;
  withChildren(
    domParent,
    fragment.___firstRef.___firstChild,
    fragment.___lastRef.___lastChild,
    nextSibling,
    domParent.insertBefore
  );
  fragment.___parentFragment!.___tracked.add(fragment);
}

export function replaceFragment(current: Fragment, replacement: Fragment) {
  insertFragmentBefore(null, replacement, referenceStart(current));
  removeFragment(current);
}

export function removeFragment(fragment: Fragment) {
  const domParent = referenceStart(fragment).parentNode!;
  withChildren(
    domParent,
    fragment.___firstRef.___firstChild,
    fragment.___lastRef.___lastChild!,
    null,
    domParent.removeChild
  );
  fragment.___cleanup();
  if (fragment.___parentFragment) {
    fragment.___parentFragment.___tracked.delete(fragment);
  }
}

export function referenceStart(fragment: Fragment) {
  return fragment.___firstRef.___firstChild;
}

export function referenceAfter(fragment: Fragment) {
  return fragment.___lastChild!.nextSibling;
}

export function withChildren(
  parent: ParentNode,
  start: Node,
  stop: Node,
  reference: Node | null,
  method: (a: Node, b: Node | null) => void
) {
  while (start) {
    const next = start.nextSibling;
    method.call(parent, start, reference);
    if (start === stop) {
      break;
    }
    start = next!;
  }
}
