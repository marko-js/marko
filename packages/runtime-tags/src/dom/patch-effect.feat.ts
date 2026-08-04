import type { Accessor, Scope } from "../common/types";
import { AccessorProp, PatchKey } from "../common/types";
import { queueEffect, runId } from "./queue";
import { getRegisteredWithScope, patchers } from "./resume";

type Stamped = Scope & {
  [kStamps]?: Record<Accessor, number>;
  [kSeen]?: Record<string, number>;
};

// Change stamps bump per accessor on write; each effect scope remembers the
// last stamp it acted on, so effects re-run exactly when their read changed
// (the hydrated value is stamp 0).
const kStamps = Symbol();
const kSeen = Symbol();

patchers[PatchKey.Write] = (scope: Stamped, key, value) => {
  const accessor = key.slice(PatchKey.Write.length) as Accessor;
  if (scope[accessor] !== value || !(accessor in scope)) {
    scope[accessor] = value;
    (scope[kStamps] ??= {})[accessor] = -~scope[kStamps]![accessor];
  }
};

// Key: the effect's register id. Entry: its space-joined read accessors,
// with an owner-hop count suffixed when the values live up the scope chain
// (accessors never parse as pure numbers). Any changed read re-runs the
// effect ONCE, from the effect queue — after every write in the frame
// landed. Freshly constructed scopes sync their stamps without running:
// construct setup already ran their effects against current values.
patchers[PatchKey.Effect] = (scope, key, entry) => {
  const fresh = scope[AccessorProp.Gen] === runId;
  queueEffect(scope, (scope: Stamped) => {
    const accessors = (entry as string).split(" ");
    let depth = +accessors[accessors.length - 1];
    let owner = scope;
    if (depth) {
      accessors.pop();
      do {
        owner = owner[AccessorProp.Owner] as Stamped;
      } while (--depth);
    }
    const seen = (scope[kSeen] ??= {});
    let changed = 0;
    for (const accessor of accessors) {
      const stamp = owner[kStamps]?.[accessor as Accessor] || 0;
      if ((seen[key + accessor] || 0) !== stamp) {
        seen[key + accessor] = stamp;
        changed = 1;
      }
    }
    if (changed && !fresh) {
      getRegisteredWithScope(key.slice(PatchKey.Effect.length), scope);
    }
  });
};
