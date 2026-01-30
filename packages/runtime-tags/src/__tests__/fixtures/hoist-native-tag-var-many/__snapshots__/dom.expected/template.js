export const $template = "<!><!><hr><!><hr><!><!>";
export const $walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $el3_getter = _._hoist_resume("__tests__/template.marko_0_#li/hoist", "#li/0", "BranchScopes:#ul/0", "BranchScopes:#text/2");
const $for_content4__setup = $scope => _._attr($scope["#li/0"], "data-index", $scope._["#LoopKey"] * 4 + $scope["#LoopKey"]);
const $for_content3__for = /* @__PURE__ */_._for_to("#ul/0", "<li></li>", /* get, over(1) */" b", $for_content4__setup);
const $for_content3__setup = $scope => $for_content3__for($scope, [3, 0, 1]);
const $el2_getter = _._hoist("#div/0", "BranchScopes:#text/1");
const $el_getter = _._hoist("#div/0", "BranchScopes:#text/0");
const $for = /* @__PURE__ */_._for_to("#text/0", "<div></div>", /* get, over(1) */" b");
const $for2 = /* @__PURE__ */_._for_to("#text/1", "<div></div>", /* get, over(1) */" b");
const $to = /* @__PURE__ */_._let("to/3", $scope => $for2($scope, [$scope.to, 0, 1]));
const $for3 = /* @__PURE__ */_._for_to("#text/2", "<ul></ul>", /* get, over(1) */" b", $for_content3__setup);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  {
    const el = $el_getter($scope)();
    if (el) {
      el.innerHTML = 'First Only';
    }
  }
  {
    const el = $el2_getter($scope)();
    if (el) {
      el.innerHTML = 'First Only';
    }
  }
  {
    let i = 0;
    for (const el of $el3_getter($scope)) {
      el.innerHTML = `All (${i++})`;
    }
  }
});
export function $setup($scope) {
  $for($scope, [5, 0, 1]);
  $to($scope, 3);
  $for3($scope, [3, 0, 1]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);