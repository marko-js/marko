const $Child_content__walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l",
  $Child_content__template = "<div> </div><div> </div>";
export const $template = `<!>${$Child_content__template}<!>`;
export const $walks = /* over(1), <Child>, over(1) */`b/${$Child_content__walks}&b`;
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $Child_content__a__script = _._script("__tests__/template.marko_1_a", $scope => {
  if ($scope.input_a !== "a") throw new Error("did not serialize a");
});
const $Child_content__a = $scope => {
  _._text($scope["#text/0"], $scope.input_a);
  $Child_content__a__script($scope);
};
const $Child_content__b = ($scope, b) => _._text($scope["#text/1"], b);
const $Child_content__input_a__script = _._script("__tests__/template.marko_1_input_a", $scope => {
  if ($scope.input_a !== "a") throw new Error("did not serialize input.a");
});
const $Child_content__input_a = /* @__PURE__ */_._const("input_a", $scope => {
  $Child_content__a($scope, $scope.input_a);
  $Child_content__input_a__script($scope);
});
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
  $Child_content__input_a($scope, input.a);
  $Child_content__b($scope, input.b);
};
export const $input_a = ($scope, input_a) => $Child_content__input_a($scope["#childScope/0"], input_a);
export const $input_b = ($scope, input_b) => $Child_content__b($scope["#childScope/0"], input_b);
export const $input = ($scope, input) => {
  $input_a($scope, input.a);
  $input_b($scope, input.b);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);