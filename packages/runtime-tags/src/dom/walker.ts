import type { Scope } from "../common/types";
import { NodeType } from "./dom";
import { createScope } from "./scope";

export const walker = /* @__PURE__ */ document.createTreeWalker(document);

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

// Reserved Character Codes
// 0-31 [control characters]
// 34 " [double quote]
// 39 ' [single quote]
// 92 \ [backslash]
// 96 ` [backtick]
export const enum WalkCodes {
  Get = 32,
  Before = 33,
  After = 35,
  Inside = 36,
  Replace = 37,
  EndChild = 38,

  BeginChild = 47,

  Next = 67,
  NextEnd = 91,

  Over = 97,
  OverEnd = 106,

  Out = 107,
  OutEnd = 116,

  Multiplier = 117,
  MultiplierEnd = 126,
}

export const enum WalkRangeSizes {
  Next = 20, // 67 through 91
  Over = 10, // 97 through 106
  Out = 10, // 107 through 116
  Multiplier = 10, // 117 through 126
}

export function trimWalkString(walkString: string): string {
  let end = walkString.length;
  while (walkString.charCodeAt(--end) > WalkCodes.BeginChild);
  return walkString.slice(0, end + 1);
}

export function walk(startNode: Node, walkCodes: string, scope: Scope) {
  walker.currentNode = startNode;
  walkInternal(walkCodes, scope, 0);
  walker.currentNode = document.documentElement;
}

function walkInternal(
  walkCodes: string,
  scope: Scope,
  currentWalkIndex: number,
) {
  let value: number;
  let storedMultiplier = 0;
  let currentMultiplier = 0;
  let currentScopeIndex = 0;

  while ((value = walkCodes.charCodeAt(currentWalkIndex++))) {
    currentMultiplier = storedMultiplier;
    storedMultiplier = 0;
    if (value >= WalkCodes.Multiplier) {
      storedMultiplier =
        currentMultiplier * WalkRangeSizes.Multiplier +
        value -
        WalkCodes.Multiplier;
    } else if (value >= WalkCodes.Out) {
      value = WalkRangeSizes.Out * currentMultiplier + value - WalkCodes.Out;
      while (value--) {
        walker.parentNode();
      }
      walker.nextSibling();
    } else if (value >= WalkCodes.Over) {
      value = WalkRangeSizes.Over * currentMultiplier + value - WalkCodes.Over;
      while (value--) {
        !walker.nextSibling() && !walker.nextNode();
      }
    } else if (value >= WalkCodes.Next) {
      value = WalkRangeSizes.Next * currentMultiplier + value - WalkCodes.Next;
      while (value--) {
        walker.nextNode();
      }
    } else if (value === WalkCodes.BeginChild) {
      currentWalkIndex = walkInternal(
        walkCodes,
        (scope[
          MARKO_DEBUG
            ? getDebugKey(currentScopeIndex++, "#childScope")
            : currentScopeIndex++
        ] = createScope(scope.$global)),
        currentWalkIndex,
      )!;
    } else if (value === WalkCodes.EndChild) {
      return currentWalkIndex;
    } else if (value === WalkCodes.Get) {
      scope[
        MARKO_DEBUG
          ? getDebugKey(currentScopeIndex++, walker.currentNode)
          : currentScopeIndex++
      ] = walker.currentNode;
    } else {
      const newNode = (scope[
        MARKO_DEBUG
          ? getDebugKey(currentScopeIndex++, "#text")
          : currentScopeIndex++
      ] = document.createTextNode(""));
      const current = walker.currentNode;
      const parentNode = current.parentNode!;

      if (value === WalkCodes.Before) {
        parentNode.insertBefore(newNode, current);
      } else {
        if (value === WalkCodes.After) {
          parentNode.insertBefore(newNode, current.nextSibling);
        } else {
          if (MARKO_DEBUG && value !== WalkCodes.Replace) {
            throw new Error(`Unknown walk code: ${value}`);
          }
          parentNode.replaceChild(newNode, current);
        }

        walker.currentNode = newNode;
      }
    } /* else {
      if (MARKO_DEBUG && value !== WalkCodes.Replace) {
        throw new Error(`Unknown walk code: ${value}`);
      }
      const current = walker.currentNode;
      current.parentNode!.replaceChild(walker.currentNode = scope[currentScopeIndex++] = document.createTextNode(""), current);
    } */
  }

  return currentWalkIndex;
}

function getDebugKey(index: number, node: Node | string) {
  if (typeof node === "string") {
    return `${node}/${index}`;
  } else if (node.nodeType === NodeType.Text) {
    return `#text/${index}`;
  } else if (node.nodeType === NodeType.Comment) {
    return `#comment/${index}`;
  } else if (node.nodeType === NodeType.Element) {
    return `#${(node as Element).tagName.toLowerCase()}/${index}`;
  }

  return index;
}
