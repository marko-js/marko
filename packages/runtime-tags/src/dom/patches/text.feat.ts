import { PatchKey } from "../../common/types";
import { _text } from "../dom";
import { setupPatchers, patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Text]: string | number;
  }
}

// A resident module may have rendered the value already: only a change writes.
setupPatchers[PatchKey.Text] = patchers[PatchKey.Text] = (
  scope,
  accessor,
  value,
) => _text(scope[accessor] as Text, value);
