import {
  type Accessor,
  type BranchScope,
  NodeType,
  type Scope,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { parseHTML } from "./parse-html";
import { queueRender } from "./queue";
import { register } from "./resume";
import { createScope } from "./scope";
import type { Signal } from "./signals";
import { walk } from "./walker";

export type Renderer = {
  ___id: string;
  ___setup: undefined | ((branch: BranchScope) => void);
  ___clone: (branch: BranchScope, ns: string) => void;
  ___args: Signal<unknown> | undefined;
  ___closures: SetupFn | undefined;
  ___owner: Scope | undefined;
  ___accessor: Accessor | undefined;
};

type SetupFn = (scope: Scope) => void;

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

  (renderer as Renderer | { ___clone?: Renderer["___clone"] }).___clone?.(
    branch,
    (parentNode as Element).namespaceURI!,
  );

  return branch;
}

export function createAndSetupBranch(
  $global: Scope["$global"],
  renderer: Renderer,
  parentScope: Scope | undefined,
  parentNode: ParentNode,
) {
  return setupBranch(
    renderer,
    createBranch($global, renderer, parentScope, parentNode),
  );
}

export function setupBranch(renderer: Renderer, branch: BranchScope) {
  if (renderer.___setup || renderer.___closures) {
    queueRender(
      branch,
      (branch) => {
        renderer.___setup?.(branch as BranchScope);
        renderer.___closures?.(branch);
      },
      -1,
    );
  }
  return branch;
}

export function createContent(
  id: string,
  template: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
  getArgs?: (() => Signal<unknown>) | 0,
  closures?: Signal<unknown> | 0,
  dynamicScopesAccessor?: Accessor,
) {
  // Walks are required to encode how to "exit" the content
  // so that we can continue walking across merged child templates.
  // However at this point we have the full walks string for a branch,
  // so we trim the trailing `Next`, `Over or `Out` walk codes.
  // The regexp below replaces trailing values between charcodes `0-49`
  // 1 is charcode 49 (WalkCode.DynamicTagWithVar)
  walks = walks ? walks.replace(/[^\0-1]+$/, "") : "";
  setup ||= undefined;
  closures ||= undefined;
  let args: Renderer["___args"] | typeof getArgs | null = getArgs;
  const clone: Renderer["___clone"] = template
    ? (branch, ns) => {
        ((cloneCache[ns] ||= {})[template] ||= createCloneableHTML(
          template,
          ns,
        ))(branch, walks);
      }
    : (branch) => {
        walk(
          (branch.___startNode = branch.___endNode = new Text()),
          walks,
          branch,
        );
      };

  return (owner?: Scope): Renderer => {
    return {
      ___id: id,
      ___clone: clone,
      ___setup: setup,
      ___owner: owner,
      ___closures: closures,
      ___accessor: dynamicScopesAccessor,
      get ___args() {
        return (
          args === getArgs ? (args = getArgs ? getArgs() : null) : args
        ) as Renderer["___args"];
      },
    };
  };
}

export function registerContent(
  id: string,
  template: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
  getArgs?: (() => Signal<unknown>) | 0,
  closures?: Signal<unknown> | 0,
  dynamicScopesAccessor?: Accessor,
) {
  return register(
    id,
    createContent(
      id,
      template,
      walks,
      setup,
      getArgs,
      closures,
      dynamicScopesAccessor,
    ),
  );
}

export function createRenderer(
  template: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
  getArgs?: (() => Signal<unknown>) | 0,
  closures?: Signal<unknown> | 0,
) {
  return createContent("", template, walks, setup, getArgs, closures)();
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
