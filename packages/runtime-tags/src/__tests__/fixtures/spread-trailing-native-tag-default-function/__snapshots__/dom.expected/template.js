export const $template = "<button></button>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _2 from "@marko/runtime-tags/debug/dom";
const $rest__script = _2._script("__tests__/template.marko_0_rest", $scope => _2._attrs_script($scope, "#button/0"));
export const $rest = /* @__PURE__ */_2._const("rest", $scope => {
  _2._attrs_content($scope, "#button/0", {
    onClick: $onClick,
    ...$scope.rest
  });
  $rest__script($scope);
});
export const $input = ($scope, input) => (({
  onClick,
  ...rest
}) => $rest($scope, rest))(input);
function $onClick(_, el) {
  el.textContent = "clicked";
}
_2._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_2._template("__tests__/template.marko", $template, $walks, $setup, $input);