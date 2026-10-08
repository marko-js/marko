import type { Accessor, Scope } from "../common/types";
import { AccessorProp, PatchKey } from "../common/types";
import "./patch-write";
import { queueEffect, runId } from "./queue";
import { getRegisteredWithScope, patchers } from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Effect]: string;
  }
}

// Installed by `patch-effect-signal` on pages whose effects use `$signal`.
let signalReset: ((scope: Scope, id: string) => void) | undefined;
export function installSignalReset(reset: typeof signalReset) {
  signalReset = reset;
}

// Keyed by effect id: its reads (a number sets later reads' owner depth),
// then `!` and its `$signal` ids; a read this flush changed re-runs it once.
patchers[PatchKey.Effect] = (scope, key, entry) => {
  if (scope[AccessorProp.Gen] === runId) return;
  const epoch = runId;
  const [reads, aborts] = entry.split("!");
  queueEffect(scope, (scope: Scope) => {
    let owner = scope;
    let depth = 0;
    for (const token of reads.split(" ")) {
      const hops = +token;
      if (hops === hops) {
        for (; depth < hops; depth++) owner = owner[AccessorProp.Owner]!;
      } else if (
        owner[AccessorProp.PatchChanged]?.[token as Accessor] === epoch
      ) {
        if (aborts) for (const id of aborts.split(" ")) signalReset!(scope, id);
        getRegisteredWithScope(
          MARKO_DEBUG ? key.slice(key.indexOf(":") + 1) : key.slice(1),
          scope,
        );
        return;
      }
    }
  });
};
