export const $template = "<pre id=root></pre><pre id=outer></pre><pre id=inner></pre><!><!>";
export const $walks = /* get, over(1), get, over(1), get, over(1), replace, over(2) */" b b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input_value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $ref_getter = _._hoist_resume("__tests__/template.marko_0_ref/hoist", "ref", "BranchScopes:#text/0", "BranchScopes:#text/3");
const $for_content__ref_getter = _._hoist_resume("__tests__/template.marko_1_ref/hoist", "ref", "BranchScopes:#text/0");
const $for_content2__ref_getter = _._hoist_resume("__tests__/template.marko_2_ref/hoist", "ref");
const $for_content2__setup__script = _._script("__tests__/template.marko_2", $scope => (_._el_read($scope._._["#pre/2"]).innerHTML += `${[...$for_content2__ref_getter($scope)].length}; ${$for_content2__ref_getter($scope)()}\n\t`));
const $for_content2__setup = $scope => {
  _._var($scope, "#childScope/0", $for_content2__ref);
  _child($scope["#childScope/0"]);
  _child_input_value($scope["#childScope/0"], `${$scope._["#LoopKey"]},${$scope["#LoopKey"]}`);
  $for_content2__setup__script($scope);
};
const $for_content2__ref = _._var_resume("__tests__/template.marko_2_ref/var", /* @__PURE__ */_._const("ref", $scope => _._assert_hoist($scope.ref)));
const $for_content__for = /* @__PURE__ */_._for_to("#text/0", _child_template, /* <child/var> */`0${_child_walks}&`, $for_content2__setup);
const $for_content__setup__script = _._script("__tests__/template.marko_1", $scope => (_._el_read($scope._["#pre/1"]).innerHTML += `${[...$for_content__ref_getter($scope)].length}; ${$for_content__ref_getter($scope)()}\n\t`));
const $for_content__setup = $scope => {
  $for_content__for($scope, [2, 0, 1]);
  $for_content__setup__script($scope);
};
const $for = /* @__PURE__ */_._for_to("#text/3", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $for_content__setup);
const $setup__script = _._script("__tests__/template.marko_0", $scope => (_._el_read($scope["#pre/0"]).innerHTML += `${[...$ref_getter($scope)].length}; ${$ref_getter($scope)()}\n\t`));
export function $setup($scope) {
  $for($scope, [2, 0, 1]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);