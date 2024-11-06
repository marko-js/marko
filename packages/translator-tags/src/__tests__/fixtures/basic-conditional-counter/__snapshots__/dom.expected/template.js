export const _template_ = "<button class=inc></button><button class=toggle></button><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$ifBody = /* @__PURE__ */_$.closure("count", (_scope, count) => _$.data(_scope["#text/0"], count));
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", void 0, () => [_count$ifBody]));
const _if = /* @__PURE__ */_$.conditional("#text/2", 0);
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _count_effect(_scope), () => _$.inConditionalScope(_count$ifBody, "#text/2"));
const _onClick2 = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _show(_scope, !show);
  };
};
const _show_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show", _scope => _$.on(_scope["#button/1"], "click", _onClick2(_scope)));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
}, () => _if);
export function _setup_(_scope) {
  _show(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko");