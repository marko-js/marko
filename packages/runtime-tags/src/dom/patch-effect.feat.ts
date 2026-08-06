import type { Accessor } from "../common/types";
import { AccessorProp, PatchKey } from "../common/types";
import "./patch-write";
import { queueEffect, runId } from "./queue";
import {
  type Changed,
  getRegisteredWithScope,
  kChanged,
  patchers,
} from "./resume";

// Key: the effect's register id. Entry: its space-joined read accessors,
// with an owner-hop count suffixed when the values live up the scope chain
// (accessors never parse as pure numbers). GlobalEffect entries append a
// `!` segment naming the global keys read (bare `!` = the whole bag; `!`
// is never an accessor), checked against the shared globals object.
// A read marked with this frame's epoch re-runs the effect ONCE, from the
// effect queue — after every write in the frame landed. Freshly
// constructed scopes skip: setup already ran effects on current values.
patchers[PatchKey.Effect] = patchers[PatchKey.GlobalEffect] = (
  scope,
  key,
  entry,
) => {
  if (scope[AccessorProp.Gen] === runId) return;
  const epoch = runId;
  queueEffect(scope, (scope: Changed) => {
    const tokens = (entry as string).split(" ");
    const globalsAt = tokens.indexOf("!");
    const accessors = globalsAt === -1 ? tokens : tokens.slice(0, globalsAt);
    const globals =
      globalsAt === -1
        ? undefined
        : (scope[AccessorProp.Global] as unknown as Changed)[kChanged];
    let depth = +accessors[accessors.length - 1];
    let owner = scope;
    if (depth) {
      accessors.pop();
      do {
        owner = owner[AccessorProp.Owner] as Changed;
      } while (--depth);
    }
    if (
      accessors.some(
        (accessor) => owner[kChanged]?.[accessor as Accessor] === epoch,
      ) ||
      (globals &&
        (globalsAt === tokens.length - 1
          ? globals[AccessorProp.Global] === epoch
          : tokens
              .slice(globalsAt + 1)
              .some(
                (globalKey) => globals[("." + globalKey) as Accessor] === epoch,
              )))
    ) {
      getRegisteredWithScope(
        MARKO_DEBUG ? key.slice(key.indexOf(":") + 1) : key.slice(1),
        scope,
      );
    }
  });
};
