import { PatchKey } from "../../common/types";
import { type _for_of, _for_of_unkeyed } from "../control-flow";
import { patchers } from "./apply";
import { createLoopPatcher } from "./loop";

// Index-keyed loops reconcile without the move planner; a page with a keyed
// loop keeps `patches/loop-keyed`'s patcher whichever module runs first.
patchers[PatchKey.Loop] ||= createLoopPatcher(
  _for_of_unkeyed as typeof _for_of,
);
