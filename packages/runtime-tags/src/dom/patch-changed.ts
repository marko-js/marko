import { AccessorProp, type Scope } from "../common/types";
import { runId } from "./queue";

// Changed marks for `$global` by the frame's epoch — per key, and the bag as
// a whole for opaque readers — kept off the user-visible globals object;
// scopes carry theirs at `AccessorProp.PatchChanged`.
export const globalsChanged: Record<string, number> = {};
export let globalsEpoch = 0;

// Applies re-shipped globals so event-time `$global` reads never go stale,
// marking each changed key for `patch-effect`.
export const patchGlobalsEntry = (
  live: Scope,
  _key: string,
  value: unknown,
) => {
  const globals = live[AccessorProp.Global];
  for (const key in value as Record<string, unknown>) {
    if (globals[key] !== (value as Record<string, unknown>)[key]) {
      globals[key] = (value as Record<string, unknown>)[key];
      globalsChanged[key] = globalsEpoch = runId;
    }
  }
};
