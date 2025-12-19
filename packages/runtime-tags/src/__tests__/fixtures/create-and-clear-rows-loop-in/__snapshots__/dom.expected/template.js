export const $template = "<div><!><!></div>";
export const $walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content2__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content__text = /* @__PURE__ */_._const("text", $scope => _._text($scope["#text/1"], $scope.text));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__text($scope, $scope.$params2[1]));
const $for = /* @__PURE__ */_._for_in("#text/0", "<p><!>: <!></p>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", $for_content__setup, $for_content__$params);
const $for2 = /* @__PURE__ */_._for_in("#text/1", "<p> </p>", /* next(1), get, out(1) */"D l", $for_content2__setup);
export const $input_children = /* @__PURE__ */_._const("input_children", $scope => {
  $for($scope, [$scope.input_children]);
  $for2($scope, [$scope.input_children]);
});
export const $input = /* @__PURE__ */_._const("input", $scope => $input_children($scope, $scope.input.children));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);