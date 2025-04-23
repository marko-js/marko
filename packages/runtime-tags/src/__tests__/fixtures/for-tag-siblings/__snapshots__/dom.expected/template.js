export const $template = "<div></div><div><!><div></div></div>";
export const $walks = /* get, over(1), next(1), replace, out(1) */" bD%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $val$for$content2 = /* @__PURE__ */_$.value("val", ($scope, val) => _$.data($scope["#text/0"], val));
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $val$for$content2($scope, $params3[0]));
const $for_content2 = /* @__PURE__ */_$.createRenderer("<div> </div>", /* next(1), get */"D ", 0, $params3$for$content);
const $val$for$content = /* @__PURE__ */_$.value("val", ($scope, val) => _$.data($scope["#text/0"], val));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $val$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<div> </div>", /* next(1), get */"D ", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#div/0", $for_content);
const $for2 = /* @__PURE__ */_$.loopOf("#text/1", $for_content2);
const $arrA = /* @__PURE__ */_$.value("arrA", ($scope, arrA) => {
  $for($scope, [arrA]);
  $for2($scope, [arrA]);
});
export function $setup($scope) {
  $arrA($scope, [1, 2, 3]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);