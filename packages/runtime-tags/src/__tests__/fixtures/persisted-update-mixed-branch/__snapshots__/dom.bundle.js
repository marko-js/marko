// template.marko
const $else_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = /*@__PURE__*/ _let_persisted(5, $else_content__count);
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $else_content__update = (patch, live) => {
	_update_pair(patch, live);
	_update_scope(patch, live);
};
const $update = (patch, live) => {
	if ("f" in patch) _update_seed(live, $count_seed, patch["f"]);
	if ("e" in patch) live["e"] = patch["e"];
	if ("Da" in patch) _update_if(patch, live, "Da", "Aa", [0, $else_content__update]);
};
const _merge = _resume("a3", $update);
function createPatch() {
	return createPatch$1(_merge);
}
