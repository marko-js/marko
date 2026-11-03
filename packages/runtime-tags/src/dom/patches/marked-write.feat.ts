import { AccessorPrefix, PatchKey, RenderDataProp } from "../../common/types";
import { patchers, patchRender } from "./apply";
// A created scope takes the same value as a plain setup write.
import "./write.feat";

// A write an entry may depend on (`patches/effect`, `patches/render`): a change marks it.
patchers[PatchKey.MarkedWrite] = (scope, accessor, value) => {
  if (scope[accessor] !== value) {
    scope[AccessorPrefix.PatchChanged + accessor] =
      patchRender[RenderDataProp.StopPatch];
  }
  scope[accessor] = value;
};
