// template.marko
const $input_label__OR__highlight = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope.b, $scope.i && $scope.g));
const $highlight = /*@__PURE__*/ _let_persisted(8, $input_label__OR__highlight);
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$highlight($scope, !$scope.i);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $highlight_seed = _update_signal("a1");
const $input_label_update = _update_signal("a2");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $highlight_seed, _patch["i"]);
	if ("g" in _patch) $input_label_update(_live, _patch["g"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("a3", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
