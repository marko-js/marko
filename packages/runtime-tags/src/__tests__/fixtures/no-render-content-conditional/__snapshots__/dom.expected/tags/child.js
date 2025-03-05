export const _template_ = _myConst_template;
export const _walks_ = /* beginChildWithVar, _myConst_walks, endChild */`0${_myConst_walks}&`;
import { _setup_ as _myConst, _input_value_ as _myConst_input_value, _template_ as _myConst_template, _walks_ as _myConst_walks } from "./my-const.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_x_effect = _$.effect("__tests__/tags/child.marko_0_input_x", ({
  input,
  x
}) => (input.output().innerHTML = x));
const _expr_input_x = /* @__PURE__ */_$.intersection(6, _scope => {
  const {
    input,
    x
  } = _scope;
  _expr_input_x_effect(_scope);
}, 1, "#scopeOffset/1");
const _x = _$.registerBoundSignal("__tests__/tags/child.marko_0_x/var", /* @__PURE__ */_$.value("x", (_scope, x) => _expr_input_x(_scope)));
const _input_foo = /* @__PURE__ */_$.value("input_foo", (_scope, input_foo) => _myConst_input_value(_scope["#childScope/0"], input_foo));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_foo(_scope, input.foo);
  _expr_input_x(_scope);
});
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _x);
  _myConst(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, _input_);