// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $for_update = _update_for_keyed(2, ($p, $l) => _update_scope($p, $l));
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("Ac" in _patch) $for_update(_live, [_patch["Ac"], "M"]);
};
const _merge = _resume("a3", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
