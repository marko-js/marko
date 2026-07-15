// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $Reports_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", _update_scope);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
_update_content("a4", $Reports_content__update);
const _merge = _resume("a5", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
