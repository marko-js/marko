export const $template = "<button>Count: <!></button><!><div>Parent: <!></div>";
export const $walks = /* get, next(1), over(1), replace, out(1), dynamicTagWithVar, over(1), next(1), over(1), replace, out(1) */" Db%l1bDb%l";
import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", 0, () => $y, 1);
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/0"], "click", function () {
  $x($scope, x + 1), x;
}));
const $x = /* @__PURE__ */_$.state("x/5", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $dynamicTag($scope, tags[0], () => [x]);
  $x_effect($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
const $y = _$.registerBoundSignal("__tests__/template.marko_0_y/var", /* @__PURE__ */_$.value("y", ($scope, y) => _$.data($scope["#text/4"], y)));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);