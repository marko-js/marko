export const $template = _myConst_template;
export const $walks = /* beginChildWithVar, _myConst_walks, endChild */`0${_myConst_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _myConst, $input_value as _myConst_input_value, $template as _myConst_template, $walks as _myConst_walks } from "./my-const.marko";
const $input__OR__x__script = _._script("__tests__/tags/child.marko_0_input_x", ({
  input,
  x
}) => (input.output().innerHTML = x));
const $input__OR__x = /* @__PURE__ */_._or(6, $input__OR__x__script);
const $x = _._var_resume("__tests__/tags/child.marko_0_x/var", /* @__PURE__ */_._const("x", $input__OR__x));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $x);
  _myConst($scope["#childScope/0"]);
}
const $input_foo = /* @__PURE__ */_._const("input_foo", ($scope, input_foo) => _myConst_input_value($scope["#childScope/0"], input_foo));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_foo($scope, input.foo);
  $input__OR__x($scope);
});
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);