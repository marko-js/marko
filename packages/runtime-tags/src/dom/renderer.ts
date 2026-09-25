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
import { _resumed } from "./resume";
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
  [RendererProp.LocalClosures]?: SetupFn;
};

export type SetupFn = (scope: Scope) => void;

export function createBranch(
  $global: Scope[typeof AccessorProp.Global],
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
  $global: Scope[typeof AccessorProp.Global],
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
  const clone: Renderer[typeof RendererProp.Clone] = template
    ? (branch, ns) => {
        // The digit prefix keeps a branch whose entire markup is an
        // `Object.prototype` member name (`constructor`, …) off the prototype.
        ((cloneCache[ns] ||= {})[1 + template] ||= createCloneableHTML(
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

  // Registered here so any reference that keeps a renderer in the bundle
  // also resumes it; one that must always register is emitted impure.
  return (_resumed[id] = (owner?: Scope): Renderer => {
    return {
      [RendererProp.Id]: id,
      [RendererProp.Clone]: clone,
      [RendererProp.Owner]: owner,
      [RendererProp.Setup]: setup,
      [RendererProp.Params]: params,
      [RendererProp.Accessor]: dynamicScopesAccessor,
    };
  });
}

// Registers content that code the analysis cannot see may render later. Its
// registration carries the loop's values if it has some, then the closures it
// reads per owner down to its own (`0` for one with none), set where missing.
export function _content_resume(
  renderer: (
    owner?: Scope,
    localValues?: Record<Accessor, unknown>,
  ) => Renderer,
  hasLocalValues = 0,
) {
  return (_resumed[renderer()[RendererProp.Id]] = (
    owner: Scope,
    ...values: Scope[]
  ) => {
    for (let i = values.length, scope = owner; i > hasLocalValues;) {
      const closures = values[--i];
      for (const key in closures)
        if (!(key in scope)) scope[key] = closures[key];
      scope = scope[AccessorProp.Owner]!;
    }
    return renderer(owner, values[hasLocalValues - 1]);
  });
}

export function _content_closures(
  renderer: ReturnType<typeof _content>,
  closureFns: Record<Accessor, SignalFn>,
) {
  const closureSignals: Record<Accessor, Signal<unknown>> = {};
  for (const key in closureFns) {
    closureSignals[key] = _const(MARKO_DEBUG ? key : +key, closureFns[key]);
  }
  return (owner: Scope, closureValues: Record<Accessor, unknown>): Renderer => {
    const instance = renderer(owner);
    const clone = instance[RendererProp.Clone];
    const setClosures = (instance[RendererProp.LocalClosures] = (branch) => {
      for (const key in closureSignals) {
        closureSignals[key](branch, closureValues[key]);
      }
    });
    // Applied on clone so a branch any runtime path creates from this content
    // (dynamic tag, `<try>` catch or placeholder) starts with the loop's values.
    instance[RendererProp.Clone] = (branch, ns) => {
      clone(branch, ns);
      setClosures(branch);
    };
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
