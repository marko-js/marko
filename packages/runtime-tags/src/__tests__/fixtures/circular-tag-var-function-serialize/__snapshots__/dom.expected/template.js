export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import { $setup as _child, $input_valueChange as _child_input_valueChange, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $if_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  $if_content__setter._($scope);
};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setter = /* @__PURE__ */_._if_closure("setter", "#text/0", 0, ($scope, setter) => _child_input_valueChange($scope["#childScope/0"], $valueChange($scope)));
const $if_content = /* @__PURE__ */_._content_branch(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $if_content__setup);
const $setter2 = /* @__PURE__ */_._const("setter");
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
export function $setup($scope) {
  /* value */0;
  $setter2($scope, $setter($scope));
  $if($scope, true ? 0 : 1);
}
function $valueChange({
  _: {
    setter
  }
}) {
  return function () {
    setter();
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