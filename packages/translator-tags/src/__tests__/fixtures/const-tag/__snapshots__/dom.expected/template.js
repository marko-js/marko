export const _template_ = "<div> </div><!>";
export const _walks_ = /* next(1), get, out(1), replace, over(1) */"D l%b";
import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/1"], y));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 1);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/const-tag/template.marko");