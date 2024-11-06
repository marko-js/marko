export const _template_ = "<div id=ref></div><button id=increment>Increment</button>";
export const _walks_ = /* over(1), get, over(1) */"b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onMount = _scope => {
  const {
    x
  } = _scope;
  return function () {
    document.getElementById("ref").textContent = "Mount " + x;
  };
};
const _onUpdate = _scope => {
  const {
    x
  } = _scope;
  return function () {
    document.getElementById("ref").textContent = "Update " + x;
  };
};
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x", _scope => {
  _$.lifecycle(_scope, "_lifecycle", {
    onMount: _onMount(_scope),
    onUpdate: _onUpdate(_scope)
  });
  _$.on(_scope["#button/0"], "click", _onClick(_scope));
});
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _x_effect(_scope));
export function _setup_(_scope) {
  _x(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag/template.marko", _template_, _walks_, _setup_);