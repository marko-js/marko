import { type BranchScope, NodeType, type Scope } from "../common/types";
import { insertChildNodes } from "./dom";
import { parseHTML } from "./parse-html";
import { queueRender } from "./queue";
import { register } from "./resume";
import { createScope } from "./scope";
import type { Signal } from "./signals";
import { trimWalkString, walk } from "./walker";

export type Renderer = {
  ___id: string;
  ___init: (branch: BranchScope, ns: string) => void;
  ___args: Signal<unknown> | undefined;
  ___owner: Scope | undefined;
};

type SetupFn = (scope: Scope) => void;

export function createBranchWithTagNameOrRenderer(
  $global: Scope["$global"],
  tagNameOrRenderer: Renderer | string,
  parentScope: Scope,
  parentNode: ParentNode,
) {
  const branch = createBranch(
    $global,
    tagNameOrRenderer,
    parentScope,
    parentNode,
  );
  if (typeof tagNameOrRenderer === "string") {
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
  }

  return branch;
}

export function createBranch(
  $global: Scope["$global"],
  renderer: Renderer | string,
  parentScope: Scope | undefined,
  parentNode: ParentNode,
) {
  const branch = createScope($global) as BranchScope;
  const parentBranch = parentScope?.___closestBranch;
  branch._ = (renderer as Renderer).___owner || parentScope;
  branch.___closestBranch = branch;

  if (parentBranch) {
    branch.___parentBranch = parentBranch;
    (parentBranch.___branchScopes ||= new Set()).add(branch);
  }

  if (MARKO_DEBUG) {
    branch.___renderer = renderer;
  }

  (renderer as Renderer | { ___init?: Renderer["___init"] }).___init?.(
    branch,
    (parentNode as Element).namespaceURI!,
  );

  return branch;
}

export function createContent(
  id: string,
  template?: string | 0,
  rawWalks?: string | 0,
  setup?: SetupFn | 0,
  getArgs?: () => Signal<unknown>,
) {
  let args: Signal<unknown> | undefined;
  const walks = rawWalks ? /* @__PURE__ */ trimWalkString(rawWalks) : "";
  const init: Renderer["___init"] = template
    ? (branch, ns) => {
        ((cloneCache[ns] ||= {})[template] ||= createCloneableHTML(
          template,
          ns,
        ))(branch, walks);
        setup && queueRender(branch, setup);
      }
    : (branch) => {
        branch.___startNode = branch.___endNode = new Text();
        setup && queueRender(branch, setup);
      };

  return (owner?: Scope): Renderer => {
    return {
      ___id: id,
      ___init: init,
      ___owner: owner,
      get ___args() {
        return (args ||= getArgs?.());
      },
    };
  };
}

export function registerContent(
  id: string,
  template?: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
  getArgs?: () => Signal<unknown>,
) {
  return register(id, createContent(id, template, walks, setup, getArgs));
}

export function createRenderer(
  template?: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
  getArgs?: () => Signal<unknown>,
) {
  return createContent("", template, walks, setup, getArgs)();
}

const cloneCache: Partial<
  Record<string, Record<string, ReturnType<typeof createCloneableHTML>>>
> = {};
function createCloneableHTML(
  html: string,
  ns: string,
): (branch: BranchScope, walks: string) => void {
  const { firstChild, lastChild } = parseHTML(html, ns) as {
    firstChild: ChildNode;
    lastChild: ChildNode;
  };
  const parent = document.createElementNS(ns, "t") as ParentNode & {
    firstChild: ChildNode;
    lastChild: ChildNode;
  };
  insertChildNodes(parent, null, firstChild, lastChild);
  return firstChild === lastChild && firstChild!.nodeType < NodeType.Comment
    ? (branch, walks) => {
        walk(
          (branch.___startNode = branch.___endNode =
            firstChild.cloneNode(true) as ChildNode),
          walks,
          branch,
        );
      }
    : (branch, walks) => {
        const clone = parent.cloneNode(true);
        walk(clone.firstChild!, walks, branch);
        branch.___startNode = clone.firstChild!;
        branch.___endNode = clone.lastChild!;
      };
}
