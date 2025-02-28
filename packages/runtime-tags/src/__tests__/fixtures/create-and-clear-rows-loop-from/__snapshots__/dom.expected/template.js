export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _n$for_content = /* @__PURE__ */_$.value("n/2", (_scope, n) => _$.data(_scope["#text/0"], n));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2/1", (_scope, _params_2) => _n$for_content(_scope, _params_2[0]));
const _for_content = /* @__PURE__ */_$.createRenderer("<!>, ", /* replace */"%", void 0, () => _params_2$for_content);
const _expr_input_from_input_to_input_step = /* @__PURE__ */_$.intersection(6, _scope => {
  const {
    "input_from/3": input_from,
    "input_to/4": input_to,
    "input_step/5": input_step
  } = _scope;
  _for(_scope, [input_to, input_from, input_step]);
});
const _for = /* @__PURE__ */_$.loopTo("#div/0", _for_content);
export const _input_step_ = /* @__PURE__ */_$.value("input_step/5", (_scope, input_step) => _expr_input_from_input_to_input_step(_scope));
export const _input_to_ = /* @__PURE__ */_$.value("input_to/4", (_scope, input_to) => _expr_input_from_input_to_input_step(_scope));
export const _input_from_ = /* @__PURE__ */_$.value("input_from/3", (_scope, input_from) => _expr_input_from_input_to_input_step(_scope));
export const _input_ = /* @__PURE__ */_$.value("input/2", (_scope, input) => {
  _input_from_(_scope, input.from);
  _input_to_(_scope, input.to);
  _input_step_(_scope, input.step);
});
export const _params__ = /* @__PURE__ */_$.value("_params_/1", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);