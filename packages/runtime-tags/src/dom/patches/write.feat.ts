import type { Accessor } from "../../common/types";
import { PatchKey } from "../../common/types";
import { patchWrite } from "./apply";
import { createPatchers, patchers } from "./apply";

// Plain patched writes, shared by every feat whose entries carry them.
createPatchers[PatchKey.Write] = patchers[PatchKey.Write] = (
  scope,
  key,
  value,
) => patchWrite(scope, key.slice(PatchKey.Write.length) as Accessor, value);
