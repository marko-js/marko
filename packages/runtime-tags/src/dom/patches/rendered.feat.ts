import { AccessorProp, PatchKey, type Scope } from "../../common/types";
import { queueRender } from "../queue";
import { creating, patchers, patchScope } from "./apply";
import "./child.feat";
import "./loop-item.feat";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Rendered]: Scope;
  }
}

// What a created scope's renders build from its starting state (rows, branches)
// takes its entries after those (keyed as `queueCompleteAwaitCounter`).
patchers[PatchKey.Rendered] = (scope, _accessor, patch) => {
  if (creating) {
    queueRender(
      scope,
      () => patchScope(patch, scope),
      -1,
      undefined,
      scope[AccessorProp.Id] + 1e9,
    );
  }
};
