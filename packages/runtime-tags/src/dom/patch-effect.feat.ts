import type { Accessor, Scope } from "../common/types";
import { AccessorProp, PatchKey } from "../common/types";
import { globalsChanged, globalsEpoch } from "./patch-changed";
import "./patch-write";
import { queueEffect, runId } from "./queue";
import { getRegisteredWithScope, patchers } from "./resume";

// Key: the effect's register id. Entry: its space-joined read accessors,
// with an owner-hop count suffixed when the values live up the scope chain
// (accessors never parse as pure numbers). GlobalEffect entries append a
// `!` segment naming the global keys read (bare `!` = the whole bag; `!`
// is never an accessor), checked against the frame's globals marks.
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
  queueEffect(scope, (scope: Scope) => {
    const tokens = (entry as string).split(" ");
    const globalsAt = tokens.indexOf("!");
    const accessors = globalsAt === -1 ? tokens : tokens.slice(0, globalsAt);
    let depth = +accessors[accessors.length - 1];
    let owner = scope;
    if (depth) {
      accessors.pop();
      do {
        owner = owner[AccessorProp.Owner]!;
      } while (--depth);
    }
    if (
      accessors.some(
        (accessor) =>
          owner[AccessorProp.PatchChanged]?.[accessor as Accessor] === epoch,
      ) ||
      (globalsAt !== -1 &&
        (globalsAt === tokens.length - 1
          ? globalsEpoch === epoch
          : tokens
              .slice(globalsAt + 1)
              .some((globalKey) => globalsChanged[globalKey] === epoch)))
    ) {
      getRegisteredWithScope(
        MARKO_DEBUG ? key.slice(key.indexOf(":") + 1) : key.slice(1),
        scope,
      );
    }
  });
};
