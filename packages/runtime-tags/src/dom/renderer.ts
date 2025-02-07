import {
  type Accessor,
  AccessorChar,
  type BranchScope,
  NodeType,
  type Scope,
} from "../common/types";
import { setConditionalRendererOnlyChild } from "./control-flow";
import { attrs, insertChildNodes } from "./dom";
import { parseHTML } from "./parse-html";
import { queueRender } from "./queue";
import { createScope } from "./scope";
import { CLEAN, DIRTY, MARK, type Signal, type SignalOp } from "./signals";
import { trimWalkString, walk } from "./walker";

export type Renderer = {
  ___id: symbol;
  ___template: string;
  ___walks: string;
  ___setup: SetupFn | undefined | 0;
  ___clone: (ns: string) => ChildNode;
  ___args: Signal<unknown> | undefined;
  ___owner: Scope | undefined;
};

type SetupFn = (scope: Scope) => void;

export function createBranchScopeWithRenderer(
  renderer: Renderer,
  $global: Scope["$global"],
  parentScope: Scope,
  parentNode: ParentNode,
) {
  const branch = createBranch(
    $global,
    renderer.___owner || parentScope,
    parentScope,
  );
  if (MARKO_DEBUG) {
    branch.___renderer = renderer;
  }
  initBranch(renderer, branch, parentNode);
  return branch;
}

export function createBranchScopeWithTagNameOrRenderer(
  tagNameOrRenderer: Renderer | string,
  $global: Scope["$global"],
  parentScope: Scope,
  parentNode: ParentNode,
) {
  if (typeof tagNameOrRenderer !== "string") {
    return createBranchScopeWithRenderer(
      tagNameOrRenderer,
      $global,
      parentScope,
      parentNode,
    );
  }

  const branch = createBranch($global, parentScope, parentScope);
  branch[MARKO_DEBUG ? `#${tagNameOrRenderer}/0` : 0] =
    branch.___startNode =
    branch.___endNode =
      document.createElementNS(
        tagNameOrRenderer === "svg"
          ? "http://www.w3.org/2000/svg"
          : tagNameOrRenderer === "math"
            ? "http://www.w3.org/1998/Math/MathML"
            : (parentNode as Element).namespaceURI,
        tagNameOrRenderer,
      );
  return branch;
}

function createBranch(
  $global: Scope["$global"],
  ownerScope: Scope,
  parentScope: Scope,
) {
  const branch = createScope($global) as BranchScope;
  const parentBranch = parentScope.___closestBranch;
  branch._ = ownerScope;
  branch.___closestBranch = branch;

  if (parentBranch) {
    branch.___branchDepth = parentBranch.___branchDepth + 1;
    branch.___parentBranch = parentBranch;
    (parentBranch.___branchScopes ||= new Set()).add(branch);
  } else {
    branch.___branchDepth = 1;
  }

  return branch;
}

export function initBranch(
  renderer: Renderer,
  branch: BranchScope,
  parentNode: ParentNode,
) {
  const clone = renderer.___clone((parentNode as Element).namespaceURI!);
  const cloneParent = clone.parentNode;
  walk(cloneParent?.firstChild || clone, renderer.___walks, branch);
  branch.___startNode = cloneParent?.firstChild || (clone as ChildNode);
  branch.___endNode = cloneParent?.lastChild || (clone as ChildNode);
  if (renderer.___setup) {
    queueRender(branch, renderer.___setup);
  }
}

export function dynamicTagAttrs(
  nodeAccessor: Accessor,
  getContent?: (scope: Scope) => Renderer,
  inputIsArgs?: boolean,
) {
  return (
    scope: Scope,
    attrsOrOp: (() => Record<string, unknown>) | SignalOp,
  ) => {
    const renderer: Renderer | string | undefined =
      scope[nodeAccessor + AccessorChar.ConditionalRenderer];

    if (!renderer || attrsOrOp === DIRTY) {
      return;
    }

    const childScope = scope[nodeAccessor + AccessorChar.ConditionalScope];

    if (attrsOrOp === MARK || attrsOrOp === CLEAN) {
      return (renderer as Renderer).___args?.(childScope, attrsOrOp);
    }

    const content = getContent?.(scope);
    if (typeof renderer === "string") {
      // This will always be 0 because in dynamicRenderer we used WalkCodes.Get
      const nodeAccessor = MARKO_DEBUG ? `#${renderer}/0` : 0;

      if (MARKO_DEBUG && renderer === "textarea" && content) {
        throw new Error(
          "A dynamic tag rendering a `<textarea>` cannot have `content` and must use the `value` attribute instead.",
        );
      }

      setConditionalRendererOnlyChild(childScope, nodeAccessor, content);
      attrs(childScope, nodeAccessor, attrsOrOp());
    } else if (renderer.___args) {
      const attributes = attrsOrOp();
      renderer.___args(
        childScope,
        inputIsArgs
          ? attributes
          : [
              content
                ? {
                    ...attributes,
                    content,
                  }
                : attributes,
            ],
      );
    }
  };
}

export function createRendererWithOwner(
  template: string,
  rawWalks?: string | 0,
  setup?: SetupFn | 0,
  getArgs?: () => Signal<unknown>,
) {
  let args: Signal<unknown> | undefined;
  const id = MARKO_DEBUG ? Symbol("Marko Renderer") : ({} as any as symbol);
  const walks = rawWalks ? /* @__PURE__ */ trimWalkString(rawWalks) : " ";
  return (owner?: Scope): Renderer => {
    return {
      ___id: id,
      ___template: template,
      ___walks: walks,
      ___setup: setup,
      ___clone: _clone,
      ___owner: owner,
      get ___args() {
        return (args ||= getArgs?.());
      },
    };
  };
}

export function createRenderer(
  template: string,
  walks?: string | 0,
  setup?: SetupFn | 0,
  getArgs?: () => Signal<unknown>,
) {
  return createRendererWithOwner(template, walks, setup, getArgs)();
}

function _clone(this: Renderer, ns: string) {
  return ((cloneCache[ns] ||= {})[this.___template] ||= createCloneableHTML(
    this.___template,
    ns,
  ))();
}

const cloneCache: Partial<
  Record<string, Record<string, ReturnType<typeof createCloneableHTML>>>
> = {};
function createCloneableHTML(html: string, ns: string) {
  const { firstChild, lastChild } = parseHTML(html, ns);
  const parent = document.createElementNS(ns, "t") as ParentNode & {
    firstChild: ChildNode;
    lastChild: ChildNode;
  };
  insertChildNodes(parent, null, firstChild, lastChild);
  return (
    firstChild === lastChild && firstChild!.nodeType < NodeType.Comment
      ? () => firstChild.cloneNode(true)
      : () => parent.cloneNode(true).firstChild
  ) as () => ChildNode;
}
