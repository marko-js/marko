// template.marko
const $n = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n));
const $setup__script = _script_update("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, $scope.n + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $n_seed = _update_signal("a1");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("n" in patch) _update_seed(live, $n_seed, patch["n"]);
	_update_scope(patch, live);
};
const _merge = _resume("a2", $update);
function createPatch() {
	return createPatch$1(_merge);
}
