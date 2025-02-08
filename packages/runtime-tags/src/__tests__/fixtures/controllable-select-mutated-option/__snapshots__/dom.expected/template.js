export const _template_ = "<form><select></select><button type=reset>reset</button></form><div> </div><button class=remove>Remove option</button><button class=add>Add option</button>";
export const _walks_ = /* next(1), get, out(1), next(1), get, out(1), get, over(1), get, over(1) */"D lD l b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _opt$for_content = /* @__PURE__ */_$.value("opt", (_scope, opt) => {
  _$.attr(_scope["#option/0"], "value", opt);
  _$.data(_scope["#text/1"], opt);
});
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _opt$for_content(_scope, _params_2[0]));
const _for_content = /* @__PURE__ */_$.createRenderer("<option> </option>", /* get, next(1), get */" D ", void 0, () => _params_2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#select/0", _for_content);
const _value = /* @__PURE__ */_$.state("value", (_scope, value) => {
  _$.controllable_select_value(_scope, "#select/0", value, _valueChange(_scope));
  _$.data(_scope["#text/1"], value);
});
const _options_ = /* @__PURE__ */_$.value("options_0", (_scope, options_0) => _value(_scope, options_0));
const _options_effect = _$.effect("__tests__/template.marko_0_options", (_scope, {
  options
}) => {
  _$.on(_scope["#button/2"], "click", function () {
    _options(_scope, options.slice(1));
  });
  _$.on(_scope["#button/3"], "click", function () {
    _options(_scope, [options.length ? options[0] - 1 : 3, ...options]);
  });
});
const _options = /* @__PURE__ */_$.state("options", (_scope, options) => {
  _options_effect(_scope);
  _options_(_scope, options?.[0]);
  _for(_scope, [options, v => v]);
});
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => {
  _$.controllable_select_value_effect(_scope, "#select/0");
  _$.on(_scope["#select/0"], "change", console.log);
  _$.on(_scope["#select/0"], "input", console.log);
});
export function _setup_(_scope) {
  _setup__effect(_scope);
  _options(_scope, [1, 2, 3]);
}
function _valueChange(_scope) {
  return _new_value => {
    _value(_scope, _new_value);
  };
}
_$.register("__tests__/template.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);