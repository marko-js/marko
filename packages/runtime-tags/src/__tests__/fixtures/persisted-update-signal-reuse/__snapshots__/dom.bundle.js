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
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("i" in patch) _update_seed(live, $highlight_seed, patch["i"]);
	if ("g" in patch) $input_label_update(live, patch["g"]);
	_update_scope(patch, live);
};
const _merge = _resume("a3", $update);
function createPatch() {
	return createPatch$1(_merge);
}
