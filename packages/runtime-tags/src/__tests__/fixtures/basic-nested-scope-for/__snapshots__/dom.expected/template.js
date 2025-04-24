export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_selected_num$for$content = /* @__PURE__ */_$.intersection(4, $scope => {
  const {
    _: {
      selected
    },
    num
  } = $scope;
  _$.attr($scope["#button/0"], "data-selected", selected === num);
  _$.attr($scope["#button/0"], "data-multiple", num % selected === 0);
});
const $num$for$content_effect = _$.effect("__tests__/template.marko_1_num", ($scope, {
  num
}) => _$.on($scope["#button/0"], "click", function () {
  $selected($scope._, num);
}));
const $num$for$content = /* @__PURE__ */_$.value("num", ($scope, num) => {
  _$.data($scope["#text/1"], num);
  $expr_selected_num$for$content($scope);
  $num$for$content_effect($scope);
});
const $selected$for$content = /* @__PURE__ */_$.loopClosure("selected", "#text/0", $expr_selected_num$for$content);
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $num$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", 0, $params2$for$content, $selected$for$content);
const $selected = /* @__PURE__ */_$.state("selected/1", $selected$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
export function $setup($scope) {
  $selected($scope, 0);
  $for($scope, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);