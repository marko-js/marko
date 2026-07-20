import {
  type Accessor,
  AccessorProp,
  type BranchScope,
  NodeType,
  RendererProp,
  type Scope,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { parseHTML } from "./parse-html";
import { queueRender } from "./queue";
import { _resume } from "./resume";
import { createScope } from "./scope";
import { _const, type Signal, type SignalFn } from "./signals";
import { walk } from "./walker";

export type Renderer = {
  [RendererProp.Id]: string;
  [RendererProp.Setup]: undefined | SetupFn;
  [RendererProp.Clone]: (branch: BranchScope, ns: string) => void;
  [RendererProp.Params]: Signal<unknown> | undefined;
  [RendererProp.Owner]: Scope | undefined;
  [RendererProp.Accessor]: Accessor | undefined;
  [RendererProp.LocalClosures]?: Record<Accessor, Signal<unknown>>;
  [RendererProp.LocalClosureValues]?: Record<Accessor, unknown>;
};

export type SetupFn = (scope: Scope) => void;

export function createBranch(
  $global: Scope[AccessorProp.Global],
  renderer: Renderer | string,
  parentScope: Scope | undefined,
  parentNode: ParentNode,
) {
  const branch = createScope($global) as BranchScope;
  branch[AccessorProp.Owner] =
    (renderer as Renderer)[RendererProp.Owner] || parentScope;
  setParentBranch(branch, parentScope?.[AccessorProp.ClosestBranch]);

  if (MARKO_DEBUG) {
    branch[AccessorProp.Renderer] = renderer;
  }

  (renderer as Renderer)[RendererProp.Clone]?.(
    branch,
    (parentNode as Element).namespaceURI!,
  );

  return branch;
}

export function setParentBranch(
  branch: BranchScope,
  parentBranch: BranchScope | undefined,
) {
  if (parentBranch) {
    branch[AccessorProp.ParentBranch] = parentBranch;
    (parentBranch[AccessorProp.BranchScopes] ||= new Set()).add(branch);
  }
  branch[AccessorProp.ClosestBranch] = branch;
}

export function createAndSetupBranch(
  $global: Scope[AccessorProp.Global],
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
  if (renderer[RendererProp.Setup]) {
    queueRender(branch, renderer[RendererProp.Setup], -1);
  }
  return branch;
}

export function _content(
  id: string,
  template?: string | 0,
  walks?: string | 0,
  setup?: { _: Signal<unknown> } | SetupFn | 0,
  params?: Signal<unknown> | 0,
  dynamicScopesAccessor?: Accessor,
) {
  // A branch has the full walks string; trim the trailing exit codes
  // (Next/Over/Out, charcode >= 50) needed only to cross merged children.
  walks = walks ? walks.replace(/[^\0-1]+$/, "") : "";
  setup = setup ? (setup as { _: SetupFn })._ || setup : undefined;
  params ||= undefined;
  const clone: Renderer[RendererProp.Clone] = template
    ? (branch, ns) => {
        ((cloneCache[ns] ||= {})[template] ||= createCloneableHTML(
          template,
          ns,
        ))(branch, walks);
      }
    : (branch) => {
        walk(
          (branch[AccessorProp.StartNode] = branch[AccessorProp.EndNode] =
            new Text()),
          walks,
          branch,
        );
      };

  return (owner?: Scope): Renderer => {
    return {
      [RendererProp.Id]: id,
      [RendererProp.Clone]: clone,
      [RendererProp.Owner]: owner,
      [RendererProp.Setup]: setup,
      [RendererProp.Params]: params,
      [RendererProp.Accessor]: dynamicScopesAccessor,
    };
  };
}

export function _content_resume(
  id: string,
  template: string | 0,
  walks?: string | 0,
  setup?: SetupFn | 0,
  params?: Signal<unknown> | 0,
  dynamicScopesAccessor?: Accessor,
) {
  return _resume(
    id,
    _content(id, template, walks, setup, params, dynamicScopesAccessor),
  );
}

export function _content_closures(
  renderer: ReturnType<typeof _content>,
  closureFns: Record<Accessor, SignalFn>,
) {
  const closureSignals: NonNullable<Renderer[RendererProp.LocalClosures]> = {};
  for (const key in closureFns) {
    closureSignals[key] = _const(MARKO_DEBUG ? key : +key, closureFns[key]);
  }
  return (owner: Scope, closureValues: Record<Accessor, unknown>): Renderer => {
    const instance = renderer(owner);
    instance[RendererProp.LocalClosures] = closureSignals;
    instance[RendererProp.LocalClosureValues] = closureValues;
    return instance;
  };
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
          (branch[AccessorProp.StartNode] = branch[AccessorProp.EndNode] =
            firstChild.cloneNode(true) as ChildNode),
          walks,
          branch,
        );
      }
    : (branch, walks) => {
        const clone = parent.cloneNode(true);
        walk(clone.firstChild!, walks, branch);
        branch[AccessorProp.StartNode] = clone.firstChild!;
        branch[AccessorProp.EndNode] = clone.lastChild!;
      };
}
