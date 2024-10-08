export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import { on as _on, queueSource as _queueSource, createRenderer as _createRenderer, register as _register, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, queueEffect as _queueEffect, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _xBody = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_1_renderer", /* @__PURE__ */_createRenderer("Body Content", ""));
const _x_input = _dynamicTagAttrs("#text/0", _xBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _x_input(_scope, () => ({})), () => _x_input);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _queueSource(_scope, _x, x ? null : "div");
  };
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _queueEffect(_scope, _x_effect);
  _dynamicTagName(_scope, x || _xBody);
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _x(_scope, null);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko");