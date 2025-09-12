export const $template = "<button>Count: <!></button><!><!><!><!><!>";
export const $walks = /* get, next(1), over(1), replace, out(1), replace, over(1), replace, over(1), replace, over(1), replace, over(2) */" Db%l%b%b%b%c";
import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2", 0, 0, 1);
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/0"], "click", function () {
  $x($scope, ++x);
}));
const $x = /* @__PURE__ */_._let("x/6", ($scope, x) => {
  _._text($scope["#text/1"], x);
  $dynamicTag($scope, tags[0], () => [x, 'foo']);
  $x__script($scope);
});
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/3", 0, 0, 1);
const $dynamicTag3 = /* @__PURE__ */_._dynamic_tag("#text/4", 0, 0, 1);
const $dynamicTag4 = /* @__PURE__ */_._dynamic_tag("#text/5", 0, 0, 1);
export function $setup($scope) {
  $x($scope, 1);
  $dynamicTag2($scope, tags[0], () => [false]);
  $dynamicTag3($scope, tags[0], () => [true]);
  $dynamicTag4($scope, tags[0], () => [...["spread1", "spread2"]]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);