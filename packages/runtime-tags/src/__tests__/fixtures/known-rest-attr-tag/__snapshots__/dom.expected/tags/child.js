export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $if_content__button = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => $if_content__dynamicTag($scope, $scope._.button));
const $if_content__setup = $if_content__button;
const $for_content__if = /* @__PURE__ */_._if("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $for_content__button = /* @__PURE__ */_._const("button", $scope => {
  $for_content__if($scope, $scope.button ? 0 : 1);
  $if_content__button($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__button($scope, $params2[0]);
const $htmlInput__script = _._script("__tests__/tags/child.marko_0_htmlInput", $scope => _._attrs_script($scope, "#div/0"));
export const $htmlInput = /* @__PURE__ */_._const("htmlInput", $scope => {
  _._attrs($scope, "#div/0", $scope.htmlInput);
  $htmlInput__script($scope);
});
const $for = /* @__PURE__ */_._for_of("#div/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", 0, $for_content__$params);
export const $buttons = ($scope, buttons) => $for($scope, [buttons]);
export const $input = ($scope, input) => {
  (({
    button,
    ...htmlInput
  }) => $htmlInput($scope, htmlInput))(input);
  $buttons($scope, input.button);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);