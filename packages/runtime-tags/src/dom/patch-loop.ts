import { encodeAccessor } from "../common/helpers";
import { type Accessor, PatchKey, type Scope } from "../common/types";
import type { _for_of } from "./control-flow";
import { getShell } from "./patch-shells";
import { type Patcher, patchScope, withCreating } from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Loop]: unknown[];
  }
}

// Interleaved `[key, partial, …, shellId?]`: an object head means implicit
// index keys, and the trailing string (a partial never is one) is the shell.
export const createLoopPatcher =
  (reconcile: typeof _for_of): Patcher<typeof PatchKey.Loop> =>
  (scope, key, value) => {
    let len = value.length;
    let shellId: string | undefined;
    if (len && typeof value[len - 1] === "string") {
      shellId = value[--len] as string;
    }
    const explicit = len > 0 && typeof value[0] !== "object";
    const partials: Scope[] = [];
    const keys = explicit ? ([] as unknown[]) : undefined;
    for (let i = 0; i < len;) {
      keys?.push(value[i++]);
      partials.push(value[i++] as Scope);
    }
    const suffix = key.slice(PatchKey.Loop.length) as Accessor;
    // A loop with a shell creates additions; one whose items pair only
    // (a stateful body) ships none and never adds.
    const [template, walks, setup] = getShell(shellId!) || [];
    // The reconciler applies the patch: `params` walks each partial into its
    // paired/created branch, and setup attaches effects to fresh ones.
    const apply = () =>
      reconcile(
        (MARKO_DEBUG ? suffix : encodeAccessor(suffix)) as never,
        template,
        walks,
        setup || 0,
        ((branch: Scope, [partial]: [Scope]) =>
          patchScope(partial, branch)) as never,
      )(
        scope,
        keys
          ? [partials, (_partial: unknown, i: number) => keys[i]]
          : [partials],
      );
    if (shellId) withCreating(apply);
    else apply();
  };
