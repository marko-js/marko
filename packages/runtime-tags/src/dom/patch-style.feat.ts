import { type Accessor, PatchKey } from "../common/types";
import { _style_rule_item } from "./dom";
import { patchers } from "./resume";

patchers[PatchKey.Style] = (scope, key, value) => {
  const at = key.indexOf(" ");
  _style_rule_item(
    scope[key.slice(PatchKey.Style.length, at) as Accessor] as HTMLStyleElement,
    key.slice(at + 1),
    value,
  );
};
