import { decodeAccessor } from "../common/helpers";
import {
  AccessorProp,
  type BranchScope,
  NodeType,
  type Scope,
  WalkCode,
  WalkRangeSize,
} from "../common/types";
import { createScope, skipScope } from "./scope";

export const walker = /* @__PURE__ */ document.createTreeWalker(document);

// Laws of the walks string:
//  - Always prefer Get to Before to After, Inside, or Replace
//    - Get must always be used to get a static node from cloneable template if possible
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

export function walk(startNode: Node, walkCodes: string, branch: BranchScope) {
  walker.currentNode = startNode;
  walkInternal(0, walkCodes, branch);
}

function walkInternal(
  currentWalkIndex: number,
  walkCodes: string,
  scope: Scope,
) {
  let value: number;
  let storedMultiplier = 0;
  let currentMultiplier = 0;
  let currentScopeIndex = 0;

  for (; currentWalkIndex < walkCodes.length; ) {
    value = walkCodes.charCodeAt(currentWalkIndex++);
    currentMultiplier = storedMultiplier;
    storedMultiplier = 0;

    if (value === WalkCode.Get) {
      const node = walker.currentNode;
      scope[
        MARKO_DEBUG
          ? getDebugKey(currentScopeIndex++, node)
          : decodeAccessor(currentScopeIndex++)
      ] = node;
    } else if (
      value === WalkCode.Replace ||
      value === WalkCode.DynamicTagWithVar
    ) {
      (walker.currentNode as ChildNode).replaceWith(
        (walker.currentNode = scope[
          MARKO_DEBUG
            ? getDebugKey(currentScopeIndex++, "#text")
            : decodeAccessor(currentScopeIndex++)
        ] =
          new Text()),
      );
      if (value === WalkCode.DynamicTagWithVar) {
        scope[
          MARKO_DEBUG
            ? getDebugKey(currentScopeIndex++, "#scopeOffset")
            : decodeAccessor(currentScopeIndex++)
        ] = skipScope();
      }
    } else if (value === WalkCode.EndChild) {
      return currentWalkIndex;
    } else if (
      value === WalkCode.BeginChild ||
      value === WalkCode.BeginChildWithVar
    ) {
      currentWalkIndex = walkInternal(
        currentWalkIndex,
        walkCodes,
        (scope[
          MARKO_DEBUG
            ? getDebugKey(currentScopeIndex++, "#childScope")
            : decodeAccessor(currentScopeIndex++)
        ] = createScope(
          scope[AccessorProp.Global],
          scope[AccessorProp.ClosestBranch],
        )),
      )!;
      if (value === WalkCode.BeginChildWithVar) {
        scope[
          MARKO_DEBUG
            ? getDebugKey(currentScopeIndex++, "#scopeOffset")
            : decodeAccessor(currentScopeIndex++)
        ] = skipScope();
      }
    } else if (value < WalkCode.NextEnd + 1) {
      value = WalkRangeSize.Next * currentMultiplier + value - WalkCode.Next;
      while (value--) {
        walker.nextNode();
      }
    } else if (value < WalkCode.OverEnd + 1) {
      value = WalkRangeSize.Over * currentMultiplier + value - WalkCode.Over;
      while (value--) {
        walker.nextSibling();
      }
    } else if (value < WalkCode.OutEnd + 1) {
      value = WalkRangeSize.Out * currentMultiplier + value - WalkCode.Out;
      while (value--) {
        walker.parentNode();
      }
      walker.nextSibling();
    } else {
      if (
        MARKO_DEBUG &&
        (value < WalkCode.Multiplier || value > WalkCode.MultiplierEnd)
      ) {
        throw new Error(`Unknown walk code: ${value}`);
      }
      storedMultiplier =
        currentMultiplier * WalkRangeSize.Multiplier +
        value -
        WalkCode.Multiplier;
    }
  }
}

export function getDebugKey(index: number, node: Node | string) {
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
