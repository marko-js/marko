import { Computation } from "./signals";

export class Fragment {
  public ___firstChild: Node;
  public ___lastChild?: Node;
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
    fragment.___firstChild,
    fragment.___lastChild!,
    nextSibling,
    domParent.insertBefore
  );
}

export function replaceFragment(current: Fragment, replacement: Fragment) {
  insertFragmentBefore(null, replacement, current.___firstChild);
  removeFragment(current);
}

export function removeFragment(fragment: Fragment) {
  const domParent = fragment.___firstChild.parentNode!;
  withChildren(
    domParent,
    fragment.___firstChild,
    fragment.___lastChild!,
    null,
    domParent.removeChild
  );
  fragment.___cleanup();
}

export function referenceStart(fragment: Fragment) {
  return fragment.___firstChild;
}

export function referenceAfter(fragment: Fragment) {
  return fragment.___lastChild!.nextSibling;
}

function withChildren(
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
