import type { Accessor } from "../common/types";
import { PatchKey } from "../common/types";
import { runId } from "./queue";
import { type Changed, constructPatchers, kChanged, patchers } from "./resume";

// Plain patched writes, shared by every feat whose entries carry them; a
// changed value is marked with the frame's epoch for `patch-effect`.
constructPatchers[PatchKey.Write] = patchers[PatchKey.Write] = (
  scope: Changed,
  key,
  value,
) => {
  const accessor = key.slice(PatchKey.Write.length) as Accessor;
  if (scope[accessor] !== value || !(accessor in scope)) {
    scope[accessor] = value;
    (scope[kChanged] ??= {})[accessor] = runId;
  }
};
