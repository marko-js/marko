export const $template = _myConst_template;
export const $walks = /* beginChildWithVar, _myConst_walks, endChild */`0${_myConst_walks}&`;
import { $setup as _myConst, $input_value as _myConst_input_value, $template as _myConst_template, $walks as _myConst_walks } from "./my-const.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_input_x_effect = _$.effect("__tests__/tags/child.marko_0_input_x", ({
  input,
  x
}) => (input.output().innerHTML = x));
const $expr_input_x = /* @__PURE__ */_$.intersection(6, $expr_input_x_effect, 1, "#scopeOffset/1");
const $x = _$.registerBoundSignal("__tests__/tags/child.marko_0_x/var", /* @__PURE__ */_$.value("x", $expr_input_x));
const $input_foo = /* @__PURE__ */_$.value("input_foo", ($scope, input_foo) => _myConst_input_value($scope["#childScope/0"], input_foo));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_foo($scope, input.foo);
  $expr_input_x($scope);
});
export function $setup($scope) {
  _$.setTagVar($scope, "#childScope/0", $x);
  _myConst($scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);