import { PatchKey } from "../../common/types";
import { setupPatchers, patchers } from "./apply";
import "./child.feat";

// A child entry a created scope's setup carries (a tag client state names, the
// patch's to create alone) pairs as a live one's does.
setupPatchers[PatchKey.Child] = (scope, accessor, value) =>
  patchers[PatchKey.Child]!(scope, accessor, value);
