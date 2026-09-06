import type { Accessor, Scope } from "../common/types";
import { AccessorProp, PatchKey } from "../common/types";
import "./patch-write";
import { queueEffect, runId } from "./queue";
import { getRegisteredWithScope, patchers } from "./resume";

// Key: effect register id. Entry: space-joined read accessors, a numeric
// token switching the owner hops for those after it. A read stamped with
// this frame's epoch re-runs the effect ONCE.
patchers[PatchKey.Effect] = (scope, key, entry) => {
  if (scope[AccessorProp.Gen] === runId) return;
  const epoch = runId;
  queueEffect(scope, (scope: Scope) => {
    let owner = scope;
    let depth = 0;
    for (const token of (entry as string).split(" ")) {
      const hops = +token;
      if (hops === hops) {
        for (; depth < hops; depth++) owner = owner[AccessorProp.Owner]!;
      } else if (
        owner[AccessorProp.PatchChanged]?.[token as Accessor] === epoch
      ) {
        getRegisteredWithScope(
          MARKO_DEBUG ? key.slice(key.indexOf(":") + 1) : key.slice(1),
          scope,
        );
        return;
      }
    }
  });
};
