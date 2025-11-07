export const $template = "<!><!><hr><!><hr><!><!>";
export const $walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_el = _._resume("__tests__/template.marko_0_$hoisted_el3/hoist", _._hoist("Getter:#li/0", "BranchScopes:#ul/0", "BranchScopes:#text/2"));
const $for_content4__i__OR__j = /* @__PURE__ */_._or(3, $scope => _._attr($scope["#li/0"], "data-index", $scope._.i * 4 + $scope.j));
const $for_content4__i = /* @__PURE__ */_._for_closure("#ul/0", $for_content4__i__OR__j);
const $for_content4__j = /* @__PURE__ */_._const("j", $for_content4__i__OR__j);
const $for_content4__setup = $for_content4__i;
const $for_content4__$params = /* @__PURE__ */_._const("$params3", $scope => $for_content4__j($scope, $scope.$params3[0]));
const $for_content4 = /* @__PURE__ */_._content_branch("<li></li>", /* get, over(1) */" b", $for_content4__setup, $for_content4__$params);
const $for_content3__for = /* @__PURE__ */_._for_to("#ul/0", $for_content4);
const $for_content3__setup = $scope => {
  $for_content3__for($scope, [3, 0, 1]);
};
const $for_content3__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content3__i($scope, $scope.$params2[0]));
const $for_content3__i = /* @__PURE__ */_._const("i");
const $for_content3 = /* @__PURE__ */_._content_branch("<ul></ul>", /* get, over(1) */" b", $for_content3__setup, $for_content3__$params);
const $get$hoisted_el2 = _._hoist("Getter:#div/0", "BranchScopes:#text/1");
const $for_content2 = /* @__PURE__ */_._content_branch("<div></div>", /* get, over(1) */" b");
const $get$hoisted_el3 = _._hoist("Getter:#div/0", "BranchScopes:#text/0");
const $for_content = /* @__PURE__ */_._content_branch("<div></div>", /* get, over(1) */" b");
const $for = /* @__PURE__ */_._for_to("#text/0", $for_content);
const $for2 = /* @__PURE__ */_._for_to("#text/1", $for_content2);
const $to = /* @__PURE__ */_._let("to/3", $scope => $for2($scope, [$scope.to, 0, 1]));
const $for3 = /* @__PURE__ */_._for_to("#text/2", $for_content3);
const $hoisted_el4__script = _._script("__tests__/template.marko_0_$hoisted_el3", $scope => {
  {
    let i = 0;
    for (const el of $scope.$hoisted_el3) {
      el().innerHTML = `All (${i++})`;
    }
  }
});
const $hoisted_el4 = /* @__PURE__ */_._const("$hoisted_el3", $hoisted_el4__script);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  {
    const first = $get$hoisted_el3($scope)();
    if (first) {
      first.innerHTML = 'First Only';
    }
  }
  {
    const first = $get$hoisted_el2($scope)();
    if (first) {
      first.innerHTML = 'First Only';
    }
  }
});
export function $setup($scope) {
  $for($scope, [5, 0, 1]);
  $to($scope, 3);
  $for3($scope, [3, 0, 1]);
  $hoisted_el4($scope, $get$hoisted_el($scope));
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);