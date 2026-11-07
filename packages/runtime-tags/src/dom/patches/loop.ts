import { encodeAccessor } from "../../common/helpers";
import { AccessorPrefix, PatchKey, type Scope } from "../../common/types";
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
    // The reconciler pairs and creates the rows (setup attaches effects to fresh
    // ones); each row's patch applies once the loop owns every row, in its order.
    const apply = (_?: never) => {
      reconcile(
        MARKO_DEBUG ? accessor : encodeAccessor(accessor),
        template,
        walks,
        setup || 0,
      )(
        scope,
        keys ? [patches, (_patch: unknown, i: number) => keys[i]] : [patches],
      );
      (scope[AccessorPrefix.BranchScopes + accessor] as Scope[]).forEach(
        (row, i) => patchScope(patches[i], row),
      );
    };
    for (let i = 0; i < len;) {
      if (keys) keys.push(value[i++]);
      patches.push(value[i++] as Scope);
    }
    if (shellId) withCreating(apply);
    else apply();
  };
