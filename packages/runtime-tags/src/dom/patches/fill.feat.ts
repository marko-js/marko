import "./write.feat";
import { PatchKey } from "../../common/types";
import { setupPatchers, patchers, patchFills } from "./apply";

setupPatchers[PatchKey.Fill] = patchers[PatchKey.Fill] = (scope, key, value) =>
  patchFills[key](scope, value);
