export const _template_ = "<button class=inc> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _valueChange = _$.register("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/components/counter.marko_0/valueChange", _scope => function (_new_x) {
  _x(_scope, _new_x);
});
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/components/counter.marko_0_x", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _x_effect(_scope);
  _$.tagVarSignal(_scope, x);
}, () => _$.tagVarSignal);
export function _setup_(_scope) {
  _x(_scope, 1);
  _$.setTagVarChange(_scope, _valueChange(_scope));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/components/counter.marko", _template_, _walks_, _setup_);