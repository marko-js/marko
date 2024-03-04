import { createRenderer as _createRenderer, register as _register, conditional as _conditional, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _elseBody = _register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_5_renderer", /* @__PURE__ */_createRenderer("C", ""));
const _elseIfBody = _register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_4_renderer", /* @__PURE__ */_createRenderer("B", ""));
const _ifBody3 = _register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_3_renderer", /* @__PURE__ */_createRenderer("A", ""));
const _ifBody2 = _register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_2_renderer", /* @__PURE__ */_createRenderer("World", ""));
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("Hello", ""));
const _if3 = /* @__PURE__ */_conditional("#text/2");
const _if2 = /* @__PURE__ */_conditional("#text/1");
const _if = /* @__PURE__ */_conditional("#text/0");
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _if(_scope, input.a + input.b ? _ifBody : null);
  _if2(_scope, (input.a, input.b) ? _ifBody2 : null);
  _if3(_scope, input.x ? _ifBody3 : input.y ? _elseIfBody : _elseBody);
});
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<!><!><!><div><!></div>";
export const walks = /* replace, over(1), replace, over(1), next(1), replace, out(1) */"D%b%bD%l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko");