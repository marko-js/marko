import type { Accessor } from "../common/types";
import { PatchKey } from "../common/types";
import { patchWrite } from "./patch";
import { createPatchers, patchers } from "./resume";

// Plain patched writes, shared by every feat whose entries carry them.
createPatchers[PatchKey.Write] = patchers[PatchKey.Write] = (
  scope,
  key,
  value,
) => patchWrite(scope, key.slice(PatchKey.Write.length) as Accessor, value);
