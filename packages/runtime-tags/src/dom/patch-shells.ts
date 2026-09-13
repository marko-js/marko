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
  _resume,
  creating,
  createPatchers,
  getRegisteredWithScope,
  patchCreated,
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
// creating) has no render coming, so its setup applies now; a fresh
// branch's queued shell setup runs after, over the applied values.
patchers[PatchKey.Setup] = (scope, _key, value) => {
  if (creating && scope[AccessorProp.Gen] >= patchRun) {
    patchCreated(value, scope);
  }
};
// Ids the flush asks a fresh scope to run, in the shell's grammar
// (`inits…!effects…`): a child's mounts, a client-upstream local's inits.
createPatchers[PatchKey.Init] = (scope, _key, ids) =>
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
// A shell's parts, kept on the registered factory (and its renderers) for
// the loop patcher, which reconciles from them rather than a renderer.
export type Shell = [template: string, walks: string, setup: SetupFn | 0];
type ShellFactory = ((owner?: Scope) => Renderer) & {
  [RendererProp.Shell]: Shell;
};
type Renderer = ReturnType<ReturnType<typeof _content>> & {
  [RendererProp.Shell]?: Shell;
};

// A shell registers where the dom module would register the same content,
// so every consumer resolves one id one way; a later flush's shell wins.
export const getContent = (id: string, owner?: Scope) =>
  getRegisteredWithScope<ShellFactory | undefined>(id)?.(owner);
export const getShell = (id: string) =>
  getRegisteredWithScope<ShellFactory | undefined>(id)?.[RendererProp.Shell];

// `"id inits…!effects…;walks;template"` (`,` for `;walks;` when walk-less):
// inits render inside the fresh scope's setup, `!` opens the mount effects.
export const registerShell = (shell: string) => {
  const first = shell.search(/[;,]/);
  const second = shell[first] === ";" ? shell.indexOf(";", first + 1) : first;
  const idToken = shell.slice(0, first);
  const sep = (idToken + " ").indexOf(" ");
  const id = idToken.slice(0, sep);
  const setupIds = idToken.slice(sep + 1);
  const resolved = setupIds && resolveSetupIds(setupIds);
  const parts: Shell = [
    shell.slice(second + 1),
    shell.slice(first + 1, second),
    resolved ? (branch: Scope) => runSetupIds(resolved, branch) : 0,
  ];
  const factory = _content(id, parts[0], parts[1], parts[2]);
  _resume(
    id,
    Object.assign(
      (owner?: Scope) =>
        Object.assign(factory(owner), { [RendererProp.Shell]: parts }),
      { [RendererProp.Shell]: parts },
    ),
  );
  return id;
};
_patch_shells(registerShell);
