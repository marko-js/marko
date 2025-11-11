const $Foo_content__walks = /* over(1), replace, over(2) */"b%c",
  $Foo_content__template = "<!><!> foo",
  $Bar_content__walks = /* over(1), <Foo>, over(1) */`b/${$Foo_content__walks}&b`,
  $Bar_content__template = `<!>${$Foo_content__template}<!>`;
export const $template = `<!>${$Foo_content__template}<!>`;
export const $walks = /* over(1), <Foo>, over(1) */`b/${$Foo_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $Bar_content__setup = /* @__PURE__ */_._child_setup($scope => $Foo_content__tag_input_show($scope["#childScope/0"], void 0));
const $if_content__setup = $scope => {
  $Bar_content__setup._($scope["#childScope/0"], $scope);
};
const $Foo_content__if = /* @__PURE__ */_._if("#text/0", `<!>${$Bar_content__template}<!>`, /* over(1), <Bar>, over(1) */`b/${$Bar_content__walks}&b`, $if_content__setup);
const $Foo_content__tag_input_show = /* @__PURE__ */_._const("show", $scope => $Foo_content__if($scope, $scope.show ? 0 : 1));
const $Foo_content__$params = /* @__PURE__ */_._const("$params2", $scope => $Foo_content__$temp($scope, $scope.$params2?.[0]));
const $Foo_content__$temp = /* @__PURE__ */_._const("$temp", $scope => $Foo_content__tag_input_show($scope, $scope.$temp.show));
export function $setup($scope) {
  $Foo_content__tag_input_show($scope["#childScope/0"], true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);