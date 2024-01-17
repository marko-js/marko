import { on as _on, queueSource as _queueSource, data as _data, tagVarSignal as _tagVarSignal, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    x
  } = _scope;
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/1"], x);
  _queueEffect(_scope, _x_effect);
  _tagVarSignal(_scope, x);
}, void 0, _tagVarSignal);
const _setup = _scope => {
  _x(_scope, 1);
};
export const template = "<button class=inc> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko");