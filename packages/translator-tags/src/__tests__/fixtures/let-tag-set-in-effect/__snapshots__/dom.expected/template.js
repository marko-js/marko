import { queueSource as _queueSource, data as _data, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
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
const _setup = _scope => {
  _x(_scope, 1);
  _y(_scope, 0);
};
export const template = "<span> </span><span> </span>";
export const walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko");