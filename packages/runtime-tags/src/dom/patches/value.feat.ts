import "./write";
import { PatchKey } from "../../common/types";
import { createPatchers, patchers, patchFills } from "./apply";

createPatchers[PatchKey.Value] = patchers[PatchKey.Value] = (
  scope,
  key,
  value,
) => patchFills[key.slice(PatchKey.Value.length)](scope, value);
