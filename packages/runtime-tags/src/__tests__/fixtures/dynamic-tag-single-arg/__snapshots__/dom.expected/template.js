export const $template = "<button>Count: <!></button><!><!>";
export const $walks = /* get, next(1), over(1), replace, out(1), replace, over(2) */" Db%l%c";
import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2", 0, 0, 1);
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/0"], "click", function () {
  $x($scope, ++x);
}));
const $x = /* @__PURE__ */_._let("x/3", ($scope, x) => {
  _._text($scope["#text/1"], x);
  $dynamicTag($scope, tags[0], () => [x]);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);