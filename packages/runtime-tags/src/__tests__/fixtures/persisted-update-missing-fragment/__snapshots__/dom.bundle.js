// template.marko
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a4");
const $for_update = _update_for_keyed(4, ($p, $l) => _update_scope($p, $l));
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) _update_seed(_live, $count_seed, _patch["f"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
	if ("Dd" in _patch) _update_if(_patch, _live, "Dd", "Ad");
	if ("Ae" in _patch) $for_update(_live, [_patch["Ae"], "M"]);
};
_update_content("a6", _update_scope);
_update_content("a5", _update_scope);
const _merge = _resume("a7", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
