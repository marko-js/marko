export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $index$for$content = /* @__PURE__ */_$.value("index", ($scope, index) => _$.data($scope["#text/0"], index));
const $count$for$content = /* @__PURE__ */_$.loopClosure("count", "#text/0", ($scope, count) => _$.data($scope["#text/1"], count));
const $setup$for$content = $count$for$content;
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $index$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<!>-<!>", /* replace, over(2), replace, over(1) */"%c%b", $setup$for$content, $params2$for$content);
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/1"], "click", function () {
  $count($scope, ++count)
}));
const $count = /* @__PURE__ */_$.state("count/3", ($scope, count) => {
  _$.data($scope["#text/2"], count);
  $count$for$content($scope);
  $count_effect($scope);
});
const $for = /* @__PURE__ */_$.loopTo("#text/0", $for_content);
export function $setup($scope) {
  $count($scope, 0);
  $for($scope, [3, 0, 1]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);