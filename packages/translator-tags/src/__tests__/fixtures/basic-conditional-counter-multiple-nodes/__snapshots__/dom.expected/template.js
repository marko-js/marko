export const _template_ = "<button class=inc></button><button class=toggle></button><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import { on as _on, data as _data, queueSource as _queueSource, createRenderer as _createRenderer, closure as _closure, registerRenderer as _registerRenderer, conditional as _conditional, register as _register, queueEffect as _queueEffect, inConditionalScope as _inConditionalScope, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _count$ifBody = /* @__PURE__ */_closure("count", (_scope, count) => _data(_scope["#text/0"], count));
const _ifBody = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer", /* @__PURE__ */_createRenderer("The count is <!>", /* over(1), replace */"b%", void 0, () => [_count$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/2");
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count + 1);
  };
};
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_value("count", (_scope, count) => _queueEffect(_scope, _count_effect), () => _inConditionalScope(_count$ifBody, "#text/2"));
const _onClick2 = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _queueSource(_scope, _show, !show);
  };
};
const _show_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show", _scope => _on(_scope["#button/1"], "click", _onClick2(_scope)));
const _show = /* @__PURE__ */_value("show", (_scope, show) => {
  _queueEffect(_scope, _show_effect);
  _if(_scope, show ? _ifBody : null);
}, () => _if);
export function _setup_(_scope) {
  _show(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko");