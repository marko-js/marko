// template.marko
const $for_content2__setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope._._, $scope._._.c + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.a, $scope.c));
enableBranchesPersisted();

// template.marko.update.mjs
const $for_update = _update_for_keyed(1, ($p, $l) => $for_content2__update($p, $l));
const $count_seed = _update_signal("a1");
const $for_update2 = _update_for_keyed(1, ($p2, $l2) => $for_content__update($p2, $l2));
const $for_content2__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	_update_scope(_patch, _live);
};
const $for_content__update = (_patch, _live) => {
	if ("e" in _patch) _live["e"] = _patch["e"];
	_update_scope(_patch, _live);
	if ("Ab" in _patch) $for_update(_live, [_patch["Ab"], "M"]);
};
const $update = (_patch, _live) => {
	if ("c" in _patch) _update_seed(_live, $count_seed, _patch["c"]);
	if ("Ab" in _patch) $for_update2(_live, [_patch["Ab"], "M"]);
};
const _merge = _resume("a4", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
