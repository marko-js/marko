export const $template = "<!><!><button> </button>";
export const $walks = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x$define$content = /* @__PURE__ */_$.dynamicClosureRead("x", ($scope, x) => _$.data($scope["#text/0"], x));
const $setup$define$content = $x$define$content;
const $define_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<div> </div>", /* next(1), get */"D ", $setup$define$content);
const $x_closure = /* @__PURE__ */_$.dynamicClosure($x$define$content);
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/1"], "click", function () {
  $x($scope, ++x)
}));
const $x = /* @__PURE__ */_$.state("x/3", ($scope, x) => {
  _$.data($scope["#text/2"], x);
  $x_closure($scope);
  $x_effect($scope);
});
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const $MyTag = /* @__PURE__ */_$.value("MyTag", $dynamicTag);
export function $setup($scope) {
  $x($scope, 1);
  $MyTag($scope, {
    content: $define_content($scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);