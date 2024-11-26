export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _xBody = _$.register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("Body Content", ""));
const _x_input = _$.dynamicTagAttrs("#text/0", _xBody);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _x_input(_scope, () => ({})), () => _x_input);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x ? null : "div");
  };
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _x_effect(_scope);
  _dynamicTagName(_scope, x || _xBody(_scope));
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _x(_scope, null);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko", _template_, _walks_, _setup_);