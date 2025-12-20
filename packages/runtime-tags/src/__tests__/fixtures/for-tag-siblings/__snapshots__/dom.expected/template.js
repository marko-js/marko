export const $template = "<div></div><div><!><div></div></div>";
export const $walks = /* get, over(1), next(1), replace, out(1) */" bD%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content2__val = ($scope, val) => _._text($scope["#text/0"], val);
const $for_content2__$params = ($scope, $params3) => $for_content2__val($scope, $params3[0]);
const $for_content__val = ($scope, val) => _._text($scope["#text/0"], val);
const $for_content__$params = ($scope, $params2) => $for_content__val($scope, $params2[0]);
const $for = /* @__PURE__ */_._for_of("#div/0", "<div> </div>", /* next(1), get, out(1) */"D l", 0, $for_content__$params);
const $for2 = /* @__PURE__ */_._for_of("#text/1", "<div> </div>", /* next(1), get, out(1) */"D l", 0, $for_content2__$params);
const $arrA = ($scope, arrA) => {
  $for($scope, [arrA]);
  $for2($scope, [arrA]);
};
export function $setup($scope) {
  $arrA($scope, [1, 2, 3]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);