// template.marko
const $else_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = /*@__PURE__*/ _let_persisted(5, $else_content__count);
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $else_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	_update_scope(_patch, _live);
};
const $update = (_patch, _live) => {
	if ("f" in _patch) _update_seed(_live, $count_seed, _patch["f"]);
	if ("e" in _patch) _live["e"] = _patch["e"];
	if ("Da" in _patch) _update_if(_patch, _live, "Da", "Aa", [0, $else_content__update]);
};
const _merge = _resume("a3", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
