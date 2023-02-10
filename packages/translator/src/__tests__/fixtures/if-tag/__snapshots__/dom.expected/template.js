import { createRenderer as _createRenderer, register as _register, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _elseBody = _register("packages/translator/src/__tests__/fixtures/if-tag/template.marko_5_renderer", /* @__PURE__ */_createRenderer("C", ""));
const _elseIfBody = _register("packages/translator/src/__tests__/fixtures/if-tag/template.marko_4_renderer", /* @__PURE__ */_createRenderer("B", ""));
const _ifBody3 = _register("packages/translator/src/__tests__/fixtures/if-tag/template.marko_3_renderer", /* @__PURE__ */_createRenderer("A", ""));
const _ifBody2 = _register("packages/translator/src/__tests__/fixtures/if-tag/template.marko_2_renderer", /* @__PURE__ */_createRenderer("World", ""));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/if-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("Hello", ""));
const _if3 = /* @__PURE__ */_conditional("#text/2", 1, (_scope, input = _scope["input"]) => input.x ? _ifBody3 : input.y ? _elseIfBody : _elseBody);
const _if2 = /* @__PURE__ */_conditional("#text/1", 1, (_scope, input = _scope["input"]) => (input.a, input.b) ? _ifBody2 : null);
const _if = /* @__PURE__ */_conditional("#text/0", 1, (_scope, input = _scope["input"]) => input.a + input.b ? _ifBody : null);
const _input = /* @__PURE__ */_source("input", [_if, _if2, _if3]);
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<!><!><div><!></div>";
export const walks = /* replace, over(1), replace, over(1), next(1), replace, out(1) */"%b%bD%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/if-tag/template.marko");