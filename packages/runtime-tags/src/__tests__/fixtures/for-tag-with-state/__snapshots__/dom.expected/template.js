export const $template = "<!><!><!><!>";
export const $walks = /* replace, over(1), replace, over(1) */"D%b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $i$for$content2 = /* @__PURE__ */_$.value("i", ($scope, i) => _$.data($scope["#text/0"], i));
const $val$for$content2 = /* @__PURE__ */_$.value("val", ($scope, val) => _$.data($scope["#text/1"], val));
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => {
  $val$for$content2($scope, $params3[0]);
  $i$for$content2($scope, $params3[1]);
});
const $for_content2 = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", 0, $params3$for$content);
const $i$for$content = /* @__PURE__ */_$.value("i", ($scope, i) => _$.data($scope["#text/0"], i));
const $val$for$content = /* @__PURE__ */_$.value("val", ($scope, val) => _$.data($scope["#text/1"], val));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => {
  $val$for$content($scope, $params2[0]);
  $i$for$content($scope, $params2[1]);
});
const $for_content = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
const $arrA = /* @__PURE__ */_$.value("arrA", ($scope, arrA) => $for($scope, [arrA]));
const $for2 = /* @__PURE__ */_$.loopOf("#text/1", $for_content2);
const $arrB = /* @__PURE__ */_$.state("arrB/3", ($scope, arrB) => $for2($scope, [arrB]));
export function $setup($scope) {
  $arrA($scope, [1, 2, 3]);
  $arrB($scope, [1, 2, 3]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);