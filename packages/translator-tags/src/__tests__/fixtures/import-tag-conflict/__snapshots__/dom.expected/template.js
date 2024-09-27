export const _template_ = "<!><!> <!>";
export const _walks_ = /* replace, over(2), replace, over(1) */"D%c%b";
import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { data as _data, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _data(_scope["#text/0"], asset1);
  _data(_scope["#text/1"], asset2);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/import-tag-conflict/template.marko");