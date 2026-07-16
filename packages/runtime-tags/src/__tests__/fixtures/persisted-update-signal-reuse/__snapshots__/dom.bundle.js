// template.marko
const $input_label__OR__highlight = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope.b, $scope.i && $scope.g));
const $highlight = /*@__PURE__*/ _let_persisted(8, $input_label__OR__highlight);
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$highlight($scope, !$scope.i);
}));

// template.marko.persisted.mjs
const $input_label__OR__highlight = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope.b, $scope.i && $scope.g));
const $highlight = _var_resume("a2", /*@__PURE__*/ _let_persisted(8, $input_label__OR__highlight));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$highlight($scope, !$scope.i);
}));
const $input_label = _var_resume("a3", /*@__PURE__*/ _const_persisted(6, ($scope) => {
	_text($scope.c, $scope.g);
	$input_label__OR__highlight($scope);
}));
const $highlight_seed = _update_signal("a2");
const $input_label_update = _update_signal("a3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qd": /*@__PURE__*/ _update_text("d") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $highlight_seed, _patch["i"]);
	if ("g" in _patch) $input_label_update(_live, _patch["g"]);
	$_holes(_patch, _live);
};
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
