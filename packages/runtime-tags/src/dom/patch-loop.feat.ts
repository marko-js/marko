import { PatchKey } from "../common/types";
import { type _for_of, _for_of_unkeyed } from "./control-flow";
import { createLoopPatcher } from "./patch-loop";
import { patchers } from "./resume";

// Index-keyed loops reconcile without the move planner; a page with a keyed
// loop keeps `patch-loop-keyed`'s patcher whichever module runs first.
patchers[PatchKey.Loop] ||= createLoopPatcher(
  _for_of_unkeyed as typeof _for_of,
);
