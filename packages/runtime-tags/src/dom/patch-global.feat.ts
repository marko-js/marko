import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import { applyGlobals } from "./patch";
import { globalJoins } from "./patch-global";
import { queueRender, runId } from "./queue";
import { patchers } from "./resume";
import type { Signal } from "./signals";

// A page with `$global` joins: a changed key queues its joins for every
// subscribed live scope (the base patcher marked the change).
patchers[PatchKey.Globals] = (live, key, value) => {
  applyGlobals(live, key, value);
  const globals = live[AccessorProp.Global] as unknown as Scope;
  const changed = globals[AccessorProp.PatchChanged];
  for (const key in value as Record<string, unknown>) {
    if (changed?.[key] !== runId) continue;
    const joins = globalJoins[key];
    for (const id in joins) {
      (
        globals[(AccessorPrefix.ClosureScopes + id) as keyof Scope] as
          | Set<Scope>
          | undefined
      )?.forEach((scope) => {
        if (scope[AccessorProp.Gen] && scope[AccessorProp.Gen] !== runId) {
          queueRender(scope, joins[id] as Signal<unknown>, -1);
        }
      });
    }
  }
};
