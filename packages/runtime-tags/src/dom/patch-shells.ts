import { withBranches } from "../common/helpers";
import {
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../common/types";
import { queueEffect } from "./queue";
import { _content as content } from "./renderer";
import {
  _patch_shells,
  constructing,
  constructPatchers,
  getRegisteredWithScope,
  patchConstruct,
  patchers,
  patchRun,
} from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Setup]: Scope;
    [PatchKey.Init]: string;
  }
}

// Enables branch resume handling: a page swapping shipped branches needs
// it even when no client control flow does.
const _content = /*@__PURE__*/ withBranches(content);

// A scope this flush created (`Gen` since the flush's run, met while
// constructing) has no render coming, so its setup applies now; a fresh
// branch's queued shell setup runs after, over the applied values.
patchers[PatchKey.Setup] = (scope, _key, value) => {
  if (constructing && scope[AccessorProp.Gen] >= patchRun) {
    patchConstruct(value, scope);
  }
};
// Ids the flush asks a fresh scope to run, in the shell's grammar
// (`inits…!effects…`): a child's mounts, a client-upstream local's inits.
constructPatchers[PatchKey.Init] = (scope, _key, ids) =>
  runSetupIds(resolveSetupIds(ids), scope);

type SetupFn = (branch: Scope) => void;
type SetupIds = [inits: SetupFn[], effects?: SetupFn[]];
// Each id resolves as it runs: a lazy channel's register with the module
// that lands after the flush shipping the shell. Closure renders ride as `._`.
export const resolveSetupIds = (ids: string) =>
  ids.split("!").map((part) =>
    part
      ? part.split(" ").map((id) => (scope: Scope) => {
          const fn = getRegisteredWithScope<{ _?: SetupFn } & SetupFn>(id);
          (fn._ || fn)(scope);
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
export const registerShell = (shell: string) => {
  const first = shell.search(/[;,]/);
  const second = shell[first] === ";" ? shell.indexOf(";", first + 1) : first;
  const idToken = shell.slice(0, first);
  const sep = (idToken + " ").indexOf(" ");
  const setupIds = idToken.slice(sep + 1);
  const resolved = setupIds && resolveSetupIds(setupIds);
  shells[idToken.slice(0, sep)] = [
    shell.slice(second + 1),
    shell.slice(first + 1, second),
    resolved ? (branch: Scope) => runSetupIds(resolved, branch) : 0,
  ];
  return idToken.slice(0, sep);
};
_patch_shells(registerShell);
