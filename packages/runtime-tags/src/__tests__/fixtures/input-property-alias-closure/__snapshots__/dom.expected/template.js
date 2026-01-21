const $Child_content__walks = /* replace, over(2), replace, over(2) */"%c%c",
  $Child_content__template = "<!> and <!><!>";
export const $template = `<!>${$Child_content__template}<!>`;
export const $walks = /* over(1), <Child>, over(1) */`b/${$Child_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $Child_content2__input_text = /* @__PURE__ */_._closure_get("input_text", $scope => _._text($scope["#text/0"], $scope._.input_text));
const $Child_content2__setup = $Child_content2__input_text;
const $Child_content2 = /* @__PURE__ */_._content("__tests__/template.marko_2_content", " ", /* get, over(1) */" b", $Child_content2__setup);
const $Child_content__input_text = ($scope, input_text) => _._text($scope["#text/0"], input_text);
const $Child_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $Child_content__input_content = ($scope, input_content) => $Child_content__dynamicTag($scope, input_content);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
  $Child_content__input_text($scope, input.text);
  $Child_content__input_content($scope, input.content);
};
export function $setup($scope) {
  $Child_content__input_content($scope["#childScope/0"], $Child_content2($scope));
}
const $input_text__closure = /* @__PURE__ */_._closure($Child_content2__input_text);
export const $input_text = /* @__PURE__ */_._const("input_text", $scope => {
  $Child_content__input_text($scope["#childScope/0"], $scope.input_text);
  $input_text__closure($scope);
});
export const $input = ($scope, input) => $input_text($scope, input.text);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);