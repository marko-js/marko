import { AccessorPrefix, PatchKey, RenderDataProp } from "../../common/types";
import { patchers, patchRender } from "./apply";

// A write an entry may depend on (`patches/effect`, `patches/init`): a change marks it.
patchers[PatchKey.MarkedWrite] = (scope, accessor, value) => {
  if (scope[accessor] !== value) {
    scope[AccessorPrefix.PatchChanged + accessor] =
      patchRender[RenderDataProp.StopPatch];
  }
  scope[accessor] = value;
};
