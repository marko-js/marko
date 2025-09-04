export const $template = "<!> <!>";
export const $walks = /* replace, over(2), replace, over(1) */"%c%b";
import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._text($scope["#text/0"], asset1);
  _._text($scope["#text/1"], asset2);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);