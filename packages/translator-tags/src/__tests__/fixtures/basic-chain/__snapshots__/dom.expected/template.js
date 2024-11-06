export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import { data as _data, value as _value, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _z = /* @__PURE__ */_value("z", (_scope, z) => _data(_scope["#text/0"], z));
const _y = /* @__PURE__ */_value("y", (_scope, y) => _z(_scope, y * 3));
const _x = /* @__PURE__ */_state("x", (_scope, x) => _y(_scope, x * 2));
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-chain/template.marko");