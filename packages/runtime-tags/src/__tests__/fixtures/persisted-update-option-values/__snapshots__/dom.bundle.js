// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $for_update = _update_for(2, "a1", (branch, args) => _update_scope(args[0], branch));
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
const _merge = _resume("a3", $update);
function createPatch() {
	return createPatch$1(_merge);
}
