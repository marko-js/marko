export const $template = "<button></button>";
export const $walks = /* get, over(1) */" b";
let sideEffect = 3;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$define$content = $scope => {
  debugger;
  _$.data($scope["#text/1"], sideEffect++);
  $count$define$content($scope);
};
const $count$define$content = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => _$.data($scope["#text/0"], count));
const $define_content = _$.registerContent("__tests__/template.marko_1_renderer", "<!> <!>", /* replace, over(2), replace, over(1) */"%c%b", $setup$define$content);
const $expr_count_MyThing = /* @__PURE__ */_$.intersection(3, $scope => {
  const {
    count,
    MyThing
  } = $scope;
  _$.insertContent($scope, "#button/0", (count, MyThing));
});
const $count_closure = /* @__PURE__ */_$.dynamicClosure($count$define$content);
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, ++count)
}));
const $count = /* @__PURE__ */_$.state("count/1", $scope => {
  $expr_count_MyThing($scope);
  $count_closure($scope);
  $count_effect($scope);
});
const $MyThing = /* @__PURE__ */_$.value("MyThing", $expr_count_MyThing);
export function $setup($scope) {
  $count($scope, 0);
  $MyThing($scope, {
    content: $define_content($scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);