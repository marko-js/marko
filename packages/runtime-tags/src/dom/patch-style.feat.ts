import { type Accessor, PatchKey } from "../common/types";
import { _style_rule_item, _style_shell } from "./dom";
import { patchers } from "./resume";

patchers[PatchKey.Style] = (scope, key, value) => {
  const at = key.indexOf(" ");
  const accessor = key.slice(PatchKey.Style.length, at) as Accessor;
  const element = scope[accessor] as HTMLStyleElement;
  // A constructed scope ran no setup: its style still needs the shell rule.
  if (!element.textContent) _style_shell(scope, accessor);
  _style_rule_item(element, key.slice(at + 1), value);
};
