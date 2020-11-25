import { Computation, UpstreamSignalOrValue } from "./signals";
import { detachedWalk } from "./walker";
import { Renderer, isDocumentFragment } from "./dom";

export interface Fragment {
  ___firstRef?: Fragment;
  ___lastRef?: Fragment;
  ___nextNode?: Node;
  ___firstChild: Node;
  ___lastChild: Node;
  ___parentFragment?: Fragment;
  ___dom?: Node;
  ___tracked: Set<
    Fragment | (Computation<unknown> & { ___cleanup: () => void })
  >;
  ___cleanup: (toplevel?: boolean) => void;
}

export let currentFragment: Fragment | undefined;

export function createFragment(
  node: Node,
  parentFragment = currentFragment
): Fragment {
  const isFragment = isDocumentFragment(node);
  return {
    ___firstRef: undefined,
    ___lastRef: undefined,
    ___nextNode: undefined,
    ___firstChild: isFragment ? node.firstChild! : node,
    ___lastChild: isFragment ? node.lastChild! : node,
    ___parentFragment: parentFragment,
    ___dom: node,
    ___tracked: new Set(),
    ___cleanup: cleanup
  };
}

export function createFragmentFromRenderer(
  renderer: Renderer,
  parentFragment = currentFragment,
  ...input: UpstreamSignalOrValue[]
) {
  const clone = renderer.___clone();
  const fragment = createFragment(clone, parentFragment);
  const cachedFragment = currentFragment;

  currentFragment = fragment;
  detachedWalk(fragment.___firstChild, renderer, ...input);
  currentFragment = cachedFragment;

  return fragment;
}

function cleanup(toplevel = false) {
  if (toplevel && this.___parentFragment) {
    this.___parentFragment.___tracked.delete(this);
  }
  for (const tracked of this.___tracked) {
    tracked.___cleanup();
  }
}

export function insertFragmentBefore(
  parent: (Node & ParentNode) | null,
  fragment: Fragment,
  nextSibling: Node
): void;
export function insertFragmentBefore(
  parent: Node & ParentNode,
  fragment: Fragment,
  nextSibling: Node | null
): void;
export function insertFragmentBefore(
  parent: (Node & ParentNode) | null,
  fragment: Fragment,
  nextSibling: Node | null
) {
  const domParent = parent || nextSibling!.parentNode!;
  withChildren(
    domParent,
    fragment.___firstChild,
    fragment.___lastChild,
    nextSibling,
    domParent.insertBefore
  );
  fragment.___parentFragment!.___tracked.add(fragment);
}

export function replaceFragment(current: Fragment, replacement: Fragment) {
  if (current !== replacement) {
    insertFragmentBefore(null, replacement, referenceStart(current));
    removeFragment(current);
  }
}

export function removeFragment(fragment: Fragment) {
  const domParent = referenceStart(fragment).parentNode!;
  withChildren(
    domParent,
    fragment.___firstChild,
    fragment.___lastChild,
    null,
    domParent.removeChild
  );
  fragment.___cleanup(true);
}

export function referenceStart(fragment: Fragment) {
  return fragment.___firstChild;
}

export function referenceAfter(fragment: Fragment) {
  return fragment.___lastChild.nextSibling;
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
