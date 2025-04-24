export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $num$for$content_effect = _$.effect("__tests__/template.marko_1_num", ($scope, {
  _: {
    num
  }
}) => _$.on($scope["#button/0"], "click", function () {
  $num($scope._, num + 1), num;
}));
const $num$for$content = /* @__PURE__ */_$.loopClosure("num", "#text/0", $num$for$content_effect);
const $i$for$content = /* @__PURE__ */_$.value("i", ($scope, i) => _$.data($scope["#text/1"], i));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $i$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", 0, $params2$for$content, $num$for$content);
const $for = /* @__PURE__ */_$.loopTo("#text/0", $for_content);
const $num = /* @__PURE__ */_$.state("num/1", ($scope, num) => {
  $for($scope, [num, 0, 1]);
  $num$for$content($scope);
});
export function $setup($scope) {
  $num($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);