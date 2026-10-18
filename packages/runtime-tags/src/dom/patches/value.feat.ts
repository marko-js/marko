import "./write.feat";
import { PatchKey } from "../../common/types";
import {
  afterChildScopes,
  createPatchers,
  patchers,
  patchFills,
} from "./apply";

createPatchers[PatchKey.Value] = afterChildScopes(
  (patchers[PatchKey.Value] = (scope, key, value) =>
    patchFills[key.slice(PatchKey.Value.length)](scope, value)),
);
