import { withBranches } from "../../common/helpers";
import {
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../../common/types";
import { queueEffect, runId } from "../queue";
import { _content as content, _return_setup, type SetupFn } from "../renderer";
import { _resumed } from "../resume";
import {
  creating,
  installPatchShells,
  setupPatchers,
  patchers,
  patchScope,
  withCreating,
} from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Setup]: Scope;
    [PatchKey.SetupValues]: Scope;
    [PatchKey.Render]: string;
  }
}

// Enables branch resume handling: a page swapping shipped branches needs
// it even when no client control flow does.
const _content = /*@__PURE__*/ withBranches(content);

// A scope this flush created has no render coming: its setup envelope applies as its entry
// orders it (values after child entries, or ahead of client rows they build), renders after.
patchers[PatchKey.Setup] = patchers[PatchKey.SetupValues] = (
  scope,
  _accessor,
  value,
) => {
  if (creating && scope[AccessorProp.Gen] === runId) {
    patchScope(value, scope, setupPatchers);
  }
};
// Setup ids the flush asks a created scope to run, in the shell's grammar: a
// client-derived local's, a subscriber's.
setupPatchers[PatchKey.Render] = (scope, _key, ids) =>
  runSetupIds(resolveSetupIds(ids), scope);

type SetupIds = [setup: SetupFn[], scripts?: SetupFn[]];
// Each id resolves as it runs, on the scope its hops reach (`accessor>…id`, a `>` per
// owner up; an id-less hop only sets the owner); a setup id runs a registration's `._`.
const resolveSetupIds = (ids: string) =>
  ids.split("!").map((part) =>
    part
      ? part.split(" ").map((id) => {
          const hops = id.split(">");
          const last = hops.pop()!;
          return (scope: Scope) => {
            const fn = _resumed[last] as { _?: SetupFn } & SetupFn;
            if (MARKO_DEBUG && last && !fn) {
              throw new Error(`No registration for the setup id "${last}".`);
            }
            let owner = scope;
            for (const hop of hops) {
              if (!hop) {
                owner = owner[AccessorProp.Owner]!;
              } else {
                (scope = scope[hop] as Scope)[AccessorProp.Owner] = owner;
                owner = scope;
              }
            }
            if (last) (fn._ || fn)(scope);
          };
        })
      : [],
  ) as SetupIds;
// Setup renders now (the scope's first render); scripts queue as mounts.
const runSetupIds = ([setup, scripts]: SetupIds, scope: Scope) => {
  for (const render of setup) render(scope);
  scripts?.forEach((script) => queueEffect(scope, script));
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

// A shell registers under `=` and its id, apart from the module's registration, so
// a flush creates from it before the module loads; the build id and token rule out a miss.
export const getContent = (id: string, owner?: Scope) => {
  const registered = (_resumed["=" + id] || _resumed[id]) as
    | ContentFactory
    | Renderer
    | undefined;
  return typeof registered === "function" ? registered(owner) : registered;
};
// A content id's renderer: `^id`/`^^id` bind the tag's scope/owner, `hop… id`
// steps down, `^F N id` up to a row.
export const getContentAt = (scope: Scope, id: string) => {
  let owner: Scope | undefined;
  while (id[0] === "^") {
    owner = owner ? owner[AccessorProp.Owner]! : scope;
    id = id.slice(1);
  }
  const hops = id.split(" ");
  id = hops.pop()!;
  if (hops.length) {
    if (!owner) {
      for (owner = scope; owner[AccessorProp.Owner];) {
        owner = owner[AccessorProp.Owner]!;
      }
    }
    for (const hop of hops) owner = owner[hop] as Scope;
  }
  const renderer = getContent(id, owner);
  // Every template of the build has a record; the transport refuses
  // another build's patch, so an unresolved id is a bug.
  if (MARKO_DEBUG && !renderer) {
    throw new Error(`A patch names content "${id}" the page cannot resolve.`);
  }
  return renderer!;
};
export const getShell = (id: string) =>
  (_resumed["=" + id] as ContentFactory | undefined)?.[RendererProp.Shell];

// `"id setup…!scripts…;walks;template"` (`,` for `;walks;` when walk-less):
// setup renders inside the created scope's setup, `!` opens the mount scripts.
installPatchShells((shell: string) => {
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
  // Marked on its setup, as compiled content's is.
  if (returns) _return_setup((parts[2] ||= (_: Scope) => {}));
  const factory = _content(id, ...parts);
  const fromShell = (_resumed["=" + id] = Object.assign(
    (owner?: Scope) =>
      Object.assign(factory(owner), clone, { [RendererProp.Shell]: parts }),
    { [RendererProp.Shell]: parts },
  ));
  // `registered` is read before `_content` registers its factory under the id:
  // the page's own registration stays, else the shell, till a later module's.
  _resumed[id] = registered || fromShell;
});
