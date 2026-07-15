// template.marko
const $n = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n));
const $setup__script = _script_update("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, $scope.n + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $n_seed = _update_signal("a1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("n" in _patch) _update_seed(_live, $n_seed, _patch["n"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("a2", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
