import { decodeAccessor } from "../../common/helpers";
import type { Accessor, Scope } from "../../common/types";
import { AccessorProp, PatchKey } from "../../common/types";
import "./write.feat";
import { queueEffect, runId } from "../queue";
import { getRegisteredWithScope } from "../resume";
import { patchers } from "./apply";
import { installFillChange } from "./signals";

// A changed value a join's fill sets is marked as a write marks it.
installFillChange((scope, valueAccessor) => {
  (scope[AccessorProp.PatchChanged] ??= {})[
    MARKO_DEBUG
      ? (valueAccessor as Accessor)
      : decodeAccessor(valueAccessor as number)
  ] = runId;
});

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Effect]: string;
    [PatchKey.QueuedEffect]: string;
  }
}

// Installed by `patches/effect-signal` on pages whose effects use `$signal`.
let signalReset: ((scope: Scope, id: string) => void) | undefined;
export function installSignalReset(reset: typeof signalReset) {
  signalReset = reset;
}

// Keyed by effect id: its reads (a number sets later reads' owner depth),
// then `!` and its `$signal` ids; a scope this flush created mounts it with
// its setup's effects, a live one re-runs it once a read this flush changed.
patchers[PatchKey.Effect] = (scope, key, entry) => {
  if (scope[AccessorProp.Gen] === runId) {
    (scope[AccessorProp.SetupEffects] ||= []).push(
      getRegisteredWithScope(
        MARKO_DEBUG ? key.slice(key.indexOf(":") + 1) : key.slice(1),
      ),
      scope,
    );
  } else {
    patchers[PatchKey.QueuedEffect]!(scope, key, entry);
  }
};
// An effect a created scope's own render queues only re-runs.
patchers[PatchKey.QueuedEffect] = (scope, key, entry) => {
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
