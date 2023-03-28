import { on as _on, queueSource as _queueSource, data as _data, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, queueHydrate as _queueHydrate, inConditionalScope as _inConditionalScope, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _count$ifBody = /* @__PURE__ */_closure("count", (_scope, count) => _data(_scope["#text/0"], count));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_count$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/2");
const _hydrate_count = _register("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const count = _scope["count"];
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count, _dirty) => {
  if (_dirty) {
    _queueHydrate(_scope, _hydrate_count);
  }
  _inConditionalScope(_scope, _dirty, _count$ifBody, "#text/2");
});
const _hydrate_show = _register("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show", _scope => _on(_scope["#button/1"], "click", function () {
  const show = _scope["show"];
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_value("show", (_scope, show, _dirty) => {
  let _if_value;
  if (_dirty) {
    _queueHydrate(_scope, _hydrate_show);
    _if_value = show ? _ifBody : null;
  }
  _if(_scope, _if_value, _dirty);
});
const _setup = _scope => {
  _show(_scope, true);
  _count(_scope, 0);
};
export const template = "<button class=inc></button><button class=toggle></button><!>";
export const walks = /* get, over(1), get, over(1), replace, over(1) */" b b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko");