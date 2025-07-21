export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $y$define$content_effect = _$.effect("__tests__/template.marko_1_y", ($scope, {
  y
}) => _$.on($scope["#button/2"], "click", function () {
  $y$define$content($scope, ++y)
}));
const $y$define$content = /* @__PURE__ */_$.state("y/7", ($scope, y) => {
  _$.data($scope["#text/1"], y);
  _$.data($scope["#text/3"], y);
  $y$define$content_effect($scope);
});
const $setup$define$content = $scope => {
  $y$define$content($scope, 1);
};
const $name$define$content = /* @__PURE__ */_$.value("name", ($scope, name) => _$.data($scope["#text/0"], name));
const $params2$define$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $temp$define$content($scope, $params2?.[0]));
const $temp$define$content = /* @__PURE__ */_$.value("$temp", ($scope, $temp) => $name$define$content($scope, $temp.name));
const $define_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<div>Hello <!> <!></div><button> </button>", /* next(1), over(1), replace, over(2), replace, out(1), get, next(1), get */"Db%c%l D ", $setup$define$content, $params2$define$content);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const $MyTag = /* @__PURE__ */_$.value("MyTag", ($scope, MyTag) => $dynamicTag($scope, MyTag, () => ({
  name: "Ryan"
})));
export function $setup($scope) {
  $MyTag($scope, {
    content: $define_content($scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);