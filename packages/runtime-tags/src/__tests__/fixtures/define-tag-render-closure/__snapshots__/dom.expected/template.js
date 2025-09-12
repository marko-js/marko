export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__x = /* @__PURE__ */_._closure_get("x", ($scope, x) => _._text($scope["#text/0"], x));
const $define_content__setup = $define_content__x;
const $define_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<div> </div>", /* next(1), get, out(1) */"D l", $define_content__setup);
const $x__closure = /* @__PURE__ */_._closure($define_content__x);
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, ++x);
}));
const $x = /* @__PURE__ */_._let("x/3", ($scope, x) => {
  _._text($scope["#text/2"], x);
  $x__closure($scope);
  $x__script($scope);
});
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $MyTag = /* @__PURE__ */_._const("MyTag", $dynamicTag);
export function $setup($scope) {
  $x($scope, 1);
  $MyTag($scope, {
    content: $define_content($scope)
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);