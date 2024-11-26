export const _template_ = "<!><!> <!>";
export const _walks_ = /* replace, over(2), replace, over(1) */"D%c%b";
import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _$.data(_scope["#text/0"], asset1);
  _$.data(_scope["#text/1"], asset2);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/import-tag-conflict/template.marko", _template_, _walks_, _setup_);