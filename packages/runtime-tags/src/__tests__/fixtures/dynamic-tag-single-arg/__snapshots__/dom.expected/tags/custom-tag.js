export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _$.data(_scope["#text/0"], input));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _$.tagVarSignal(_scope, "hello from other");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _template_, _walks_, _setup_, void 0, () => _params__);