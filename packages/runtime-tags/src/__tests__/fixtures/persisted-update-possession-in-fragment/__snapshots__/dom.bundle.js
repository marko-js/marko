// tags/layout.marko
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/layout.marko.update.mjs
const $update$1 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$1 = _resume("b1", $update$1);
_update_content("b", _merge$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $Widget_content__update = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_content("a5", _update_scope);
_update_content("a4", $Widget_content__update);
_update_content("a2", _update_scope);
const _merge = _resume("a8", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
