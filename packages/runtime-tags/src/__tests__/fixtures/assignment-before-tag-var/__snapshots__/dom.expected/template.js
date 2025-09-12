export const $template = "<button>+</button><span><!> was <!></span>";
export const $walks = /* get, over(1), next(1), replace, over(2), replace, out(1) */" bD%c%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $clickCount__script = _._script("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _._on($scope["#button/0"], "click", function () {
  $lastClickCount($scope, clickCount);
  $clickCount($scope, ++clickCount);
}));
const $clickCount = /* @__PURE__ */_._let("clickCount/3", ($scope, clickCount) => {
  _._text($scope["#text/1"], clickCount);
  $clickCount__script($scope);
});
const $lastClickCount = /* @__PURE__ */_._let("lastClickCount/4", ($scope, lastClickCount) => _._text($scope["#text/2"], lastClickCount));
export function $setup($scope) {
  $clickCount($scope, 0);
  $lastClickCount($scope, undefined);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);