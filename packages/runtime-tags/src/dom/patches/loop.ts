import { encodeAccessor } from "../../common/helpers";
import { AccessorPrefix, PatchKey, type Scope } from "../../common/types";
import { loop, type reorderKeyed } from "../control-flow";
import { type Patcher, patchScope, withCreating } from "./apply";
import { getShell } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Loop]: unknown[];
  }
}

// Interleaved `[key, patch, …, shellId?]`: an object head means implicit
// index keys, and the trailing string (a patch never is one) is the shell.
export const createLoopPatcher = (
  reorder?: typeof reorderKeyed,
): Patcher<typeof PatchKey.Loop> => {
  // A row's key is the one its loop's runtime gave it (sent unless every key is
  // its index); the patcher's loop has no params, so no row's args are read.
  const reconcile = loop(
    ([patches, keys]: [patches: Scope[], keys: unknown[] | 0], cb) =>
      patches.forEach((_, i) => cb(keys ? keys[i] : i, patches)),
    reorder,
  );
  // One per shell (one loop's body), as compiled code builds one per loop, so
  // the shell's markup parses once.
  const reconcilers: Record<string, ReturnType<typeof reconcile>> = {};
  return (scope, accessor, value) => {
    let len = value.length;
    let shellId: string | undefined;
    if (len && typeof value[len - 1] === "string") {
      shellId = value[--len] as string;
    }
    const patches: Scope[] = [];
    const keys = len && typeof value[0] !== "object" ? ([] as unknown[]) : 0;
    const encoded = MARKO_DEBUG ? accessor : encodeAccessor(accessor);
    // A loop with a shell creates additions; one whose items pair only
    // (a stateful body) ships none and never adds.
    const render = shellId
      ? (reconcilers[shellId] ||= reconcile(encoded, ...getShell(shellId)!))
      : reconcile(encoded);
    // The reconciler pairs and creates the rows (setup attaches effects to fresh
    // ones); each row's patch applies once the loop owns every row, in its order.
    const apply = (_?: never) => {
      render(scope, [patches, keys]);
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
};
