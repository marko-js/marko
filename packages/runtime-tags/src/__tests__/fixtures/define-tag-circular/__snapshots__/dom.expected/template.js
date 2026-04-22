const $Foo_content__walks = /* over(1), replace, over(2) */"b%c",
  $Foo_content__template = "<!><!> foo",
  $Bar_content__walks =
  /*@__PURE__*/
  /* over(1), <Foo>, over(1) */
  (_w0 => `b/${_w0}&b`)($Foo_content__walks),
  $Bar_content__template = /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)($Foo_content__template);
export const $template = /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)($Foo_content__template);
export const $walks =
/*@__PURE__*/
/* over(1), <Foo>, over(1) */
(_w0 => `b/${_w0}&b`)($Foo_content__walks);
import * as _ from "@marko/runtime-tags/debug/dom";
const $Bar_content__setup = /* @__PURE__ */_._child_setup($scope => $Foo_content__tag_input_show($scope["#childScope/0"]));
const $if_content__setup = $scope => {
  $Bar_content__setup._($scope["#childScope/0"], $scope);
};
const $Foo_content__if = /* @__PURE__ */_._if("#text/0", /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)($Bar_content__template),
/*@__PURE__*/
/* over(1), <Bar>, over(1) */
(_w0 => `b/${_w0}&b`)($Bar_content__walks), $if_content__setup);
const $Foo_content__tag_input_show = ($scope, show) => $Foo_content__if($scope, show ? 0 : 1);
const $Foo_content__$params = ($scope, $params2) => $Foo_content__$temp($scope, $params2?.[0]);
const $Foo_content__$temp = ($scope, $temp) => $Foo_content__tag_input_show($scope, $temp.show);
export function $setup($scope) {
  $Foo_content__tag_input_show($scope["#childScope/0"], true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);