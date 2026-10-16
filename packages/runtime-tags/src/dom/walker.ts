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

/** Cloned templates are small, where a TreeWalker's per-step cost dominates. */
let currentNode: Node;

// Codes act on nodes in document order: Get claims one, Replace a `<!>` marker,
// Nonce gives one the page's nonce; BeginChild to EndChild walk a child's own.
export function walk(startNode: Node, walkCodes: string, branch: BranchScope) {
  currentNode = startNode;
  walkInternal(0, walkCodes, branch);
}

// Set by `nonce.feat`, which a template whose walk sets a nonce imports.
let nonceEnabled: undefined | 1;
export function installNonce() {
  nonceEnabled = 1;
}

// TODO: turn into normal function declaration when resolved: https://github.com/oxc-project/oxc/issues/17364?issue=rolldown%7Crolldown%7C7666
const walkInternal = function walkInternal(
  currentWalkIndex: number,
  walkCodes: string,
  scope: Scope,
) {
  let value: number;
  let currentMultiplier: number;
  let storedMultiplier = 0;
  let currentScopeIndex = 0;

  for (; currentWalkIndex < walkCodes.length;) {
    value = walkCodes.charCodeAt(currentWalkIndex++);
    currentMultiplier = storedMultiplier;
    storedMultiplier = 0;

    if (value === WalkCode.Get) {
      scope[
        MARKO_DEBUG
          ? getDebugKey(currentScopeIndex++, currentNode)
          : decodeAccessor(currentScopeIndex++)
      ] = currentNode;
    } else if (
      value === WalkCode.Replace ||
      value === WalkCode.DynamicTagWithVar
    ) {
      (currentNode as ChildNode).replaceWith(
        (currentNode = scope[
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
    } else if (MARKO_DEBUG && value === WalkCode.Nonce && !nonceEnabled) {
      throw new Error(
        "A template's walk sets a nonce but `nonce.feat` never loaded; the compiler imports it with the template.",
      );
    } else if (nonceEnabled && value === WalkCode.Nonce) {
      // Set before the node connects: a nonce set later never lets a refused
      // script or style apply.
      if (scope[AccessorProp.Global].cspNonce) {
        (currentNode as Element).setAttribute(
          "nonce",
          scope[AccessorProp.Global].cspNonce as string,
        );
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
        walkNextNode();
      }
    } else if (value < WalkCode.OverEnd + 1) {
      value = WalkRangeSize.Over * currentMultiplier + value - WalkCode.Over;
      while (value--) {
        walkNextSibling();
      }
    } else if (value < WalkCode.OutEnd + 1) {
      value = WalkRangeSize.Out * currentMultiplier + value - WalkCode.Out;
      while (value--) {
        currentNode = currentNode.parentNode || currentNode;
      }
      walkNextSibling();
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
};

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

const walkNextNode = (_?: never) => {
  if (currentNode.firstChild) return (currentNode = currentNode.firstChild);
  while (!currentNode.nextSibling && currentNode.parentNode) {
    currentNode = currentNode.parentNode;
  }
  walkNextSibling();
};

const walkNextSibling = (_?: never) =>
  (currentNode = currentNode.nextSibling || currentNode);
