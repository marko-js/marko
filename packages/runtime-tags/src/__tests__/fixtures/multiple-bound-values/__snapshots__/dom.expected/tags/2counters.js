export const _template_ = "<button> </button><button> </button>";
export const _walks_ = /* get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_count2_input_count2Change = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    input_count2,
    input_count2Change
  } = _scope;
  _count2(_scope, input_count2, input_count2Change);
});
const _expr_input_count1_input_count1Change = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    input_count1,
    input_count1Change
  } = _scope;
  _count(_scope, input_count1, input_count1Change);
});
const _count2_effect = _$.effect("__tests__/tags/2counters.marko_0_count2", (_scope, {
  count2
}) => _$.on(_scope["#button/2"], "click", function () {
  _count2(_scope, count2 + 1), count2;
}));
const _count2 = /* @__PURE__ */_$.state("count2", (_scope, count2) => {
  _$.data(_scope["#text/3"], count2);
  _count2_effect(_scope);
});
const _count_effect = _$.effect("__tests__/tags/2counters.marko_0_count1", (_scope, {
  count1
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count1 + 1), count1;
}));
const _count = /* @__PURE__ */_$.state("count1", (_scope, count1) => {
  _$.data(_scope["#text/1"], count1);
  _count_effect(_scope);
});
export const _input_count2Change_ = /* @__PURE__ */_$.value("input_count2Change", 0, () => _expr_input_count2_input_count2Change);
export const _input_count2_ = /* @__PURE__ */_$.value("input_count2", 0, () => _expr_input_count2_input_count2Change);
export const _input_count1Change_ = /* @__PURE__ */_$.value("input_count1Change", 0, () => _expr_input_count1_input_count1Change);
export const _input_count1_ = /* @__PURE__ */_$.value("input_count1", 0, () => _expr_input_count1_input_count1Change);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_count1_(_scope, input.count1);
  _input_count1Change_(_scope, input.count1Change);
  _input_count2_(_scope, input.count2);
  _input_count2Change_(_scope, input.count2Change);
}, () => _$.intersections([_input_count1_, _input_count1Change_, _input_count2_, _input_count2Change_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/2counters.marko", _template_, _walks_, _setup_, void 0, () => _params__);