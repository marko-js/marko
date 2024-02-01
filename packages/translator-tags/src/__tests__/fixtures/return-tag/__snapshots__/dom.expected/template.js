import { tagVarSignal as _tagVarSignal, createRenderer as _createRenderer, register as _register, conditional as _conditional, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
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
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/return-tag/template.marko");