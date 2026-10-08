import { type Accessor, PatchKey } from "../common/types";
import { _style_rule_item, _style_shell } from "./dom";
import { createPatchers, patchers } from "./resume";

createPatchers[PatchKey.Style] = patchers[PatchKey.Style] = (
  scope,
  key,
  value,
) => {
  const at = key.indexOf(" ");
  const accessor = key.slice(PatchKey.Style.length, at) as Accessor;
  // A created scope ran no setup: its style still needs the shell rule.
  if (!(scope[accessor] as HTMLStyleElement).textContent) {
    _style_shell(scope, accessor);
  }
  _style_rule_item(
    scope[accessor] as HTMLStyleElement,
    key.slice(at + 1),
    value,
  );
};
