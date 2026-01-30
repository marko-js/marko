export const $template = "<!><!><hr><!><hr><!><!>";
export const $walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
import Child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $setHtml3_getter = _._hoist_resume("__tests__/template.marko_0_setHtml3/hoist", "setHtml3", "BranchScopes:#ul/0", "BranchScopes:#text/2");
const $for_content4__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $for_content4__setHtml);
const $for_content4__setHtml = _._var_resume("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_._const("setHtml3", $scope => _._assert_hoist($scope.setHtml3)));
const $for_content4__setup = $scope => $for_content4__dynamicTag($scope, 1 && Child);
const $for_content3__for = /* @__PURE__ */_._for_to("#ul/0", "<!><!><!>", /* over(1), dynamicTagWithVar, over(2) */"b1c", $for_content4__setup);
const $for_content3__setup = $scope => $for_content3__for($scope, [3, 0, 1]);
const $setHtml2_getter = _._hoist("setHtml2", "BranchScopes:#text/1");
const $for_content2__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $for_content2__setHtml);
const $for_content2__setHtml = _._var_resume("__tests__/template.marko_2_setHtml2/var", /* @__PURE__ */_._const("setHtml2", $scope => _._assert_hoist($scope.setHtml2)));
const $for_content2__setup = $scope => $for_content2__dynamicTag($scope, 1 && Child);
const $setHtml_getter = _._hoist("setHtml", "BranchScopes:#text/0");
const $for_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $for_content__setHtml);
const $for_content__setHtml = _._var_resume("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_._const("setHtml", $scope => _._assert_hoist($scope.setHtml)));
const $for_content__setup = $scope => $for_content__dynamicTag($scope, 1 && Child);
const $for = /* @__PURE__ */_._for_to("#text/0", "<!><!><!>", /* over(1), dynamicTagWithVar, over(2) */"b1c", $for_content__setup);
const $for2 = /* @__PURE__ */_._for_to("#text/1", "<!><!><!>", /* over(1), dynamicTagWithVar, over(2) */"b1c", $for_content2__setup);
const $to = /* @__PURE__ */_._let("to/3", $scope => $for2($scope, [$scope.to, 0, 1]));
const $for3 = /* @__PURE__ */_._for_to("#text/2", "<ul></ul>", /* get, over(1) */" b", $for_content3__setup);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  $setHtml_getter($scope)()('First Only');
  $setHtml2_getter($scope)()('First Only');
  {
    let i = 0;
    for (const fn of $setHtml3_getter($scope)) {
      fn(`All (${i++})`);
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