import { withBranches } from "../common/helpers";
import {
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../common/types";
import { installPatchShells } from "./patch";
import { queueEffect, runId } from "./queue";
import { _content as content } from "./renderer";
import {
  creating,
  createPatchers,
  getRegisteredWithScope,
  patchCreated,
  patchers,
  withCreating,
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

// A scope this flush created has no render coming, so its setup envelope
// applies now; a fresh branch's queued shell setup runs after, over it.
patchers[PatchKey.Setup] = (scope, _key, value) => {
  if (creating && scope[AccessorProp.Gen] === runId) {
    patchCreated(value, scope);
  }
};
// Ids the flush asks a fresh scope to run, in the shell's grammar
// (`inits…!effects…`): a child's mounts, a client-derived local's inits.
createPatchers[PatchKey.Init] = (scope, _key, ids) =>
  runSetupIds(resolveSetupIds(ids), scope);

type SetupFn = (branch: Scope) => void;
type SetupIds = [inits: SetupFn[], effects?: SetupFn[]];
// Each id resolves as it runs (a flush applies once every module it needs
// is resident). Closure renders ride as `._`.
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
type ShellFactory = ((owner?: Scope, ...locals: Scope[]) => Renderer) & {
  [RendererProp.Shell]: Shell;
};
type Renderer = ReturnType<ReturnType<typeof _content>> & {
  [RendererProp.Shell]?: Shell;
};

// Separate from module registrations so a flush can create from a shell
// before its module loads; the build id and held-shell token rule out a miss.
const shells: Record<string, ShellFactory> = {};
export const getContentFactory = (id: string) =>
  shells[id] || getRegisteredWithScope<ShellFactory | Renderer | undefined>(id);
export const getContent = (id: string, owner?: Scope, ...locals: Scope[]) => {
  const registered = getContentFactory(id);
  return typeof registered === "function"
    ? registered(owner, ...locals)
    : registered;
};
export const getShell = (id: string) => shells[id]?.[RendererProp.Shell];

// `"id inits…!effects…;walks;template"` (`,` for `;walks;` when walk-less):
// inits render inside the fresh scope's setup, `!` opens the mount effects.
export const registerShell = (shell: string) => {
  // A debug shell of content with a `<return>` leads with `^` (its mark).
  const returns = MARKO_DEBUG && shell[0] === "^";
  if (returns) shell = shell.slice(1);
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
    resolved
      ? (branch: Scope) => withCreating(runSetupIds, resolved, branch)
      : 0,
  ];
  const factory = _content(id, ...parts);
  shells[id] = Object.assign(
    (owner?: Scope) => {
      const renderer: Renderer = Object.assign(factory(owner), {
        [RendererProp.Shell]: parts,
      });
      if (returns) renderer[RendererProp.Returns] = 1;
      return renderer;
    },
    { [RendererProp.Shell]: parts },
  );
  return id;
};
installPatchShells(registerShell);
