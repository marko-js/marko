export const $template = `${_setter_template}<div> </div>`;
export const $walks = /* <setter/var>, next(1), get, out(1) */`0${_setter_walks}&D l`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _setter, $input_value as _setter_input_value, $input_valueChange as _setter_input_valueChange, $template as _setter_template, $walks as _setter_walks } from "./tags/setter.marko";
const $count = /* @__PURE__ */_._let("count/3", $scope => {
  _setter_input_value($scope["#childScope/0"], $scope.count);
  _._text($scope["#text/2"], $scope.count);
});
export function $setup($scope) {
  _._var($scope, "#childScope/0", $setCount);
  _setter($scope["#childScope/0"]);
  _setter_input_valueChange($scope["#childScope/0"], $valueChange($scope));
  $count($scope, 0);
}
const $setCount__script = _._script("__tests__/template.marko_0_setCount", $scope => $scope.setCount());
const $setCount = _._var_resume("__tests__/template.marko_0_setCount/var", /* @__PURE__ */_._const("setCount", $setCount__script));
function $valueChange($scope) {
  return (_new_count => {
    $count($scope, _new_count);
  });
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);