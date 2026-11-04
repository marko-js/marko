import { PatchKey } from "../../common/types";
import { reorderKeyed } from "../control-flow";
import { patchers } from "./apply";
import { createLoopPatcher } from "./loop";

// A keyed loop's rows can move, so its page reconciles with the move planner.
patchers[PatchKey.Loop] = createLoopPatcher(reorderKeyed);
