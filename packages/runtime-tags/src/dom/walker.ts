import { NodeType, type Scope, WalkCode, WalkRangeSize } from "../common/types";
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

export function trimWalkString(walkString: string): string {
  let end = walkString.length;
  while (walkString.charCodeAt(--end) > WalkCode.BeginChild);
  return walkString.slice(0, end + 1);
}

export function walk(startNode: Node, walkCodes: string, scope: Scope) {
  walker.currentNode = startNode;
  walkInternal(walkCodes, scope, scope, 0);
  walker.currentNode = document.documentElement;
}

function walkInternal(
  walkCodes: string,
  scope: Scope,
  cleanupOwnerScope: Scope,
  currentWalkIndex: number,
) {
  let value: number;
  let storedMultiplier = 0;
  let currentMultiplier = 0;
  let currentScopeIndex = 0;

  if (cleanupOwnerScope !== scope) {
    scope.___cleanupOwner = cleanupOwnerScope;
  }

  while ((value = walkCodes.charCodeAt(currentWalkIndex++))) {
    currentMultiplier = storedMultiplier;
    storedMultiplier = 0;
    if (value >= WalkCode.Multiplier) {
      storedMultiplier =
        currentMultiplier * WalkRangeSize.Multiplier +
        value -
        WalkCode.Multiplier;
    } else if (value >= WalkCode.Out) {
      value = WalkRangeSize.Out * currentMultiplier + value - WalkCode.Out;
      while (value--) {
        walker.parentNode();
      }
      walker.nextSibling();
    } else if (value >= WalkCode.Over) {
      value = WalkRangeSize.Over * currentMultiplier + value - WalkCode.Over;
      while (value--) {
        walker.nextSibling();
      }
    } else if (value >= WalkCode.Next) {
      value = WalkRangeSize.Next * currentMultiplier + value - WalkCode.Next;
      while (value--) {
        walker.nextNode();
      }
    } else if (value === WalkCode.BeginChild) {
      const childScope = (scope[
        MARKO_DEBUG
          ? getDebugKey(currentScopeIndex++, "#childScope")
          : currentScopeIndex++
      ] = createScope(scope.$global));
      // TODO: shouldn't need startNode here only for direct children of controlflow.
      // We need this currently because the scope in which the controlflow owner resides is returned
      // we should change it to return the scope _controlled_ by the controlflow
      childScope.___startNode = walker.currentNode as ChildNode;
      currentWalkIndex = walkInternal(
        walkCodes,
        childScope,
        cleanupOwnerScope,
        currentWalkIndex,
      )!;
    } else if (value === WalkCode.EndChild) {
      return currentWalkIndex;
    } else if (value === WalkCode.Get) {
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
      if (MARKO_DEBUG && value !== WalkCode.Replace) {
        throw new Error(`Unknown walk code: ${value}`);
      }
      parentNode.replaceChild(newNode, current);
      walker.currentNode = newNode;
    }
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
