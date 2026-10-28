import { PatchKey } from "../../common/types";
import { _style_rule_item, _style_shell } from "../dom";
import { setupPatchers, patchers } from "./apply";

setupPatchers[PatchKey.Style] = patchers[PatchKey.Style] = (
  scope,
  accessorAndName,
  value,
) => {
  const at = accessorAndName.indexOf(MARKO_DEBUG ? " " : "$");
  const accessor = ~at ? accessorAndName.slice(0, at) : accessorAndName;
  // A created scope ran no setup: its style still needs the shell rule.
  if (!(scope[accessor] as HTMLStyleElement).textContent) {
    _style_shell(scope, accessor);
  }
  // A client value's entry names no property: the client writes the value.
  if (~at) {
    _style_rule_item(
      scope[accessor] as HTMLStyleElement,
      accessorAndName.slice(at + 1),
      value,
    );
  }
};
