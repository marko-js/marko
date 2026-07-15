// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("Dc" in _patch) _update_if(_patch, _live, "Dc", "Ac", [_update_scope, 0]);
};
const _merge = _resume("a3", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
