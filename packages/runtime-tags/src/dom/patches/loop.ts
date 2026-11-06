import { encodeAccessor } from "../../common/helpers";
import { PatchKey, type Scope } from "../../common/types";
import type { _for_of } from "../control-flow";
import { type Patcher, patchScope, withCreating } from "./apply";
import { getShell } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Loop]: unknown[];
  }
}

// Interleaved `[key, patch, …, shellId?]`: an object head means implicit
// index keys, and the trailing string (a patch never is one) is the shell.
export const createLoopPatcher =
  (reconcile: typeof _for_of): Patcher<typeof PatchKey.Loop> =>
  (scope, accessor, value) => {
    let len = value.length;
    let shellId: string | undefined;
    if (len && typeof value[len - 1] === "string") {
      shellId = value[--len] as string;
    }
    const patches: Scope[] = [];
    const keys = len && typeof value[0] !== "object" ? ([] as unknown[]) : 0;
    // A loop with a shell creates additions; one whose items pair only
    // (a stateful body) ships none and never adds.
    const [template, walks, setup] = getShell(shellId!) || [];
    // The reconciler applies the patch: `params` walks each patch into its
    // paired/created branch, and setup attaches effects to fresh ones.
    const apply = (_?: never) =>
      reconcile(
        (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as never,
        template,
        walks,
        setup || 0,
        ((branch: Scope, [patch]: [Scope]) =>
          patchScope(patch, branch)) as never,
      )(
        scope,
        keys ? [patches, (_patch: unknown, i: number) => keys[i]] : [patches],
      );
    for (let i = 0; i < len;) {
      if (keys) keys.push(value[i++]);
      patches.push(value[i++] as Scope);
    }
    if (shellId) withCreating(apply);
    else apply();
  };
