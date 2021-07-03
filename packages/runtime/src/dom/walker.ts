import { isDocumentFragment } from "./dom";
import { Renderer } from "./renderer";
import { Scope, runWithScope } from "./scope";

const doc = document;
export const walker = doc.createTreeWalker(
  doc.documentElement,
  -1,
  null,
  false
);

// Laws of the walks string:
//  - Always prefer Get to Before to After, Inside, or Replace
//    - Get must always be used to get a static node from clonable template if possible
//    - Replace must only be used to insert between two static text nodes
//    - Inside must only be used to insert into elements with no static children
//    - After must only be used to insert a last child or immediately following another action (if it makes the walks string smaller)
//  - Adjacent actions must always be in source order (Before* Get* Inside* After* || Before* Replace)
//    - When an element is both walked into and needs to insert After, you must walk in first (Next) and then walk Out before After
//  - Unless the inserted node is Text, Inside, After, & Replace must be followed by Out/Over to skip over unknown children
//  - Out must always be followed by After or Over
//    - Before must be done before walking into the node
//    - Next would walk back in the node we just walked Out of
//  - A component must assume the walker is on its first node, and include instructions for walking to its assumed nextSibling
let currentWalks: string;
let currentWalkIndex: number;

// Skip codes that would require more than one character to represent (34: " and 92: \)
export const enum WalkCodes {
  Get = 33, // !
  Before = 35, // #
  After = 36, // $
  Inside = 37, // %
  Replace = 38, // &
  Out = 39,
  OutEnd = 49,
  Over = 58,
  OverEnd = 91,
  Next = 93,
  NextEnd = 126
}

export function walkMany(scope: Scope, offset: number, count: number) {
  for (let i = 0; i < count; i++) {
    scope[offset + i] = walk();
  }
}

export let walk = walkNormal;
// TODO: in some cases (including hydrate) we may get an existing node
// ideally we wouldn't create the newNode unless it was actually needed
function walkNormal() {
  if ("MARKO_DEBUG" && !currentWalks) {
    throw new Error("Missing encoded walk string");
  }

  while (true) {
    // https://jsperf.com/charat-vs-index/36
    let value = currentWalks.charCodeAt(currentWalkIndex++);

    if ("MARKO_DEBUG" && value === undefined) {
      throw new Error("End of walk string was reached");
    }

    if (value >= WalkCodes.Next) {
      while (WalkCodes.Next <= value--) {
        walker.nextNode();
      }
    } else if (value >= WalkCodes.Over) {
      while (WalkCodes.Over <= value--) {
        if (!walker.nextSibling() && !walker.nextNode() && "MARKO_DEBUG") {
          throw new Error("No more nodes to walk");
        }
      }
    } else if (value >= WalkCodes.Out) {
      while (WalkCodes.Out <= value--) {
        walker.parentNode();
      }
    } else if (value === WalkCodes.Get) {
      return walker.currentNode;
    } else {
      if ("MARKO_DEBUG" && extendedWalk === undefined) {
        throw new Error("Extended walk was not enabled");
      }
      return extendedWalk(value);
    }
  }
}

export function enableExtendedWalk() {
  extendedWalk = actualExtendedWalk;
}

let extendedWalk: typeof actualExtendedWalk;
function actualExtendedWalk(value: number) {
  const newNode = document.createTextNode("");

  const current = walker.currentNode;
  if (value === WalkCodes.Inside) {
    return current.appendChild(newNode);
  }

  const parentNode = current.parentNode!;

  if (value === WalkCodes.Before) {
    return parentNode.insertBefore(newNode, current);
  }

  // Replace/After:
  // the walker is moved to point to newNode
  // (or, if a document fragment, its lastChild)

  const target = isDocumentFragment(newNode) ? newNode.lastChild! : newNode;

  if (value === WalkCodes.After) {
    parentNode.insertBefore(newNode, current.nextSibling);
  } else {
    if ("MARKO_DEBUG" && value !== WalkCodes.Replace) {
      throw new Error(`Unknown walk code: ${value}`);
    }
    parentNode.replaceChild(newNode, current);
  }

  walker.currentNode = target;

  return newNode;
}

function walkHydrateFirst(): Node {
  const current = walker.currentNode;
  const node = walker.nextNode()!;
  current.parentNode!.removeChild(current);
  walk = walkHydrateSubsequent;
  return node;
}

function walkHydrateSubsequent(): Node {
  let current: Node;
  while ((current = walker.nextNode()!)) {
    if (current.nodeType === 8 && current.nodeValue === "#") {
      const node = walker.nextNode()!;
      current.parentNode!.removeChild(current);
      return node;
    }
  }

  if ("MARKO_DEBUG") {
    throw new Error(
      "Reached end of document while looking for next hydrated content."
    );
  }

  return undefined as never;
}

export function detachedWalk(
  firstChild: Node,
  renderer: Renderer,
  scope: Scope
) {
  if (renderer.___hydrate) {
    const cachedWalks = currentWalks;
    const cachedWalkIndex = currentWalkIndex;
    const cachedCurrent = walker.currentNode;

    walker.currentNode = firstChild;
    currentWalks = renderer.___walks!;
    currentWalkIndex = 0;
    runWithScope(renderer.___hydrate, 0, scope);
    currentWalks = cachedWalks;
    currentWalkIndex = cachedWalkIndex;
    walker.currentNode = cachedCurrent;
  }
}

export function beginHydrate(startNode: Node) {
  walker.currentNode = startNode;
  walk = walkHydrateFirst;
}

export function endHydrate() {
  walk = walkNormal;
}
