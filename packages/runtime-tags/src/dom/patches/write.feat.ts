import { PatchKey } from "../../common/types";
import { setupPatchers, patchers } from "./apply";

// Plain patched writes, shared by every feat whose entries carry them.
setupPatchers[PatchKey.Write] = patchers[PatchKey.Write] = (
  scope,
  accessor,
  value,
) => (scope[accessor] = value);
