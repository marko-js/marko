export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    b
  } = _scope;
  return a => b;
};
const _onClick2 = _scope => {
  const {
    a,
    b
  } = _scope;
  return function () {
    _a(_scope, a.map(_onClick(_scope)));
  };
};
const _expr_a_b_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b", _scope => _$.on(_scope["#button/0"], "click", _onClick2(_scope)));
const _expr_a_b = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    a,
    b
  } = _scope;
  _expr_a_b_effect(_scope);
});
const _b = /* @__PURE__ */_$.state("b", 0, () => _expr_a_b);
const _a = /* @__PURE__ */_$.state("a", (_scope, a) => _$.data(_scope["#text/1"], a.join("")), () => _expr_a_b);
export function _setup_(_scope) {
  _a(_scope, [0]);
  _b(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko");