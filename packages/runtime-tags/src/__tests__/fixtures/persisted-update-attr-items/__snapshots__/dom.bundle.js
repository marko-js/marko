// tags/chip-list.marko
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/chip-list.marko.update.mjs
const $for_update = _update_for(0, "b0", (branch, args) => _update_scope(args[0], branch));
const $update$1 = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const _merge$1 = _resume("b1", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) _merge$1(patch["c"], live["c"]);
};
const _merge = _resume("a2", $update);
function createPatch() {
	return createPatch$1(_merge);
}
