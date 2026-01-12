const $Child_content__walks = /* get, over(1) */" b",
  $Child_content__template = "<select></select>",
  $Wrap_content__walks = /* over(1), <Child>, over(1) */`b/${$Child_content__walks}&b`,
  $Wrap_content__template = `<!>${$Child_content__template}<!>`;
export const $template = `<!>${$Wrap_content__template}<!>`;
export const $walks = /* over(1), <Wrap>, over(1) */`b/${$Wrap_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $option_content3 = _._content_resume("__tests__/template.marko_6_content", "Three", /* over(1) */"b");
const $option_content2 = _._content_resume("__tests__/template.marko_5_content", "Two", /* over(1) */"b");
const $option_content = _._content_resume("__tests__/template.marko_4_content", "One", /* over(1) */"b");
const $for_content__option__script = _._script("__tests__/template.marko_3_option", $scope => _._attrs_script($scope, "#option/0"));
const $for_content__option = /* @__PURE__ */_._const("option", $scope => {
  _._attrs_content($scope, "#option/0", $scope.option);
  $for_content__option__script($scope);
});
const $for_content__$params = ($scope, $params3) => $for_content__option($scope, $params3[0]);
const $Wrap_content___class = ($scope, _class) => $Child_content__input_class($scope["#childScope/0"], _class);
const $Wrap_content__rest_option = ($scope, rest_option) => $Child_content__input_option($scope["#childScope/0"], rest_option);
const $Wrap_content__$params = ($scope, $params4) => $Wrap_content__$temp($scope, $params4?.[0]);
const $Wrap_content__$temp = ($scope, $temp) => {
  (({
    class: $class,
    ...rest
  }) => $Wrap_content__rest($scope, rest))($temp);
  $Wrap_content___class($scope, $temp.class);
};
const $Wrap_content__rest = ($scope, rest) => $Wrap_content__rest_option($scope, rest.option);
const $Child_content__input_class = ($scope, input_class) => _._attr_class($scope["#select/0"], input_class);
const $Child_content__for = /* @__PURE__ */_._for_of("#select/0", "<option></option>", /* get, over(1) */" b", 0, $for_content__$params);
const $Child_content__input_option = ($scope, input_option) => $Child_content__for($scope, [input_option]);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
  $Child_content__input_class($scope, input?.class);
  $Child_content__input_option($scope, input?.option);
};
export function $setup($scope) {
  $Wrap_content__rest_option($scope["#childScope/0"], (_.attrTags(_.attrTags(_.attrTag({
    value: 1,
    content: $option_content($scope)
  }), {
    value: 2,
    content: $option_content2($scope)
  }), {
    value: 3,
    content: $option_content3($scope)
  })));
  $Wrap_content___class($scope["#childScope/0"], "foo");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);