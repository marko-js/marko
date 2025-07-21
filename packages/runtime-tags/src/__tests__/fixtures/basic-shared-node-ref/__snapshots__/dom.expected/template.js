export const $template = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
export const $walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x$for$content = /* @__PURE__ */_$.value("x", ($scope, x) => _$.data($scope["#text/0"], x));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $x$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<li> </li>", /* next(1), get */"D ", 0, $params2$for$content);
const $open_effect = _$.effect("__tests__/template.marko_0_open", ($scope, {
  open
}) => _$.on($scope["#button/1"], "click", function () {
  $open($scope, open = !open);
}));
const $open = /* @__PURE__ */_$.state("open/3", ($scope, open) => {
  _$.attr($scope["#ul/0"], "hidden", !open);
  $open_effect($scope);
});
const $for = /* @__PURE__ */_$.loopOf("#ul/0", $for_content);
const $list_effect = _$.effect("__tests__/template.marko_0_list", ($scope, {
  list
}) => _$.on($scope["#button/2"], "click", function () {
  $list($scope, list = [].concat(list).reverse());
}));
const $list = /* @__PURE__ */_$.state("list/4", ($scope, list) => {
  $for($scope, [list, function (x) {
    return x;
  }]);
  $list_effect($scope);
});
export function $setup($scope) {
  $open($scope, true);
  $list($scope, [1, 2, 3]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);