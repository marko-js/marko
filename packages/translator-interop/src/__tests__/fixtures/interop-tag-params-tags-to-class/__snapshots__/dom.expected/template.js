import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
_$.register("__tests__/components/class-layout.marko", _classLayout);
const $message$classlayout$content = /* @__PURE__ */_$.value("message", ($scope, message) => _$.data($scope["#text/0"], message));
const $expr_multiplier_baseCount$classlayout$content = /* @__PURE__ */_$.intersection(7, $scope => {
  const {
    _: {
      multiplier
    },
    baseCount
  } = $scope;
  _$.data($scope["#text/4"], multiplier * baseCount);
});
const $multiplier$classlayout$content_effect = _$.effect("__tests__/template.marko_1_multiplier", ($scope, {
  _: {
    multiplier
  }
}) => _$.on($scope["#button/1"], "click", function () {
  $multiplier($scope._, multiplier + 1), multiplier;
}));
const $multiplier$classlayout$content = /* @__PURE__ */_$.dynamicClosureRead("multiplier", ($scope, multiplier) => {
  _$.data($scope["#text/2"], multiplier);
  $expr_multiplier_baseCount$classlayout$content($scope);
  $multiplier$classlayout$content_effect($scope);
});
const $baseCount$classlayout$content = /* @__PURE__ */_$.value("baseCount", ($scope, baseCount) => {
  _$.data($scope["#text/3"], baseCount);
  $expr_multiplier_baseCount$classlayout$content($scope);
});
const $setup$classlayout$content = $multiplier$classlayout$content;
const $params2$classlayout$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => {
  $baseCount$classlayout$content($scope, $params2[0]);
  $message$classlayout$content($scope, $params2[1]);
});
const $classlayout_content = _$.registerContent("__tests__/template.marko_1_renderer", "<h1> </h1><button id=tags><!> * <!> = <!></button>", /* next(1), get, out(1), get, next(1), replace, over(2), replace, over(2), replace */"D l D%c%c%", $setup$classlayout$content, $params2$classlayout$content);
const $multiplier_closure = /* @__PURE__ */_$.dynamicClosure($multiplier$classlayout$content);
const $multiplier = /* @__PURE__ */_$.state("multiplier/1", $multiplier_closure);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $classlayout_content);
export function $setup($scope) {
  $multiplier($scope, 1);
  $dynamicTag($scope, _classLayout);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);