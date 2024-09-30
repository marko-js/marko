export const _template_ = "<span> </span><span> </span>";
export const _walks_ = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
import { data as _data, queueSource as _queueSource, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/1"], y));
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko_0_x", _scope => {
  const {
    x
  } = _scope;
  _queueSource(_scope, _y, x);
  _queueSource(_scope, _x, 2);
});
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/0"], x);
  _queueEffect(_scope, _x_effect);
});
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko");