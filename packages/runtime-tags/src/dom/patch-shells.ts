import { withBranches } from "../common/helpers";
import {
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../common/types";
import { queueEffect, runId } from "./queue";
import { _content as content } from "./renderer";
import {
  _patch_records,
  constructing,
  constructPatchers,
  failPatch,
  getRegisteredWithScope,
  patchConstruct,
  patchers,
} from "./resume";

// Enables branch resume handling: a page swapping shipped branches needs
// it even when no client control flow does.
const _content = /*@__PURE__*/ withBranches(content);

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
    scope[AccessorProp.PatchSetup] = value as Scope;
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
export const resolveSetupIds = (ids: string) =>
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
export const runSetupIds = ([inits, effects]: SetupIds, scope: Scope) => {
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

export const getShellContent = (shell: Shell, id = "", owner?: Scope) =>
  owner
    ? markShell(contentFactory(shell, id)(owner))
    : (shell[3] ??= markShell(contentFactory(shell, id)()));
const contentFactory = (shell: Shell, id: string) =>
  _content(id, shell[0], shell[1], shell[2]);
const markShell = (renderer: Shell[3]) =>
  Object.assign(renderer!, { [RendererProp.Shell]: 1 });

// `"id inits…!effects…;walks;template"` (`,` for `;walks;` when walk-less):
// inits render inside the fresh scope's setup, `!` opens the mount effects.
export const registerShell = (record: string) => {
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
      ? (branch: Scope) => {
          if (branch[AccessorProp.PatchSetup]) {
            patchConstruct(branch[AccessorProp.PatchSetup] as Scope, branch);
            branch[AccessorProp.PatchSetup] = 0;
          }
          runSetupIds(resolved, branch);
        }
      : 0,
  ];
  return idToken.slice(0, sep);
};
_patch_records(registerShell);
