import { PatchKey } from "../common/types";
import { _for_of } from "./control-flow";
import { createLoopPatcher } from "./patch-loop";
import { patchers } from "./resume";

// A keyed loop's rows can move, so its page reconciles with the move planner.
patchers[PatchKey.Loop] = createLoopPatcher(_for_of);
