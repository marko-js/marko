import type { Accessor } from "../common/types";
import { PatchKey } from "../common/types";
import { patchWrite } from "./patch";
import { constructPatchers, patchers } from "./resume";

// Plain patched writes, shared by every feat whose entries carry them.
constructPatchers[PatchKey.Write] = patchers[PatchKey.Write] = (
  scope,
  key,
  value,
) => patchWrite(scope, key.slice(PatchKey.Write.length) as Accessor, value);
