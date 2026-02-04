const $Foo_content__walks = /* over(1), replace, over(2) */"b%c",
  $Foo_content__template = "<!><!><!>";
export const $template = `<!>${$Foo_content__template}<!>`;
export const $walks = /* over(1), <Foo>, over(1) */`b/${$Foo_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $else_content__input_message = /* @__PURE__ */_._if_closure("#text/0", 1, $scope => _._text($scope["#text/0"], JSON.stringify($scope._.input_message)));
const $else_content__setup = $else_content__input_message;
const $if_content__input_bar = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => $Foo_content__tag_input_message($scope["#childScope/0"], $scope._.input_bar));
const $if_content__setup = $scope => {
  $Foo_content__tag_input_bar($scope["#childScope/0"]);
  $if_content__input_bar._($scope);
};
const $Foo_content__tag_input_message = /* @__PURE__ */_._const("input_message", $else_content__input_message);
const $Foo_content__if = /* @__PURE__ */_._if("#text/0", `<!>${$Foo_content__template}<!>`, /* over(1), <Foo>, over(1) */`b/${$Foo_content__walks}&b`, $if_content__setup, " ", /* get, over(1) */" b", $else_content__setup);
const $Foo_content__tag_input_bar = /* @__PURE__ */_._const("input_bar", $scope => {
  $Foo_content__if($scope, $scope.input_bar ? 0 : 1);
  $if_content__input_bar($scope);
});
const $Foo_content__$params = ($scope, $params2) => $Foo_content__input($scope, $params2[0]);
const $Foo_content__input = ($scope, input) => {
  $Foo_content__tag_input_bar($scope, input.bar);
  $Foo_content__tag_input_message($scope, input.message);
};
export function $setup($scope) {
  $Foo_content__tag_input_bar($scope["#childScope/0"], "hi");
  $Foo_content__tag_input_message($scope["#childScope/0"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);