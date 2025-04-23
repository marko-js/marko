export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_a_b$if$content = /* @__PURE__ */_$.intersection(1, $scope => {
  const {
    _: {
      a,
      b
    }
  } = $scope;
  _$.data($scope["#text/0"], a + b);
});
const $a$if$content = /* @__PURE__ */_$.conditionalClosure("a", "#text/0", 0, $expr_a_b$if$content);
const $b$if$content = /* @__PURE__ */_$.conditionalClosure("b", "#text/0", 0, $expr_a_b$if$content);
const $if_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, 0, $scope => {
  $a$if$content._($scope);
  $b$if$content._($scope);
});
const $a = /* @__PURE__ */_$.state("a/1", $a$if$content);
const $b = /* @__PURE__ */_$.state("b/2", $b$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
  $if($scope, true ? 0 : 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);