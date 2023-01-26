import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, source as _source, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _count$ifBody = /* @__PURE__ */_closure(1, "count", [], (_scope, count) => _data(_scope["#text/0"], count));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_count$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/2", 1, (_scope, show = _scope["show"]) => show ? _ifBody : null);
const _hydrate_count = _register("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const count = _scope["count"];
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_source("count", [/* @__PURE__ */_inConditionalScope(_count$ifBody, "#text/2")], (_scope, count) => _queueHydrate(_scope, _hydrate_count));
const _hydrate_show = _register("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show", _scope => _on(_scope["#button/1"], "click", function () {
  const show = _scope["show"];
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_source("show", [_if], (_scope, show) => _queueHydrate(_scope, _hydrate_show));
const _setup = _scope => {
  _setSource(_scope, _show, true);
  _setSource(_scope, _count, 0);
};
export const template = "<button class=inc></button><button class=toggle></button><!>";
export const walks = /* get, over(1), get, over(1), replace, over(1) */" b b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);