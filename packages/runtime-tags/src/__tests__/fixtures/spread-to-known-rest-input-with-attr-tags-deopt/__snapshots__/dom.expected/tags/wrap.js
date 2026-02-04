export const $template = " <!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import { $setup as _child, $foo as _child_input_foo, $template as _child_template, $walks as _child_walks } from "./child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
_._resume_dynamic_tag();
const $_classspandiv_content__input_foo = /* @__PURE__ */_._closure_get("input_foo", $scope => _child_input_foo($scope["#childScope/0"], $scope._.input_foo));
const $_classspandiv_content__setup = $scope => {
  $_classspandiv_content__input_foo($scope);
  _child($scope["#childScope/0"]);
};
const $_classspandiv_content = _._content_resume("__tests__/tags/wrap.marko_1_content", `<!>${_child_template}<!>`, /* over(1), <child>, over(1) */`b/${_child_walks}&b`, $_classspandiv_content__setup);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $_classspandiv_content);
const $_class__OR__rest = /* @__PURE__ */_._or(6, $scope => $dynamicTag($scope, $scope._class ? 'span' : 'div', () => ({
  ...$scope.rest,
  class: $scope._class
})));
export const $_class = /* @__PURE__ */_._const("_class", $_class__OR__rest);
export const $rest = /* @__PURE__ */_._const("rest", $_class__OR__rest);
export const $input = ($scope, input) => {
  (({
    class: $class,
    foo,
    ...rest
  }) => $rest($scope, rest))(input);
  $input_foo($scope, input.foo);
  $_class($scope, input.class);
};
const $input_foo__closure = /* @__PURE__ */_._closure($_classspandiv_content__input_foo);
export const $input_foo = /* @__PURE__ */_._const("input_foo", $input_foo__closure);
export default /* @__PURE__ */_._template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);