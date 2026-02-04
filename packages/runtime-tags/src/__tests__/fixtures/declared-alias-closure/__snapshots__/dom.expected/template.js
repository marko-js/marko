const $Child_content2__walks = /* get, over(1) */" b",
  $Child_content2__template = "<div></div>";
export const $template = `<!>${$Child_content2__template}<!>`;
export const $walks = /* over(1), <Child>, over(1) */`b/${$Child_content2__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $Child_content2__input__script = _._script("__tests__/template.marko_3_input", $scope => _._attrs_script($scope, "#div/0"));
const $Child_content2__input = /* @__PURE__ */_._const("input", $scope => {
  _._attrs_content($scope, "#div/0", $scope.input);
  $Child_content2__input__script($scope);
});
const $Child_content2__$params = ($scope, $params2) => $Child_content2__input($scope, $params2[0]);
const $if_content__value_class = /* @__PURE__ */_._closure_get("value_class", $scope => _._attr_class($scope["#span/0"], $scope._._.value_class), $scope => $scope._._);
const $if_content__setup = $scope => {
  $if_content__value_class($scope);
  $if_content__text($scope);
};
const $if_content__text = /* @__PURE__ */_._closure_get("text", $scope => _._text($scope["#text/1"], $scope._._.text), $scope => $scope._._);
const $Child_content__if = /* @__PURE__ */_._if("#text/0", "<span> </span>", /* get, next(1), get, out(1) */" D l", $if_content__setup);
const $Child_content__value = /* @__PURE__ */_._closure_get("value", $scope => $Child_content__if($scope, $scope._.value ? 0 : 1));
const $Child_content__setup = $Child_content__value;
const $Child_content = _._content_resume("__tests__/template.marko_1_content", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $Child_content__setup);
const $value = /* @__PURE__ */_._const("value", $scope => {
  $value_class($scope, $scope.value?.class);
  $text($scope, $scope.value?.text);
});
const $value_class = /* @__PURE__ */_._const("value_class");
const $text = /* @__PURE__ */_._const("text");
export function $setup($scope) {
  $Child_content2__input($scope["#childScope/0"], {
    content: $Child_content($scope)
  });
  $value($scope, undefined);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);