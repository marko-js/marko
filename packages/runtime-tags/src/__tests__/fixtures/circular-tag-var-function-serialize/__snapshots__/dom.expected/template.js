export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import { $setup as _child, $input_valueChange as _child_input_valueChange, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setter = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => _child_input_valueChange($scope["#childScope/0"], $valueChange($scope)));
const $if_content__setup = $scope => {
  $if_content__setter._($scope);
  _child($scope["#childScope/0"]);
};
const $setter2 = /* @__PURE__ */_._const("setter");
const $if = /* @__PURE__ */_._if("#text/0", _child_template, /* <child> */`/${_child_walks}&`, $if_content__setup);
export function $setup($scope) {
  /* value */0;
  $setter2($scope, $setter($scope));
  $if($scope, true ? 0 : 1);
}
function $valueChange($scope) {
  return function () {
    $scope._.setter();
  };
}
function $setter($scope) {
  return function () {
    /* value */1;
  };
}
_._resume("__tests__/template.marko_1/valueChange", $valueChange);
_._resume("__tests__/template.marko_0/setter", $setter);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);