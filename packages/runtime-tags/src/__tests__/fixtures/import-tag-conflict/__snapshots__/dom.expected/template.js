export const $template = "<!> <!>";
export const $walks = /* replace, over(2), replace, over(1) */"%c%b";
import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _$.data($scope["#text/0"], asset1);
  _$.data($scope["#text/1"], asset2);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);