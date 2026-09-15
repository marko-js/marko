import { type Accessor, PatchKey } from "../common/types";
import { _text } from "./dom";
import { patchers } from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Text]: string;
  }
}

// A resident module may have rendered the value already: only a change writes.
patchers[PatchKey.Text] = (scope, key, value) =>
  _text(scope[key.slice(PatchKey.Text.length) as Accessor] as Text, value);
