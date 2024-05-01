import { queueSource as _queueSource, data as _data, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _setup_effect = _register("packages/translator-tags/src/__tests__/fixtures/let-undefined-until-dom/template.marko_0", _scope => _queueSource(_scope, _x, "Client Only"));
const _setup = _scope => {
  _queueEffect(_scope, _setup_effect);
  _x(_scope, undefined);
};
export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/let-undefined-until-dom/template.marko");