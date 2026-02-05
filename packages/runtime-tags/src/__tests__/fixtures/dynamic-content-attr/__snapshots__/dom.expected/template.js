export const $template = "<button></button>";
export const $walks = /* get, over(1) */" b";
let sideEffect = 3;
import * as _ from "@marko/runtime-tags/debug/dom";
const $MyThing_content__count = /* @__PURE__ */_._closure_get("count", $scope => _._text($scope["#text/0"], $scope._.count));
const $MyThing_content__setup = $scope => {
  $MyThing_content__count($scope);
  _._text($scope["#text/1"], sideEffect++);
};
const $MyThing_content = _._content_resume("__tests__/template.marko_1_content", "<!> <!>", /* replace, over(2), replace, over(1) */"%c%b", $MyThing_content__setup);
const $count__OR__MyThing = /* @__PURE__ */_._or(3, $scope => _._attr_content($scope, "#button/0", ($scope.count, $scope.MyThing)));
const $count__closure = /* @__PURE__ */_._closure($MyThing_content__count);
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/1", $scope => {
  $count__OR__MyThing($scope);
  $count__closure($scope);
  $count__script($scope);
});
const $MyThing = /* @__PURE__ */_._const("MyThing", $count__OR__MyThing);
export function $setup($scope) {
  $count($scope, 0);
  $MyThing($scope, {
    content: $MyThing_content($scope)
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);