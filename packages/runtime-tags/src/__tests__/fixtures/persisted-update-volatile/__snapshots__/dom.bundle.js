// template.marko
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.e, $scope.i));
const $setup__script = _script_update("a0", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.i + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $count_seed, _patch["i"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("a2", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
