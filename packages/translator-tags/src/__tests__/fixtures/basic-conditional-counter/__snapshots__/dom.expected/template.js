export const _template_ = "<button class=inc></button><button class=toggle></button><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import { on as _on, data as _data, createRenderer as _createRenderer, closure as _closure, register as _register, conditional as _conditional, effect as _effect, inConditionalScope as _inConditionalScope, state as _state, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _count$ifBody = /* @__PURE__ */_closure("count", (_scope, count) => _data(_scope["#text/0"], count));
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, () => [_count$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/2");
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _effect("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_state("count", (_scope, count) => _count_effect(_scope), () => _inConditionalScope(_count$ifBody, "#text/2"));
const _onClick2 = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _show(_scope, !show);
  };
};
const _show_effect = _effect("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show", _scope => _on(_scope["#button/1"], "click", _onClick2(_scope)));
const _show = /* @__PURE__ */_state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
}, () => _if);
export function _setup_(_scope) {
  _show(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko");