import { tagVarSignal as _tagVarSignal, createRenderer as _createRenderer, register as _register, conditional as _conditional, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup$elseBody = _scope => {
  _tagVarSignal(_scope, 2);
};
const _elseBody = _register("packages/translator-tags/src/__tests__/fixtures/return-tag/template.marko_2_renderer", /* @__PURE__ */_createRenderer("", "", _setup$elseBody));
const _setup$ifBody = _scope => {
  _tagVarSignal(_scope, 1);
};
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/return-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("", "", _setup$ifBody));
const _if = /* @__PURE__ */_conditional("#text/0");
const _input = /* @__PURE__ */_value("input", (_scope, input) => _if(_scope, input.show ? _ifBody : _elseBody));
export const _args_ = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/return-tag/template.marko");