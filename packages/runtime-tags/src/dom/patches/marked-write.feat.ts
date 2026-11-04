import { AccessorPrefix, PatchKey, RenderDataProp } from "../../common/types";
import { patchers, renderData } from "./apply";
// A created scope takes the same value as a plain setup write.
import "./write.feat";

// A write an entry may depend on (`patches/effect`, `patches/render`): a change marks it.
patchers[PatchKey.MarkedWrite] = (scope, accessor, value) => {
  if (scope[accessor] !== value) {
    scope[AccessorPrefix.PatchChanged + accessor] =
      renderData[RenderDataProp.PatchStop];
  }
  scope[accessor] = value;
};
