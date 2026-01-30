export const $template = "<pre id=root></pre><pre id=outer></pre><pre id=inner></pre><!><!>";
export const $walks = /* get, over(1), get, over(1), get, over(1), replace, over(2) */" b b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $el_getter = _._hoist_resume("__tests__/template.marko_0_#div/hoist", "#div/0", "BranchScopes:#text/0", "BranchScopes:#text/3");
const $for_content__$el_getter = _._hoist_resume("__tests__/template.marko_1_#div/hoist", "#div/0", "BranchScopes:#text/0");
const $for_content2__$el_getter = _._hoist_resume("__tests__/template.marko_2_#div/hoist", "#div/0");
const $for_content2__setup__script = _._script("__tests__/template.marko_2", $scope => (_._el_read($scope._._["#pre/2"]).innerHTML += `${[...$for_content2__$el_getter($scope)].length}; ${_._el_read($scope["#div/0"]).className}\n\t`));
const $for_content2__setup = $scope => {
  _._attr_class($scope["#div/0"], `${$scope._["#LoopKey"]}, ${$scope["#LoopKey"]}`);
  $for_content2__setup__script($scope);
};
const $for_content__for = /* @__PURE__ */_._for_to("#text/0", "<div></div>", /* get, over(1) */" b", $for_content2__setup);
const $for_content__setup__script = _._script("__tests__/template.marko_1", $scope => (_._el_read($scope._["#pre/1"]).innerHTML += `${[...$for_content__$el_getter($scope)].length}; ${$for_content__$el_getter($scope)().className}\n\t`));
const $for_content__setup = $scope => {
  $for_content__for($scope, [2, 0, 1]);
  $for_content__setup__script($scope);
};
const $for = /* @__PURE__ */_._for_to("#text/3", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $for_content__setup);
const $setup__script = _._script("__tests__/template.marko_0", $scope => (_._el_read($scope["#pre/0"]).innerHTML += `${[...$el_getter($scope)].length}; ${$el_getter($scope)().className}\n\t`));
export function $setup($scope) {
  $for($scope, [2, 0, 1]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);