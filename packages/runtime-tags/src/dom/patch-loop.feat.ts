import { encodeAccessor } from "../common/helpers";
import { forEach, type Opt } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  PatchKey,
  type Scope,
} from "../common/types";
import { _for_of } from "./control-flow";
import { shells } from "./patch-branch.feat";
import { failPatch, patchers, walkScope } from "./resume";

// Interleaved `[key, partial, …, shellId?]`: an object head means implicit
// index keys, and the trailing string (a partial never is one) is the shell.
patchers[PatchKey.Loop] = (scope, key, value) => {
  const entry = value as unknown[];
  let len = entry.length;
  let shellId: string | undefined;
  if (len && typeof entry[len - 1] === "string") {
    shellId = entry[--len] as string;
  }
  const explicit = len > 0 && typeof entry[0] !== "object";
  const partials: Scope[] = [];
  const keys = explicit ? ([] as unknown[]) : undefined;
  for (let i = 0; i < len;) {
    keys?.push(entry[i++]);
    partials.push(entry[i++] as Scope);
  }
  const suffix = key.slice(PatchKey.Loop.length) as Accessor;
  if (!shellId) {
    // Additions need the item shell; a section that cannot ship one (eg
    // holes reading parent-scope state) rejects to navigation.
    const liveKeys = new Set<unknown>();
    let index = 0;
    forEach(
      scope[
        (AccessorPrefix.BranchScopes + suffix) as Accessor
      ] as Opt<BranchScope>,
      (branch) => liveKeys.add(branch[AccessorProp.LoopKey] ?? index++),
    );
    for (let i = 0; i < partials.length; i++) {
      if (!liveKeys.has(keys ? keys[i] : i)) {
        failPatch();
      }
    }
  }
  const [template, walks, setup] = shells[shellId!] || [];
  // The reconciler applies the patch: `params` walks each partial into its
  // paired/constructed branch, and setup attaches effects to fresh ones.
  _for_of(
    (MARKO_DEBUG ? suffix : encodeAccessor(suffix)) as never,
    template,
    walks,
    setup || 0,
    ((branch: Scope, [partial]: [Scope]) =>
      walkScope(partial, branch)) as never,
  )(
    scope,
    keys ? [partials, (_partial: unknown, i: number) => keys[i]] : [partials],
  );
};
