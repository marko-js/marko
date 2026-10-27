import { withBranches } from "../../common/helpers";
import {
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../../common/types";
import { queueEffect, runId } from "../queue";
import { _content as content } from "../renderer";
import { _resumed, getRegisteredWithScope } from "../resume";
import { installPatchShells } from "./apply";
import {
  creating,
  setupPatchers,
  patchers,
  patchScope,
  withCreating,
} from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Setup]: Scope;
    [PatchKey.SetupValues]: Scope;
    [PatchKey.Init]: string;
  }
}

// Enables branch resume handling: a page swapping shipped branches needs
// it even when no client control flow does.
const _content = /*@__PURE__*/ withBranches(content);

// A scope this flush created has no render coming: its setup envelope applies
// within its entry, values after child entries, and its shell's renders after.
patchers[PatchKey.Setup] = patchers[PatchKey.SetupValues] = (
  scope,
  _accessor,
  value,
) => {
  if (creating && scope[AccessorProp.Gen] === runId) {
    patchScope(value, scope, setupPatchers);
  }
};
// Inits the flush asks a fresh scope to run, in the shell's grammar: a
// client-derived local's, a subscriber's.
setupPatchers[PatchKey.Init] = (scope, _key, ids) =>
  runSetupIds(resolveSetupIds(ids), scope);

type SetupFn = (branch: Scope) => void;
type SetupIds = [inits: SetupFn[], effects?: SetupFn[]];
// Each id resolves as it runs, on the scope its hops reach (`accessor>…id`, a `>`
// per owner up; an id-less hop only sets the owner); closure renders ride as `._`.
export const resolveSetupIds = (ids: string) =>
  ids.split("!").map((part) =>
    part
      ? part.split(" ").map((id) => {
          const hops = id.split(">");
          const last = hops.pop()!;
          return (scope: Scope) => {
            const fn = getRegisteredWithScope<{ _?: SetupFn } & SetupFn>(last);
            let owner = scope;
            for (const hop of hops) {
              if (!hop) {
                owner = owner[AccessorProp.Owner]!;
              } else {
                (scope = scope[hop] as Scope)[AccessorProp.Owner] = owner;
                owner = scope;
              }
            }
            if (fn) (fn._ || fn)(scope);
          };
        })
      : [],
  ) as SetupIds;
// Inits render now (the scope's first render); effects queue as mounts.
export const runSetupIds = ([inits, effects]: SetupIds, scope: Scope) => {
  for (const init of inits) init(scope);
  effects?.forEach((effect) => queueEffect(scope, effect));
};
// A shell's parts, kept on the registered factory (and its renderers) for
// the loop patcher, which reconciles from them rather than a renderer.
export type Shell = [template: string, walks: string, setup: SetupFn | 0];
type ContentFactory = ((owner?: Scope) => Renderer) & {
  [RendererProp.Shell]?: Shell;
};
type Renderer = ReturnType<ReturnType<typeof _content>> & {
  [RendererProp.Shell]?: Shell;
};

// Separate from module registrations so a flush can create from a shell
// before its module loads; the build id and held-shell token rule out a miss.
export const shells: Record<string, ContentFactory> = {};
export const getContentFactory = (id: string) =>
  shells[id] ||
  getRegisteredWithScope<ContentFactory | Renderer | undefined>(id);
export const getContent = (id: string, owner?: Scope) => {
  const registered = getContentFactory(id);
  return typeof registered === "function" ? registered(owner) : registered;
};
export const getShell = (id: string) => shells[id]?.[RendererProp.Shell];

// `"id inits…!effects…;walks;template"` (`,` for `;walks;` when walk-less):
// inits render inside the fresh scope's setup, `!` opens the mount effects.
export const registerShell = (shell: string) => {
  // A debug shell of content with a `<return>` leads with `^` (its mark).
  const returns = MARKO_DEBUG && shell[0] === "^";
  // A bare `id setupIds` is content the page's bundle registers.
  const first = (shell + ",").search(/[;,]/);
  const second = shell[first] === ";" ? shell.indexOf(";", first + 1) : first;
  const idToken = shell.slice(returns ? 1 : 0, first);
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
  const registered = _resumed[id] as Renderer & ContentFactory;
  if (MARKO_DEBUG && first === shell.length && !registered) {
    throw new Error(`No registration for the shell "${id}".`);
  }
  // A shell with no markup creates what the bundle registers: a template's
  // renderer, or content's factory.
  const clone = !parts[0] &&
    registered && {
      [RendererProp.Clone]:
        registered[RendererProp.Clone] || registered()[RendererProp.Clone],
    };
  const factory = _content(id, ...parts);
  shells[id] = Object.assign(
    (owner?: Scope) =>
      Object.assign(
        factory(owner),
        clone,
        returns
          ? { [RendererProp.Shell]: parts, [RendererProp.Returns]: 1 }
          : { [RendererProp.Shell]: parts },
      ),
    { [RendererProp.Shell]: parts },
  );
  // `registered` is read before `_content` registers its factory under the id:
  // the page's own registration stays, else the shell, till a later module's.
  _resumed[id] = registered || shells[id];
  return id;
};
installPatchShells(registerShell);
