const $for_content__walks = /* get, next(1), get, over(1), get, next(1), over(1), replace, out(2) */" D b Db%m",
  $for_content__template = "<li> <button class=tap>tap <!></button></li>";
export const $template = "<button class=count>clicked <!></button><ul></ul>";
export const $walks = /* get, next(1), over(1), replace, out(1), get, over(1) */" Db%l b";
import { _on, _text, _attr_class, _let_persisted, _var_resume, _construct_effect, _script_shared, _updating, _template, _resume } from "@marko/runtime-tags/debug/dom";
const $for_content__n = _var_resume("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_1_n/var", /*@__PURE__*/_let_persisted("n/7", $scope => _text($scope["#text/3"], $scope.n)));
const $for_content__setup__script = _script_shared($scope => _on($scope["#button/2"], "click", function () {
  $for_content__n($scope, $scope.n + 1);
}));
const $for_content__setup = $scope => {
  $for_content__n($scope, 0);
  $for_content__setup__script($scope);
};
const $for_content__item = ($scope, item) => {
  _attr_class($scope["#li/0"], item);
  $for_content__item_name($scope, item?.name);
};
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/1"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count = _var_resume("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_0_count/var", /*@__PURE__*/_let_persisted("count/6", $scope => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared($scope => _on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
export function $setup($scope) {
  $count($scope, 0);
  $setup__script($scope);
}
const $for = 0;
export const $input_items = ($scope, input_items) => {
  if (!_updating) $for($scope, [input_items, function (item) {
    return item.id;
  }]);
};
export const $input = ($scope, input) => $input_items($scope, input.items);
export default /*@__PURE__*/_template("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko", $template, $walks, $setup, $input);
import { _static_shells, _update_pair, _update_signal, _update_seed, _update_attr, _update_text, _update_scopes, _construct, _update_for_keyed, patch as _patch, _echo_snapshot, _update_content } from "@marko/runtime-tags/debug/dom-persisted";
_static_shells({
  "packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_1_update": [$for_content__template, $for_content__walks],
  "packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_1_content": [$for_content__template, $for_content__walks],
  "packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_0_update": [$template, $walks],
  "packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko": [$template, $walks]
});
const $n_seed = _update_signal("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_1_n/var");
const $for_content_holes = /*@__PURE__*/_update_scopes({
  "PatchAttr:class:#li/0": /*@__PURE__*/_update_attr("#li/0", _attr_class),
  "PatchHole:#text/1": /*@__PURE__*/_update_text("#text/1")
});
const $count_seed = _update_signal("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l), "packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_1_update");
const $for_content__construct = $scope => {
  _text($scope["#text/3"], $scope.n);
  _construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
  _update_pair($patch, $live);
  if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
  $for_content_holes($patch, $live);
};
const $construct = $scope => {
  _text($scope["#text/1"], $scope.count);
  _construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
  _update_pair($patch, $live);
  if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
  if ("BranchScopes:#ul/2" in $patch) $for_update($live, [$patch["BranchScopes:#ul/2"], "#LoopKey"]);
};
_construct("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_1_update", $for_content__construct);
_construct("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_0_update", $construct);
_update_content("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_1_update", $for_content__update);
const $merge = _resume("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko_0_update", $update2);
_update_content("packages/runtime-tags/src/__tests__/fixtures/persisted-value-group-loop-hold/template.marko", $merge, $construct);
export { $merge as $update };
function $patch2($fail) {
  return _patch($merge, $fail);
}
export { $patch2 as patch };
export { _echo_snapshot as echo };