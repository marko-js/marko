// tags/chip-list.marko
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/chip-list.marko.update.mjs
const $update$1 = (_patch, _live) => {
	if ("Aa" in _patch) _update_for(_patch["Aa"], _live["Aa"], _update_scope);
};
const _merge$1 = _resume("b0", $update$1);
_update_content("b", _merge$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
const _merge = _resume("a2", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
