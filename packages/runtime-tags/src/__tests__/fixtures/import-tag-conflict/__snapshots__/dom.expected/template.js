export const _template = "<!> <!>";
export const _walks = /* replace, over(2), replace, over(1) */"%c%b";
import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup(_scope) {
  _$.data(_scope["#text/0"], asset1);
  _$.data(_scope["#text/1"], asset2);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);