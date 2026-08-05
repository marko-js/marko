import { withBranches } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  NodeType,
  PatchKey,
  type Scope,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { queueEffect } from "./queue";
import { _content as content, createAndSetupBranch } from "./renderer";
import {
  _patch_records,
  failPatch,
  getRegisteredWithScope,
  patchers,
  walkConstruct,
  walkScope,
} from "./resume";
import { removeAndDestroyBranch } from "./scope";

// Enables branch resume handling: a page swapping shipped branches needs
// it even when no client control flow does.
const _content = /*@__PURE__*/ withBranches(content);

// Server-shipped shells, cached per session; the content's setup applies
// stashed setup entries (seeds) and attaches mount effects on construct.
// Setup sub-partials stash here and only the shell content's setup — run
// solely for freshly created branches, inside `run()` where `_let` treats
// the scope as first-render — applies them; a walk-time apply would take
// the value-change path and clobber paired state.
const kSetup = Symbol();

patchers[PatchKey.Setup] = (scope, _key, value) => {
  (scope as Scope & { [kSetup]?: Scope })[kSetup] = value as Scope;
};

type Shell = [
  template: string,
  walks: string,
  setup?: ((branch: Scope) => void) | 0,
  content?: ReturnType<typeof _content>,
];
export const shells: Record<string, Shell> = {};

// `"id effects…;walks;template"` (`,` in place of `;walks;` when walk-less):
// the header excludes both separators, so the first one is authoritative.
_patch_records((record) => {
  const first = record.search(/[;,]/);
  const second = record[first] === ";" ? record.indexOf(";", first + 1) : first;
  const idToken = record.slice(0, first);
  const sep = (idToken + " ").indexOf(" ");
  const effects = idToken.slice(sep + 1);
  const fns =
    effects &&
    effects !== "!" &&
    effects.split(" ").map((id) => getRegisteredWithScope(id));
  shells[idToken.slice(0, sep)] = [
    record.slice(second + 1),
    record.slice(first + 1, second),
    effects
      ? (branch: Scope & { [kSetup]?: Scope | 0 }) => {
          if (branch[kSetup]) {
            walkConstruct(branch[kSetup] as Scope, branch);
            branch[kSetup] = 0;
          }
          if (fns) {
            // A missing registration means required client code was
            // tree-shaken: constructing would silently misrender. Closure
            // signals expose their per-branch render as `._`.
            for (const fn of fns) {
              queueEffect(
                branch,
                ((fn && ((fn as { _?: unknown })._ || fn)) || failPatch()) as (
                  s: Scope,
                ) => void,
              );
            }
          }
        }
      : 0,
  ];
});

// Shape-typed conditional entry: bare number = selection + 1 (`0` hides),
// bare string = a static branch's shell id, else `[index?, partial, shellId?]`.
patchers[PatchKey.Branch] = (scope, key, value) => {
  const entry = value as number | string | [number | Scope, ...unknown[]];
  const suffix = key.slice(PatchKey.Branch.length);
  const branchKey = (AccessorPrefix.BranchScopes + suffix) as Accessor;
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  const rendererKey = (AccessorPrefix.ConditionalRenderer + suffix) as Accessor;
  let selection = 0;
  let branchPartial: Scope | number | undefined;
  let shellId: string | undefined;
  if (typeof entry === "object") {
    [branchPartial, shellId] = entry as [Scope, string?];
    if (typeof branchPartial === "number") {
      selection = branchPartial;
      branchPartial = (entry as unknown[])[1] as Scope;
      shellId = (entry as unknown[])[2] as string | undefined;
    }
  } else if (typeof entry === "number") {
    selection = entry - 1;
  } else {
    shellId = entry;
  }
  if (selection === -1) {
    if (liveBranch) {
      scope[branchKey] = undefined;
      removeAndDestroyBranch(liveBranch);
    }
    scope[rendererKey] = -1 as never;
    return;
  }
  branchPartial ||= {} as Scope;
  const current = liveBranch ? ((scope[rendererKey] as number) ?? 0) : -1;
  scope[rendererKey] = selection as never;
  if (selection === current) {
    walkScope(branchPartial as Scope, liveBranch as Scope);
  } else if (shellId) {
    construct(scope, branchKey, branchPartial as Scope, shells[shellId]);
  } else {
    // The server could not ship a shell for the newly selected branch, so
    // this divergence cannot apply faithfully.
    failPatch();
  }
};

function construct(
  scope: Scope,
  branchKey: Accessor,
  branchPartial: Scope,
  shell: Shell,
) {
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  if (liveBranch) {
    removeAndDestroyBranch(liveBranch);
  }
  // An only-child conditional's accessor holds its container element rather
  // than a marker (mirrors `setConditionalRenderer`'s anchoring).
  const marker = scope[
    branchKey.slice(AccessorPrefix.BranchScopes.length) as Accessor
  ] as Comment | Element;
  const inside = marker.nodeType === NodeType.Element;
  const parentNode = inside ? (marker as Element) : marker.parentNode!;
  const branch = createAndSetupBranch(
    scope[AccessorProp.Global],
    (shell[3] ??= _content("", shell[0], shell[1], shell[2]))(),
    scope,
    parentNode,
  );
  insertChildNodes(
    parentNode,
    inside ? null : marker,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
  scope[branchKey] = branch as never;
  // The fresh branch has no live children, so nested structural entries in
  // the walked scope mismatch and construct recursively through this path.
  walkScope(branchPartial, branch as Scope);
}
