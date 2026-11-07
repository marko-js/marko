import { PatchKey } from "../../common/types";
import { patchers } from "./apply";
import { createLoopPatcher } from "./loop";

// Unkeyed loops' rows never move, so they reconcile without the move planner;
// a page with a keyed loop keeps `patches/loop-keyed`'s patcher either way.
patchers[PatchKey.Loop] ||= createLoopPatcher();
