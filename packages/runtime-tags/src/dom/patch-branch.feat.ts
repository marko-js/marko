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
import { queueEffect, runId } from "./queue";
import { _content as content, createAndSetupBranch } from "./renderer";
import {
  _patch_records,
  constructing,
  constructPatchers,
  failPatch,
  withConstructing,
  getRegisteredWithScope,
  patchers,
  patchConstruct,
  patchScope,
} from "./resume";
import { removeAndDestroyBranch } from "./scope";

// Enables branch resume handling: a page swapping shipped branches needs
// it even when no client control flow does.
const _content = /*@__PURE__*/ withBranches(content);

// Server-shipped shells, cached per session; setup sub-partials stash here
// and the shell content's setup (a fresh branch's first render) applies them.
const kSetup = Symbol();

// A branch stashes its setup for the shell's first render; a scope the
// shell's walk created (a child, met while constructing) applies it now.
patchers[PatchKey.Setup] = (scope, _key, value) => {
  if (
    constructing &&
    scope[AccessorProp.Gen] === runId &&
    scope[AccessorProp.ClosestBranch] !== scope
  ) {
    patchConstruct(value as Scope, scope);
  } else {
    (scope as Scope & { [kSetup]?: Scope })[kSetup] = value as Scope;
  }
};
// Ids the frame asks a fresh scope to run, in the shell record's grammar
// (`inits…!effects…`): a child's mounts, a client-fed local's feed inits.
constructPatchers[PatchKey.Init] = (scope, _key, ids) =>
  runSetupIds(resolveSetupIds(ids as string), scope);

type SetupFn = (branch: Scope) => void;
type SetupIds = [inits: SetupFn[], effects?: SetupFn[]];
// A missing registration means required client code was tree-shaken:
// constructing would silently misrender. Closure renders ride as `._`.
const resolveSetupIds = (ids: string) =>
  ids.split("!").map((part) =>
    part
      ? part.split(" ").map((id) => {
          const fn = getRegisteredWithScope(id);
          return ((fn && ((fn as { _?: unknown })._ || fn)) ||
            failPatch()) as SetupFn;
        })
      : [],
  ) as SetupIds;
// Inits render now (the scope's first render); effects queue as mounts.
const runSetupIds = ([inits, effects]: SetupIds, scope: Scope) => {
  for (const init of inits) init(scope);
  if (effects) for (const effect of effects) queueEffect(scope, effect);
};
export type Shell = [
  template: string,
  walks: string,
  setup?: SetupFn | 0,
  content?: ReturnType<ReturnType<typeof _content>>,
];
export const shells: Record<string, Shell> = {};

export const getShellContent = (shell: Shell) =>
  (shell[3] ??= Object.assign(_content("", shell[0], shell[1], shell[2])(), {
    [kShell]: 1,
  }));
// Marks a shell's content renderer: its walk creates scopes no setup runs.
export const kShell = Symbol();

// `"id inits…!effects…;walks;template"` (`,` for `;walks;` when walk-less):
// inits render inside the fresh scope's setup, `!` opens the mount effects.
_patch_records((record) => {
  const first = record.search(/[;,]/);
  const second = record[first] === ";" ? record.indexOf(";", first + 1) : first;
  const idToken = record.slice(0, first);
  const sep = (idToken + " ").indexOf(" ");
  const setupIds = idToken.slice(sep + 1);
  const resolved = setupIds && resolveSetupIds(setupIds);
  shells[idToken.slice(0, sep)] = [
    record.slice(second + 1),
    record.slice(first + 1, second),
    resolved
      ? (branch: Scope & { [kSetup]?: Scope | 0 }) => {
          if (branch[kSetup]) {
            patchConstruct(branch[kSetup] as Scope, branch);
            branch[kSetup] = 0;
          }
          runSetupIds(resolved, branch);
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
    patchScope(branchPartial as Scope, liveBranch as Scope);
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
    getShellContent(shell),
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
  // The fresh branch has no live children, so nested structural entries
  // in the applied partial mismatch and construct recursively through here.
  withConstructing(() => patchScope(branchPartial, branch as Scope));
}
