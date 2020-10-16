import { Computation, UpstreamSignalOrValue } from "./signals";
import { detachedWalk } from "./walker";
import { Renderer, isDocumentFragment } from "./dom";

export interface Fragment {
  ___firstRef: Fragment & { ___firstChild: Node };
  ___lastRef: Fragment & { ___lastChild: Node };
  ___nextNode?: Node;
  ___firstChild: Node;
  ___lastChild: Node;
  ___parentFragment?: Fragment;
  ___dom?: Node;
  ___tracked: Set<
    Fragment | (Computation<unknown> & { ___cleanup: () => void })
  >;
  ___cleanup: () => void
}

export let currentFragment: Fragment | undefined;

export function createFragment(
  renderer: Renderer,
  parentFragment = currentFragment,
  ...input: UpstreamSignalOrValue[]
): Fragment {
  const clone = renderer.___clone();
  const isFragment = isDocumentFragment(clone);
  const cachedFragment = currentFragment;
  const fragment = {
    ___firstRef: undefined,
    ___lastRef: undefined,
    ___nextNode: undefined,
    ___firstChild: isFragment ? clone.firstChild! : clone,
    ___lastChild: isFragment ? clone.lastChild! : clone,
    ___parentFragment: parentFragment,
    ___dom: clone,
    ___tracked: new Set(),
    ___cleanup: cleanup
  } as any as Fragment;
  fragment.___firstRef = fragment.___lastRef = fragment;

  currentFragment = fragment;
  detachedWalk(fragment.___firstChild, renderer, ...input);
  currentFragment = cachedFragment;
  
  return fragment;
}

function cleanup() {
  for (const tracked of this.___tracked) {
    tracked.___cleanup();
  }
  this.___tracked.clear();
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
