export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _n$forBody = /* @__PURE__ */_$.value("n", (_scope, n) => _$.data(_scope["#text/0"], n));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _n$forBody(_scope, _params_2[0]));
const _forBody = _$.register("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<!>, ", /* replace */"%", void 0, void 0, () => _params_2$forBody));
const _expr_input_from_input_to_input_step = /* @__PURE__ */_$.intersection(3, _scope => {
  const {
    input_from,
    input_to,
    input_step
  } = _scope;
  _for(_scope, [input_to, input_from, input_step]);
});
const _for = /* @__PURE__ */_$.loopTo("#div/0", _forBody);
export const _input_step_ = /* @__PURE__ */_$.value("input_step", 0, () => _expr_input_from_input_to_input_step);
export const _input_to_ = /* @__PURE__ */_$.value("input_to", 0, () => _expr_input_from_input_to_input_step);
export const _input_from_ = /* @__PURE__ */_$.value("input_from", 0, () => _expr_input_from_input_to_input_step);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_from_(_scope, input.from);
  _input_to_(_scope, input.to);
  _input_step_(_scope, input.step);
}, () => _$.intersections([_input_from_, _input_to_, _input_step_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);