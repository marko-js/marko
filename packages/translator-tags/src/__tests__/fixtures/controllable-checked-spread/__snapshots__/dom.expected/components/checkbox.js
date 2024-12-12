export const _template_ = "<input>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input__effect = _$.effect("__tests__/components/checkbox.marko_0_input", _scope => _$.attrsEvents(_scope, "#input/0"));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _$.attrs(_scope, "#input/0", {
    type: "checkbox",
    ...input
  });
  _input__effect(_scope);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/components/checkbox.marko", _template_, _walks_, _setup_, void 0, () => _params__);