import { PatchKey } from "../../common/types";
import { _attr_content } from "../dom";
import { patchers } from "./apply";
// The content's branch pairs through a `PatchChild` entry.
import "./child.feat";
import { getContentAt } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.AttrContent]: string | 0;
  }
}

patchers[PatchKey.AttrContent] = (scope, accessor, id) =>
  _attr_content(scope, accessor, id ? getContentAt(scope, id) : undefined);
