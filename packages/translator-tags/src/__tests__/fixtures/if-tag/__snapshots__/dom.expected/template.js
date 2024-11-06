export const _template_ = "<!><!><!><div><!></div>";
export const _walks_ = /* replace, over(1), replace, over(1), next(1), replace, out(1) */"D%b%bD%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _elseBody = _$.register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_5_renderer", /* @__PURE__ */_$.createRenderer("C", ""));
const _elseIfBody = _$.register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_4_renderer", /* @__PURE__ */_$.createRenderer("B", ""));
const _ifBody3 = _$.register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_3_renderer", /* @__PURE__ */_$.createRenderer("A", ""));
const _ifBody2 = _$.register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer("World", ""));
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("Hello", ""));
const _if3 = /* @__PURE__ */_$.conditional("#text/2");
const _if2 = /* @__PURE__ */_$.conditional("#text/1");
const _if = /* @__PURE__ */_$.conditional("#text/0");
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _if(_scope, input.a + input.b ? _ifBody : null);
  _if2(_scope, (input.a, input.b) ? _ifBody2 : null);
  _if3(_scope, input.x ? _ifBody3 : input.y ? _elseIfBody : _elseBody);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko");